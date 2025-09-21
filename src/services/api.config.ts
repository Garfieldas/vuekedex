import axios from "axios";

export const axiosConfig = axios.create({
    baseURL: import.meta.env.VITE_API_URL
});

axiosConfig.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {

    let errorMessage = '';

    if (error.response) {
      if (error.response.status === 404) {
        errorMessage = 'Nepavyko nieko rasti';
      } else if (error.response.status === 500) {
        errorMessage = 'Serverio klaida. Prašome pabandykite dar kartą vėliau.';
      } else if (error.response.status === 400) {
        errorMessage ='Patikrinkite suvestus duomenis ir bandykite dar kartą.';
      } else {
        errorMessage = 'Atsiprašome, bet susidūrėme su problema. Prašome pabandykite dar kartą vėliau';
      }
    } else if (error.request) {
      errorMessage = 'Deja, nepavyko užmegzti ryšio su serveriu';
    } else {
      errorMessage = 'Atsiprašome, bet susidūrėme su problema. Prašome pabandykite dar kartą vėliau';
    }
    
    return Promise.reject(errorMessage);
  }
);