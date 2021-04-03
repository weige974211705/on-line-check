<template>
  <div id="innerHome">
    <el-container>
      <el-card class="box-card">
        <div class="clearfix">
          <span>卡片名称</span>
        </div>
        <div v-for="o in 4" :key="o" class="text item">
          {{ "列表内容 " + o }}
        </div>
      </el-card>
      <el-card class="box-card">
        <div class="clearfix">
          <span>卡片名称</span>
        </div>
        <div v-for="o in 4" :key="o" class="text item">
          {{ "列表内容 " + o }}
        </div>
      </el-card>
      <el-card class="box-card">
        <div class="clearfix">
          <span>卡片名称</span>
        </div>
        <div v-for="o in 4" :key="o" class="text item">
          {{ "列表内容 " + o }}
        </div>
      </el-card>
    </el-container>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
#innerHome {
    height: 100%;
    background-image: url("../assets/img/innerhome1.jpg");
    background-repeat: repeat-x;
    background-size: 100% 100%;

  .box-card {
    width: 16%;
    margin: 4% 2%;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
  }
}
</style>