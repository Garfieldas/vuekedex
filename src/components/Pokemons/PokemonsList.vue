<template>
  <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
    <PokemonCard v-for="pokemon in pokemons" :pokemon="pokemon"/>
  </div>
</template>
<script setup lang="ts">
import PokemonCard from './PokemonCard.vue';
const props = defineProps(['pokemons']);
</script>
