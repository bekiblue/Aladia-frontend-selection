import type { Meta, StoryObj } from "@storybook/vue3";
import LoginPageTemplate from "../../components/templates/LoginPageTemplate.vue";

const meta: Meta<typeof LoginPageTemplate> = {
  component: LoginPageTemplate,
  tags: ["autodocs"],
  parameters: {
    backgrounds: { default: "dark" },
  },
};

export default meta;

type Story = StoryObj<typeof LoginPageTemplate>;

// Story for desktop view
export const Desktop: Story = {
  render: () => ({
    components: { LoginPageTemplate },
    template: '<div style="width: 1024px;"><LoginPageTemplate :isPasswordField="false" /></div>', // Mocking desktop width
  }),
};

// Story for mobile view
export const Mobile: Story = {
  render: () => ({
    components: { LoginPageTemplate },
    template: '<div style="width: 375px;"><LoginPageTemplate :isPasswordField="false" /></div>', // Mocking mobile width
  }),
};
