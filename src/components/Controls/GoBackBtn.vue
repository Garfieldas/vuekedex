<template>
  <div class="w-full sm:w-48">
    <button
      class="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg 
             border border-white/30 bg-white/20 backdrop-blur-sm 
             hover:bg-white/30 transition-all duration-300
             focus:ring-2 focus:ring-blue-400 focus:border-transparent
             text-gray-800 font-medium"
      @click="$emit('back')"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M15 19l-7-7 7-7"
        />
      </svg>
      Back to Menu
    </button>
  </div>
</template>

<script setup lang="ts">
defineEmits<{ (e: "back"): void }>()
</script>
