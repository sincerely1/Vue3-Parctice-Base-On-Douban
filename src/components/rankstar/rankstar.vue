<template>
    <div class="score" :style="{ backgroundPositionY: '-' + posY + 'px' }"></div>
</template>

<script>
/**
 * 这里是一个得分组件
 */
export default{
    name: 'rankstar'
}
</script>

<script setup>
import {defineProps,computed } from 'vue'
const props = defineProps(
    {
    score: { // 接收父组件传递的数据
        type: Number
    }
})

// 通过得分计算星数
let posY = computed(() => {
    let res = 0
    let s = props.score
    if (s > 9) {
        res = 0
    } else if (s > 8) {
        res = 11
    } else if (s > 7) {
        res = 22
    } else if (s > 6) {
        res = 33
    } else if (s > 5) {
        res = 44
    } else if (s > 4) {
        res = 55
    } else if (s > 3) {
        res = 66
    } else if (s > 2) {
        res = 77
    } else if (s > 1) {
        res = 88
    } else {
        res = 99
    }

    return res
})
</script>
  
<style scoped>
.score {
    width: 55px;
    height: 11px;
    background-image: url('./imgs/ic_rating_s@2x.png');
    background-size: cover;
}
</style>
  