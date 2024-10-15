import type { Meta, StoryObj } from "@storybook/vue3";
import OTPInputGroup from "../../components/molecules/OTPInputGroup.vue";



const meta: Meta<typeof OTPInputGroup> = {
  title: "Molecules/OTPInputGroup",
  component: OTPInputGroup,
  tags: ["autodocs"],
  parameters: {
    backgrounds: { default: "dark" }, 
  },
};


export default meta;

type Story = StoryObj<typeof OTPInputGroup>;


export const Default: Story = {
  render: () => ({
    components: { OTPInputGroup },
    template: "<OTPInputGroup />",
  }),
};
