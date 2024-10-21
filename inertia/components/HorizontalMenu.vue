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
  <ul class="menu menu-horizontal bg-base-200/90 rounded-box mt-6 max-w-fit self-end">
    <li>
      <Link 
        :href="`/notes/${note.id}`"
        :data="{ isComplete: !note.isComplete }"
        :preserve-scroll="true"
        method="put"
        as="button"
        type="button"
        class="tooltip"
        :data-tip="note.isComplete ? 'Mark as incomplete' : 'Mark as complete' ">

        <i :class="note.isComplete ? 'fa-regular fa-square-check text-lg' : 'fa-regular fa-square text-lg'"></i>
        
      </Link>
    </li>
    <li>
      <Link 
        :href="`/notes/${note.id}/edit`" 
        class="tooltip" 
        data-tip="Edit">
        <i class="fa-regular fa-pen-to-square text-lg"></i>
      </Link>
    </li>
    <li>
      <Link 
        :href="`/notes/${note.id}/duplicate`" 
        method="post"
        as="button"
        type="button"
        class="tooltip" 
        data-tip="Duplicate">
        <i class="fa-regular fa-copy text-lg"></i>
      </Link>
    </li>
    <li>
      <Link 
        :href="`/notes/${note.id}/destroy`" 
        method="delete"
        as="button"
        type="button"
        class="tooltip" 
        data-tip="Delete">
        <i class="fa-regular fa-trash-can text-lg"></i>
      </Link>
    </li>
  </ul>
</template>