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

    const fetchPokemonImage = async (url: string) => {
        try {
            const response = await getPokemons(url);
            const pokemonImage = response.sprites
            return pokemonImage
        }
        catch (error: any) {
            console.log(error);
        }
    }
    return {
        pokemons, isLoading, fetchPokemons, fetchPokemonImage
    }
}