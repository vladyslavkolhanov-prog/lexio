import type { Preview } from "@storybook/nextjs-vite"

import { DefaultLocale, Locales } from "@/infrastructure/i18n/constants"
import { WithIntl } from "@/infrastructure/storybook/decorators/with-i18n"
import { WithTheme } from "@/infrastructure/storybook/decorators/with-theme"

import "@/shared/styles/globals.css"

const preview: Preview = {
  globalTypes: {
    locale: {
      description: "Internationalization locale",
      toolbar: {
        icon: "globe",
        items: [
          { value: Locales.English, right: "EN", title: "English" },
          { value: Locales.Ukrainian, right: "UK", title: "Ukrainian" },
        ],
        dynamicTitle: true,
      },
    },
    theme: {
      description: "Global theme for components",
      toolbar: {
        title: "Theme",
        icon: "circlehollow",
        items: [
          { value: "light", icon: "sun", title: "light" },
          { value: "dark", icon: "moon", title: "dark" },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    locale: DefaultLocale,
    theme: "dark",
  },
  parameters: {
    nextjs: {
      appDirectory: true,
    },
    layout: "centered",
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      toc: true,
    },
    a11y: {
      test: "todo",
    },
    tags: ["autodocs"],
  },
  decorators: [WithIntl, WithTheme],
}

export default preview
