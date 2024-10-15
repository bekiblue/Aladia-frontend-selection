<template>
    <div class="mb-4 flex items-center gap-2">
      <div
        class="flex h-4 w-4 cursor-pointer items-center justify-center rounded border pt-0.5 transition-all border-white/50 hover:border-white"
        @click="toggleTicked"
        :class="{ 'border-white': ticked }"
      >
        <i
          class="fa-solid fa-check tex-sm text-white"
          v-show="ticked"
        ></i>
      </div>
      <div class="text-xs text-white/70">
        I accept
        <span class=" text-white"> Terms &amp; Conditions </span>
        and
        <span class=" text-white"> Privacy Policy </span>
      </div>
    </div>
  </template>
  
  <script setup>
  
  const props = defineProps({
    ticked: {
      type: Boolean,
      default: false,
    },
  });
  
  const emit = defineEmits(['update:ticked']);
  
  const toggleTicked = () => {
    emit('update:ticked', !props.ticked);
  };
  </script>
  