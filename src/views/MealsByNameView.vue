<template>
  <div class="p-8 pb-0">
    <input
      v-model="keyword"
      type="text"
      class="w-full border-2 border-gray-200 rounded"
      placeholder="Search for Meals"
      @change="searchMeals"
    />
  </div>

  <div class="grid grid-cols-1 gap-5 p-8 md:grid-cols-3">
    <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
  </div>

  <AppMeals :meals="meals" />
</template>

<script setup>
import AppMeals from '@/components/AppMeals.vue'
import MealItem from '@/components/MealItem.vue'
import store from '@/store'
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const keyword = ref('')
const meals = computed(() => store.state.searchedMeals)
const route = useRoute()
function searchMeals() {
  store.dispatch('searchMeals', keyword.value)
}

onMounted(() => {
  keyword.value = route.params.name
  if (keyword.value) {
    searchMeals()
  }
})
</script>
