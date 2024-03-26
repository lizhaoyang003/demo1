<template>
  <div>
    <div v-if="userId && userId.name.length">
      <div class="app-title">
        <div class="title-img">
          <el-icon size="30px">
            <ElementPlus />
          </el-icon>
          <span>Elenemt</span>
        </div>
        <div class="title-box">
          <div class="imgBox">
            <el-avatar> {{ userId.name }} </el-avatar>
            <span class="quert" style="margin-left: 10px" @click="quertClick">退出登录</span>
          </div>
        </div>
      </div>
      <div class="app-box" style="height: calc(100vh - 50px)">
        <div class="box-left">
          <el-menu
            active-text-color="#ffd04b"
            background-color="#545c64"
            class="el-menu-vertical-demo"
            style="height: 100%"
            :default-active="urlStr"
            text-color="#fff"
            @select="handleSelect"
          >
            <el-menu-item v-for="(item, index) in routerList" :key="index" :index="item.path">
              <el-icon>
                <Clock />
              </el-icon>
              <span>{{ item.name }}</span>
            </el-menu-item>
          </el-menu>
        </div>
        <div class="box-right">
          <RouterView />
        </div>
      </div>
    </div>
    <div v-else>
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { userIdStore, urlStore } from '@/stores/counter';
import { onMounted } from 'vue';
import routerList from './router/viewsRouter.js';
import { ElMessage, ElMessageBox } from 'element-plus';
const router = useRouter();
const { userId } = userIdStore();
const { url } = urlStore();
const urlStr = localStorage.getItem('url');
onMounted(() => {
  if (!userId || !userId.name.length) {
    router.push('/login');
    localStorage.setItem('url', '/');
  } else {
    router.push(urlStr);
  }
  console.log(userId, url, 'localStorage.getItem');
});
const handleSelect = (key) => {
  console.log(userId);
  if (!userId || !userId.name.length) location.reload();
  else router.push(key);
  localStorage.setItem('url', key);
};

const quertClick = () => {
  ElMessageBox.confirm('确定要退出登录吗?', {
    confirmButtonText: '确认',
    cancelButtonText: '取消',
    type: 'warning'
  }).then(() => {
    ElMessage({
      type: 'success',
      message: '退出登录成功'
    });
    localStorage.setItem('userId', JSON.stringify({ name: '' }));
    setTimeout(() => location.reload(), 1000);
  });
};
</script>

<style scoped lang="scss">
#app {
  width: 100%;
  height: 100vh;
}

.app-title {
  background: #545c64;
  color: #ffff;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .title-img {
    display: flex;
    align-items: center;
    width: 186px;
  }

  .title-box {
    color: #ffffff;
    display: flex;
    align-items: center;
    position: relative;

    .imgBox {
      background: #fff;
      position: absolute;
      right: 0;
      top: -20px;
      width: 40px;
      height: 40px;
      transition: all 0.3s linear 0s;
      border-radius: 20px;
      z-index: 10;
      overflow: hidden;
      color: #545c64;

      // display: flex;
      // align-items: center;
      .quert {
        border-left: 1px solid #ccc;
        font-size: 14px;
        width: 60px;
        padding-left: 10px;
        display: inline-block;
      }

      .quert:hover {
        color: #50a7ff;
      }
    }

    .imgBox:hover {
      cursor: pointer;
      border-radius: 10px;
      width: 130px;
      padding: 10px;
      box-shadow: 0px 5px 8px 0px rgba(89, 96, 199, 0.09);
    }
  }
}

.app-box {
  display: flex;

  .box-left {
    overflow-y: scroll;
    min-width: 160px;
  }

  .box-right {
    width: 100%;
    overflow-y: scroll;
    padding: 10px;
  }
}
</style>
