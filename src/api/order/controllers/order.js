'use strict';
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
console.log(stripe, 'stripe in controller')

/**
 * order controller
 */
const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController('api::order.order', ({ strapi }) => ({
  async create(ctx) {
    const { products, userName, email } = ctx.request.body;

    try {
      // get item info
      const lineItems = await Promise.all(
        products.map(async (product) => {
          const item = await strapi
          .service('api::item.item')
          .findOne(product.id);

          return {
            price_data: {
              currency: 'usd',
              product_data: {
                name: item.name
              },
              unit_amount: item.price * 100,
            },
            quantity: product.count,
          }
        })
      );

      // create stripe session
      const session = await stripe.checkout.sessions.create({
        apiKey: process.env.STRIPE_SECRET_KEY,
        shipping_address_collection: {allowed_countries: ['US', 'CA']},
        payment_method_types: ['card'],
        customer_email: email,
        mode: 'payment',
        success_url: 'https://www.jryanstudios.com/checkout/success',
        cancel_url: 'https://www.jryanstudios.com/checkout/cancel',
        line_items: lineItems,
        shipping_options: [
          {
            shipping_rate_data: {
              type: 'fixed_amount',
              fixed_amount: {
                amount: 1200,
                currency: 'usd',
              },
              display_name: 'Flat rate',
              delivery_estimate: {
                minimum: {
                  unit: 'business_day',
                  value: 5,
                },
                maximum: {
                  unit: 'business_day',
                  value: 7,
                },
              },
            },
          },
        ],
      });

      // create item
      await strapi
        .service('api::order.order')
        .create({
          data: { userName, products, stripeSessionId: session.id },
        });
      
      // return session id
      return { id: session.id }
    } catch (error) {
      ctx.response.status = 500;
      console.log(error, 'error in controller')
      return { error };
    }
  }
}));
