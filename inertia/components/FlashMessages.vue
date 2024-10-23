<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  message: String,
  type: String
})

</script>

<template>
  <div v-if="props.message" role="alert" :class="`alert absolute bottom-3 right-3 max-w-96 ${ props.type === 'success' ? 'alert-success' : 'alert-error'}`">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6 shrink-0 stroke-current"
      fill="none"
      viewBox="0 0 24 24">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    <span>{{ props.message }}</span>
  </div>
</template>

<style scoped>
[role=alert] {
  animation:
    slide-up 0.5s forwards,
    slide-down 0.8s 5s forwards;
}

@keyframes slide-up {
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slide-down {
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(-100%);
    opacity: 0;
  }
}
</style>