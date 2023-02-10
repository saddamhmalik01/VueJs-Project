import { createRouter, createWebHashHistory } from "vue-router";
import SignUpVue from "../components/SignUp.vue";
import HomeComponent from "../components/Home.vue";
import loginPage from "../components/Login.vue";
import usersPage from "../components/Users.vue";
import branchPage from "../components/Branch.vue";
import aboutus from "../components/about.vue";
import edituser from "../components/EditUser.vue";
import addBranch from "../components/AddBranch.vue";
import addUser from "../components/AddUser.vue";

const routes = [
    {
        name: 'home',
        component: HomeComponent,
        path: "/"
    },
    {
        name: 'signup',
        component: SignUpVue,
        path: '/signup'
    },
    {
        name: 'login',
        component: loginPage,
        path: '/login'
    },
    {
        name: 'users',
        component: usersPage,
        path: '/users'
    },
    {
        name: 'branch',
        component: branchPage,
        path: '/branch'
    },
    {
        name: 'aboutus',
        component: aboutus,
        path: '/about'
    },
    {
        name: 'edituser',
        component : edituser,
        path: '/edituser/:id'
    },
    {
        name: 'addbranch',
        component : addBranch,
        path: '/addBranch'
    },
    {
        name: 'adduser',
        component : addUser,
        path: '/adduser'
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;