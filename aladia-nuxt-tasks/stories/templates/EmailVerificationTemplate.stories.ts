import type { Meta, StoryObj } from "@storybook/vue3";
import EmailVerificationTemplate from "../../components/templates/EmailVerificationTemplate.vue";

const meta: Meta<typeof EmailVerificationTemplate> = {
  component: EmailVerificationTemplate,
  tags: ["autodocs"],
  parameters: {
    backgrounds: { default: "dark" },
  },
};

export default meta;

type Story = StoryObj<typeof EmailVerificationTemplate>;

// Story for desktop view
export const Desktop: Story = {
  render: () => ({
    components: { EmailVerificationTemplate },
    template: '<div style="width: 1024px;"><EmailVerificationTemplate /></div>', // Mocking desktop width
  }),
};

// Story for mobile view
export const Mobile: Story = {
  render: () => ({
    components: { EmailVerificationTemplate },
    template: '<div style="width: 375px;"><EmailVerificationTemplate /></div>', // Mocking mobile width
  }),
};
