<template>
    <div flex flex-col items-center>
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
</template>