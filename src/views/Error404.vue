<template>
  <main class="min-h-screen flex flex-col items-center justify-center gap-6 px-4 py-16">
    <h1 class="text-3xl sm:text-4xl font-bold text-gray-800 text-center">
      No Pokémons found here
    </h1>
    <img
      src="../assets/images/pikachu_running.gif"
      alt="Pikachu running"
      class="w-56 h-56 sm:w-64 sm:h-64 object-contain drop-shadow-lg select-none"
      draggable="false"
    />
    <button
      class="inline-flex items-center gap-2 px-5 py-3 rounded-xl
             bg-blue-500/90 text-white font-semibold
             hover:bg-blue-600 active:scale-[0.99]
             shadow-lg transition
             focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
      @click="goBrowse"
    >
      Browse Pokémons
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 -mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </button>
  </main>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
const goBrowse = () => router.push({ name: 'pokemons' })
</script>
