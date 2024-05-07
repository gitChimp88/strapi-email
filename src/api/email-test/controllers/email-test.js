/**
 * A set of functions called "actions" for `email-test`
 */

module.exports = {
  exampleAction: async (ctx, next) => {
    try {
      const res = await strapi
        .service("api::email-test.email-test")
        .emailService(ctx);
      ctx.body = res.message;
    } catch (err) {
      ctx.body = err;
    }
  },
};
