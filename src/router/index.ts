import { createRouter, createWebHistory } from 'vue-router'
import HomePageView from '@/views/HomePageView.vue'
import PokemonsView from '@/views/PokemonsView.vue'
import PokemonDetailsView from '@/views/PokemonDetailsView.vue'
import FavoritePokemonsView from '@/views/FavoritePokemonsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      children: [
        {
          path: "",
          name: "home",
          component: HomePageView,
        }
      ]
    },
    {
      path: "/pokemons",
      children: [
        {
          path: "",
          name: "pokemons",
          component: PokemonsView
        },
        {
          path: ":id",
          name: "pokemon-details",
          component: PokemonDetailsView,
          props: true,
        }
      ]
    },
    {
      path: "/favorite-pokemons",
      name: "favorite-pokemons",
      component: FavoritePokemonsView
    },
  ]
})

export default router
