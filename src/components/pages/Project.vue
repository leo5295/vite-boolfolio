<script>
import axios from 'axios';

export default {
  data() {
    return {
      baseUrl: 'http://127.0.0.1:8000',
      name: 'App',
      loading: true,
      project: null,
    }
  },
  mounted() {
    this.loading = true;
    axios.get(`${this.baseUrl}/api/users/${this.$route.params.slug}`).then(response => {
      if (response.data.success) {
        this.project = response.data.results;
        this.loading = false;
        console.log(this.project);
      }
      else {
        alert('chiamata axios fallita')
      }
    });
  },

}
</script>

<template lang="">
<div>
    <template v-if="project">
      <h2>{{ project.title }}</h2>
      <p>{{ project.content }}</p>
      <p>{{ project.type.name }}</p>
      <span v-for="technology in project.technologies" :key="technology.id">
        {{technology.name}}
      </span>
    </template>
    <template v-else>
      <p>Loading...</p>
    </template>
  </div>
</template>


<style lang="">
    
</style>