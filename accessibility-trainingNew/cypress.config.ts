/// <reference types="cypress" />

import { defineConfig } from "cypress";

export default defineConfig({
  video:true,
  videoCompression: true,
  requestTimeout: 10000,
  trashAssetsBeforeRuns: true,
  chromeWebSecurity: false,
  modifyObstructiveCode: true,
  screenshotOnRunFailure: true,
  retries: 2,
  
  e2e: {
    baseUrl: "https://automationexercise.com/",
   // baseUrl: "https://www.amazon.co.uk/",
    setupNodeEvents(on, config) {
      // Implement node event listeners here
    },
  },
});