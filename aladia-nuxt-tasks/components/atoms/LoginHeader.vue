<template>
  <div
    @click="onClickHandler"
    class="group relative mb-6 flex cursor-pointer justify-center font-semibold"
    data-cy="login-header"
  >
    <div class="group-hover:hidden" data-cy="header-title">{{ title }}</div>
    <div class="hidden text-white/50 group-hover:flex" data-cy="hover-text">
      {{ hoverText }}
    </div>
    <div class="absolute left-0">

      <i
        :class="[
          'fas',
          backIcon,
          'text-base text-white/50 transition-all group-hover:text-white',
        ]"
        v-if="showBackIcon"
        data-cy="back-icon"
      ></i>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: { type: String, default: "Password Recovery" },
  backIcon: { type: String, default: "fa-arrow-left" },
  hoverText: { type: String, default: "Back to Log in" },
  showBackIcon: { type: Boolean, default: true },
  onClickHandler: { type: Function, default: () => {} },
});
</script>
