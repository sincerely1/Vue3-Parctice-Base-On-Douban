<template>
  <div class="detail-container">
    <div class="left-content">
      <movieinfo />
      <movieactors />
      <moviecomments />
    </div>

  </div>
</template>
<script>
export default {
  name: 'detail',// 组件的名称，尽量和文件名一致
}
</script>

<script setup>


import movieinfo from './movieinfo.vue'
import movieactors from './movieactors.vue'
import moviecomments from './moviecomments.vue'

</script>
<style scoped lang="less">
.detail-container {
  display: flex;
}

.left-content {
  width: 705px;
  margin-top: 40px;
  padding: 15px;
}
</style>
