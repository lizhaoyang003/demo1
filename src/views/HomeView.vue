<template>
  <div class="homeBox">
    <div class="box-top">
      <div class="block text-center">
        <span class="demonstration">Switch when indicator is hovered (default)</span>
        <el-carousel height="150px" motion-blur>
          <el-carousel-item v-for="item in 4" :key="item">
            <h3 class="small justify-center" text="2xl">{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <div class="box-Content">
      <dateBox />
    </div>
    <transition
      appear
      name="animate__animated animate__bounceInLeft"
      enter-active-class="animate__backInUp"
      leave-active-class="animate__backOutDown"
    >
      <div class="box">
        <leftBox />
        <leftBox />
        <rightBox />
        <rightBox />
      </div>
    </transition>
  </div>
</template>
<script setup>
import leftBox from '../components/leftBox.vue';
import rightBox from '../components/rightBox.vue';
import dateBox from '../components/dateBox.vue';
// import { useNamesStore } from '@/stores/counter';
// const views = useNamesStore();
</script>
<style lang="scss" scoped>
.homeBox {
  width: 100%;
  padding: 10px;
  .box {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
  }
  .contBox {
    padding: 10px;
  }
  .box-Content {
    background: #fff;
    border-radius: 10px;
  }
}

.demonstration {
  color: var(--el-text-color-secondary);
}

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
