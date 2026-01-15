// Default.stories.ts

import Default from './Default.vue';

import type { ColorType } from '../../types/ui';
import type { Meta, StoryFn } from '@nuxtjs/storybook';

const meta: Meta<typeof Default> = {
    title: 'Components/Button',
    component: Default,
    argTypes: {
        size: {
            control: { type: 'select' },
            options: ['sm', 'md', 'lg'],
        },
        type: {
            control: { type: 'select' },
            options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'] as ColorType[],
        },
        block: { control: 'boolean' },
        default: { control: false },
    },
};

export default meta;

const Template: StoryFn<typeof Default> = (args) => ({
    components: { Default },
    setup() { return { args }; },
    template: '<Default v-bind="args">Button</Default>',
});

export const Primary = Template.bind({});
Primary.args = {
    type: 'primary',
    size: 'md',
    block: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
    type: 'secondary',
    size: 'md',
    block: false,
};

export const Sizes = Template.bind({});
Sizes.args = {
    type: 'primary',
    size: 'lg',
    block: false,
};

export const Block = Template.bind({});
Block.args = {
    type: 'primary',
    size: 'md',
    block: true,
};