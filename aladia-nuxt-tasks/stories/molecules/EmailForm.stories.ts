import type { Meta, StoryObj } from '@storybook/vue3';
import EmailField from '../../components/molecules/EmailForm.vue';


const meta: Meta<typeof EmailField> = {
  title: 'Molecules/EmailField',
  component: EmailField,
  tags: ['autodocs'],
  parameters: {
    backgrounds: { default: 'dark' }, 
  },
};


export default meta;

type Story = StoryObj<typeof EmailField>;


export const Default: Story = {
  render: (args) => ({
    components: { EmailField },
    setup() {
      return { args };
    },
    template: '<EmailField v-bind="args" @onclick="args.onclick" />',
  }),
  args: {
    onclick: () => {
      console.log('Email submitted!');
    },
  },
};
