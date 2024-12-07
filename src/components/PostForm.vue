// PostForm.vue
<template>
  <!-- Форма -->
  <v-sheet class="mx-auto my-10">
    <v-form validate-on="submit lazy" @submit.prevent="submit">
      <v-text-field
        v-model="userName"
        :rules="rules"
        label="User name"
        color="deep-purple"
      ></v-text-field>
      <v-textarea
        v-model="userPost"
        clear-icon="mdi-close-circle"
        label="Text"
        clearable
        color="deep-purple"
      ></v-textarea>
      <v-btn
        :loading="loading"
        text
        type="submit"
        block
        color="deep-purple"
      >
        Submit
      </v-btn>
    </v-form>
  </v-sheet>

</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  posts: {
    type: Array, // Должен быть массив, а не объект
    required: true,
  },
});

// Локальные состояния для ввода
const userName = ref('');
const userPost = ref('');
const loading = ref(false);

const rules = [(v) => !!v || 'Field is required'];

// Отправка формы
const submit = () => {
  try {
    loading.value = true;

    setTimeout(() => {
      const now = new Date();
      const day = String(now.getDate()).padStart(2, '0');
      const month = String(now.getMonth() + 1).padStart(2, '0');
      const year = now.getFullYear();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');

      const newPost = {
        cardTitle: userName.value,
        cardSubtitle: `${day}.${month}.${year} ${hours}:${minutes}`,
        cardText: userPost.value,
        icon: "mdi-shield-star-outline",
        href: "https://cdn.vuetifyjs.com/images/john.jpg",
        like: 0,
        isActive: false,
      };

      props.posts.push(newPost); // Добавляем в переданный массив
      userName.value = '';
      userPost.value = '';
      loading.value = false;
    }, 1000);
  } catch (error) {
    console.error("Submit error:", error);
  }
};
</script>

