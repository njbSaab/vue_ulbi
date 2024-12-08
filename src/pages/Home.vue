<template>
  <section class="mx-auto w-[95%] md:w-[800px]">
    <h1 class="text-3xl font-bold mb-4">{{ title }}</h1>
    <PostForm :posts="posts" @on-add="addPost" />

    <!-- Сортировка -->
    <div class="py-4 w-1/2 mx-auto">
      <MySorted
        :chips="true"
        :clearable="true"
        :label="'Sort by'"
        :items="['newest', 'oldest']"
        @sort-selected="sortPosts"
      />
    </div>

    <!-- Поиск -->
    <div class="serch pt-8">
      <MyInput
        v-model="searchQuery"
        :rules="rules"
        label="Search"
        color="deep-purple"
      />
    </div>

    <div class="main-post">
      <!-- Состояние загрузки -->
      <div class="post-in-progress" v-if="isLoading">
        <p class="text-center text-3xl">Loading posts...</p>
      </div>

      <!-- Отображение постов -->
      <div v-else-if="displayedPosts.length > 0" class="posts">
        <PostList
          :posts="displayedPosts"
          @delete-post="deletePost"
        />
      </div>

      <!-- Сообщение об отсутствии постов -->
      <div class="post-in-progress" v-else>
        <p class="text-center text-3xl">No posts found</p>
      </div>
    </div>

    <!-- Пагинация -->
    <MyPagination :length="5" @update:modelValue="updatePage" />

  </section>
</template>

<script setup>
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/BlogList.vue";
import MySorted from "@/components/UI/MySorted.vue";
import { getPostLimits, getImg } from "@/services/services";
import { ref, computed, onMounted } from "vue";
import MyInput from "@/components/UI/MyInput.vue";

const title = ref("Welcome to Vuetify Blog");
const posts = ref([]);
const currentPage = ref(1); // Текущая страница
const sortCriteria = ref("newest");
const isLoading = ref(true);
const searchQuery = ref("");

const fetchPosts = async () => {
  try {
    isLoading.value = true;
    console.log("Запрос на страницу:", currentPage.value); // Лог текущей страницы

    const [postsResponse, imagesResponse] = await Promise.all([
      getPostLimits(currentPage.value),
      getImg(),
    ]);

    posts.value = postsResponse.data.map((post, index) => {
      const image = imagesResponse.data[index];
      return {
        ...post,
        imageUrl: image ? image.url : null,
        thumbnailUrl: image ? image.thumbnailUrl : null,
      };
    });

    console.log("Данные загружены:", posts.value); // Лог загруженных данных
  } catch (error) {
    console.error("Ошибка загрузки данных:", error);
  } finally {
    isLoading.value = false;
  }
};

onMounted(fetchPosts);

const addPost = (newPost) => {
  posts.value.push(newPost);
};

const deletePost = (post) => {
  posts.value = posts.value.filter((p) => p.id !== post.id);
};

const sortPosts = (criteria) => {
  sortCriteria.value = criteria;
};

const updatePage = (page) => {
  currentPage.value = page; // Обновляем текущую страницу
  console.log("Выбрана страница:", currentPage.value); // Для проверки
  fetchPosts(); // Загружаем данные для выбранной страницы
};

const displayedPosts = computed(() => {
  let filtered = posts.value.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.value.toLowerCase())
  );

  filtered = filtered.sort((a, b) => {
    if (sortCriteria.value === "newest") {
      return new Date(b.id) - new Date(a.id);
    } else if (sortCriteria.value === "oldest") {
      return new Date(a.id) - new Date(b.id);
    }
    return 0;
  });

  return filtered;
});
</script>
