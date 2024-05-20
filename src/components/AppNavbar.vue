<template>
  <header class="flex items-center justify-between h-16 bg-white shadow">
    <RouterLink :to="{ name: 'home' }" class="inline-flex items-center px-5">Home</RouterLink>
    <div class="flex items-center h-full gap-3">
      <RouterLink
        :to="{ name: 'byName' }"
        class="inline-flex items-center h-full px-2 transition-colors hover:bg-purple-200"
      >
        Search Meals
      </RouterLink>

      <RouterLink
        :to="{ name: 'byLetter' }"
        class="inline-flex items-center h-full px-2 transition-colors hover:bg-purple-200"
      >
        Meals By Letter
      </RouterLink>

      <RouterLink
        :to="{ name: 'ingredients' }"
        class="inline-flex items-center h-full px-2 transition-colors hover:bg-purple-200"
      >
        Meals By Ingredients
      </RouterLink>
    </div>
  </header>
</template>
