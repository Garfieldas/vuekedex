    <template>
  <main class="min-h-screen pb-12 pt-8">
    <div class="max-w-7xl mx-auto px-4 mb-8">
      <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
        <h1 class="text-xl sm:text-4xl font-bold text-gray-700 text-center sm:text-left">
          Favorite Pokémons ({{ count }}/{{ MAX }})
        </h1>

        <div class="flex items-center gap-2">
          <button
            class="px-4 py-2 bg-white/20 backdrop-blur-sm text-gray-800 rounded-lg
                   hover:bg-white/30 border border-white/30 transition-all"
            @click="goBack"
          >
            ← Back
          </button>
          <button
            class="px-4 py-2 bg-red-500/80 text-white rounded-lg hover:bg-red-500/90 transition-all
                   disabled:opacity-40 disabled:cursor-not-allowed"
            :disabled="favorites.length === 0"
            @click="clearFavorites"
          >
            Clear all
          </button>
        </div>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4">
      <template v-if="favorites.length">
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          <article
            v-for="fav in favorites"
            :key="fav.id"
            class="pokemon-card rounded-2xl p-4 border border-white/30 bg-white/20 backdrop-blur-sm
                   flex flex-col items-center text-center gap-3"
          >
            <img
              :src="fav.image || fallbackSrc(fav.id)"
              :alt="fav.name"
              class="w-24 h-24 object-contain"
              loading="lazy"
            />
            <h3 class="font-semibold capitalize text-gray-800">{{ fav.name }}</h3>

            <div class="flex gap-2 mt-1">
              <button
                class="px-3 py-1 rounded-lg bg-blue-500/80 text-white hover:bg-blue-500/90 transition-all"
                @click="goToDetails(fav.id)"
              >
                Details
              </button>
              <button
                class="px-3 py-1 rounded-lg bg-white/30 border border-white/40 text-gray-800
                       hover:bg-white/40 transition-all"
                @click="removeFavorite(fav.id)"
              >
                Remove
              </button>
            </div>
          </article>
        </div>
      </template>

      <template v-else>
        <div class="text-center text-gray-600 py-16">
          <p class="mb-4">You don’t have any favorites yet.</p>
          <button
            class="px-4 py-2 bg-blue-400/60 text-white rounded-lg hover:bg-blue-400/70 transition-all"
            @click="router.push({ name: 'pokemons' })"
          >
            Browse Pokémons
          </button>
        </div>
      </template>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useFavorites } from "@/composables/useFavorites";
import { useRouter } from "vue-router";

const router = useRouter();
const { favorites, removeFavorite, clearFavorites, count, MAX } = useFavorites();

function goBack() {
  router.push({ name: "home" });
}

function goToDetails(id: number) {
  router.push({ name: "pokemon-details", params: { id } });
}

function fallbackSrc(id: number) {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
}
</script>
