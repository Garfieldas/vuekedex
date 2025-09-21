<template>
    <main class="min-h-screen pb-12 pt-8">
        <div class="max-w-7xl mx-auto px-4 mb-8">
            <div class="flex flex-col sm:flex-row items-center gap-4 sm:gap-0">
                <div class="flex items-center justify-between w-full">
                    <button class="px-3 sm:px-6 py-2 sm:py-3 bg-white/20 backdrop-blur-sm text-gray-700 rounded-lg hover:bg-white/30 transition-all font-bold text-sm sm:text-base">
                        ← PREVIOUS
                    </button>
                    <div class="flex flex-col items-center gap-2">
                        <h1 class="text-2xl sm:text-5xl text-gray-700 text-center drop-shadow-lg">
                            CHARIZARD
                        </h1>
                        <button class="px-4 sm:px-6 py-1 sm:py-2 bg-blue-400/50 backdrop-blur-sm text-white rounded-lg hover:bg-blue-400/60 transition-all font-bold text-sm sm:text-base whitespace-nowrap">
                            BACK TO ALL!
                        </button>
                    </div>
                    <button class="px-3 sm:px-6 py-2 sm:py-3 bg-white/20 backdrop-blur-sm text-gray-700 rounded-lg hover:bg-white/30 transition-all font-bold text-sm sm:text-base">
                        NEXT →
                    </button>
                </div>
            </div>
        </div>

        <div class="max-w-7xl mx-auto px-4">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8">
                <div class="pokemon-card rounded-3xl p-4 sm:p-8 flex items-center justify-center">
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png" 
                         alt="Charizard"
                         class="w-48 h-48 sm:w-80 sm:h-80 object-contain">
                </div>
                <div class="pokemon-card rounded-3xl p-4 sm:p-8">
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                        <div class="order-2 sm:order-1">
                            <h2 class="text-lg sm:text-xl font-bold text-gray-800 mb-4 border-b-2 border-gray-300">STAT | BASE</h2>
                            <div class="space-y-2">
                                <div class="flex justify-between">
                                    <span class="text-gray-700">HP</span>
                                    <span class="font-bold">78</span>
                                </div>
                                <div class="flex justify-between">
                                    <span class="text-gray-700">ATTACK</span>
                                    <span class="font-bold">84</span>
                                </div>
                                <div class="flex justify-between">
                                    <span class="text-gray-700">DEFENSE</span>
                                    <span class="font-bold">78</span>
                                </div>
                                <div class="flex justify-between">
                                    <span class="text-gray-700">SPECIAL-ATTACK</span>
                                    <span class="font-bold">109</span>
                                </div>
                                <div class="flex justify-between">
                                    <span class="text-gray-700">SPECIAL-DEFENSE</span>
                                    <span class="font-bold">85</span>
                                </div>
                                <div class="flex justify-between">
                                    <span class="text-gray-700">SPEED</span>
                                    <span class="font-bold">100</span>
                                </div>
                            </div>
                        </div>
                        <div class="order-1 sm:order-2">
                            <h2 class="text-lg sm:text-xl font-bold text-gray-800 mb-4 border-b-2 border-gray-300">TRAITS | BASE</h2>
                            <div class="space-y-2">
                                <div class="flex justify-between">
                                    <span class="text-gray-700">TYPE 1:</span>
                                    <span class="font-bold text-orange-500">FIRE</span>
                                </div>
                                <div class="flex justify-between">
                                    <span class="text-gray-700">TYPE 2:</span>
                                    <span class="font-bold text-blue-400">FLYING</span>
                                </div>
                                <div class="flex justify-between">
                                    <span class="text-gray-700">WEIGHT:</span>
                                    <span class="font-bold">905</span>
                                </div>
                                <div class="flex justify-between">
                                    <span class="text-gray-700">HEIGHT:</span>
                                    <span class="font-bold">17</span>
                                </div>
                            </div>
                            <div class="mt-6">
                                <h3 class="font-bold text-gray-800 mb-2">ABILITIES</h3>
                                <div class="space-y-1">
                                    <p class="text-gray-700 bg-white/50 px-3 py-1 rounded">BLAZE</p>
                                    <p class="text-gray-700 bg-white/50 px-3 py-1 rounded">SOLAR-POWER</p>
                                </div>

                                <h3 class="font-bold text-gray-800 mt-4 mb-2">MOVES</h3>
                                <div class="space-y-1">
                                    <p class="text-gray-700 bg-white/50 px-3 py-1 rounded">MEGA-PUNCH</p>
                                    <p class="text-gray-700 bg-white/50 px-3 py-1 rounded">FIRE-PUNCH</p>
                                    <p class="text-gray-700 bg-white/50 px-3 py-1 rounded">THUNDER-PUNCH</p>
                                    <p class="text-gray-700 bg-white/50 px-3 py-1 rounded">SCRATCH</p>
                                    <p class="text-gray-700 bg-white/50 px-3 py-1 rounded">SWORDS-DANCE</p>
                                    <p class="text-gray-700 bg-white/50 px-3 py-1 rounded">CUT</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>