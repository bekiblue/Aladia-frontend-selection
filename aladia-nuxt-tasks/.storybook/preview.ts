import "../assets/css/output.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { type Preview, setup } from "@storybook/vue3";
import { INITIAL_VIEWPORTS, type ViewportMap } from "@storybook/addon-viewport";

import { type App } from "vue";

import { createPinia } from "pinia";

const pinia = createPinia();

setup((app: App) => {
  app.use(pinia);
});

const customViewports: ViewportMap = {
  mobile: {
    name: "Mobile 320px",
    styles: {
      width: "320px",
      height: "568px",
    },
    type: "mobile",
  },
  desktop: {
    name: "Desktop 1200px",
    styles: {
      width: "1200px",
      height: "800px",
    },
    type: "desktop",
  },
};

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: "light",
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    viewport: {
      viewports: {
        ...INITIAL_VIEWPORTS,
        ...customViewports,
      },
    },
  },
};

export default preview;
