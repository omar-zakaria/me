import ZProfileCard from "./ZProfileCard";
import type { Meta, StoryObj } from "@storybook/react";
import profile from "../../assets/profile.jpeg";
import React from "react";
import { FaArrowCircleRight, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

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

const children = (
  <div>
    <p className="text-lg">Full-Stack Software Developer</p>
    <p className="text-lg mb-6">10+ years of experience</p>
    <p className="text-lg flex items-center hover:underline cursor-pointer">
      <FaLinkedin />
      <a target='_blank' className="ml-2 mr-3" href="https://www.linkedin.com/in/omar-zakaria/">LinkedIn</a>
      <FaArrowCircleRight />
    </p>
    <p className="text-lg flex items-center hover:underline cursor-pointer">
      <MdEmail />
      <a className="ml-2 mr-3" onClick={() => { }}>Email me</a>
      <FaArrowCircleRight />
    </p></div>)


export const Primary: Story = {
  args: {
    title: "Developer Name",
    image: profile,
    className: "",
    children
  },
};

export const WithoutImage: Story = {
  args: {
    title: "Developer Name",
    image: null,
    className: "",
    children
  },
};

