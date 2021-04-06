<template>
    <div id="myCourse">
        <el-container>


            <el-row :gutter="20">
                <el-col :span="6">
                    <el-card class="box-card">
                        <template #header>
                            <div class="card-header">
                                <span>公共选修课</span>
                            </div>
                        </template>
                        <div v-for="o in 4" :key="o" class="text item">
                            {{'列表内容 ' + o }}
                        </div>
                    </el-card>
                </el-col>
                <el-col :span="6">
                    <el-card class="box-card">
                        <template #header>
                            <div class="card-header">
                                <span>公共选修课</span>
                            </div>
                        </template>
                        <div v-for="o in 4" :key="o" class="text item">
                            {{'列表内容 ' + o }}
                        </div>
                    </el-card>
                </el-col>
                <el-col :span="6">
                    <el-card class="box-card">
                        <template #header>
                            <div class="card-header">
                                <span>公共选修课</span>
                            </div>
                        </template>
                        <div v-for="o in 4" :key="o" class="text item">
                            {{'列表内容 ' + o }}
                        </div>
                    </el-card>
                </el-col>
                <el-col :span="6">
                    <el-card class="box-card">
                        <template #header>
                            <div class="card-header">
                                <span>公共选修课</span>
                            </div>
                        </template>
                        <div v-for="o in 4" :key="o" class="text item">
                            {{'列表内容 ' + o }}
                        </div>
                    </el-card>
                </el-col>
                <el-col :span="6">
                    <el-card class="box-card">
                        <template #header>
                            <div class="card-header">
                                <span>公共选修课</span>
                            </div>
                        </template>
                        <div v-for="o in 4" :key="o" class="text item">
                            {{'列表内容 ' + o }}
                        </div>
                    </el-card>
                </el-col>
                <el-col :span="6">
                    <el-card class="box-card">
                        <template #header>
                            <div class="card-header">
                                <span>公共选修课</span>
                            </div>
                        </template>
                        <div v-for="o in 4" :key="o" class="text item">
                            {{'列表内容 ' + o }}
                        </div>
                    </el-card>
                </el-col>
                <el-col :span="6">
                    <el-card class="box-card">
                        <template #header>
                            <div class="card-header">
                                <span>公共选修课</span>
                            </div>
                        </template>
                        <div v-for="o in 4" :key="o" class="text item">
                            {{'列表内容 ' + o }}
                        </div>
                    </el-card>
                </el-col>
            </el-row>
        </el-container>
    </div>
</template>

<script>
    export default {
        name: "MyCourse"
    }
</script>

<style lang="scss" scoped>
    #myCourse {
        height: 100%;
        background-image: url("../../assets/img/myCourse/my-course.jpg");
        background-repeat: repeat-x;
        background-size: 100% 100%;

        .el-container {

            .el-row {
                margin: 2% 1% 0 1% !important;
                opacity: 0.8;
                width: 100%;

                .el-col {
                    margin-bottom: 2%;
                }
            }
        }
    }
</style>