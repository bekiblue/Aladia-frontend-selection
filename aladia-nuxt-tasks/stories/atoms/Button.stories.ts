import type { Meta, StoryObj } from '@storybook/vue3';
import Button from '../../components/atoms/Button.vue';

const meta: Meta<typeof Button> = {
  component: Button,
  tags:['autodocs']
};


export default meta;
type Story = StoryObj<typeof Button>;


export const Primary: Story = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args"  />',
  }),
  args: {
    label: 'Default Button',
    isLoading: false,
    isDisabled: false,
  },
};

//👇 Story for the loading state
export const Loading: Story = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args" />',
  }),
  args: {
    label: 'Loading Button',
    isLoading: true,
    isDisabled: false,
  },
};


export const Disabled: Story = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args" />',
  }),
  args: {
    label: 'Disabled Button',
    isLoading: false,
    isDisabled: true,
  },
};
