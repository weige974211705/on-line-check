<template>
    <div id="courseShow">
        <el-card class="box-card">
            <template v-slot:header class="clearfix">
                <span>课程管理</span>
                <el-button style="float: right; padding: 3px 10px" type="primary">添加课程</el-button>
            </template>
            <el-table
                    :data="tableData"
                    stripe
                    border
                    style="width: 100%">
                <el-table-column
                        fixed
                        prop="date"
                        label="日期"
                        width="150">
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="姓名"
                        width="120">
                </el-table-column>
                <el-table-column
                        prop="province"
                        label="省份"
                        width="120">
                </el-table-column>
                <el-table-column
                        prop="city"
                        label="市区"
                        width="120">
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="地址"
                        width="300">
                </el-table-column>
                <el-table-column
                        prop="zip"
                        label="邮编"
                        width="120">
                </el-table-column>
                <el-table-column
                        fixed="right"
                        label="操作"
                        width="150px">
                    <template v-slot="scope">
                        <el-button
                                size="mini"
                                type="warning"
                                >修改</el-button>
                        <DeleteBubble></DeleteBubble>
                    </template>
                </el-table-column>
            </el-table>
        </el-card>


    </div>
</template>

<script>
    import {reactive, toRefs} from 'vue'

    export default {
        name: "CourseShow",
        setup() {
            const state = reactive({
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1517 弄',
                    zip: 200333
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1519 弄',
                    zip: 200333
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1516 弄',
                    zip: 200333
                }]
            })
            return state
        },
    }
</script>

<style lang="scss" scoped>
    #courseShow {
        margin: 30px;

        .box-card {
            align-items: center;
            span {
                font-size: 25px;
                font-weight: bold;
            }

            .el-button {
                height: 100%;
            }
        }
    }
</style>