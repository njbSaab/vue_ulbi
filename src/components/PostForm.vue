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
        <v-btn :loading="loading" @click="!showDialog" text type="submit" block color="deep-purple">
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
const posts = ref([]);

const rules = [(v) => !!v || 'Field is required'];

const showDialog = () => {
  isDialogVisible.value = true;
};

const submit = () => {
  try {
    loading.value = true;

    setTimeout(() => {
      const id = posts.value.length + 1; // Используем длину массива постов
      const newPost = {
        title: userName.value,
        body: userPost.value,
        id: id,
        imageUrl: 'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light',
      };

      emit("on-add", newPost);
      userName.value = '';
      userPost.value = '';
      loading.value = false;
      isDialogVisible.value = false;
    }, 200);
  } catch (error) {
    console.error(error);
  }
};
</script>
