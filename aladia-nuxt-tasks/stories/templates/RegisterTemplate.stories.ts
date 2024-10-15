import type { Meta, StoryObj } from "@storybook/vue3";
import RegisterTemplate from "../../components/templates/RegisterTemplate.vue";

const meta: Meta<typeof RegisterTemplate> = {
  component: RegisterTemplate,
  tags: ["autodocs"],
  parameters: {
    backgrounds: { default: "dark" },
  },
};

export default meta;

type Story = StoryObj<typeof RegisterTemplate>;

// Story for desktop view
export const Desktop: Story = {
  render: () => ({
    components: { RegisterTemplate },
    template: '<div style="width: 1024px;"><RegisterTemplate /></div>', // Mocking desktop width
  }),
};

// Story for mobile view
export const Mobile: Story = {
  render: () => ({
    components: { RegisterTemplate },
    template: '<div style="width: 375px;"><RegisterTemplate /></div>', // Mocking mobile width
  }),
};
