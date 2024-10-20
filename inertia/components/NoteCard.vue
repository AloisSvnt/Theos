<script setup>
import { Link } from '@inertiajs/vue3';
import { defineProps } from 'vue';

const props = defineProps({
  note: {
    type: Object,
    required: true,
    id: Number,
    title: String,
    content: String,
    isComplete: Boolean,
  },
});
</script>

<template>
<div class="card w-96 shadow-xl transition-all" :class="note.isComplete ? 'bg-teal-400/80' : 'bg-base-100'">
  <div class="card-body">
    <div class="card-actions justify-end">
      <Link 
        :href="`/notes/${note.id}`" 
        :data="{ isComplete: !note.isComplete }"
        :preserve-scroll="true"
        method="put" 
        as="button" 
        type="button" 
        class="btn btn-neutral"
      >Validate</Link>
    </div>
    <h2 
      class="card-title transition-colors"
      :class="note.isComplete ? 'text-neutral' : ''">{{ note.title }}</h2>
    <p 
      class="transition-colors" 
      :class="note.isComplete ? 'text-neutral' : ''">{{ note.content }}</p>
    <div class="card-actions justify-end">
      <Link 
        :href="`/notes/${note.id}/edit`" 
        class="btn btn-primary">Edit</Link>
    </div>
  </div>
</div>
</template>