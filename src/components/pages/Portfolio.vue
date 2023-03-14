<template lang="">
<div>
    <h2 class="text-center m-2">Lista progetti</h2>
    <div class="d-flex justify-content-center gap-3">
        <div v-for="project in projects" :key="project.id" style="width: 18rem" class="card">
            <img :src="project.cover_image != null ? `${baseUrl}/storage/${project.cover_image}` : 'https://picsum.photos/200/300'" class="card-img-top">
            <div class="card-body">
                <h3 class="card-title">titolo:{{ project.title }}</h3>
                <p class="card-text">content:{{ project.content }}</p>
                <p>type:{{ project.type.name }}</p>
                <p>technologies:</p>
                <div v-for="technology in project.technologies">
                    {{technology.name}}
                </div>
                <div class="nav-item"><router-link :to="'/portfolio/' + project.slug" class="nav-link"><button class="btn btn-primary">Dettaglio</button></router-link></div>            </div>
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