'use strict';

/**
 * hero-banner service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::hero-banner.hero-banner');
