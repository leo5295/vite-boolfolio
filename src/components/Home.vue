<template lang="">
     <div>
    <h2>Lista degli articoli</h2>
    <ul>
      <div v-for="project in projects" :key="project.id" class="card" >
        <h3>{{ project.title }}</h3>
        <p>{{ project.content }}</p>
        <p>{{ project.type.name }}</p>
        <p>{{ project.content }}</p>
        <img :src="project.cover_image != null ? `${baseUrl}/storage/${project.cover_image}` : 'https://picsum.photos/200/300'">
        <span v-for="technology in project.technologies">
        {{technology.name}}
        </span>
    </div>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            projects: [],
            baseUrl: 'http://127.0.0.1:8000',
        }
    },
    mounted() {
        axios.get('http://127.0.0.1:8000/api/users/').then(response => {
            this.projects = response.data.results;
        });
    }
}
</script>

<style lang="scss" scoped></style>