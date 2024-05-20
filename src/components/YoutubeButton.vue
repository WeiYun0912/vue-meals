<template>
  <a
    :href="href"
    target="_blank"
    class="px-3 py-2 text-white transition-colors bg-red-500 border-2 border-red-500 rounded hover:bg-red-600"
  >
    <span v-if="$slots.default">
      <slot></slot>
    </span>
    <span v-else>Youtube</span>
  </a>
</template>

<script setup>
defineProps({
  href: String
})
</script>
