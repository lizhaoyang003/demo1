<template>
  <div class="gmView1">
    <div class="box" v-for="(ele, idx) in boxList" :key="idx">
      <div
        class="nubBox"
        :class="`an${item.value}`"
        :style="{ animationDelay: `${ele}s`, animationDuration: `${(ele % 2) + 1}s` }"
        v-for="(item, index) in list"
        :key="index"
      >
        {{ item.value }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive } from 'vue';

const list = reactive([
  { value: 0 },
  { value: 1 },
  { value: 2 },
  { value: 3 },
  { value: 4 },
  { value: 5 },
  { value: 6 },
  { value: 7 },
  { value: 8 },
  { value: 9 },
  { value: 10 }
]);
const boxList = reactive([]);
onMounted(() => {
  for (let i = 0; i < list.length; i++) {
    boxList.push(Math.floor(Math.random() * list.length));
  }
  console.log(`output->boxList`, boxList);
});
</script>
<style scoped lang="scss">
$color: #00ea75;
$duration: 2s;
$steps: 10;

.gmView1 {
  background: #000;
  width: 100%;
  height: 100%;
  display: flex;
  .box {
    .nubBox {
      width: 20px;
      text-align: center;
    }

    // 使用 @for 循环为每个数字创建动画
    @for $i from 0 through 10 {
      .an#{$i} {
        animation: run#{$i} $duration linear infinite;
      }
      @keyframes run#{$i} {
        @for $j from 0 through $steps {
          @if $i == $j {
            #{( $j * 10 )}% {
              color: rgba($color, 0.5);
            }
          } @else if $i == $j + 2 {
            #{( $j * 10 )}% {
              color: rgba($color, 0.5);
            }
          } @else if $i == $j + 1 {
            #{( $j * 10 )}% {
              color: rgba($color, 1);
            }
          } @else {
            #{( $j * 10 )}% {
              color: #000;
            }
          }
        }
      }
    }
  }
}
</style>
