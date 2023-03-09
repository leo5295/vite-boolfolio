<script setup>
import Home from './components/Home.vue'
import axios from 'axios';

axios.get('http://127.0.0.1:8000/api/users')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });
</script>

<template>
  <div>
    <Home />
  </div>
</template>

<style scoped lang="scss">
@use "./styles/generals.scss" as *;
</style>
