import type { Meta, StoryObj } from '@storybook/vue3';
import PasswordField from '../../components/molecules/PasswordField.vue'


const meta: Meta<typeof PasswordField> = {
  title: 'Molecules/PasswordField',
  component: PasswordField,
  parameters: {
    backgrounds: { default: 'dark' }, 
  },
};


export default meta;

type Story = StoryObj<typeof PasswordField>;


export const Default: Story = {
  render: (args) => ({
    components: { PasswordField },
    setup() {
      return { args };
    },
    template: '<PasswordField v-bind="args" />',
  }),
  args: {
    placeholder: 'Enter your password',
    validateInput: true, 
  },
};


export const WithStrengthValidation: Story = {
  render: (args) => ({
    components: { PasswordField },
    setup() {
      return { args };
    },
    template: '<PasswordField v-bind="args" />',
  }),
  args: {
    placeholder: 'Enter your password',
    validateInput: true, 
  },
};


export const WithoutValidation: Story = {
  render: (args) => ({
    components: { PasswordField },
    setup() {
      return { args };
    },
    template: '<PasswordField v-bind="args" />',
  }),
  args: {
    placeholder: 'Enter your password',
    validateInput: false, 
  },
};
