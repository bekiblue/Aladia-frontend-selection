<template>
  <div class="flex h-4 w-full items-center justify-between text-xs mb-2">
    <div>
      <div :class="textColor">{{ message }}</div>
    </div>

    <div class="h-1.5 w-36 rounded bg-[#4e4e4e]">
      <div
        class="h-full rounded transition-all duration-300"
        :style="{ width: progressWidth }"
        :class="bgColor"
        data-cy="password-strength-indicator"
      ></div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  strength: { type: Number, required: true },
  message: { type: String, required: true },
  progressWidth: { type: String, required: true },
});

import { computed } from 'vue';

const bgColor = computed(() => {
  switch (props.strength) {
    case 1:
      return "bg-[#da5152]";
    case 2:
      return "bg-[#dc7c56]";
    case 3:
      return "bg-[#e1c361]";
    case 4:
      return "bg-[#e3e469]";
    case 5:
      return "bg-[#49a02f]";
    default:
      return "bg-[#4e4e4e]";
  }
});

const textColor = computed(() => {
  switch (props.strength) {
    case 1:
      return "text-[#E54E4E]";
    case 2:
      return "text-[#dc7c56]";
    case 3:
      return "text-[#e1c361]";
    case 4:
      return "text-[#e3e469]";
    case 5:
      return "text-[#49a02f]";
    default:
      return "text-[#4e4e4e]";
  }
});
</script>
