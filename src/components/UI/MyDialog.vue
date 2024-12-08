<template>
  <div class="my-dialog" v-if="show" @click="hideDialog">
    <div class="my-dialog-content" @click.stop>
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
// Определение событий и пропсов
const emit = defineEmits(['update:show']);
defineProps({
  show: {
    type: Boolean,
    default: false,
  },
});

// Функция для скрытия диалога
const hideDialog = () => {
  emit('update:show', false);
};
</script>

<style lang="scss" scoped>
.my-dialog {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(3px);
}

.my-dialog-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}
</style>
