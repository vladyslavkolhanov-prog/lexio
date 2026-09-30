import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { ButtonSizes, ButtonVariants } from "@/shared/components/ui/button"

import { ButtonReturnBack } from "./button-return-back"

const meta = {
  title: "widgets/button-return-back",
  component: ButtonReturnBack,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ButtonVariants,
      description:
        "Defines the visual style of the ButtonReturnBack component.",
      table: {
        defaultValue: {
          summary: "default",
        },
      },
    },
    size: {
      control: "select",
      options: ButtonSizes,
      description: "Controls the size of the ButtonReturnBack component.",
      table: {
        defaultValue: {
          summary: "default",
        },
      },
    },
  },
  args: {
    variant: "default",
    size: "default",
    children: "Button",
  },
} satisfies Meta<typeof ButtonReturnBack>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
