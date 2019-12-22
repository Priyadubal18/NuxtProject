<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost" />
    </section>
  </div>
</template>

<script>
import AdminPostForm from "~/components/Admin/AdminPostForm.vue";

export default {
  layout: "admin",
  components: {
    AdminPostForm
  },
  data() {
    return {
      loadedPost: {
        author: "Priya",
        Title: "My awesome post",
        content: "Super Amamzing",
        thumnailLink:
          "https://annenberg.usc.edu/sites/default/files/styles/news_featured_hero/public/womenintech.jpg?itok=GtitJQP3&timestamp=1567532369"
      }
    };
  }
};
</script>

<style>
</style>