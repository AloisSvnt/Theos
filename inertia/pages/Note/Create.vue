<script setup>
import { Head, Link, useForm } from '@inertiajs/vue3';

const form = useForm({
  title: '',
  content: '',
  isCompleted: false,
});

const handleSubmit = () => {
  form.post('/notes');
};
</script>
<template>
  <Head title="Create Note" />


  <h1 class="text-5xl font-bold py-6">Create a Note</h1>

  <form
    @submit.prevent="handleSubmit"
    class="flex flex-col w-1/3 gap-4">

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

    <button type="submit" class="btn btn-primary">Create</button>
  </form>

</template>