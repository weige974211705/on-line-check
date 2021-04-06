<template>
    <div id="welcome">
        <span>欢迎登录课程考核管理系统!</span>
    </div>
</template>

<script>

    export default {
        name: "Welcome"
    }
</script>

<style lang="scss" scoped>

    #welcome {
        position: relative;
        height: 100%;
        background-image: url("../assets/img/welcome/welcome.jpg");
        background-repeat: repeat-x;
        background-size: 100% 100%;

        span {
            position: absolute;
            margin-top: 50px;
            margin-left: 50px;
            font-weight: bold;
            font-size: 40px;
            color: white;
        }
    }
</style>