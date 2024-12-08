<template>
  <v-card class="mx-auto flex flex-col my-8">
    <div class="header flex items-center px-4 py-2 gap-4 relative">
      <v-avatar class="mx-auto my-4" size="60">
        <v-img :src="post.href" alt="Image"></v-img>
      </v-avatar>
      <div class="header-text flex-1">
        <v-card-title>{{ post.cardTitle }}</v-card-title>
        <v-card-subtitle>{{ formatDate(post.cardSubtitle) }}</v-card-subtitle>
      </div>
      <!-- Кнопка удаления -->
      <IconBtn
        :path="'mdi-close'"
        @click="$emit('delete-post', post)"
      />
    </div>

    <v-card-text>{{ post.cardText }}</v-card-text>

    <v-card-actions>
      <v-btn color="primary" text>Learn More</v-btn>
      <v-spacer></v-spacer>
      <div class="contr-wrapper flex items-center">
        <span>{{ post.like }}</span>
        <v-btn
          :color="post.like > 0 ? 'red' : 'medium-emphasis'"
          icon="mdi-heart"
          size="small"
          @click="$emit('like', post)"
        ></v-btn>
      </div>
      <v-btn
        :color="post.isActive ? 'yellow' : 'medium-emphasis'"
        icon="mdi-bookmark"
        size="small"
        @click="$emit('toggle-active', post)"
      ></v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
});

const formatDate = (isoDate) => {
  const date = new Date(isoDate);
  return date.toLocaleString();
};
</script>
