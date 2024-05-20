<template>
  <div class="p-8">
    <h1 class="text-4xl font-bold">Ingredients</h1>
    <RouterLink
      v-for="ingredient of ingredients"
      :key="ingredient.idIngredient"
      class="block p-3 mb-3 rounded bg-slate-200"
      :to="{ name: 'byIngredient', params: { ingredient: ingredient.strIngredient } }"
    >
      <h3 class="text-2xl font-bold">{{ ingredient.strIngredient }}</h3>
      <p>{{ ingredient.strDescription }}</p>
    </RouterLink>
  </div>
</template>

<script setup>
import axiosClient from '@/axiosClient'
import { onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'

const ingredients = ref([])

onMounted(async () => {
  const response = await axiosClient.get('list.php?i=list')

  ingredients.value = response.data.meals
})
</script>
