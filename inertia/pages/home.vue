<script setup>
  import { Head, Link } from '@inertiajs/vue3'
</script>

<template>
  <Head title="Homepage" />

  <div class="text-center hero-content">
    <div class="max-w-md">
      <h1 class="mb-5 text-5xl font-bold">Welcome to Theos</h1>
      <p class="mb-5">Theos is a note manager build with AdonisJS, inertia and Vue3.</p>
      <Link href="/notes" class="btn btn-primary">Get Started</Link>
    </div>
  </div>

</template>