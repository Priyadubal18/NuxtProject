<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost" @submit="onSubmitted" />
    </section>
  </div>
</template>

<script>
import AdminPostForm from "~/components/Admin/AdminPostForm.vue";
import axios from "axios";

export default {
  layout: "admin",
  components: {
    AdminPostForm
  },
  asyncData(context) {
    return axios
      .get(
        `https://nuxtintegration.firebaseio.com/posts/${context.params.postId}.json`
      )
      .then(res => {
        let loadedPost = res.data;
        return {
          loadedPost: { ...res.data, id: context.params.postId }
        };
      })
      .catch(e => context.error(e));
  },
  methods: {
    onSubmitted(editedPost) {
      debugger;
      this.$store
        .dispatch("editPost", editedPost)
        .then(res => this.$router.push("/admin"));
    }
  }
};
</script>

<style>
</style>