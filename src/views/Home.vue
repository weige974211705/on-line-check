<template>
    <el-container>
        <!--头部导航-->
        <el-header>
            <div class="headerinner">
                <ul class="headernav">
                    <li class="logo">
                        <img src="../assets/img/logo.jpg" alt="" />
                    </li>
                    <li><a href="#"></a></li>
                    <li><a href="#"></a></li>
                    <li><a href="#"></a></li>
                    <li><a href="#"></a></li>
                    <li><a href="#"></a></li>
                    <li><a href="#"></a></li>
                    <li><a href="#">个人主页</a></li>
                    <li><a href="#">功能介绍</a></li>
                    <li class="search">
                        <a class="search_pic"></a>
                    </li>
                    <li class="list">
                        <a></a>
                    </li>
                </ul>
                <!-- 搜索 -->
                <form action="">
                    <div class="search_main">
                        <button class="search_btn" type="submit"></button>
                        <input class="search_text" type="text" placeholder="搜索">
                        <span class="close_btn"></span>
                    </div>
                </form>
                <!-- 会员登录 -->
                <div class="member">
                    <p>会员中心</p>
                    <ul>
                        <li>
                            <img src="img/huiyuan1.png" alt="">
                            <a href="login.html">登录</a>
                        </li>
                        <li>
                            <img src="img/huiyuan1.png" alt="">
                            <a href="register.html">新会员注册</a>
                        </li>
                    </ul>
                </div>
            </div>

        </el-header>
        <!--主体-->
        <el-container class="main-stay">
            <!--侧边导航-->
            <el-aside width="226px">
                <ul id="sliderNav">
                    <li class="sliderTag"><a href="#">首页</a></li>
                    <li class="sliderTag"><a href="#">我的课程</a></li>
                    <li class="sliderTag"><a href="#">全部课程</a></li>
                    <li class="sliderTag"><a href="#">在线考试</a></li>
                    <li class="sliderTag"><a href="#">课程管理</a></li>
                    <li class="sliderTag"><a href="#">学生管理</a></li>
                    <li class="sliderTag"><a href="#">教师管理</a></li>
                </ul>
            </el-aside>
            <!--中主体-->
            <el-main>
                <!--路由占位符-->
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    /*左侧引入*/
    import '../assets/js/jquery.1.4.2-min'
    import '../assets/js/lanrenzhijia'

    /*头部引入*/
    import '../assets/js/jquery-1.12.4.min'


    import {reactive, toRefs} from 'vue'

    $(function(){
        /*搜索*/
        $(".search_pic").click(function(){
            $(".headernav").fadeOut(500);
            $(".search_main").fadeIn(1000);
        });
        $(".search_main .close_btn").click(function(){
            $(".search_main").fadeOut(500);
            $(".headernav").fadeIn(1000);
        });
        /*登录*/
        $(".list a").click(function(){
            $(".member").slideToggle(500);
        });

    });

    export default {
        name: 'Home',
        setup(props, {root}) {
            const state = reactive({})

        }
    }
</script>

<style lang="scss" scoped>
    /*左侧引入*/
    @import "../assets/css/lanrenzhijia.css";

    /*头部引入*/
    @import "../assets/css/head.css";

    .el-container {
        height: 100%;
        width: 100%;

        .el-header {
            background: #141414;
            padding: 0;
            align-items: center;
            user-select: none;
            height: 50px !important;


        }

        .el-aside {
            background: #111111;
            user-select: none;
        }

        .el-main {
            background: #f3f3f3;
            padding: 0;
        }


    }
</style>
