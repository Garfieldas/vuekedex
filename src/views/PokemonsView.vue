<template>
  <main class="min-h-screen pb-12">
    <div class="mb-8">
      <div class="max-w-7xl mx-auto px-4 py-6">
        <h1 class="text-xl sm:text-4xl font-bold text-gray-700 text-center drop-shadow-lg">
          CURRENTLY DISCOVERED POKEMONS
        </h1>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4">
      <div class="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <SearchBar />

        <ItemsPerPage
          :model-value="itemsPerPage"
          :options="[10, 20, 30, 50]"
          @update:modelValue="setItemsPerPage"
        />

        <PaginationControls
          :current-page="currentPage"
          :total-pages="totalPages"
          :can-prev="canPrev"
          :can-next="canNext"
          @first="setPage(1)"
          @prev="prevPage()"
          @next="nextPage()"
          @last="setPage(totalPages)"
        />
      </div>
      <p class="text-sm text-gray-600 mb-3">
        <template v-if="totalCount">
          Showing {{ rangeStart }}–{{ rangeEnd }} of {{ totalCount }}
        </template>
        <template v-else>
          No Pokémon found.
        </template>
      </p>
      <PokemonsList :pokemons="pokemons" />
      <div v-if="isLoading" class="mt-6 text-center text-gray-500">Loading…</div>
      <div v-if="error" class="mt-6 text-center text-red-600">Error: {{ error }}</div>
    </div>
  </main>
</template>

<script setup lang="ts">
import PokemonsList from '@/components/Pokemons/PokemonsList.vue';
import SearchBar from '@/components/Controls/SearchBar.vue';
import ItemsPerPage from '@/components/Controls/ItemsPerPage.vue';
import PaginationControls from '@/components/Controls/PaginationControls.vue';
import { onMounted, ref, computed } from 'vue';
import { usePokemons } from '@/composables/usePokemons';

const {
  pokemons, isLoading, error,
  currentPage, itemsPerPage, totalCount, totalPages,
  canPrev, canNext, rangeStart, rangeEnd,
  fetchPokemons, setPage, nextPage, prevPage, setItemsPerPage,
} = usePokemons();

onMounted(fetchPokemons);
</script>
