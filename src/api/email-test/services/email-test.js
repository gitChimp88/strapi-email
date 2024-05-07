"use strict";

/**
 * email-test service
 */

module.exports = ({ strapi }) => ({
  emailService: async (ctx) => {
    try {
      const input = ctx.request.body.data?.input;
      const email = ctx.request.body.data?.emailTo;
      await strapi.plugins["email"].services.email.send({
        from: "YOUR_EMAIL_HERE",
        to: email,
        subject: "Hello World",
        html: `<p>${input}</p>`,
      });

      return {
        message: "Email sent!",
      };
    } catch (err) {
      ctx.body = err;
    }
  },
});
