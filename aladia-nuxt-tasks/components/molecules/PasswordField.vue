<template>
  <div class="w-full">
    <div class="relative mb-1 flex h-10 w-full items-center">
      <InputField
        :type="isPasswordVisible ? 'text' : 'password'"
        :placeholder="placeholder"
        :icon="'fa-key'"
        :inputValue="password"
        @update:inputValue="password = $event"
        :custom-style="'mb-0'"
      />

      <i
        @click="togglePasswordVisibility"
        class="absolute right-3 top-2 cursor-pointer"
      >
        <InputIcon
          :class="[
            'cursor-pointer text-base text-black/50 transition-all active:scale-90',
          ]"
          :icon="isPasswordVisible ? 'fa-eye' : 'fa-eye-slash'"
        />
      </i>
    </div>

    <PasswordStrengthIndicator
      v-if="validateInput"
      :strength="passwordStrength"
      :message="strengthMessage"
      :progressWidth="progressWidth"
    />

    <div v-if="!validateInput" class="mb-4 flex justify-end text-xs">
      <TextLink text="Forgot password?" :error="false" :isUnderlined="true" />
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import InputField from "../molecules/InputField.vue";
import PasswordStrengthIndicator from "../atoms/PasswordStrengthIndicator.vue";
import TextLink from "../atoms/TextLink.vue";
import InputIcon from "../atoms/InputIcon.vue";

// Define props
const props = defineProps({
  placeholder: { type: String, default: "Password" },
  validateInput: { type: Boolean, required: false },
});

// Reactive data
const password = ref("");
const isPasswordVisible = ref(false);
const passwordStrength = ref(1);
const strengthMessage = ref("");
const progressWidth = ref("0%");

const togglePasswordVisibility = () => {
  isPasswordVisible.value = !isPasswordVisible.value;
};

const checkPasswordStrength = () => {
  const value = password.value;
  const hasUpperCase = /[A-Z]/.test(value);
  const hasNumber = /\d/.test(value);
  const hasSymbol = /[@$!%*?&]/.test(value);
  const isLongEnough = value.length >= 8;

  if (!isLongEnough) {
    strengthMessage.value = "8 character minimum";
    progressWidth.value = "20%";
    passwordStrength.value = 1;
  } else if (!hasUpperCase) {
    strengthMessage.value = "Upper case letter required";
    progressWidth.value = "40%";
    passwordStrength.value = 2;
  } else if (!hasNumber) {
    strengthMessage.value = "Number required";
    progressWidth.value = "60%";
    passwordStrength.value = 3;
  } else if (!hasSymbol) {
    strengthMessage.value = "Symbol required (@$!%*?&)";
    progressWidth.value = "80%";
    passwordStrength.value = 4;
  } else {
    strengthMessage.value = "Strong password";
    progressWidth.value = "100%";
    passwordStrength.value = 5;
  }
};

// Watch for password input changes
watch(password, checkPasswordStrength);
</script>
