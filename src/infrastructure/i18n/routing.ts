import { defineRouting } from "next-intl/routing"
import { DefaultLocale, Locales } from "./constants"

export const routing = defineRouting({
  locales: Object.values(Locales),
  defaultLocale: DefaultLocale,
  localePrefix: "as-needed",
})
