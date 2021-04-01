<template>
    <div id="login">
        <el-container>
            <el-card class="box-card">
                <!--头部-->
                <div slot="header" class="card-title">
                    <div class="title-picture block">
                        <el-image :src="require('../assets/login/title-picture.png')"></el-image>
                    </div>
                    <span>Online examination management system</span>
                </div>

                <!--备注-->
                <div class="card-wel">
                    <span>Welcome back! Please login to your account. </span>
                </div>

                <!--输入-->
                <div class="card-input">
                    <el-form ref="form" label-width="80px" :rules="rules">
                        <div v-if="!showForget">
                            <el-form-item label="username" prop="username">
                                <el-input v-model="username"></el-input>
                            </el-form-item>
                            <el-form-item label="password" prop="password">
                                <el-input v-model="password" show-password></el-input>
                            </el-form-item>
                        </div>
                        <div v-else>
                            <el-form-item label="phone" prop="phone">
                                <el-input v-model="phone" maxlength="11"></el-input>
                            </el-form-item>

                        </div>
                    </el-form>
                </div>

                <!--选择-->
                <div class="card-other">
                    <el-row>
                        <el-col :span="12">
                            <div class="checkRemember">
                                <el-checkbox v-model="checked">Remember me</el-checkbox>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="forgetPassword">
                                <el-button v-if="!showForget" @click="showForget = !showForget">Forget Password
                                </el-button>
                                <el-button v-else @click="showForget = !showForget">Login</el-button>
                            </div>
                        </el-col>
                    </el-row>
                </div>

                <!--登录-->
                <div class="cart-login">
                    <el-button type="success" v-if="!showForget" @click="showForget = !showForget">LOGIN</el-button>
                    <el-button type="success" v-else @click="showForget = !showForget">FORGET PASSWORD</el-button>
                </div>
            </el-card>
        </el-container>

    </div>
</template>

<script>
    import {reactive, toRefs} from 'vue'

    export default {
        name: "Login",
        setup(props, {root}) {
            const state = reactive({
                checked: false,
                username: '',
                password: '',
                phone: '',
                showForget: false,
                rules: {
                    phone: [
                        {required: true, message: 'Please enter the correct phone number!', trigger: 'blur'},
                        {type: 'number', min: 11, max: 11, trigger: 'blur'},
                    ],
                    username: [
                        {required: true, message: 'Please enter the username!', trigger: 'blur'},
                        {min: 3, max: 11, trigger: 'blur'},
                    ],
                    password: [
                        {required: true, message: 'Please enter the password!', trigger: 'blur'},
                        {min: 3, max: 11, trigger: 'blur'},
                    ]
                },
            })

            return toRefs(state)
        }
    }
</script>

<style lang="scss" scoped>
    #login {
        position: relative;
        background: greenyellow;

        .el-container {
            opacity: 1;
            width: 100vw;
            height: 100vh;
            background-image: url("../assets/login/login-bgimg.jpg");
            background-repeat: repeat-x;
            background-size: 100% 100%;

            .box-card {
                position: absolute;
                transform: translate(-50%, -50%);
                left: 50%;
                top: 50%;
                width: 450px;

                .card-title {
                    -webkit-user-select: none;
                    user-select: none;
                    padding-bottom: 18px;
                    border-bottom: 1px solid #DCDFE6;
                    text-align: center;

                    span {
                        font-size: 20px;
                        font-weight: bold;

                    }

                    .title-picture {
                        margin-bottom: 30px;
                    }
                }

                .card-wel {
                    margin-top: 30px;
                    font-size: 15px;
                    color: #afb6c6;
                    -webkit-user-select: none;
                    user-select: none;
                    text-align: center;
                }

                .card-input {
                    margin-top: 30px;

                    .el-input {

                    }
                }

                .card-other {
                    margin-top: 40px;
                    height: 40px;
                    align-items: center;

                    .checkRemember {
                        text-align: center;
                        font-size: 16px;
                        line-height: 40px;
                    }

                    .forgetPassword {
                        .el-button {
                            border: 0px;
                        }
                    }
                }

                .cart-login {
                    height: 40px;
                    text-align: center;
                    margin-top: 40px;

                    .el-button {
                        border-radius: 40px;
                    }
                }
            }
        }
    }


</style>