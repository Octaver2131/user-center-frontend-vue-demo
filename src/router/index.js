import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";
import UserLoginPage from "@/pages/user/UserLoginPage.vue";
import UserRegisterPage from "@/pages/user/UserRegisterPage.vue";
import UserManagePage from "@/pages/admin/UserManagePage.vue";
import HomePage from "@/pages/HomePage.vue";
const routes = [
    {
        path: "/",
        name: "home",
        component: HomePage,
    },
    {
        path: "/user/login",
        name: "userLogin",
        component: UserLoginPage,
    },
    {
        path: "/user/register",
        name: "userRegister",
        component: UserRegisterPage,
    },
    {
        path: "/admin/userManage",
        name: "adminUserManage",
        component: UserManagePage,
    },
];
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});
export default router;
//# sourceMappingURL=index.js.map