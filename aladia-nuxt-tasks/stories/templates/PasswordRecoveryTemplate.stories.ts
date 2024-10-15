import type { Meta, StoryObj } from "@storybook/vue3";
import PasswordRecoveryTemplate from "../../components/templates/PasswordRecoveryTemplate.vue";

const meta: Meta<typeof PasswordRecoveryTemplate> = {
  component: PasswordRecoveryTemplate,
  tags: ["autodocs"],
  parameters: {
    backgrounds: { default: "dark" },
  },
};

export default meta;

type Story = StoryObj<typeof PasswordRecoveryTemplate>;

// Story for desktop view
export const Desktop: Story = {
  render: () => ({
    components: { PasswordRecoveryTemplate },
    template: '<div style="width: 1024px;"><PasswordRecoveryTemplate :email="\'bereket.tsegaye@gmail.com\'" :showPasswordRecoverySection="true" /></div>', // Mocking desktop width
  }),
};

// Story for mobile view
export const Mobile: Story = {
  render: () => ({
    components: { PasswordRecoveryTemplate },
    template: '<div style="width: 375px;"><PasswordRecoveryTemplate :email="\'bereket.tsegaye@gmail.com\'" :showPasswordRecoverySection="true" /></div>', // Mocking mobile width
  }),
};
