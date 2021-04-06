<template>
    <div id="innerHome">
        <!--轮播图-->
        <div class="block swiper-box">
            <el-carousel height="400px">
                <el-carousel-item>
                    <el-image style="width: 100%; height: 100%"
                              :src="require('../assets/img/swiper/swiper1-1.png')"
                    ></el-image>
                </el-carousel-item>
                <el-carousel-item>
                    <el-image style="width: 100%; height: 100%"
                              :src="require('../assets/img/swiper/swiper1-2.png')"
                    ></el-image>
                </el-carousel-item>
                <el-carousel-item>
                    <el-image style="width: 100%; height: 100%"
                              :src="require('../assets/img/swiper/swiper1-3.png')"
                    ></el-image>
                </el-carousel-item>
                <el-carousel-item>
                    <el-image style="width: 100%; height: 100%"
                              :src="require('../assets/img/swiper/swiper1-4.png')"
                    ></el-image>
                </el-carousel-item>
                <el-carousel-item>
                    <el-image style="width: 100%; height: 100%"
                              :src="require('../assets/img/swiper/swiper1-5.png')"
                    ></el-image>
                </el-carousel-item>
            </el-carousel>
        </div>
        <el-container>
            <el-row :gutter="20">
                <el-col :span="6">
                    <el-card class="box-card">
                        <template #header>
                            <div class="card-header">
                                <span>公共选修课</span>
                            </div>
                        </template>
                        <div class="back-box class-back-box1"></div>
                    </el-card>
                </el-col>
                <el-col :span="6">
                    <el-card class="box-card">
                        <template #header>
                            <div class="card-header">
                                <span>公共必修课</span>
                            </div>
                        </template>
                        <div class="back-box class-back-box2"></div>
                    </el-card>
                </el-col>
                <el-col :span="6">
                    <el-card class="box-card">
                        <template #header>
                            <div class="card-header">
                                <span>专业选修课</span>
                            </div>
                        </template>
                        <div class="back-box class-back-box3"></div>
                    </el-card>
                </el-col>
                <el-col :span="6">
                    <el-card class="box-card">
                        <template #header>
                            <div class="card-header">
                                <span>专业必修课</span>
                            </div>
                        </template>
                        <div class="back-box class-back-box4"></div>
                    </el-card>
                </el-col>
            </el-row>
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

        .swiper-box {
            opacity: 0.8;
        }

        .el-container {
            margin: 2% 1% 0 2.5% ;
            opacity: 0.8;

            .el-row {
                width: 100%;

                .card-header {
                    font-size: 25px;
                    text-align: center;
                }

                .back-box {
                    /*background: yellowgreen;*/
                    height: 100px;
                    background-repeat: repeat-x;
                    background-size: 100% 100%;
                }

                .class-back-box1 {
                    background-image: url("../assets/img/classBack/class-back1.jpg");
                }

                .class-back-box2 {
                    background-image: url("../assets/img/classBack/class-back2.jpg");
                }

                .class-back-box3 {
                    background-image: url("../assets/img/classBack/class-back3.jpg");
                }

                .class-back-box4 {
                    background-image: url("../assets/img/classBack/class-back4.jpg");
                }
            }
        }
    }
</style>