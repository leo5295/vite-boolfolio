import { createRouter, createWebHistory } from 'vue-router';
import Homepage from './components/pages/Homepage.vue';
import Portfolio from './components/pages/portfolio.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'homepage',
            component: Homepage
        },
        {
            path: '/portfolio',
            name: 'portfolio',
            component: Portfolio
        }
    ]
})

export { router }
