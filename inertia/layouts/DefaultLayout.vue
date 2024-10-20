<script setup>
import MainHeader from '@/components/MainHeader.vue'
import MainFooter from '@/components/MainFooter.vue'
</script>

<template>

  <div class="flex flex-col min-h-screen">
    <MainHeader />

    <main class="flex-1 flex">
      <div class="bg-base-200 flex-1 flex flex-col justify-center items-center flex-wrap py-8">
        <slot />
      </div>
    </main>

    <MainFooter />
  </div>
  
</template>