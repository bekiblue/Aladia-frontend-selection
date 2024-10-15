<template>
    <div class="flex w-10 items-center justify-center text-xl">
      <i
  :class="['fas', icon, 'text-base text-black/70']"
></i>

    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    icon: { type: String, required: true }, 
  });
  </script>
  
