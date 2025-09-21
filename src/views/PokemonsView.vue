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
            <div class="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
                 <SearchBar />
                <ItemsPerPage />
                <PaginationControls />
            </div>
            <div class="flex justify-center gap-2 mb-8">
                <button class="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm text-gray-800 flex items-center justify-center border border-white/30 hover:bg-white/30 transition-all duration-300">1</button>
                <button class="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm text-gray-800 flex items-center justify-center border border-white/30 hover:bg-white/30 transition-all duration-300">2</button>
                <button class="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm text-gray-800 flex items-center justify-center border border-white/30 hover:bg-white/30 transition-all duration-300">3</button>
            </div>
             <PokemonsList :pokemons="pokemons"/>
        </div>
    </main>
</template>
<script setup lang="ts">
import PokemonsList from '@/components/Pokemons/PokemonsList.vue';
import SearchBar from '@/components/Controls/SearchBar.vue';
import ItemsPerPage from '@/components/Controls/ItemsPerPage.vue';
import PaginationControls from '@/components/Controls/PaginationControls.vue';
import { usePokemons } from '@/composables/usePokemons';
import { onMounted } from 'vue';

const { pokemons, isLoading, fetchPokemons } = usePokemons();
onMounted(async() => {
    await fetchPokemons();
})
</script>