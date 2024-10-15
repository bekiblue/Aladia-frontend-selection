import type { Meta, StoryObj } from '@storybook/vue3';
import NameField from '../../components/molecules/NameField.vue';

const meta: Meta<typeof NameField> = {
  component: NameField,
  tags: ['autodocs'],
  parameters: {
    backgrounds: { default: 'dark' }, 
  },
};


export default meta;
type Story = StoryObj<typeof NameField>;


export const Default: Story = {
  render: (args) => ({
    components: { NameField },
    setup() {
      return { args };
    },
    template: '<NameField v-bind="args" @update:name="(value) => args.name = value" />',
  }),
  args: {
    placeholder: 'Enter your name',
    icon: 'fa-user',
    name: '',
  },
};


export const WithPredefinedName: Story = {
  render: (args) => ({
    components: { NameField },
    setup() {
      return { args };
    },
    template: '<NameField v-bind="args" @update:name="(value) => args.name = value" />',
  }),
  args: {
    placeholder: 'Enter your name',
    icon: 'fa-user',
    name: 'John Doe', 
  },
};
