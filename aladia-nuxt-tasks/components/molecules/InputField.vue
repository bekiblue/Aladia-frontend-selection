<template>
  <div
    :class="[
      'relative mb-3 flex h-10 w-full rounded transition-all bg-white',
      props.customStyle, 
      { 'bg-[#F5DFDF]': error }, 
      { 'border border-[#E54E4E]': error }, 
      { 'cursor-not-allowed': disabled }
    ]"
    data-cy="input-container"
  >
    <div v-if="error" class="pointer-events-none absolute inset-0 rounded border border-[#E54E4E]" data-cy="input-error-border"></div>

    <InputIcon :icon="icon" data-cy="input-icon" />

    <input
      :maxlength="maxlength"
      :type="type"
      :placeholder="placeholder"
      :disabled="disabled"
      class="h-full flex-1 rounded bg-transparent text-sm text-black outline-none transition-all"
      autocomplete="off"
      :value="inputValue"
      @input="$emit('update:inputValue', $event.target.value)" 
      data-cy="input-field"
    />

    <div v-if="error" class="absolute -bottom-5 left-0 text-xs text-[#E54E4E]" data-cy="input-error-message">
      {{ error }}
    </div>
  </div>
</template>

<script setup>
import InputIcon from '../atoms/InputIcon.vue';

// Define props
const props = defineProps({
  type: { type: String, default: 'text' }, 
  placeholder: { type: String, default: '' },
  icon: { type: String, required: true },
  disabled: { type: Boolean, default: false },
  maxlength: { type: Number, default: 100 },
  customStyle: { type: String, default: 'bg-white' }, 
  error: { type: String, default: '' },
  inputValue: { type: String, default: '' },  
});
</script>
