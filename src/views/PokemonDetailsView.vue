<template>
  <main class="min-h-screen pb-12 pt-8">
    <div class="max-w-7xl mx-auto px-4 mb-8">
      <div class="flex flex-col sm:flex-row items-center gap-4 sm:gap-0">
        <div class="flex items-center justify-between w-full">
          <button
            class="px-3 sm:px-6 py-2 sm:py-3 bg-white/20 backdrop-blur-sm 
                   text-gray-700 rounded-lg hover:bg-white/30 transition-all 
                   font-bold text-sm sm:text-base disabled:opacity-40 disabled:cursor-not-allowed"
            :disabled="!pokemon || pokemon.id <= 1"
            @click="goToPrev"
          >
            ← PREVIOUS
          </button>

          <div class="flex flex-col items-center gap-2">
            <h1
              v-if="pokemon"
              class="text-2xl sm:text-5xl text-gray-700 text-center drop-shadow-lg capitalize"
            >
              {{ pokemon.name }}
            </h1>
            <button
              class="px-4 sm:px-6 py-1 sm:py-2 bg-blue-400/50 backdrop-blur-sm 
                     text-white rounded-lg hover:bg-blue-400/60 transition-all 
                     font-bold text-sm sm:text-base whitespace-nowrap"
              @click="$router.push({ name: 'pokemons' })"
            >
              BACK TO ALL!
            </button>
          </div>

          <button
            class="px-3 sm:px-6 py-2 sm:py-3 bg-white/20 backdrop-blur-sm 
                   text-gray-700 rounded-lg hover:bg-white/30 transition-all 
                   font-bold text-sm sm:text-base disabled:opacity-40 disabled:cursor-not-allowed"
            :disabled="!pokemon || pokemon.id === 10277"
            @click="goToNext"
          >
            NEXT →
          </button>
        </div>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4" v-if="pokemon">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8">
        <div class="pokemon-card rounded-3xl p-4 sm:p-8 flex items-center justify-center">
          <img
            :src="pokemon.sprites?.other?.['official-artwork']?.front_default"
            :alt="pokemon.name"
            class="w-48 h-48 sm:w-80 sm:h-80 object-contain"
          />
        </div>

        <div class="pokemon-card rounded-3xl p-4 sm:p-8">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div class="order-2 sm:order-1">
              <h2 class="text-lg sm:text-xl font-bold text-gray-800 mb-4 border-b-2 border-gray-300">
                STATS | BASE
              </h2>
              <div class="space-y-2">
                <div
                  v-for="stat in pokemon.stats"
                  :key="stat.stat.name"
                  class="flex justify-between capitalize"
                >
                  <span class="text-gray-700">{{ stat.stat.name }}</span>
                  <span class="font-bold">{{ stat.base_stat }}</span>
                </div>
              </div>
            </div>

            <div class="order-1 sm:order-2">
              <h2 class="text-lg sm:text-xl font-bold text-gray-800 mb-4 border-b-2 border-gray-300">
                TRAITS | BASE
              </h2>
              <div class="space-y-2">
                <div
                  v-for="(type, index) in pokemon.types"
                  :key="type.type.name"
                  class="flex justify-between"
                >
                  <span class="text-gray-700">Type {{ index + 1 }}:</span>
                  <span class="font-bold uppercase">{{ type.type.name }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-700">Weight:</span>
                  <span class="font-bold">{{ pokemon.weight }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-700">Height:</span>
                  <span class="font-bold">{{ pokemon.height }}</span>
                </div>
              </div>

              <div class="mt-6">
                <h3 class="font-bold text-gray-800 mb-2">Abilities</h3>
                <div class="space-y-1">
                  <p
                    v-for="ability in pokemon.abilities"
                    :key="ability.ability.name"
                    class="text-gray-700 bg-white/50 px-3 py-1 rounded capitalize"
                  >
                    {{ ability.ability.name }}
                  </p>
                </div>

                <h3 class="font-bold text-gray-800 mt-4 mb-2">Moves</h3>
                <div class="space-y-1 max-h-48 overflow-y-auto">
                  <p
                    v-for="move in pokemon.moves.slice(0, 10)"
                    :key="move.move.name"
                    class="text-gray-700 bg-white/50 px-3 py-1 rounded capitalize"
                  >
                    {{ move.move.name }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="text-center text-gray-500">Loading Pokémon…</div>
  </main>
</template>

<script setup lang="ts">
import { getPokemons } from "@/services/pokemonsService";
import { onMounted, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

const props = defineProps<{ id: string }>();

const route = useRoute();
const router = useRouter();

const pokemon = ref<any>(null);
const limit = ref();

const fetchPokemonData = async () => {
  try {
    const response = await getPokemons(`/pokemon/${props.id}`);
    pokemon.value = response;
  } catch (error: any) {
    console.log(error);
  }
};

function goToPrev() {
  if (!pokemon.value) return;
  const prevId = Number(pokemon.value.id) - 1;
  if (prevId >= 1) {
    router.push({ name: "pokemon-details", params: { id: prevId } });
  }
}

function goToNext() {
  if (!pokemon.value) return;
  const nextId = Number(pokemon.value.id) + 1;
  router.push({ name: "pokemon-details", params: { id: nextId } });
}

onMounted(fetchPokemonData)
watch(
  () => route.params.id,
  () => fetchPokemonData()
);
</script>
