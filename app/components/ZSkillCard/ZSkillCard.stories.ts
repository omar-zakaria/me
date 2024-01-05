import csharp_logo from "../../assets/c_sharp.svg";
import nodejs_logo from "../../assets/nodejs_logo.svg";
import ZSkillCard from "./ZSkillCard";
import type { Meta, StoryObj } from "@storybook/react";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/ZSkillCard",
  component: ZSkillCard,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    label: {
      control: "text",
    },
    logo: {
      control: "select",
      options: ["small", "medium", "large"],
    },
    alt: {
      control: "text",
    },
    useLargeImage: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof ZSkillCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const light: Story = {
  args: {
    className: "",
    label: "C#",
    logo: csharp_logo,
    alt: "C# Logo",
    useLargeImage: false,
  },
};

export const large: Story = {
  args: {
    className: "",
    label: "Node.Js",
    logo: nodejs_logo,
    alt: "Node.Js Logo",
    useLargeImage: true,
  },
};

// export const dark: Story = {
//   args: {},
// };
