import { createRouter, createWebHistory } from 'vue-router';
import Homepage from './components/pages/Homepage.vue';
import Portfolio from './components/pages/portfolio.vue';
import Project from './components/pages/Project.vue';
import Contact from './components/pages/Contact.vue';

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
        },
        {
            path: '/portfolio/:slug',
            name: 'project',
            component: Project,
        },
        {
            path: '/contact',
            name: 'contact',
            component: Contact
        }
    ]
})

export { router }
