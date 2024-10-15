<template>
  <button
    
    class="flex cursor-pointer items-center justify-center gap-4 rounded border border-white/20 py-1.5 shadow-[0px_3px_6px_#00000000] transition-all hover:bg-white/20 hover:shadow-[0px_3px_6px_#000000] active:scale-95"
  >
    <img :src="imageSrc" :alt="`${label} icon`" class="h-6 w-10" />
    <i
      v-if="appState.googleSignInLoading && label === 'Continue with Google'"
      class="fas fa-spinner animate-spin text-xs text-white/70"
      data-cy="loading-spinner"
    ></i>
    <div v-else class="w-45 text-base text-[13px]">{{ label }}</div>
  </button>
</template>

<script setup>

import { useAppState } from '../../store/store';

const appState = useAppState();
const handleClick = () => {
  console.log("clicked");
  props.loginAction();
};

const props = defineProps({
  imageSrc: { type: String, required: true },
  label: { type: String, required: true },
  loginAction: { type: Function, default: () => {} },
});
</script>
