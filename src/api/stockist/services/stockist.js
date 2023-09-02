'use strict';

/**
 * stockist service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::stockist.stockist');
