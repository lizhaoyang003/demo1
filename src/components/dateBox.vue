<template>
  <div class="leftBox">
    <el-row>
      <el-col :span="8" style="text-align: left">
        <el-countdown :title="`${day}：lzy`" :value="value" @change="dateChange" />
        <div style="display: flex; align-items: center">
          <el-icon>
            <HotWater v-if="tabValue == '休息中'" />
            <Monitor v-else />
          </el-icon>
          &nbsp;{{ tabValue }}
        </div>
        <span>{{ lzyValue }}</span>
      </el-col>
      <el-col :span="8" style="text-align: left">
        <el-countdown title="Remaining VIP time" format="HH:mm:ss" :value="value1" />
        <el-button class="countdown-footer" type="primary" @click="reset">Reset</el-button>
      </el-col>
      <el-col :span="8" style="text-align: left">
        <el-countdown format="DD [天] H [时] m [分] s [秒]" :value="value2">
          <template #title>
            <div style="display: inline-flex; align-items: center">
              <el-icon style="margin-right: 4px" :size="12">
                <Calendar />
              </el-icon>
              距离xx还有
            </div>
          </template>
        </el-countdown>
        <div class="countdown-footer">{{ value2.format('YYYY-MM-DD HH:mm:ss') }}</div>
      </el-col>
    </el-row>
  </div>
</template>
<script setup>
import { onMounted, ref, computed } from 'vue';
import dayjs from 'dayjs';
import { Calendar } from '@element-plus/icons-vue';

const value = ref(
  new Date(new Date(new Date().toLocaleDateString()).getTime() + 18 * 60 * 60 * 1000)
);
const day = ref(new Date().toLocaleDateString());
const value1 = ref(Date.now() + 1000 * 60 * 60 * 24 * 2);
const value2 = ref(dayjs('2024-04-12 18:00:00'));
const diff = ref();
const diffVal = ref();
const tabValue = ref('');
onMounted(() => {});
const lzyValue = computed(() => {
  return (diffVal.value * 1.38).toFixed(2);
});

function reset() {
  value1.value = Date.now() + 1000 * 60 * 60 * 24 * 2;
}
function dateChange(val) {
  const dateDay = Math.ceil(val / 1000 / 60);
  if (dateDay <= 0 || dateDay > 540) return;
  if (dateDay == diff.value) return;
  diff.value = dateDay;
  if (diff.value > 390) {
    diffVal.value = 540 - diff.value;
    tabValue.value = '搬砖中';
  } else if (diff.value < 270) {
    diffVal.value = 540 - diff.value - 120;
    tabValue.value = '搬砖中';
  } else {
    diffVal.value = 150;
    tabValue.value = '休息中';
  }
  console.log(dateDay, diffVal.value, '');
}
</script>
<style lang="scss" scoped>
.leftBox {
  background-color: #ffffff;
  border-radius: 10px;
  padding: 10px;
  margin-top: 10px;
  padding-left: 20px;
}
.el-col {
  text-align: center;
}

.countdown-footer {
  margin-top: 8px;
}
</style>
