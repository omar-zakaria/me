import ZButton, { SizeType, VariantType } from "./zButton";
import type { Meta, StoryObj } from "@storybook/react";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/ZButton",
  component: ZButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
    docs: {
      controls: { exclude: ['onClick'] },
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // children: { control: "string" },
    variant: { 
      control: 'select',
      options: ['primary', 'secondary', 'warning', 'danger'] 
    },
    size: { 
      control: 'select',
      options: ['small', 'medium', 'large'] 
    },
    children: {
      control: 'text'
    }
    // size: { control: null },

    //   backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof ZButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: VariantType.Primary,
    children: "Button",
    size: SizeType.Medium
  },
};

export const Secondary: Story = {
  args: {
    variant: VariantType.Secondary,
    children: "Button",
    size: SizeType.Medium
  },
};

export const Warning: Story = {
  args: {
    variant: VariantType.Warning,
    children: "Button",
    size: SizeType.Medium
  },
};

export const Danger: Story = {
  args: {
    variant: VariantType.Danger,
    children: "Button",
    size: SizeType.Medium
  },
};

export const Small: Story = {
  args: {
    variant: VariantType.Primary,
    size: SizeType.Small,
    children: "Button",
  },
};

export const Medium: Story = {
  args: {
    variant: VariantType.Primary,
    size: SizeType.Medium,
    children: "Button",
  },
};

export const Large: Story = {
  args: {
    variant: VariantType.Primary,
    size: SizeType.Large,
    children: "Button",
  },
};
