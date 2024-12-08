<template>
  <div class="my-sorted">
    <v-combobox
      :clearable="clearable"
      :chips="chips"
      :label="label"
      :items="items"
      v-model="selected"
      @update:modelValue="$emit('sort-selected', $event)"
    ></v-combobox>
  </div>
</template>

<script setup>
const props = defineProps({
  items: {
    type: Array,
    default: () => [],
  },
  label: {
    type: String,
    default: '',
  },
  clearable: {
    type: Boolean,
    default: false,
  },
  chips: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['sort-selected']);

const selected = ref('');
</script>
