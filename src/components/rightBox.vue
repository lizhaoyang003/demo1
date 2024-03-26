<template>
  <div class="rightBox">
    <div class="box-top">
      <el-icon color="#409EFC"><PictureRounded /></el-icon>
      <span style="margin-left: 10px">01</span>
    </div>
    <div class="box-content">
      <div class="inputBox">
        <el-icon><Message /></el-icon>：
        <el-input v-model="count" style="min-width: 140px" placeholder="第一条数据" />
      </div>
      <div style="margin-top: 10px" class="inputBox">
        <el-icon><MessageBox /></el-icon>：
        <el-input v-model="count" style="min-width: 140px" placeholder="第二条数据" />
      </div>
    </div>
    <el-button @click="names.count = '<div>aaaaa</div>'">重置</el-button>
    <el-button @click="addValue">确定</el-button>
  </div>
</template>
<script setup>
import { ref, nextTick, watch } from 'vue';
import { useCounterStore, useNamesStore, urlStore } from '@/stores/counter';
import { storeToRefs } from 'pinia';
// import { ElMessage } from 'element-plus';
// import router from '@/router';
const counter = useCounterStore();
const names = useNamesStore();
const urls = urlStore();
const { count, count1 } = storeToRefs(counter);
watch(count, (newVal, val) => {
  console.log(newVal, val);
});

function addValue() {}
</script>
<style lang="scss" scoped>
.rightBox {
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 5px 8px 0px rgba(89, 96, 199, 0.09);
  margin: 10px;
  padding: 10px;
  width: 24%;
  .box-top {
    display: flex;
    align-items: center;
  }
  .box-content {
    padding: 10px 0;
    .inputBox {
      display: flex;
      align-items: center;
    }
  }
}
</style>
