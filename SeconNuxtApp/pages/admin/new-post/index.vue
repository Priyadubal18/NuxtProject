<template>
  <div class="admin-new-post-page">
    <section class="new-post-form">
      <AdminPostForm @submit="onSubmitted" />
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
  methods: {
    onSubmitted(postData) {
      this.$store.dispatch("addPost", postData).then(() => {
        this.$router.push("/admin");
      });
    }
  }
};
</script>

<style>
</style>