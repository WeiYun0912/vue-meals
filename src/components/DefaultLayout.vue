<template>
  <div class="h-full bg-gray-100">
    <AppNavbar />
  </div>
  <main>
    <RouterView />
  </main>
</template>

<script setup>
import AppNavbar from '@/components/AppNavbar.vue'
</script>
