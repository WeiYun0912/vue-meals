<template>
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

  <div class="grid grid-cols-1 gap-5 p-8 md:grid-cols-3">
    <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
  </div>
</template>

<script setup>
import store from '@/store'
import { computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import MealItem from '@/components/MealItem.vue'

const route = useRoute()
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

const meals = computed(() => store.state.mealsByLetter)

watch(route, () => {
  store.dispatch('searchMealsByLetter', route.params.letter)
})

onMounted(() => {
  store.dispatch('searchMealsByLetter', route.params.letter)
})
</script>
