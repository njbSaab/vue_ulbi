<template>
  <h1 class="text-2xl font-bold mb-4">Added your new post</h1>
  <v-btn variant="tonal deep-purple" @click="showDialog">
    Added
  </v-btn>
  <MyDialog :show="isDialogVisible" @update:show="isDialogVisible = $event">
    <v-sheet class="mx-auto my-10">
      <v-form validate-on="submit lazy" @submit.prevent="submit">
        <!-- Используем MyInput -->
        <MyInput
          v-model="userName"
          :rules="rules"
          label="User name"
          color="deep-purple"
        />
        <!-- Используем MyTextArea -->
        <MyTextArea
          v-model="userPost"
          clearIcon="mdi-close-circle"
          clearable
          label="Text"
          color="deep-purple"
        />
        <v-btn :loading="loading" text type="submit" block color="deep-purple">
          Submit
        </v-btn>
      </v-form>
    </v-sheet>
  </MyDialog>
</template>

<script setup>
import { ref } from 'vue';

const emit = defineEmits(['on-add']);
const userName = ref('');
const userPost = ref('');
const loading = ref(false);
const isDialogVisible = ref(false);

const rules = [(v) => !!v || 'Field is required'];

const showDialog = () => {
  isDialogVisible.value = true;
};

const submit = () => {
  try {
    loading.value = true;

    setTimeout(() => {
      const newPost = {
        cardTitle: userName.value,
        cardSubtitle: new Date().toISOString(),
        cardText: userPost.value,
        icon: 'mdi-shield-star-outline',
        href: 'https://cdn.vuetifyjs.com/images/john.jpg',
        like: 0,
        isActive: false,
      };

      emit('on-add', newPost);
      userName.value = '';
      userPost.value = '';
      loading.value = false;
      isDialogVisible.value = false; // Закрываем диалог после успешного добавления
    }, 1000);
  } catch (error) {
    console.error(error);
  }
};
</script>
