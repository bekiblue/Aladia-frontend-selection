import type { Meta, StoryObj } from '@storybook/vue3';
import IconButton from '../../components/atoms/IconButton.vue'; 

const meta: Meta<typeof IconButton> = {
  component: IconButton,
  tags:['autodocs']
};


export default meta;
type Story = StoryObj<typeof IconButton>;


export const Primary: Story = {
  render: (args) => ({
    components: { IconButton },
    setup() {
      return { args };
    },
    template: '<IconButton v-bind="args" />',
  }),
  args: {
    imageSrc: 'https://via.placeholder.com/40x40', 
    label: 'Default Icon Button',
  },
};

export const WithCustomLabel: Story = {
  render: (args) => ({
    components: { IconButton },
    setup() {
      return { args };
    },
    template: '<IconButton v-bind="args" />',
  }),
  args: {
    imageSrc: 'https://via.placeholder.com/40x40', 
    label: 'Custom Label',
  },
};


