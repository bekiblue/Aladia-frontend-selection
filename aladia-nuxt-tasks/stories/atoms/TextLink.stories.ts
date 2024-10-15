import type { Meta, StoryObj } from "@storybook/vue3";
import TextLink from "../../components/atoms/TextLink.vue";

const meta: Meta<typeof TextLink> = {
  component: TextLink,
  tags: ["autodocs"],
  parameters: {
    backgrounds: { default: "dark" }, 
  },
};


export default meta;
type Story = StoryObj<typeof TextLink>;


export const Default: Story = {
  render: (args) => ({
    components: { TextLink },
    setup() {
      return { args };
    },
    template: '<TextLink v-bind="args" />',
  }),
  args: {
    text: "Didn't receive any mail?",
    isUnderlined: false,
    error: false,
  },
};


export const Underlined: Story = {
  render: (args) => ({
    components: { TextLink },
    setup() {
      return { args };
    },
    template: '<TextLink v-bind="args" />',
  }),
  args: {
    text: "Forgot password?",
    isUnderlined: true,
    error: false,
  },
};

export const ErrorState: Story = {
  render: (args) => ({
    components: { TextLink },
    setup() {
      return { args };
    },
    template: '<TextLink v-bind="args" />',
  }),
  args: {
    text: "Invalid email address",
    isUnderlined: false,
    error: true,
  },
};
