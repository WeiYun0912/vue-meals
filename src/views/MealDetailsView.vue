<template>
  <div class="max-w-[800px] mx-auto p-8">
    <h1 class="mb-5 text-5xl font-bold">{{ meal.strMeal }}</h1>
    <img :src="meal.strMealThumb" :alt="meal.strMeal" class="max-w-[100%]" />

    <div class="grid grid-cols-1 py-2 text-lg sm:grid-cols-3">
      <div><strong class="font-bold">Category :</strong> {{ meal.strCategory }}</div>
      <div><strong class="font-bold">Area </strong> : {{ meal.strArea }}</div>
      <div><strong class="font-bold">Tags </strong> : {{ meal.strTags }}</div>
    </div>

    <div class="my-3">
      {{ meal.strInstructions }}
    </div>

    <div class="grid grid-cols-1 mb-5 sm:grid-cols-2">
      <div>
        <h2 class="mb-3 text-2xl font-semibold">Ingredients</h2>
        <ul>
          <template v-for="(el, index) of new Array(20)" :key="index">
            <li v-if="meal[`strIngredient${index + 1}`]">
              {{ index + 1 }}.{{ meal[`strIngredient${index + 1}`] }}
            </li>
          </template>
        </ul>
      </div>

      <div>
        <h2 class="mb-3 text-2xl font-semibold">Measures</h2>
        <ul>
          <template v-for="(el, index) of new Array(20)" :key="index">
            <li v-if="meal[`strMeasure${index + 1}`]">
              {{ index + 1 }}.{{ meal[`strMeasure${index + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
      <div class="flex gap-3 mt-4">
        <YoutubeButton :href="meal.strYoutube">Go To Youtube</YoutubeButton>
        <a
          :href="href"
          target="_blank"
          class="px-3 py-2 text-white transition-colors bg-indigo-500 border-2 border-indigo-500 rounded hover:bg-indigo-600"
        >
          View Original Source
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import axiosClient from '@/axiosClient'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import YoutubeButton from '@/components/YoutubeButton.vue'
const route = useRoute()

const meal = ref({})

onMounted(async () => {
  const id = route.params.id
  const response = await axiosClient.get(`lookup.php?i=${id}`)

  meal.value = response.data.meals[0] || {}
})
</script>
