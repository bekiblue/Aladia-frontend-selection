<template>
  
  <LoginPageTemplate v-if="isEmailStep"  />
  <LoginPageTemplate v-else-if="isPasswordStep" :isPasswordField="true" />
  <PasswordRecoveryTemplate v-else-if="isPasswordRecoveryStep" />
  <EmailVerificationTemplate v-else-if="isOTPstep" />
  <RegisterTemplate  v-else-if="isSignupStep"/>
  <PasswordRecoveryTemplate v-else-if="isPasswordSetStep" :showPasswordRecoverySection="false" />
  <HomePageTemplate v-else /> 

  



</template>

<script setup>
import "@fortawesome/fontawesome-free/css/all.css";
import LoginPageTemplate from "~/components/templates/LoginPageTemplate.vue";
import PasswordRecoveryTemplate from "~/components/templates/PasswordRecoveryTemplate.vue";
import EmailVerificationTemplate from "~/components/templates/EmailVerificationTemplate.vue";
import HomePageTemplate from "~/components/templates/HomePageTemplate.vue";
import RegisterTemplate from "~/components/templates/RegisterTemplate.vue";

import { useAppState } from "~/store/store";
import { computed } from "vue";

const appState = useAppState();


const isEmailStep = computed(() => appState.pageNumber === 0);
const isPasswordStep = computed(() => appState.pageNumber === 1);
const isPasswordRecoveryStep = computed(() => appState.pageNumber === 2);
const isSignupStep = computed(() => appState.pageNumber === 3);
const isOTPstep = computed(() => appState.pageNumber === 4);
const isPasswordSetStep = computed(() => appState.pageNumber === 5);



</script>
