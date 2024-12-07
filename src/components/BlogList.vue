<template>
  <div>
    <PostCard
      v-for="(post, index) in posts"
      :key="index"
      :post="post"
      @like="handleLike"
      @toggle-active="handleToggleActive"
    />
  </div>
</template>

<script setup>
import PostCard from "@/components/PostCard.vue";

const props = defineProps({
  posts: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(["update:posts"]);

const handleLike = (post) => {
  post.like++;
};

const handleToggleActive = (post) => {
  post.isActive = !post.isActive;
};
</script>
