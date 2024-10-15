<template>
  <div class="space-y-4">
    <div class="mb-6 text-center" data-cy="email-form-title">
      Enter your email
    </div>

    <!-- InputField with data-cy attribute -->
    <InputField
      data-cy="email-input-field"
      placeholder="Email Address"
      icon="fa-envelope"
      :error="emailError"
      :inputValue="email"
      @update:inputValue="updateEmail"
    />

    <Button
      data-cy="submit-email-button"
      label="Enter"
      :is-loading="appState.isLoading"
      :is-disabled="!isEmailValid"
      @click="onclick"
    />
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import Button from "../atoms/Button.vue";
import InputField from "./InputField.vue";
import { useAppState } from "../../store/store";

const appState = useAppState();

const props = defineProps({
  onclick: { type: Function, default: () => {} },
  
});

const email = ref("");
const emailError = ref("");

const updateEmail = (value) => {
  email.value = value;
  appState.currentEmail = value;
  validateEmail(value);
};

const validateEmail = (value) => {
  if (!value) {
    emailError.value = "Required";
  } else if (!isValidEmail(value)) {
    emailError.value = "Invalid email address";
  } else {
    emailError.value = "";
  }
};

const isValidEmail = (value) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(value);
};

const isEmailValid = computed(() => email.value && !emailError.value);
</script>
