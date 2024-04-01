<template>
  <div class="box">
    <div class="topBox minBox">
      <div class="itemBox" v-for="item in topData" :key="item.key">
        <div class="items" style="left: -10">{{ item.left }}</div>
        <div class="itemImg">
          <el-icon><SwitchFilled /></el-icon>
        </div>
        <div class="items" style="right: -10">{{ item.right }}</div>
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
const topData = reactive([
  { left: 10, right: 15, key: 0, value: 3 },
  { left: 10, right: 15, key: 1, value: 3 },
  { left: 10, right: 15, key: 2, value: 3 }
]);
const bottomData = reactive([
  { left: 100, right: 150, key: 0, value: 20 }
  // { left: 10, right: 15, key: 1, value: 3 },
  // { left: 10, right: 15, key: 2, value: 3 },
  // { left: 10, right: 15, key: 3, value: 3 },
  // { left: 10, right: 15, key: 4, value: 3 },
  // { left: 10, right: 15, key: 5, value: 3 },
  // { left: 10, right: 15, key: 6, value: 3 }
]);
const topVal = ref(0);
const bottomVal = ref(0);
onMounted(() => {
  gmStart();
});

// 初始化
function gmStart() {
  topData.forEach((key) => {
    topVal.value += key.value;
  });
  bottomData.forEach((key) => {
    bottomVal.value += key.value;
  });
  if (topVal.value > bottomVal.value) {
    console.log(Math.floor(Math.random() * bottomData.length));
  } else if (bottomVal.value > topVal.value) {
    console.log(Math.floor(Math.random() * topData.length));
  } else alert('随机');
}

// function attack() {
//   for (let i = 0; i < 100; i++) {
//     const nub = Math.floor(Math.random() * topData.length);
//     topData[nub].right -= bottomData[i].left;
//     bottomData[i].right -= topData[nub].left;
//     determine();
//   }
// }

// function determine() {
// bottomData.forEach((ele, index) => {
//   if (ele.right <= 0) {
//     bottomData.splice(index, 1);
//   }
// });
// topData.forEach((ele, index) => {
//   if (ele.right <= 0) {
//     topData.splice(index, 1);
//   }
// });
// }
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
  // .topBox {
  //   background: #ffc3c3;
  // }
  // .bottomBox {
  //   background: #7faeff;
  // }
}
</style>
