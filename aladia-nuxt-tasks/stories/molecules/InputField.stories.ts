import type { Meta, StoryObj } from '@storybook/vue3';
import InputField from '../../components/molecules/InputField.vue';

const meta: Meta<typeof InputField> = {
  component: InputField,
  tags: ['autodocs'],
  parameters: {
    backgrounds: { default: 'dark' }, 
  },
};


export default meta;
type Story = StoryObj<typeof InputField>;


export const Default: Story = {
  render: (args) => ({
    components: { InputField },
    setup() {
      return { args };
    },
    template: '<InputField v-bind="args" />',
  }),
  args: {
    type: 'text',
    placeholder: 'Enter your Name',
    icon: 'fa-user',
    disabled: false,
    maxlength: 100,
    error: '',
    inputValue: '',
  },
};


export const ErrorState: Story = {
  render: (args) => ({
    components: { InputField },
    setup() {
      return { args };
    },
    template: '<InputField v-bind="args" />',
  }),
  args: {
    type: 'text',
    placeholder: 'Enter your email',
    icon: 'fa-envelope',
    disabled: false,
    maxlength: 100,
    error: 'Invalid input',
    inputValue: 'sampleErrorEmailHandle',
  },
};


export const DisabledState: Story = {
  render: (args) => ({
    components: { InputField },
    setup() {
      return { args };
    },
    template: '<InputField v-bind="args" />',
  }),
  args: {
    type: 'text',
    placeholder: 'Enter your text',
    icon: 'fa-user',
    disabled: true,
    maxlength: 100,
    error: '',
    inputValue: '',
  },
};
