<template>
  <div class="pokemon-card rounded-xl p-4 text-center border border-white/30">
    <img
      :src= pokemonImage.front_default
      alt="Bulbasaur"
      class="w-24 h-24 mx-auto"
    />
    <h3 class="text-lg font-bold mt-2 text-gray-800">{{ pokemon.name }}</h3>
  </div>
</template>
<script setup lang="ts">
import { usePokemons } from '@/composables/usePokemons';
import { onMounted, ref } from 'vue';
const props = defineProps(['pokemon']);
const { fetchPokemonImage } = usePokemons();
const pokemonImage = ref();
onMounted(async() => {
  pokemonImage.value =  await fetchPokemonImage(props.pokemon.url);
})
</script>
