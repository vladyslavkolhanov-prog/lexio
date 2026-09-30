import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import type { SocialProviders } from "@/domain/auth/constants"
import { ButtonSizes, ButtonVariants } from "@/shared/components/ui/button"

import { ButtonOauth } from "./button-oauth"

const providers = ["google"] satisfies SocialProviders[]

const meta = {
  title: "domain/auth/button-oauth",
  component: ButtonOauth,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ButtonVariants,
      description: "Defines the visual style of the ButtonOauth component.",
      table: {
        defaultValue: {
          summary: "outline",
        },
      },
    },
    provider: {
      control: "select",
      options: providers,
      description: "Social network provider variant.",
    },
    size: {
      control: "select",
      options: ButtonSizes,
      description: "Controls the size of the ButtonOauth component.",
      table: {
        defaultValue: {
          summary: "xxl",
        },
      },
    },
  },
  args: {
    variant: "outline",
    size: "xxl",
  },
} satisfies Meta<typeof ButtonOauth>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    provider: "google",
  },
}
