<template>
  <div
    :class="[
      'mb-6 flex items-center gap-6 rounded border px-4 py-6',
      borderColor,
    ]"
  >
    <div v-if="shadow" class="absolute inset-0 gradient opacity-[0.15]"></div>

    <div class="flex w-32 justify-center">
      <img :src="resolvedImgSrc" alt="Logo" class="h-20 w-20 object-cover" />
    </div>
    <div class="flex-1">
      <p class="text-base text-gray-200 font-semibold mb-2" data-cy="banner-title">{{ title }}</p>
      <p class="text-[13px] text-white/70" data-cy="banner-subtitle">
        {{ subtitle }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  imgSrc: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    default: "Welcome to Aladia,",
  },
  subtitle: {
    type: String,
    default: "Create or access your account from here",
  },
  borderColor: {
    type: String,
    default: "border-white/20",
  },
  shadow: {
    type:Boolean,
    default: false,
  }
});

const resolvedImgSrc = computed(() => {
  return (
    props.imgSrc || new URL("assets/img/aladia.png", import.meta.url).href
  );
});
</script>
