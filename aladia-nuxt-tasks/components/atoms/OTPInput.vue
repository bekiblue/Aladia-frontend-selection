<template>
  <input
    v-model="otpValue"
    :maxlength="maxlength"
    class="flex w-10 items-center justify-center rounded bg-white border border-black text-center outline-none transition-transform active:scale-90"
    @input="onInput"
    @keydown.backspace="onBackspace"
    ref="input"
    data-cy="otp-input"
  />
</template>

<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  maxlength: {
    type: Number,
    default: 1,
  },
  index: {
    type: Number,
    required: true,
  }
});

const emit = defineEmits(['focus-next', 'focus-prev']);
const otpValue = ref('');

const input = ref(null);

const onInput = () => {
  if (otpValue.value.length >= props.maxlength) {
    emit('focus-next', props.index);
  }
};

const onBackspace = (event) => {
  if (otpValue.value === '') {
    emit('focus-prev', props.index);
  }
};

const focusInput = () => {
  input.value.focus();
};

watch(otpValue, (newValue) => {
  if (newValue.length === props.maxlength) {
    emit('focus-next', props.index);
  }
});

defineExpose({
  focusInput
});
</script>
