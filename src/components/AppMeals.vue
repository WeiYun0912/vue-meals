<template>
  <div class="grid grid-cols-1 gap-5 p-8 md:grid-cols-3">
    <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
  </div>

  <div v-if="!meals.length" class="flex justify-center">There are no meals</div>
</template>

<script setup>
import MealItem from '@/components/MealItem.vue'
defineProps({
  meals: {
    type: Array,
    default: () => []
  }
})
</script>
