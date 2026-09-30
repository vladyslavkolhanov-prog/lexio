import type { Decorator } from "@storybook/nextjs-vite"
import { NextIntlClientProvider } from "next-intl"

import { Locales } from "@/infrastructure/i18n/constants"
import enAuth from "@/infrastructure/i18n/messages/domain/auth/en.json"
import ukAuth from "@/infrastructure/i18n/messages/domain/auth/uk.json"
import enCommon from "@/infrastructure/i18n/messages/shared/common/en.json"
import ukCommon from "@/infrastructure/i18n/messages/shared/common/uk.json"
import enComponents from "@/infrastructure/i18n/messages/shared/components/en.json"
import ukComponents from "@/infrastructure/i18n/messages/shared/components/uk.json"
import type { AllMessages } from "@/shared/types/i18n"
import type { ValueOf } from "@/shared/types/utils"

type AvailableLocales = ValueOf<typeof Locales>

export let STORYBOOK_CURRENT_TRANSLATIONS: AllMessages
export let STORYBOOK_CURRENT_LOCALE: AvailableLocales

const messagesMap: Record<AvailableLocales, AllMessages> = {
  [Locales.English]: { ...enAuth, ...enCommon, ...enComponents },
  [Locales.Ukrainian]: { ...ukAuth, ...ukCommon, ...ukComponents },
}

export const WithIntl: Decorator = (Story, context) => {
  const STORYBOOK_CURRENT_LOCALE = context.globals["locale"] as AvailableLocales

  STORYBOOK_CURRENT_TRANSLATIONS = messagesMap[STORYBOOK_CURRENT_LOCALE]

  return (
    <NextIntlClientProvider
      locale={STORYBOOK_CURRENT_LOCALE}
      messages={STORYBOOK_CURRENT_TRANSLATIONS}
    >
      <Story />
    </NextIntlClientProvider>
  )
}
