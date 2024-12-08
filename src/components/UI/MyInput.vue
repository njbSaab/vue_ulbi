<template>
  <v-text-field
    :value="modelValue"
    @input="onInput"
    :rules="rules"
    :label="label"
    :color="color"
  />
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  rules: {
    type: Array,
    default: () => [],
  },
  label: {
    type: String,
    default: '',
  },
  color: {
    type: String,
    default: '',
  },
});

const emit = defineEmits(['update:modelValue']);

// Обработчик события input
const onInput = (event) => {
  emit('update:modelValue', event.target.value);
};
</script>
