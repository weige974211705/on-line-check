<template>
    <div id="courseAdd">
        <span>添加课程</span>
        <el-button style="float: right; padding: 3px 10px"
                   @click="resetForm" type="primary">清空/重置
        </el-button>
        <el-form label-position="top" label-width="80px">
            <el-form-item label="课程号：course_id">
                <el-input v-model="ruleForm.course_id"></el-input>
            </el-form-item>
            <el-form-item label="课程名称: course_name">
                <el-input v-model="ruleForm.course_name"></el-input>
            </el-form-item>
            <el-form-item label="课程类别：course_type">
                <el-input v-model="ruleForm.course_type"></el-input>
            </el-form-item>
            <el-form-item label="任课教师：course_teacher">
                <el-input v-model="ruleForm.course_teacher"></el-input>
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
        name: "CourseAdd",
        setup(props,context) {
            const state = reactive({
                ruleForm: {
                    course_id: '',
                    course_name: '',
                    course_type: '',
                    course_teacher: '',
                },
            })

            const resetForm = () => {
                state.ruleForm = {
                    course_id: '',
                    course_name: '',
                    course_type: '',
                    course_teacher: '',
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
    #courseAdd {
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