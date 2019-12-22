<template>
  <section class="post-list">
    <post-preview
      id="1"
      :is-admin="isAdmin"
      title="Hello there from 1"
      previewText="This is my first post"
      thumbnail="https://annenberg.usc.edu/sites/default/files/styles/news_featured_hero/public/womenintech.jpg?itok=GtitJQP3&timestamp=1567532369"
    />
    <post-preview
      id="2"
      :is-admin="isAdmin"
      title="Hello there from 2"
      previewText="This is my first post"
      thumbnail="https://annenberg.usc.edu/sites/default/files/styles/news_featured_hero/public/womenintech.jpg?itok=GtitJQP3&timestamp=1567532369"
    />
    <post-preview
      id="3"
      :is-admin="isAdmin"
      title="Hello there from 3"
      previewText="This is my first post"
      thumbnail="https://annenberg.usc.edu/sites/default/files/styles/news_featured_hero/public/womenintech.jpg?itok=GtitJQP3&timestamp=1567532369"
    />
  </section>
</template>

<script>
import PostPreview from "~/components/Posts/PostPreview.vue";
export default {
  components: {
    PostPreview
  },
  props: {
    isAdmin: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped>
.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>