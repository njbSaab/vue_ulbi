
<template>
  <section class="mx-auto w-[95%] md:w-[800px]">
    <h1 class="text-3xl font-bold mb-4">{{ title }}</h1>
    <PostForm :on-add="addPost" />
    <PostList :posts="sortedPosts" @update:posts="updatePosts" />
  </section>
</template>

<script setup>
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/BlogList.vue";
import { ref, computed } from "vue";

const title = ref("Welcome to Vuetify Blog");

const posts = ref([
  {
    cardTitle: "Vuetify Documentation",
    cardSubtitle: new Date("2022-11-20T12:00:00").toISOString(),
    icon: "$vuetify",
    href: "https://cdn.vuetifyjs.com/images/john.jpg",
    cardText:
      "Vuetify is a progressive Material Design component framework for Vue.js.",
    like: 0,
    isActive: false,
  },
  {
    cardTitle: "Vuetify Support",
    cardSubtitle: new Date("2023-12-15T12:00:00").toISOString(),
    icon: "mdi-shield-star-outline",
    href: "https://cdn.vuetifyjs.com/images/john.jpg",
    cardText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    like: 0,
    isActive: false,
  },
  {
    cardTitle: "Vuetify X",
    cardSubtitle: new Date("2021-01-01T11:00:00").toISOString(),
    icon: "mdi-shield-star-outline",
    href: "https://cdn.vuetifyjs.com/images/john.jpg",
    cardText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    like: 0,
    isActive: false,
  },
]);
const addPost = (newPost) => {
  posts.value.push(newPost);
};

const sortedPosts = computed(() => {
  return [...posts.value].sort((a, b) => new Date(b.cardSubtitle) - new Date(a.cardSubtitle));
});

const updatePosts = (newPosts) => {
  posts.value = newPosts;
};
</script>
