<template>
    <main class="min-h-screen">
      <div class="max-w-7xl mx-auto px-4 py-8 sm:py-12">
        <div class="text-center mb-8 sm:mb-12">
          <h1 class="text-3xl sm:text-5xl font-bold mb-4">
            <span class="text-gray-700">WELCOME TO</span>
          </h1>
          <h2 class="text-4xl sm:text-6xl font-extrabold mb-2">
            <span class="text-gray-700">VUEKEDEX!</span>
          </h2>
          <p class="text-sm sm:text-base text-gray-600 flex items-center justify-center">
            A WEB APP MADE WITH
            <img src="https://vuejs.org/images/logo.png" alt="Vue.js" class="w-6 h-6 mx-1"/>
            VUE JS!
          </p>
        </div>

        <div class="relative h-48 sm:h-64 mb-8">
          <div class="absolute inset-0 flex items-center justify-center">
            <router-link :to="{name:  'pokemons'}">
            <img src="../assets/images/bulb.png" alt="Pikachu" class="w-24 sm:w-32 animate-bounce"/>
            </router-link>
          </div>
        </div>
        <div class="flex flex-col md:flex-row justify-center gap-4 sm:gap-8">
        <router-link :to="{name:  'pokemons'}">
          <button class="group relative overflow-hidden rounded-2xl backdrop-blur-md bg-white/30 border-2 border-white/50 hover:bg-white/40 transition-all duration-300 p-4 sm:p-8 cursor-pointer">
            <div class="relative z-10">
              <img src="../assets/images/pikachu_home_gif.webp" alt="Pikachu" class="w-24 h-24 sm:w-32 sm:h-32 mx-auto pixelated mb-4 group-hover:scale-110 transition-transform"/>
              <p class="text-lg sm:text-xl font-bold text-gray-800 text-center drop-shadow-lg">
                Search Pokemons!
              </p>
            </div>
          </button>
          </router-link>

        <router-link :to="{name:  'favorite-pokemons'}">
          <button class="group relative overflow-hidden rounded-2xl backdrop-blur-md bg-white/30 border-2 border-white/50 hover:bg-white/40 transition-all duration-300 p-4 sm:p-8 cursor-pointer">
            <div class="relative z-10">
              <img src="../assets/images/favorite-image.gif" alt="Eevee" class="w-24 h-24 sm:w-32 sm:h-32 mx-auto pixelated mb-4 group-hover:scale-110 transition-transform"/>
              <p class="text-lg sm:text-xl font-bold text-gray-800 text-center drop-shadow-lg">
                Your favorite pokemons!
              </p>
            </div>
          </button>
          </router-link>
        </div>
      </div>
    </main>
</template>