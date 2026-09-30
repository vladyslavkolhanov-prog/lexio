import type { StorybookConfig } from "@storybook/nextjs-vite"
import svgr from "vite-plugin-svgr"

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-vitest",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
  ],
  framework: "@storybook/nextjs-vite",
  staticDirs: ["../public"],
  docs: {
    defaultName: "Documentation",
  },
  features: {
    experimentalRSC: true,
  },
  core: {
    disableTelemetry: true,
  },
  viteFinal(config) {
    config.plugins?.push(svgr())
    return config
  },
}
export default config
