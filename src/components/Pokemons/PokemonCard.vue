<template>
<routerLink :to="{ name: 'pokemon-details', params: { id: id } }">
  <div class="pokemon-card rounded-xl p-4 text-center border border-white/30">
    <img
      :src= imageSrc
      :alt= pokemon.name
      class="w-24 h-24 mx-auto"
    />
    <h3 class="text-lg font-bold mt-2 text-gray-800">{{ pokemon.name }}</h3>
  </div>
</routerLink>
</template>
<script setup lang="ts">
import { computed } from 'vue';
const props = defineProps(['pokemon']);
const id = computed(() => props.pokemon.url.split('/').filter(Boolean).pop());
const imageSrc = computed(() =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id.value}.png`
);
</script>
