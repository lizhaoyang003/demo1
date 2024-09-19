<template>
  <div class="gmView1">
    <div
      class="box"
      v-for="(ele, idx) in boxList"
      :key="idx"
      :style="{ left: `${ele.left}px`, top: `${ele.top}px` }"
    >
      <div
        class="nubBox"
        :class="`an${item.value}`"
        :style="{
          animationDelay: `${ele.value / 10 + 2.2}s`,
          animationDuration: `${(ele.value % 2) + 5}s`
        }"
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
  { value: 10 },
  { value: 11 },
  { value: 12 },
  { value: 13 },
  { value: 14 },
  { value: 15 },
  { value: 16 },
  { value: 17 },
  { value: 18 },
  { value: 19 },
  { value: 20 }
]);
const boxList = reactive([]);
onMounted(() => {
  for (let i = 0; i < 5; i++) {
    boxList.push({
      value: Math.floor(Math.random() * list.length),
      left: Math.floor(Math.random() * 1280),
      top: Math.floor(Math.random() * 500)
    });
  }
  console.log(`output->boxList`, boxList);
});
</script>
<style scoped lang="scss">
$color: #36b073;
$duration: 2s;
$steps: 20;

.gmView1 {
  background: #000;
  width: 100%;
  height: 100%;
  position: relative;
  .box {
    position: absolute;
    .nubBox {
      width: 20px;
      padding-top: 5px;
      font-size: 6px;
      text-align: center;
    }

    // 使用 @for 循环为每个数字创建动画
    @for $i from 0 through 20 {
      .an#{$i} {
        animation: run#{$i} $duration linear infinite;
      }
      @keyframes run#{$i} {
        @for $j from 0 through 20 {
          @if $i == $j {
            #{( $j * 5 )}% {
              color: rgba($color, 1);
            }
          } @else if $i + 1 == $j {
            #{( $j * 5 )}% {
              color: rgba($color, 0.8);
            }
          } @else if $i + 2 == $j {
            #{( $j * 5 )}% {
              color: rgba($color, 0.6);
            }
          } @else if $i + 3 == $j {
            #{( $j * 5 )}% {
              color: rgba($color, 0.4);
            }
          } @else if $i + 4 == $j {
            #{( $j * 5 )}% {
              color: rgba($color, 0.2);
            }
          } @else {
            #{( $j * 5 )}% {
              color: #000;
            }
          }
        }
      }
    }
  }
}
</style>
