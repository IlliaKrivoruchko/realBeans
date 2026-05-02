import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "d7rknh",
  env: {
    shopifyPassword: process.env.SHOPIFY_PASSWORD || "gaupar"
  },

  e2e: {
    baseUrl: "https://r1037358-realbeans.myshopify.com",

    setupNodeEvents(on, config) {
      return config;
    },
  },
});