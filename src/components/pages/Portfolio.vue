<template lang="">
<div>
    <h2 class="text-center">Lista degli articoli</h2>
    <div class="d-flex justify-content-center gap-3">
        <div v-for="project in projects" :key="project.id" style="width: 18rem" class="card">
            <img :src="project.cover_image != null ? `${baseUrl}/storage/${project.cover_image}` : 'https://picsum.photos/200/300'" class="card-img-top">
            <div class="card-body">
                <h3 class="card-title">{{ project.title }}</h3>
                <p class="card-text">{{ project.content }}</p>
                <p>{{ project.type.name }}</p>
                <span v-for="technology in project.technologies">
                    {{technology.name}}
                </span>
            </div>
        </div>
    </div>
</div>
</template>

<script>

import axios from 'axios';


export default {
    data() {
        return {
            projects: [],
            baseUrl: 'http://127.0.0.1:8000',
            name: 'App',
        }
    },
    mounted() {
        axios.get(`${this.baseUrl}/api/users/`).then(response => {
            this.projects = response.data.results;
        });
    },
}
</script>

<style lang="scss" scoped>
img {
    height: 250px;
    object-fit: cover;
}
</style>