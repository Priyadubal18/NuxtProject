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
          loadedPost
        };
      })
      .catch(e => context.error(e));
  },
  methods: {
    onSubmitted(editedData) {
      axios
        .put(
          `https://nuxtintegration.firebaseio.com/posts/${this.$route.params.postId}.json`,
          editedData
        )
        .then(result => {
          this.$router.push("/admin");
        })
        .catch(e => console.log(e));
    }
  }
};
</script>

<style>
</style>