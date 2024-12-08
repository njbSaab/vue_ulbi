<template>
    <transition-group name="post-list" tag="div">
    <PostCard
      v-for="(post, index) in posts"
      :key="index"
      :post="post"
      @delete-post="$emit('delete-post', $event)"
    />
  </transition-group>

</template>

<script setup>
import PostCard from "@/components/PostCard.vue";

const props = defineProps({
  posts: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(["delete-post"]);
</script>
