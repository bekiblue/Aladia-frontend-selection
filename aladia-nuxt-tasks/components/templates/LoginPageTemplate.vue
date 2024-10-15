<template>
  <div class="text-white flex items-center justify-center min-h-screen bg-black " data-cy="login-form">
    <div class="w-[23vw] p-8 flex-col items-center justify-center rounded border  border-white/20 bg-black rounded shadow-lg">
    <LoginHeader v-if="isPasswordField" :onclick="onBack" data-cy="login-header" />

    <LoginBanner :imgSrc="`https://develop.aladia.io/logo/image.png`" data-cy="login-banner" />

    <div v-if="isPasswordField" class="space-y-4">
      <div class="mb-6 text-center" data-cy="password-prompt">Enter your password</div>
      <PasswordField :validate-input="false" data-cy="password-field" />

      <Button
        label="Enter"
        :is-loading="appState.isLoading"
        :onClick="logginAction"
        datdataa-cy="login-button"
      />
    </div>

    <EmailForm v-else :onclick="onEnter" data-cy="email-form" />

    <div :class="['mt-6 text-center', { 'invisible': isPasswordField }]">
      <div class="mb-6 flex items-center justify-between gap-4">
        <div class="h-[1px] w-40 bg-gradient-to-r from-white/0 to-white"></div>
        <div>Or</div>
        <div class="h-[1px] w-40 bg-gradient-to-r from-white to-white/0"></div>
      </div>
      <SocialLoginButtons data-cy="social-login-buttons" />
    </div>

    <div class="cursor-pointer text-center text-white/40" data-cy="terms-and-conditions">
      Terms &amp; Conditions
    </div>
    </div>
  </div>
</template>

<script setup>
import SocialLoginButtons from "../organisms/SocialLoginButtons.vue";
import LoginBanner from "../molecules/LoginBanner.vue";
import PasswordField from "../molecules/PasswordField.vue";
import Button from "../atoms/Button.vue";
import LoginHeader from "../atoms/LoginHeader.vue";
import EmailForm from "../molecules/EmailForm.vue";

import { useAppState } from "../../store/store";

const props = defineProps({
  isPasswordField: {
    type: Boolean,
    default: false,
  },
})

const appState = useAppState();

const onBack = () => {
  appState.showEmailField();
};

const onEnter = () => {
  appState.setLoading(true);
  setTimeout(() => {
    appState.setLoading(false);
    console.log(appState.accounts);
    if (appState.accounts.includes(appState.currentEmail)) {
      appState.showPasswordField();
    } else {
      appState.showSignUpField();
      console.log(appState.pageNumber);
      console.log(appState.currentEmail);
    }
  }, 2000);
};

const logginAction = () => {
  appState.setLoading(true);
  setTimeout(() => {
    appState.setLoading(false); 
    appState.login();
  }, 1000);
};
</script>
