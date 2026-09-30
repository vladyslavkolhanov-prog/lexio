import type { Decorator } from "@storybook/nextjs-vite"

export const withWidth = (width: string): Decorator =>
  function Decorator(Story) {
    return (
      <div style={{ width }}>
        <Story />
      </div>
    )
  }
