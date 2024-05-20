import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import MealsByIngredientsView from '@/views/MealsByIngredientsView.vue'
import MealsByLetterView from '@/views/MealsByLetterView.vue'
import MealsByNameView from '@/views/MealsByNameView.vue'
import DefaultLayout from '@/components/DefaultLayout.vue'
import MealDetailsView from '@/views/MealDetailsView.vue'
import IngredientsView from '@/views/IngredientsView.vue'

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '/',
        name: 'home',
        component: HomeView
      },
      {
        path: '/by-name/:name?',
        name: 'byName',
        component: MealsByNameView
      },

      {
        path: '/by-letter/:letter?',
        name: 'byLetter',
        component: MealsByLetterView
      },
      {
        path: '/by-ingredient/:ingredient',
        name: 'byIngredient',
        component: MealsByIngredientsView
      },
      {
        path: '/ingredients',
        name: 'ingredients',
        component: IngredientsView
      },
      {
        path: '/meal/:id',
        name: 'mealDetails',
        component: MealDetailsView
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
