<template>
  <div class="flex items-center gap-4">
    <label class="text-gray-700 font-medium">Items per page:</label>
    <select
      class="px-3 py-2 rounded-lg border border-white/30 bg-white/20 backdrop-blur-sm 
             focus:ring-2 focus:ring-blue-400 focus:border-transparent text-gray-800
             appearance-none pr-8"
      :value="modelValue"
      @change="onChange"
    >
      <option v-for="opt in options" :key="opt" :value="opt">{{ opt }}</option>
    </select>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  modelValue: number
  options: number[]
}>()

const emit = defineEmits<{
  (e: "update:modelValue", value: number): void
}>()

function onChange(e: Event) {
  const value = Number((e.target as HTMLSelectElement).value)
  emit("update:modelValue", value)
}
</script>
