import Vue from 'vue'
import VueRouter from 'vue-router'
import Money from "@/views/Money.vue";
import Statistics from "@/views/Statistics.vue";
import Labels from "@/views/Labels.vue";
import NotFound from "@/views/NotFound.vue";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/Money'
    },
    {
        path: '/Money',
        name: 'Money',
        component: Money
    },
    {
        path: '/Labels',
        name: 'Label',
        component: Labels
    },
    {
        path: '/Statistics',
        name: 'Statistics',
        component: Statistics
    },

    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/*',
        name: 'NotFound',
        component: NotFound
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
