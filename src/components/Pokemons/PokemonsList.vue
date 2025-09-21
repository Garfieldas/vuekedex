<template>
  <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
    <PokemonCard />
    <PokemonCard />
    <PokemonCard />
  </div>
</template>
<script setup lang="ts">
import PokemonCard from './PokemonCard.vue';
</script>
