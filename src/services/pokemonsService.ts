import { axiosConfig } from "./api.config";

export const getPokemons = async (params: string) => {
    const url = params ? `/pokemons${params}` : '/pokemon';
    try {
        const response = await axiosConfig.get(url);
        const data = response.data;
        return data
    }
    catch (error: any) {
        throw error
    }
}