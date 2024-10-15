import type { Meta, StoryObj } from '@storybook/vue3';
import PasswordStrengthIndicator from '../../components/atoms/PasswordStrengthIndicator.vue';


const meta: Meta<typeof PasswordStrengthIndicator> = {
  title: 'Atoms/PasswordStrengthIndicator',
  component: PasswordStrengthIndicator,
  tags:['autodocs'],
  argTypes: {
    strength: { control: 'number', description: 'Strength level of the password (1 to 5)' },
    message: { control: 'text', description: 'Message indicating the password strength' },
    progressWidth: { control: 'text', description: 'Width of the progress bar (e.g., "50%")' },
  },
};

export default meta;
type Story = StoryObj<typeof PasswordStrengthIndicator>;


export const Default: Story = {
  render: (args) => ({
    components: { PasswordStrengthIndicator },
    setup() {
      return { args };
    },
    template: '<PasswordStrengthIndicator v-bind="args" />',
  }),
  args: {
    strength: 3,
    message: 'Moderate',
    progressWidth: '60%',
  },
};


export const Weak: Story = {
  render: (args) => ({
    components: { PasswordStrengthIndicator },
    setup() {
      return { args };
    },
    template: '<PasswordStrengthIndicator v-bind="args" />',
  }),
  args: {
    strength: 1,
    message: 'Weak',
    progressWidth: '20%',
  },
};


export const Moderate: Story = {
  render: (args) => ({
    components: { PasswordStrengthIndicator },
    setup() {
      return { args };
    },
    template: '<PasswordStrengthIndicator v-bind="args" />',
  }),
  args: {
    strength: 3,
    message: 'Moderate',
    progressWidth: '60%',
  },
};


export const Strong: Story = {
  render: (args) => ({
    components: { PasswordStrengthIndicator },
    setup() {
      return { args };
    },
    template: '<PasswordStrengthIndicator v-bind="args" />',
  }),
  args: {
    strength: 5,
    message: 'Strong',
    progressWidth: '100%',
  },
};

