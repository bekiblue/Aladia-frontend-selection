import type { Meta, StoryObj } from '@storybook/vue3';
import TermsAndCondition from '../../components/atoms/TermsAndCondition.vue'

const meta: Meta<typeof TermsAndCondition> = {
  component: TermsAndCondition,
  tags: ['autodocs'],
  parameters: {
    backgrounds: { default: 'dark' }, 
  },
};


export default meta;
type Story = StoryObj<typeof TermsAndCondition>;


export const Default: Story = {
  render: (args) => ({
    components: { TermsAndCondition },
    setup() {
      return { args };
    },
    template: '<TermsAndCondition v-bind="args" @update:ticked="args.ticked = $event" />',
  }),
  args: {
    ticked: false,
  },
};


export const Ticked: Story = {
  render: (args) => ({
    components: { TermsAndCondition },
    setup() {
      return { args };
    },
    template: '<TermsAndCondition v-bind="args" @update:ticked="args.ticked = $event" />',
  }),
  args: {
    ticked: true,
  },
};

export const ToggleState: Story = {
  render: (args) => ({
    components: { TermsAndCondition },
    setup() {
      return { args };
    },
    template: `<div>
                 <TermsAndCondition v-bind="args" @update:ticked="args.ticked = $event" />
               </div>`,
  }),
  args: {
    ticked: false,
  },
};
