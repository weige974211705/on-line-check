import {createRouter, createWebHashHistory} from 'vue-router'
import Home from '../views/Home.vue'
import Login from "../views/Login";
import Welcome from "../views/Welcome";
import InnerHome from "../views/InnerHome"

/*引入学生管理部分*/
import StudentShow from "../views/studentManage/StudentShow";
import StudentAdd from "../views/studentManage/StudentAdd";

/*引入教师管理部分*/
import TeacherShow from "../views/teacherManage/TeacherShow";

/*引入课程管理部分*/
import CourseShow from "../views/courseManage/CourseShow";

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/',
        name: 'Home',
        component: Home,
        redirect: '/studentAdd',
        children: [
            {path: '/welcome', component: Welcome},
            {path: '/innerHome', component: InnerHome},

            /*引入学生管理部分*/
            {path: '/studentShow', component: StudentShow},
            {path: '/studentAdd', component: StudentAdd},

            /*引入教师管理部分*/
            {path: '/teacherShow', component: TeacherShow},

            /*引入课程管理部分*/
            {path: '/courseShow', component: CourseShow},
        ]
    },

]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
