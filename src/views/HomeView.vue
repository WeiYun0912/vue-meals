<template>
  <div class="flex flex-col p-8">
    <div>
      <input
        type="text"
        class="w-full border-2 border-gray-200 rounded"
        placeholder="Search for Meals"
      />
    </div>

    <div class="flex justify-center gap-2 mt-2">
      <pre></pre>
      <RouterLink
        :to="{ name: 'byLetter', params: { letter } }"
        v-for="letter in letters"
        :key="letter"
      >
        {{ letter }}
      </RouterLink>
    </div>
  </div>
</template>
<script setup>
import store from '@/store'

import { computed, onMounted, ref } from 'vue'
import axiosClient from '@/axiosClient'
import { RouterLink } from 'vue-router'
const meals = computed(() => store.state.meals)

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
const ingredients = ref([])
onMounted(async () => {
  const response = await axiosClient.get('/list.php?i=list')
  ingredients.value = response.data
})
</script>
