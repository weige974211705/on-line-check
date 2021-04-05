import {createRouter, createWebHashHistory} from 'vue-router'
import Home from '../views/Home.vue'
import Login from "../views/Login";
import Welcome from "../views/Welcome";
import InnerHome from "../views/InnerHome"

/*引入学生管理部分*/
import StudentShow from "../views/studentManage/StudentShow";
import StudentAdd from "../views/studentManage/StudentAdd";
import StudentEdit from "../views/studentManage/StudentEdit";

/*引入教师管理部分*/
import TeacherShow from "../views/teacherManage/TeacherShow";
import TeacherAdd from "../views/teacherManage/TeacherAdd";
import TeacherEdit from "../views/teacherManage/TeacherEdit";

/*引入课程管理部分*/
import CourseShow from "../views/courseManage/CourseShow";
import CourseAdd from "../views/courseManage/CourseAdd";
import CourseEdit from "../views/courseManage/CourseEdit";

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
        redirect: '/welcome',
        children: [
            {path: '/welcome', component: Welcome},
            {path: '/innerHome', component: InnerHome},

            /*引入学生管理部分*/
            {path: '/studentShow', component: StudentShow},
            {path: '/studentAdd', component: StudentAdd},
            {path: '/studentEdit', component: StudentEdit},

            /*引入教师管理部分*/
            {path: '/teacherShow', component: TeacherShow},
            {path: '/teacherAdd', component: TeacherAdd},
            {path: '/teacherEdit', component: TeacherEdit},

            /*引入课程管理部分*/
            {path: '/courseShow', component: CourseShow},
            {path: '/courseAdd', component: CourseAdd},
            {path: '/courseEdit', component: CourseEdit},
        ]
    },

]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
