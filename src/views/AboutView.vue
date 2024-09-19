<template>
  <div class="about">
    <el-tabs
      v-model="editableTabsValue"
      type="card"
      class="demo-tabs"
      editable
      @edit="handleTabsEdit"
    >
      <el-tab-pane
        v-for="item in editableTabs"
        :key="item.name"
        :label="item.title"
        :name="item.name"
      />
    </el-tabs>
    <a href="macappstores://apps.apple.com/cn/app/%E5%BE%AE%E4%BF%A1/id836500024?mt=12&extRefUrl2=https%3A%2F%2Fmac.weixin.qq.com%2F&mt=12">打开appStore</a>
    <a href="weixin://">打开微信</a>
    <a href="tencent://">打开qq</a>
    <a href="vscode://file/path/to/folder?folder=1">点击这里打开 VS Code 并导入代码</a>
    <a href="qq:">点击这里打开 VS Code 并导入代码</a>
  </div>
</template>
<script setup>
import { ref } from 'vue';
let tabIndex = 2;
const editableTabsValue = ref('2');
const editableTabs = ref([
  {
    title: 'Tab 1',
    name: '1',
    content: 'Tab 1 content'
  },
  {
    title: 'Tab 2',
    name: '2',
    content: 'Tab 2 content'
  }
]);
const handleTabsEdit = (targetName, action) => {
  if (action === 'add') {
    const newTabName = `${++tabIndex}`;
    editableTabs.value.push({
      title: 'New Tab',
      name: newTabName,
      content: 'New Tab content'
    });
    editableTabsValue.value = newTabName;
  } else if (action === 'remove') {
    const tabs = editableTabs.value;
    let activeName = editableTabsValue.value;
    if (activeName === targetName) {
      tabs.forEach((tab, index) => {
        if (tab.name === targetName) {
          const nextTab = tabs[index + 1] || tabs[index - 1];
          if (nextTab) {
            activeName = nextTab.name;
          }
        }
      });
    }
    editableTabsValue.value = activeName;
    editableTabs.value = tabs.filter((tab) => tab.name !== targetName);
  }
};
</script>
<style></style>
