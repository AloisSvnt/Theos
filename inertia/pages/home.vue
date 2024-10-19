<script setup lang="ts">
  import { Head } from '@inertiajs/vue3'
  import Header from '@/components/Header.vue'
  import Footer from '@/components/Footer.vue'
</script>

<template>
  <Head title="Homepage" />

<div class="flex flex-col min-h-screen">
  <Header />
  <main class="flex-1 flex">
    <div class="bg-base-200 flex-1 flex justify-center items-center">
      <div class="text-center hero-content">
        <div class="max-w-md">
          <h1 class="mb-5 text-5xl font-bold">Welcome to DaisyUI</h1>
          <p class="mb-5">The fastest way to build your Tailwind CSS project.</p>
          <button class="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  </main>

  <Footer/>
</div>

</template>