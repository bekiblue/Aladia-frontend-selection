import type { Meta, StoryObj } from "@storybook/vue3";
import HomePageTemplate from "../../components/templates/HomePageTemplate.vue";

const meta: Meta<typeof HomePageTemplate> = {
  component: HomePageTemplate,
  tags: ["autodocs"],
  parameters: {
    backgrounds: { default: "dark" },
  },
};

export default meta;

type Story = StoryObj<typeof HomePageTemplate>;

// Story for desktop view
export const Desktop: Story = {
  render: () => ({
    components: { HomePageTemplate },
    template: '<div style="width: 1024px;"><HomePageTemplate /></div>', // Mocking desktop width
  }),
};

// Story for mobile view
export const Mobile: Story = {
  render: () => ({
    components: { HomePageTemplate },
    template: '<div style="width: 375px;"><HomePageTemplate /></div>', // Mocking mobile width
  }),
};
