<template>
  <div>
    <input type="text" v-model="userName" />
    <button @click="submitUser">Submit</button>
    <nuxt-child />
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      userName: ""
    };
  },
  methods: {
    submitUser() {
      this.$router.push(`/users/${this.userName}`);
    }
  }
};
</script>

<style>
</style>