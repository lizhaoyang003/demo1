<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="box">
    <div class="topBox minBox">
      <div class="itemBox" v-for="item in topData" :key="item.key">
        <div class="items" style="left: 0">{{ item.left }}</div>
        <div class="itemImg">
          <el-icon><SwitchFilled /></el-icon>
        </div>
        <div class="items" style="right: 0">{{ item.right }}</div>
      </div>
    </div>
    <div style="height: 1px; width: 100%; background: black" />
    <div class="bottomBox minBox">
      <div class="itemBox" v-for="item in bottomData" :key="item.key">
        <div class="items" style="left: 0">{{ item.left }}</div>
        <div class="itemImg">
          <el-icon><SwitchFilled /></el-icon>
        </div>
        <div class="items" style="right: 0">{{ item.right }}</div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, reactive, ref } from 'vue';
import { ElMessage } from 'element-plus';
const topData = reactive([
  { left: 10, right: 15, key: 0, value: 3 }
  // { left: 10, right: 15, key: 1 },
  // { left: 10, right: 15, key: 2 }
]);
const bottomData = reactive([
  { left: 10, right: 15, key: 0, value: 2 }
  // { left: 10, right: 15, key: 1 },
  // { left: 10, right: 15, key: 2 },
  // { left: 10, right: 15, key: 3 },
  // { left: 10, right: 15, key: 4 },
  // { left: 10, right: 15, key: 5 },
  // { left: 10, right: 15, key: 6 }
]);
onMounted(() => {
  topData[0].right -= bottomData[0].left;
});
</script>
<style lang="scss" scoped>
.box {
  .minBox {
    width: 100%;
    height: calc(50vh - 25px);
    display: flex;
    justify-content: center;
    align-items: center;
    .itemBox {
      width: 100px;
      height: 150px;
      background-color: #ffab24;
      border-radius: 10%;
      color: #fff;
      font-size: 30px;
      position: relative;
      margin: 2%;
      .itemImg {
        width: 100%;
        height: 100%;
        text-align: center;
      }
      .items {
        position: absolute;
        bottom: 0;
      }
    }
  }
  .topBox {
    background: #ffc3c3;
  }
  .bottomBox {
    background: #7faeff;
  }
}
</style>
