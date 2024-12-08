<template>
  <v-textarea
    :value="modelValue"
    @input="onInput"
    :clear-icon="clearIcon"
    :label="label"
    :clearable="clearable"
    :color="color"
  ></v-textarea>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  clearIcon: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
  clearable: {
    type: Boolean,
    default: false,
  },
  color: {
    type: String,
    default: '',
  },
});

const emit = defineEmits(['update:modelValue']);

const onInput = (event) => {
  emit('update:modelValue', event.target.value);
};
</script>
