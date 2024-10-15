<template>
  <div data-cy="verification" class="flex items-center justify-center min-h-screen bg-black " >
    <div class="w-[23vw] p-8 flex-col items-center justify-center rounded border  border-white/20 bg-black rounded shadow-lg">
      
      <VerificationHeader />

      <div class="text-center text-white/70 mb-4">
        Please enter below the 6-digit code we sent you through your
        registration e-mail:
      </div>


      <OTPInputGroup />
      <div class="mb-24 flex w-full justify-center">
        <TextLink text="You didn't receive any mail?" />
      </div>

      <Button
        data-cy="submit-email-button"
        label="Enter"
        :is-loading="appState.isLoading"
        :is-disabled="false"
        @click="handleClick"
      />
    </div>
  </div>
</template>

<script setup>
import VerificationHeader from "../organisms/VerificationHeader.vue";
import OTPInputGroup from "../molecules/OTPInputGroup.vue";
import TextLink from "../atoms/TextLink.vue";
import Button from "../atoms/Button.vue";

import { useAppState } from "../../store/store";
const appState = useAppState();

const handleClick = () => {
  appState.setLoading(true);

  setTimeout(() => {
    appState.setLoading(false);
    appState.login();
  }, 2000);
};  

const userName = appState.currentName + " " + appState.currentSurName;
</script>
