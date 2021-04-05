<template>
    <!--        <el-button size="mini" @click="open" type="danger">删除</el-button>-->

    <el-popconfirm
            confirmButtonText='好的'
            cancelButtonText='不用了'
            icon="el-icon-info"
            iconColor="red"
            title="您确定删除吗？"
    >
        <template #reference>
            <el-button type="danger" size="mini">删除</el-button>
        </template>
    </el-popconfirm>
</template>

<script>
    import {reactive} from 'vue'

    export default {
        name: "DeleteBubble",
        setup() {
            const state = reactive({
                centerDialogVisible: false,
            })
        }
    }
</script>

<style scoped>

</style>