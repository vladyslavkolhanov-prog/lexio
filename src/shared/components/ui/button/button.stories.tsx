import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { Button, ButtonSizes, ButtonVariants } from "./button"

const meta = {
  title: "ui/button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ButtonVariants,
      description: "Defines the visual style of the button component.",
      table: {
        defaultValue: {
          summary: "default",
        },
      },
    },
    size: {
      control: "select",
      options: ButtonSizes,
      description: "Controls the size of the button component.",
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
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
