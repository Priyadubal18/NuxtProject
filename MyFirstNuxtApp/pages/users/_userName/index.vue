<template>
  <h1>Welcome user : {{ $route.params.userName}}</h1>
</template>

<script>
export default {
  validate(data) {
    return data.params.userName == "Raj";
  }
};
</script>

<style>
</style>