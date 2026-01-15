<template>
    <button type="button" :class="[
        'rounded ',
        block ? 'w-full' : '',
        size == 'sm' ? 'text-sm px-2 py-1' : '',
        size == 'md' ? 'text-base px-4 py-2' : '',
        size == 'lg' ? 'text-lg px-6 py-4' : '',
        type === 'default' ? 'bg-blue-500 text-white hover:bg-blue-600' : '',
        type === 'secondary' ? 'bg-gray-500 text-white hover:bg-gray-600' : '',
        type === 'danger' ? 'bg-red-500 text-white hover:bg-red-600' : '',
        type === 'warning' ? 'bg-yellow-500 text-white hover:bg-yellow-600' : '',
    ]">
        <slot />
    </button>
</template>

<script setup lang="ts">

withDefaults(defineProps<{
    size?: 'sm' | 'md' | 'lg';
    type?: 'default' | 'secondary' | 'danger' | 'warning';
    block?: boolean;
}>(), {
    block: false,
    size: 'md',
    type: 'default',
});
</script>