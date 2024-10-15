<template>
  <div
    :class="[
      'cursor-pointer text-white/50 hover:text-white',
      { underline: isUnderlined },
      { 'text-red-500': error },
    ]"
  >
    {{ text }}
  </div>
</template>

<script setup>
const props = defineProps({
  text: { type: String, default: "You didn't receive any mail?" },
  isUnderlined: { type: Boolean, default: false },
  error: { type: Boolean, default: false },
});
</script>
