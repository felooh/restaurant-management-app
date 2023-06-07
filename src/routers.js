import Home from "./components/Home.vue";
import SignUp from "./components/SignUp.vue";
import Login from "./components/Login.vue"
import UpdateRest from "./components/UpdateRest.vue"
import AddRest from "./components/AddRest.vue"

import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        name: "HomePage",
        component: Home,
        path:"/"
    },
    {
        name: "SignUp",
        component: SignUp,
        path:"/sign-up"
    },
    {
        name: "LoginPage",
        component: Login,
        path:"/login"
    },
    {
        name: "UpdateRest",
        component: UpdateRest,
        path: '/update-restaurant/:id',
        props: true,
    },
    {
        name: "AddRest",
        component: AddRest,
        path:"/add-restaurant"
    },
];

const router =  createRouter({
    history: createWebHistory(),
    routes
});

export default router;