<template>
  <div  class=" flex flex-col items-center " data-cy="verification-header">
    <img
        src="/assets/img/aladia.png"
        class="mb-2 h-24 w-24 rounded object-cover"
      />
      <div class="mb-4 text-lg font-semibold">{{ userName }}</div>
      <div class="mb-8 text-white/70">Thanks for joining Aladia.</div>
  </div>
</template>

<script>


export default {
  props :{
  },
}
</script>