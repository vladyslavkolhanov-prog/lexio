import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { FormSignIn } from "./form-sign-in"

const meta = {
  title: "domain/auth/form-sign-in",
  component: FormSignIn,
  tags: ["autodocs"],
  argTypes: {
    email: {
      control: "text",
      description: "Email for restore value.",
      table: {
        type: {
          summary: "string | null",
        },
      },
    },
  },
} satisfies Meta<typeof FormSignIn>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    email: "",
  },
  decorators: [],
}
