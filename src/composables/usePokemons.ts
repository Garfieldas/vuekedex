import { getPokemons } from "@/services/pokemonsService";
import { ref, computed } from "vue";

export const usePokemons = () => {
  const pokemons = ref();
  const isLoading = ref(false);
  const error = ref(null);

  const currentPage = ref(1);
  const itemsPerPage = ref(20);
  const totalCount = ref(0);

  const totalPages = computed(() =>
    Math.max(1, Math.ceil(totalCount.value / itemsPerPage.value))
  );
  const canPrev = computed(() => currentPage.value > 1);
  const canNext = computed(() => currentPage.value < totalPages.value);
  const rangeStart = computed(() =>
    totalCount.value === 0 ? 0 : (currentPage.value - 1) * itemsPerPage.value + 1
  );
  const rangeEnd = computed(() =>
    Math.min(currentPage.value * itemsPerPage.value, totalCount.value)
  );

  const fetchPokemons = async () => {
    isLoading.value = true;
    error.value = null;
    try {
      const offset = (currentPage.value - 1) * itemsPerPage.value;
      const url = `/pokemon?limit=${itemsPerPage.value}&offset=${offset}`;
      const data = await getPokemons(url);
      pokemons.value = data.results ?? [];
      totalCount.value = data.count ?? 0;
    } catch (error: any) {
      console.log(error);
      pokemons.value = [];
      totalCount.value = 0;
    } finally {
      isLoading.value = false;
    }
  };
  const setPage = async (page: number) => {
    const safe = Math.min(Math.max(1, page), totalPages.value);
    if (safe !== currentPage.value) currentPage.value = safe;
    await fetchPokemons();
  };

  const nextPage = async () => {
    if (!canNext.value) return;
    currentPage.value += 1;
    await fetchPokemons();
  };

  const prevPage = async () => {
    if (!canPrev.value) return;
    currentPage.value -= 1;
    await fetchPokemons();
  };

  const setItemsPerPage = async (n: number) => {
    if (n <= 0) return;
    if (n !== itemsPerPage.value) {
      itemsPerPage.value = n;
      currentPage.value = 1;
      await fetchPokemons();
    }
  };

  return {
    pokemons, isLoading, error,
    currentPage, itemsPerPage, totalCount, totalPages,
    canPrev, canNext, rangeStart, rangeEnd,
    fetchPokemons, setPage, nextPage, prevPage, setItemsPerPage,
  };
};
