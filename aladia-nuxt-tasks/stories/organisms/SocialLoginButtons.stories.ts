import type { Meta, StoryObj } from "@storybook/vue3";
import SocialLoginButtons from "../../components/organisms/SocialLoginButtons.vue";

// Meta configuration for the story
const meta: Meta<typeof SocialLoginButtons> = {
  component: SocialLoginButtons,
  tags: ["autodocs"],
  parameters: {
    backgrounds: { default: "dark" }, // Set the default background for the story
  },
};

export default meta;
type Story = StoryObj<typeof SocialLoginButtons>;

// Define the default story for the component
export const Default: Story = {
  render: (args) => ({
    components: { SocialLoginButtons },
    setup() {
      return { args }; // Pass args to the component
    },
    template: '<SocialLoginButtons v-bind="args" />',
  }),
};

// Optionally define args for the story
Default.args = {
  // Add any props you want to pass to the SocialLoginButtons component
};
