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
import TeacherAdd from "../views/teacherManage/TeacherAdd";

/*引入课程管理部分*/
import CourseShow from "../views/courseManage/CourseShow";
import CourseAdd from "../views/courseManage/CourseAdd";

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
        redirect: '/courseAdd',
        children: [
            {path: '/welcome', component: Welcome},
            {path: '/innerHome', component: InnerHome},

            /*引入学生管理部分*/
            {path: '/studentShow', component: StudentShow},
            {path: '/studentAdd', component: StudentAdd},

            /*引入教师管理部分*/
            {path: '/teacherShow', component: TeacherShow},
            {path: '/teacherAdd', component: TeacherAdd},

            /*引入课程管理部分*/
            {path: '/courseShow', component: CourseShow},
            {path: '/courseAdd', component: CourseAdd},
        ]
    },

]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
