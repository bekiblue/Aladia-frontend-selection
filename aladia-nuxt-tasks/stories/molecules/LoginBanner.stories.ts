import type { Meta, StoryObj } from "@storybook/vue3";
import LoginBanner from "../../components/molecules/LoginBanner.vue";

const meta: Meta<typeof LoginBanner> = {
  component: LoginBanner,
  tags: ["autodocs"],
  parameters: {
    backgrounds: { default: "dark" }, 
  },
};


export default meta;
type Story = StoryObj<typeof LoginBanner>;


export const Default: Story = {
  render: (args) => ({
    components: { LoginBanner },
    setup() {
      return { args };
    },
    template: '<LoginBanner v-bind="args" />',
  }),
  args: {
    title: "Welcome to Aladia,",
    subtitle: "Create or access your account from here",
    imgSrc: "http://placehold.it/100x100", 
    borderColor: "border-white/20",
    shadow: false,
  },
};


export const WithShadow: Story = {
  render: (args) => ({
    components: { LoginBanner },
    setup() {
      return { args };
    },
    template: '<LoginBanner v-bind="args" />',
  }),
  args: {
    title: "Welcome to Aladia,",
    subtitle: "Create or access your account from here",
    imgSrc: "http://placehold.it/100x100",
    borderColor: "border-white/20",
    shadow: true,
  },
};


export const CustomData: Story = {
  render: (args) => ({
    components: { LoginBanner },
    setup() {
      return { args };
    },
    template: '<LoginBanner v-bind="args" />',
  }),
  args: {
    title: "Add a new password,",
    subtitle: "your account uses google Sign-in. Add a new password.",
    imgSrc: "http://placehold.it/100x100", 
    borderColor: "border-white/20",
    shadow: false,
  },
};
