<template>
  <div class="leftBox">
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
        <el-input v-model="count1" style="min-width: 140px" placeholder="第二条数据" />
      </div>
    </div>
    <span style="text-align: right">
      <el-button @click="checkValue">重置</el-button>
      <el-button @click="addValue">确定</el-button>
    </span>
  </div>
</template>
<script setup>
import { useCounterStore } from '@/stores/counter';
import { storeToRefs } from 'pinia';
const counter = useCounterStore();
const { count, count1 } = storeToRefs(counter);
const addValue = () => {
  counter.$patch({
    // 同时更改两个参数
    count: '2',
    count1: '3'
  });
};
const checkValue = () => {
  counter.increment(); // 重置
};
counter.$subscribe((mutation, state) => {
  // 监听counter参数变化
  // import { MutationType } from 'pinia'
  // mutation.type // 'direct' | 'patch object' | 'patch function'
  // 和 cartStore.$id 一样
  // mutation.storeId // 'cart'
  // 只有 mutation.type === 'patch object'的情况下才可用
  // mutation.payload
  // 传递给 cartStore.$patch() 的补丁对象
  // 每当状态发生变化时，将整个 state 持久化到本地存储。
  // localStorage.setItem('cart', JSON.stringify(state))
  console.log(mutation, JSON.stringify(state));
});
</script>
<style lang="scss" scoped>
.leftBox {
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
