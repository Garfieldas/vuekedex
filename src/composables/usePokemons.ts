import { getPokemons } from "@/services/pokemonsService";
import { ref } from "vue"

export const usePokemons = () => {
    const pokemons = ref();
    const isLoading = ref(true);

    const fetchPokemons = async () => {
        isLoading.value = true;
        try {
            const response = await getPokemons();
            pokemons.value = response.results;
        }
        catch (error: any) {
            console.log(error);
        }
        finally {
            isLoading.value = false
        }
    }
    return {
        pokemons, isLoading, fetchPokemons
    }
}