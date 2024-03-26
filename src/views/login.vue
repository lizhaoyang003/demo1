<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="box">
    <transition
      appear
      name="animate__animated animate__bounceInLeft"
      enter-active-class="animate__backInUp"
      leave-active-class="animate__backOutDown"
    >
      <div class="leftBox" v-if="isShow">
        <div class="box-top">
          <el-icon color="#409EFC"><PictureRounded /></el-icon>
          <span style="margin-left: 10px">账号密码登录</span>
        </div>
        <div class="box-content">
          <div class="inputBox">
            <el-icon><Message /></el-icon>：
            <el-input v-model="count" style="min-width: 140px" placeholder="用户名" />
          </div>
          <div style="margin-top: 10px" class="inputBox">
            <el-icon><MessageBox /></el-icon>：
            <el-input v-model="count1" style="min-width: 140px" placeholder="密码" />
          </div>
        </div>
        <span style="text-align: right">
          <el-button @click="checkValue">重置</el-button>
          <el-button @click="addValue">登录</el-button>
        </span>
      </div>
    </transition>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { ElMessage } from 'element-plus';
const count = ref('666');
const count1 = ref('123');
const isShow = ref(true);
const addValue = () => {
  if (count.value == '666' && count1.value == '123') {
    localStorage.setItem('userId', JSON.stringify({ name: count1.value }));
    ElMessage({
      message: `欢迎回来，${count.value}`,
      type: 'success'
    });
    setTimeout(() => {
      isShow.value = false;
      setTimeout(() => location.reload(), 500);
    }, 500);
  } else {
    ElMessage({
      message: '账号密码错误',
      type: 'error'
    });
  }
};
const checkValue = () => {
  count.value = '';
  count1.value = '';
};
</script>
<style lang="scss" scoped>
.box {
  width: 100vw;
  height: 100vh;
  background: #ccc;
  display: flex;
  //主轴居中
  justify-content: center;
  //辅轴居中
  align-items: center;

  .leftBox {
    border-radius: 10px;
    background: #fff;
    box-shadow: 0px 5px 8px 0px rgba(89, 96, 199, 0.09);
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
}
</style>
