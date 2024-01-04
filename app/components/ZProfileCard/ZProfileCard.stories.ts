import ZProfileCard from "./ZProfileCard";
import type { Meta, StoryObj } from "@storybook/react";
import profile from "../../assets/profile.jpeg";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/ZProfileCard",
  component: ZProfileCard,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
    docs: {
      // controls: { exclude: ['onClick'] },
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    title: {
      control: "text",
    },
    children: {
      control: "text",
    },
  },
} satisfies Meta<typeof ZProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: "Developer Name",
    profileImageSrc: profile,
    children: null,
  },
};
