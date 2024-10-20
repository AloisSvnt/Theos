<script setup>
import { Head, Link } from '@inertiajs/vue3'
import { defineProps } from 'vue';

import DefaultLayout from '@/layouts/DefaultLayout.vue'
import NoteCard from '@/components/NoteCard.vue'

const props = defineProps({
  notes: Array,
});

</script>

<template>
  <Head title="Notes" />

  <DefaultLayout>

        <div class="text-center hero-content">
          <div class="max-w-md">
            <h1 class="mb-5 text-5xl font-bold">Notes</h1>
            <p class="mb-5">Manage your notes with Theos.</p>
            <Link href="/notes/create" class="btn btn-secondary">New Note</Link>
          </div>
        </div>

        <div class="grid grid-cols-3 gap-12">
          <div v-for="note in notes">
            <NoteCard :note="note" />
          </div>
        </div>

  </DefaultLayout>

</template>