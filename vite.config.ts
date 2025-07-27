import { reactRouter } from "@react-router/dev/vite";
import { sentryReactRouter, type SentryReactRouterBuildOptions } from '@sentry/react-router';
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";


const sentryConfig: SentryReactRouterBuildOptions = {
  org: "js-mastery-iv",
  project: "travel-agency",
  // An auth token is required for uploading source maps.
  authToken: "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"
  // ...
};

export default defineConfig(config => {
  return {
    plugins: [tailwindcss(), reactRouter(), tsconfigPaths(), sentryReactRouter(sentryConfig, config)],
    ssr: {
      noExternal: [/@syncfusion/]
    }
  };
});