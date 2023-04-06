<template>
    <div class="mv-item" @click="goDetail">
        <img class="top-img" :src="itemData.cover.url" />
        <div class="title one-line">{{ itemData.title }}</div>
        <div class="score" v-if="itemData.rating">
            <div class="score-content">
                <rankstar :score="Number(itemData.rating.value)" />
                <span class="score-text">{{ itemData.rating.value.toFixed(1) }}</span>
            </div>
        </div>
        <div class="no-score" v-else> 暂无评分 </div>
    </div>
</template>
  
<script>
export default {
    name: 'mitem'
}
</script>
<script setup>
/**
 * 单条已删除事项组件
 */

import rankstar from '@/components/rankstar/rankstar.vue'
import { useRouter } from 'vue-router'
import { defineProps } from 'vue';

const props = defineProps({
    itemData: {
        type: Object, // 接收父组件传递的数据
    }
})
const router = useRouter()
const goDetail = () => {
    let id = props.itemData.id
    router.push('/detail?id=' + id)
}


</script>
  
<style scoped lang="less">
.mv-item {
    margin-left: 10px;
    margin-right: 10px;
    width: 115px;
    display: inline-block;
    margin-bottom: 10px;
    ;
    cursor: pointer;

}

.top-img {
    width: 115px;
    height: 161px;
    background-color: #ccc;
}

.title {
    text-align: center;
    color: #333;
    width: 100px;
    margin: 0 auto;
    font-size: 14px;
}

.score-content {
    display: flex;
    width: 77px;
    margin: 0 auto;
    margin-top: 5px;
}

.score-text {
    color: #e09015;
    font-size: 12px;
    margin-left: 6px;
    margin-top: -3px;
}

.no-score {
    margin-top: 2px;
    text-align: center;
}
</style>
  