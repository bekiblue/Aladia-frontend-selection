<template>
  <div
    @click="handleClick"
    :class="[
      'relative flex h-10 w-full items-center justify-center overflow-hidden rounded-md border text-center text-sm transition-all mb-6',
      isDisabled
        ? 'cursor-default bg-black border-white/0'
        : 'bg-black cursor-pointer hover:border-white/40 active:scale-95 border-white/0 text-white',
    ]"
    data-cy="button"
  >
    <div class="absolute inset-0 gradient opacity-50" data-cy="btn"></div>



    <i
      v-if="isLoading"
      class="fas fa-spinner animate-spin text-xs text-white/70"
      data-cy="loading-spinner"
    ></i>

    <div v-else class="text-white" data-cy="button-label">{{ label }}</div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(["click"]);


const props = defineProps({
  label: { type: String, default: "Button" },
  isLoading: { type: Boolean, default: false },
  isDisabled: { type: Boolean, default: false },
  onClick: { type: Function, default: () => {} },
});

const handleClick = () => {
  if (!props.isDisabled && !props.isLoading) {
    props.onClick();
  }
};
</script>
