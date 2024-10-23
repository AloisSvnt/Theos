<script setup>
import { Head, useForm } from '@inertiajs/vue3';
import { defineProps, computed } from 'vue';

const props = defineProps({
  note: {
    type: Object,
    required: true,
    default: () => ({
      id: Number,
      title: String,
      content: String,
      isComplete: Boolean,
    }),
  },
});

const form = useForm({
  title: props.note.title,
  content: props.note.content,
  isComplete: Boolean(props.note.isComplete), // Convertit en booléen
});

const isCompleteComputed = computed({
  get: () => Boolean(form.isComplete),
  set: (value) => {
    form.isComplete = value ? 1 : 0; // Stocke 1 ou 0 dans le formulaire
  }
});

const handleSubmit = () => {
  form.put(`/notes/${props.note.id}`);
};
</script>

<template>
  <Head title="Create Note" />

  <h1 class="text-5xl font-bold py-6">Edit Note</h1>

  <form
    @submit.prevent="handleSubmit"
    class="flex flex-col w-1/3 gap-4 items-end">

    <input
      type="text"
      v-model="form.title"
      class="input input-bordered w-full"
      placeholder="Title"
    >
    <div v-if="form.errors.title">{{ form.errors.title }}</div>

    <textarea
      v-model="form.content"
      placeholder="Content"
      class="textarea textarea-bordered textarea-md w-full"></textarea>
    <div v-if="form.errors.content">{{ form.errors.content }}</div>

    <div class="form-control w-1/3">
      <label class="label cursor-pointer">
        <span class="label-text">Is complete ?</span>
        <input 
          v-model="isCompleteComputed"
          type="checkbox" 
          class="checkbox checkbox-teal-400/80" 
        />
      </label>
    </div>

    <button type="submit" class="btn btn-primary w-full">Update</button>
  </form>

</template>