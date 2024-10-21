<script setup>
import { Link } from '@inertiajs/vue3';
import { defineProps } from 'vue';
import HorizontalMenu from '@/components/HorizontalMenu.vue';

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

<div class="card-actions justify-end">

</div>
<template>
<div class="card w-96 shadow-xl transition-all" :class="note.isComplete ? 'bg-teal-400/80' : 'bg-base-100'">
  <div class="card-body">
    <h2 
    class="card-title transition-colors"
    :class="note.isComplete ? 'text-neutral' : ''">{{ note.title }}</h2>
    <p 
    class="transition-colors" 
    :class="note.isComplete ? 'text-neutral' : ''">{{ note.content }}</p>
    <HorizontalMenu :note="note"/>
  </div>
</div>
</template>