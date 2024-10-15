import type { Meta, StoryObj } from '@storybook/vue3';
import LoginHeader from '../../components/atoms/LoginHeader.vue';


const meta: Meta<typeof LoginHeader> = {
  component: LoginHeader,
  title: 'Atoms/LoginHeader', 
  tags:['autodocs'], 
  argTypes: {
    onClickHandler: { action: 'clicked' },  
  },
};

export default meta;
type Story = StoryObj<typeof LoginHeader>;


export const Primary: Story = {
  render: (args) => ({
    components: { LoginHeader },
    setup() {
      return { args };
    },
    template: '<LoginHeader v-bind="args" />',
  }),
  args: {
    title: 'Password Recovery',
    backIcon: 'arrow-left',
    hoverText: 'Back to Log in',
  },
};


export const Custom: Story = {
  render: (args) => ({
    components: { LoginHeader },
    setup() {
      return { args };
    },
    template: '<LoginHeader v-bind="args" />',
  }),
  args: {
    title: 'Custom Title',
    backIcon: 'arrow-right',  
    hoverText: 'Custom Hover Text',
  },
};
