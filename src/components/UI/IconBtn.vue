<template>
  <div class="icon-btn">
    <svg-icon type="mdi" :path="path"></svg-icon>
    <slot></slot>
  </div>
</template>

<script setup>
import SvgIcon from '@jamescoyle/vue-icon';

// Получение `path` как пропса для динамической иконки
const props = defineProps({
  path: {
    type: String,
    required: true,
  },
});
</script>

<style>
/* Ваши стили для кнопки */
.icon-btn {
  display: flex;
  align-items: center;
  cursor: pointer;
}
</style>
