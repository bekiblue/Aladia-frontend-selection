import { defineConfig } from "cypress";
import { installPlugin } from "@chromatic-com/cypress";

export default defineConfig({
  e2e: {
    viewportWidth: 1600, // Set your desired width
    viewportHeight: 900,  // Set your desired heigh
    experimentalStudio: true,
    baseUrl: "http://localhost:3000",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      installPlugin(on, config);
    },
  },
});
