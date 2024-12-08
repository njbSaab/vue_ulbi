<template>
  <div class="icon-btn" @click="$emit('click')">
    <slot>
      <v-btn icon :icon="path" size="small"></v-btn>
    </slot>
  </div>
</template>

<script setup>

// Получение `path` как пропса для динамической иконки
const props = defineProps({
  path: {
    type: String,
    required: true,
  },
});
</script>

<style>
.icon-btn {
  display: flex;
  align-items: center;
  cursor: pointer;
}
</style>
