import { ref, computed } from "vue";

export interface FavoritePokemon {
  id: number;
  name: string;
  image: string | null;
}

const STORAGE_KEY = "favorite_pokemons_v1";
const MAX = 20;

function isValidFav(x: any): x is FavoritePokemon {
  return x && typeof x.id === "number" && typeof x.name === "string";
}

function loadFromStorage(): FavoritePokemon[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const arr = JSON.parse(raw);
    return Array.isArray(arr) ? arr.filter(isValidFav) : [];
  } catch {
    return [];
  }
}

const favorites = ref<FavoritePokemon[]>(loadFromStorage());
const lastError = ref<string | null>(null);

function save() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites.value));
}

const count = computed(() => favorites.value.length);
const isFull = computed(() => count.value >= MAX);

function isFavorite(id: number) {
  return favorites.value.some((f) => f.id === id);
}

function addFavorite(fav: FavoritePokemon) {
  lastError.value = null;
  if (isFavorite(fav.id)) return true;
  if (isFull.value) {
    lastError.value = `You can only save up to ${MAX} favorites.`;
    return false;
  }
  favorites.value.unshift(fav);
  save();
  return true;
}

function removeFavorite(id: number) {
  favorites.value = favorites.value.filter((f) => f.id !== id);
  save();
}

function toggleFavorite(fav: FavoritePokemon) {
  if (isFavorite(fav.id)) {
    removeFavorite(fav.id);
    return true;
  }
  return addFavorite(fav);
}

function clearFavorites() {
  favorites.value = [];
  save();
}

export function useFavorites() {
  return {
    favorites,
    count,
    isFull,
    MAX,
    lastError,
    isFavorite,
    addFavorite,
    removeFavorite,
    toggleFavorite,
    clearFavorites,
  };
}
