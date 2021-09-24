import Vue from 'vue'
import VueRouter from 'vue-router'
import Money from "../views/Money";
import Statistics from "../views/Statistics";
import Labels from "../views/Labels";
import NotFound from "../views/NotFound";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Money',
        component: Money
    },
    {
        path: '/Label',
        name: 'Label',
        component: Labels
    },
    {
        path: '/Statistics',
        name: 'Statistics',
        component: Statistics
    },
    {
        path: '/*',
        name: 'NotFound',
        component: NotFound
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
