<template>
  <div
class="flex items-center justify-center min-h-screen bg-black " 
    data-cy="registration"
  >
    <div class="w-[23vw] p-8 flex-col items-center justify-center rounded border  border-white/20 bg-black rounded shadow-lg">
    <LoginHeader title="Back to Log in" :onClickHandler="onBack" />
    <div class="mb-4 flex justify-center w-full items-end gap-6 px-4">
      <div
        class="relative h-24 w-24 rounded border transition-all border-white/20 hover:border-white"
      >
        <div class="gradient absolute inset-0 opacity-20"></div>
        <img
          class="absolute inset-0 h-full w-full rounded object-cover "
          src="/assets/img/aladia.png"
        />
        <div class="absolute inset-0 flex items-end justify-center pb-4"></div>
        <input
          type="file"
          accept="image/*"
          class="absolute inset-0 opacity-0"
        />
      </div>
      <div class="flex flex-col items-center mx-6">
        <div class="mb-1 text-sm font-semibold">Nice to meet you,</div>
        <div class="text-xs text-white/70 " data-cy="upload-profile">
          Upload a profile picture <br />
          and complete your <br />
          presentation
        </div>
      </div>
    </div>
    <div class="flex justify-center p-5">
      <TermsAndCondition :ticked="ticked" @update:ticked="updateTicked" />
    </div>
    <div class="mb-4 text-center text-xs">Enter your details</div>
    <NameField
      placeholder="Name"
      data-cy="name-field"
      v-model="appState.currentName"
    />
    <NameField
      placeholder="Surname"
      data-cy="surname-field"
      v-model="appState.currentSurName"
    />
    <div class="flex flex-col space-y-2">
      <NameField
        placeholder="Email"
        icon="fa-envelope"
        data-cy="email-field"
        v-model="appState.currentEmail"
      />
      <PasswordField :validate-input="true" data-cy="password-field" />
      <PasswordField
        :validate-input="true"
        data-cy="comfirm-password-field"
        placeholder="Confirm Password"
      />
    </div>
    <div class="mt-2">
      <Button
        data-cy="submit-email-button"
        label="Enter"
        :is-loading="appState.isLoading"
        :is-disabled="false"
        @click="onclick"
      />
      <div
        class="cursor-pointer text-center text-white/40"
        data-cy="terms-and-conditions"
      >
        Terms &amp; Conditions
      </div>
    </div>
    </div>
  </div>
</template>

<script setup>
import LoginHeader from "../atoms/LoginHeader.vue";
import TermsAndCondition from "../atoms/TermsAndCondition.vue";
import NameField from "../molecules/NameField.vue";
import PasswordField from "../molecules/PasswordField.vue";
import { ref } from "vue";
import Button from "../atoms/Button.vue";
import { useAppState } from "../../store/store";

const appState = useAppState();

const ticked = ref(false);

const updateTicked = (value) => {
  ticked.value = value;
};

const onBack = () => {
  appState.showEmailField();
};

const onclick = () => {
  appState.setLoading(true);

  setTimeout(() => {
    appState.setLoading(false);
    appState.accounts.push(appState.currentEmail);
    appState.showOTPField();
  }, 2000);
};
</script>
