<template>
  <div class="mb-4 flex h-10 w-full justify-between text-xl text-black">
    <OTPInput
      v-for="(input, index) in 6"
      :key="index"
      :index="index"
      ref="otpRefs"
      @focus-next="focusNext"
      @focus-prev="focusPrev"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import OTPInput from '../atoms/OTPInput.vue';

const otpRefs = ref([]);

const focusNext = (index) => {
  const nextField = otpRefs.value[index + 1];
  if (nextField) nextField.focusInput();
};

const focusPrev = (index) => {
  const prevField = otpRefs.value[index - 1];
  if (prevField) prevField.focusInput();
};
</script>
