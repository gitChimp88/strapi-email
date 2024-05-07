module.exports = {
  routes: [
    {
      method: "POST",
      path: "/email-test/exampleAction",
      handler: "email-test.exampleAction",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
