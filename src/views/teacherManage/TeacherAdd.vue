<template>
    <div id="teacherAdd">
        <span>添加教师</span>
        <el-button style="float: right; padding: 3px 10px"
                   @click="resetForm" type="primary">清空/重置
        </el-button>
        <el-form label-position="top" label-width="80px">
            <el-form-item label="工号：user_id">
                <el-input v-model="ruleForm.user_id"></el-input>
            </el-form-item>
            <el-form-item label="密码: password">
                <el-input v-model="ruleForm.password"></el-input>
            </el-form-item>
            <el-form-item label="姓名：user_name">
                <el-input v-model="ruleForm.user_name"></el-input>
            </el-form-item>
            <el-form-item label="性别：sex">
                <el-input v-model="ruleForm.sex"></el-input>
            </el-form-item>
            <el-form-item label="电话：phone">
                <el-input v-model="ruleForm.phone"></el-input>
            </el-form-item>
            <el-form-item label="学校：school">
                <el-input v-model="ruleForm.school"></el-input>
            </el-form-item>
            <el-form-item label="学院：academy">
                <el-input v-model="ruleForm.academy"></el-input>
            </el-form-item>
            <el-form-item label="权限：user_type">
                <el-input v-model="ruleForm.user_type"></el-input>
            </el-form-item>
        </el-form>
        <el-button class="underBtn" style="float: left; padding: 3px 20px"
                   @click="resetForm" type="success">添加
        </el-button>
    </div>
</template>

<script>
    import {reactive, toRefs, ref} from 'vue'

    export default {
        name: "TeacherAdd",
        setup(props, context) {
            const state = reactive({
                ruleForm: {
                    user_id: '',
                    password: '',
                    user_name: '',
                    sex: '',
                    phone: '',
                    school: '',
                    academy: '',
                    user_type: '',
                },
            })

            const resetForm = () => {
                state.ruleForm = {
                    user_id: '',
                    password: '',
                    user_name: '',
                    sex: '',
                    phone: '',
                    school: '',
                    academy: '',
                    user_type: '',
                }
            }
            return {
                ...toRefs(state),
                resetForm
            }
        }
    }
</script>

<style lang="scss" scoped>
    #teacherAdd {
        margin: 30px;

        span {
            display: block;
            font-size: 35px;
            margin-bottom: 20px;
        }

        .underBtn {
            margin-bottom: 50px;
        }
    }
</style>