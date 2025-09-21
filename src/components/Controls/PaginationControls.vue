<template>
  <div class="flex items-center gap-2">
    <button
      class="px-4 py-2 bg-white/20 backdrop-blur-sm text-gray-800 rounded-lg 
             hover:bg-white/30 border border-white/30 transition-all duration-300
             disabled:opacity-40 disabled:cursor-not-allowed"
      :disabled="!canPrev"
      @click="$emit('prev')"
    >
      PREVIOUS
    </button>

    <span class="text-gray-700 font-medium">
      Page {{ currentPage }} / {{ totalPages }}
    </span>

    <button
      class="px-4 py-2 bg-white/20 backdrop-blur-sm text-gray-800 rounded-lg 
             hover:bg-white/30 border border-white/30 transition-all duration-300
             disabled:opacity-40 disabled:cursor-not-allowed"
      :disabled="!canNext"
      @click="$emit('next')"
    >
      NEXT
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  currentPage: number
  totalPages: number
  canPrev: boolean
  canNext: boolean
}>()

defineEmits<{
  (e: "prev"): void
  (e: "next"): void
}>()
</script>