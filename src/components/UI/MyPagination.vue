<template>
  <div class="my-pagination">
    <v-pagination
      v-model="currentPage"
      :length="length"
      @input="handleInput"
    ></v-pagination>
  </div>
</template>

<script setup>
const props = defineProps({
  length: {
    type: Number,
    required: true,
  },
});

const emit = defineEmits(["update:modelValue"]);
const currentPage = ref(1);

const handleInput = (page) => {
  currentPage.value = page;
  emit("update:modelValue", page); // Передаем новое значение
};
</script>
