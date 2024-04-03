<template>
  <div class="gmView1" ref="gmView1">
    <div class="titleBox">
      <div class="iconBox" @click="iconClick">
        <el-icon><RefreshLeft /></el-icon>
      </div>
      <el-select
        v-model="state.value"
        placeholder="请选择难度"
        size="mini"
        style="width: 110px"
        @change="selectChange"
      >
        <el-option
          v-for="item in state.options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </div>
    <div class="gmBox" ref="gmBox">
      <div style="margin: 2px; position: relative">
        <div
          class="gmBox1"
          ref="getDivDom"
          v-for="(item, index) in dataList"
          :key="index"
          :style="{
            background: `${bgcList[item.bgc]}`,
            zIndex: `${item.zIndex}`,
            left: `${item.left * 40}px`,
            top: `${item.top * 40}px`,
            width: `${item.width}px`,
            height: `${item.width}px`
          }"
          @click="addList(item)"
        >
          <el-icon v-if="item.bgc == 0"><Lightning /></el-icon>
          <el-icon v-if="item.bgc == 1"><MoonNight /></el-icon>
          <el-icon v-if="item.bgc == 2"><Moon /></el-icon>
          <el-icon v-if="item.bgc == 3"><Cloudy /></el-icon>
          <el-icon v-if="item.bgc == 4"><Pouring /></el-icon>
          <el-icon v-if="item.bgc == 5"><Drizzling /></el-icon>
          <el-icon v-if="item.bgc == 6"><Sunset /></el-icon>
          <el-icon v-if="item.bgc == 7"><PartlyCloudy /></el-icon>
          <el-icon v-if="item.bgc == 8"><MostlyCloudy /></el-icon>
          <el-icon v-if="item.bgc == 9"><Ship /></el-icon>
          <el-icon v-if="item.bgc == 10"><Sunny /></el-icon>
          <el-icon v-if="item.bgc == 11"><Sunrise /></el-icon>
        </div>
      </div>
    </div>
    <div class="tabBox">
      <div
        class="gmBox1"
        v-for="(item, index) in tabList"
        :key="index"
        :style="{
          background: `${bgcList[item.bgc]}`,
          zIndex: `${item.zIndex}`,
          width: `${item.width}px`
        }"
      >
        <el-icon v-if="item.bgc == 0"><Lightning /></el-icon>
        <el-icon v-if="item.bgc == 1"><MoonNight /></el-icon>
        <el-icon v-if="item.bgc == 2"><Moon /></el-icon>
        <el-icon v-if="item.bgc == 3"><Cloudy /></el-icon>
        <el-icon v-if="item.bgc == 4"><Pouring /></el-icon>
        <el-icon v-if="item.bgc == 5"><Drizzling /></el-icon>
        <el-icon v-if="item.bgc == 6"><Sunset /></el-icon>
        <el-icon v-if="item.bgc == 7"><PartlyCloudy /></el-icon>
        <el-icon v-if="item.bgc == 8"><MostlyCloudy /></el-icon>
        <el-icon v-if="item.bgc == 9"><Ship /></el-icon>
        <el-icon v-if="item.bgc == 10"><Sunny /></el-icon>
        <el-icon v-if="item.bgc == 11"><Sunrise /></el-icon>
      </div>
    </div>
  </div>
</template>

<script setup>
import { nextTick, onMounted, reactive, ref } from 'vue';
const bgcList = reactive([
  '#ffe6e6',
  '#f6ffe6',
  '#e6ffee',
  '#e6faff',
  '#eae6ff',
  '#ffe6fe',
  '#ffb5b5',
  '#e8ffb5',
  '#b5ffc5',
  '#b5f0ff',
  '#bbb5ff',
  '#ffb5e8'
]);
const dataList = ref([]);
const tabList = ref([]);
const getDivDom = ref(null);
const gmBox = ref(null);
const gmView1 = ref(null);
const state = reactive({
  value: 2,
  options: [
    { label: '难度1', value: 2 },
    { label: '难度2', value: 3 },
    { label: '难度3', value: 4 },
    { label: '难度4', value: 5 },
    { label: '难度5', value: 6 },
    { label: '难度6', value: 7 },
    { label: '难度7', value: 8 },
    { label: '难度8', value: 9 },
    { label: '难度9', value: 10 }
  ]
});

onMounted(() => {
  gmStart(state.value);
  console.log(shuffleUniqueRandomNumbers());
});
// 添加无序数组
function shuffleUniqueRandomNumbers(nub) {
  const numbers = Array.from({ length: nub }, (_, index) => index); // 创建0-100的数组
  for (let i = numbers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [numbers[i], numbers[j]] = [numbers[j], numbers[i]]; // 交换位置
  }
  return numbers;
}
// 点击某一个元素
const addList = (item) => {
  tabList.value.push(item);
  const newDataList = dataList.value.filter((ele) => ele.value !== item.value);
  nextTick(() => {
    dataList.value = newDataList;
  });
  showD(item);
  // console.log(getDivDom.value[item.value]);
};
// 判定
const showD = (item) => {
  const newDataList = tabList.value.filter((ele) => ele.bgc === item.bgc);
  if (newDataList.length == 3) {
    const newData = tabList.value.filter((ele) => ele.bgc !== item.bgc);
    nextTick(() => {
      tabList.value = newData;
    });
    return;
  }
  if (tabList.value.length == 7) alert('游戏结束');
  if (dataList.value.length == 0) alert('你赢了');
};
// 开始
const gmStart = (val) => {
  dataList.value = [];
  tabList.value = [];
  let a = 0;
  for (let index = 1; index <= val; index++) {
    const stateList = shuffleUniqueRandomNumbers(index * index);
    const nub = (10 - index) * 0.5;
    for (let i = 0; i < stateList.length; i++) {
      dataList.value.push({
        bgc: Math.floor(Math.random() * 12),
        value: a,
        zIndex: 10 - index,
        left: (stateList[i] % index) + nub,
        top: (Math.floor(stateList[i] / index) % 10) + nub,
        width: 38
      });
      a++;
    }
  }
};

// 筛选框事件
const selectChange = () => {
  gmStart(state.value);
};

// 重置
const iconClick = () => {
  gmStart(state.value);
};
</script>
<style scoped lang="scss">
.gmView1 {
  padding-top: 100px;
  height: 200vh;
  .titleBox {
    width: 400px;
    padding: 10px 0;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    .iconBox {
      width: 25px;
      height: 25px;
      font-size: 25px;
      cursor: pointer;
    }
    .iconBox:hover {
      color: blue;
    }
  }
  .gmBox {
    width: 404px;
    height: 404px;
    margin: 0 auto;
    background: #faf7ea;
    border: 1px solid #dadada;
    border-radius: 10px;
    .gmBox1 {
      position: absolute;
      // background: #ffb5e8;
      border-radius: 10px;
      box-shadow: 0px 0 5px 0px rgba(89, 96, 199, 0.09);
      border: 1px solid #707070;
      text-align: center;
      line-height: 38px;
      font-size: 20px;
      cursor: pointer;
      // transition: all 0.3s linear 0s;
    }
  }
  .tabBox {
    background: #faf7ea;
    width: 280px;
    height: 40px;
    margin: 10px auto;
    border-radius: 10px;
    border: 1px solid #dadada;
    padding: 2px;
    display: flex;
    align-items: center;
    .gmBox1 {
      border-radius: 10px;
      box-shadow: 0px 0 5px 0px rgba(89, 96, 199, 0.09);
      border: 1px solid #707070;
      text-align: center;
      line-height: 38px;
      font-size: 20px;
      cursor: pointer;
      // transition: all 0.3s linear 0s;
    }
  }
}
</style>
