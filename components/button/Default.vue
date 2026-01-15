<template>
    <button type="button" :class="[
        'rounded ',
        block ? 'w-full' : '',
        size == 'sm' ? 'text-sm px-2 py-1' : '',
        size == 'md' ? 'text-base px-4 py-2' : '',
        size == 'lg' ? 'text-lg px-6 py-4' : '',
        `bg-${type}-600 text-white hover:bg-${type}-700 focus:ring-4 focus:ring-${type}-300`
    ]">
        <slot />
    </button>
</template>

<script setup lang="ts">
import type { ColorType } from '../../types/ui';


withDefaults(defineProps<{
    size?: 'sm' | 'md' | 'lg';
    type?: ColorType;
    block?: boolean;
}>(), {
    block: false,
    size: 'md',
    type: 'primary',
});
</script>