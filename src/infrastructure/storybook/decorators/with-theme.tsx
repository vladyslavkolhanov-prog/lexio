import type { Decorator } from "@storybook/nextjs-vite"
import { ThemeProvider as NextThemesProvider } from "next-themes"

export const WithTheme: Decorator = (Story, context) => {
  const newTheme = context.globals["theme"] as string

  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      forcedTheme={newTheme}
    >
      <Story />
    </NextThemesProvider>
  )
}
