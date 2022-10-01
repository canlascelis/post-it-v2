import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home/Home.vue'

const routes:(string|any)[] = [
    { path: '/', name: 'Home', component: Home },
    { path: '/about', name: 'About', component: () => import('../views/about/About.vue') },
    { path: '/:catchAll(.*)', name: 'PageNotFound', component: () => import('../views/error/Error.vue') },
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

export default router;