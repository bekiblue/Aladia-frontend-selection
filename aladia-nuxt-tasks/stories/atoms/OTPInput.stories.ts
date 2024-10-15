import type { Meta, StoryObj } from '@storybook/vue3';
import OTPInput from '../../components/atoms/OTPInput.vue';
import { ref } from 'vue';


const meta: Meta<typeof OTPInput> = {
  title: 'Atoms/OTPInput',
  component: OTPInput,
  tags:['autodocs'],
  argTypes: {
    maxlength: { control: 'number', description: 'Maximum number of characters the input can hold' },
    index: { control: 'number', description: 'Index of the input field (used for focus management in groups)' },
  },
  args: {
    maxlength: 1,
    index: 0,
  },
};

export default meta;
type Story = StoryObj<typeof OTPInput>;


export const Default: Story = {
  render: (args) => ({
    components: { OTPInput },
    setup() {
      const otpValue = ref('');

      const handleFocusNext = (index: number) => {
        console.log('focus-next', index);
      };
      const handleFocusPrev = (index: number) => {
        console.log('focus-prev', index);
      };

      return { args, otpValue, handleFocusNext, handleFocusPrev };
    },
    template: `
      <OTPInput 
        v-bind="args" 
        v-model="otpValue" 
      />
    `,
  }),
  args: {
    maxlength: 1,
    index: 0,
  },
};
