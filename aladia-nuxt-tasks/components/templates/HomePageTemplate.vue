<template>
  <div
 class="flex items-center justify-center min-h-screen bg-black "    data-cy="welcome-page"
  >
    <div class="w-[23vw] p-8 flex-col items-center justify-center rounded border  border-white/20 bg-black rounded shadow-lg">
      <h1 class=" text-white text-4xl text-center" data-cy="welcome-message">
        Successfully registered !!!
      </h1>
    </div>
  </div>
</template>

<script setup>
import Button from "../atoms/Button.vue";
import { useAppState } from "../../store/store";

const appState = useAppState();

const handleClick = () => {
  appState.setLoading(true);
  setTimeout(() => {
    appState.setLoading(false);
    appState.logout();
  }, 1000);
};
</script>
