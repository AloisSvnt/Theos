<script setup>
import { usePage } from '@inertiajs/vue3'
import { computed } from 'vue'

import MainHeader from '@/components/MainHeader.vue'
import MainFooter from '@/components/MainFooter.vue'
import FlashMessages from '@/components/FlashMessages.vue'

const page = usePage()
const flashSuccess = computed(() => page.props.success)
const flashError = computed(() => page.props.errors)

</script>

<template>

  <div class="flex flex-col min-h-screen">
    <MainHeader />

    <main class="flex-1 flex">
      <div class="bg-base-200 flex-1 flex flex-col justify-center items-center flex-wrap py-8">
        <slot />
      </div>
    </main>

      <FlashMessages :key="flashSuccess || flashError" :message="flashSuccess ? flashSuccess : flashError" :type="flashSuccess ? 'success': 'error'" />
      <MainFooter />
    </div>
    
</template>