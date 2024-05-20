<template>
  <div class="bg-white shadow rounded-xl">
    <RouterLink :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
      <img
        :src="meal.strMealThumb"
        :alt="meal.strMeal"
        class="object-cover w-full h-48 rounded-t-xl"
      />
    </RouterLink>
    <div class="p-3">
      <h3 class="font-bold">{{ meal.strMeal }}</h3>
      <p class="mb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta amet molestias excepturi?
      </p>
      <div class="flex justify-between">
        <YoutubeButton :href="meal.strYoutube" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import YoutubeButton from './YoutubeButton.vue'

defineProps({
  meal: Object
})
</script>
