<template>
    <div class="home-container">
        <div class="left-content">
            <div class="now-play play-section">
                <h2 class="title">正在热映</h2>
                <div class="section-bottom" v-if="nowplayList.length">
                    <slider>
                        <mitem v-for="item in nowplayList" :itemData="item" :key="item.id" />
                    </slider>
                </div>
            </div>
            <div class="recent-play play-section">
                <h2 class="title">最近热门电影</h2>
                <div class="section-bottom" v-if="recentplayList.length">
                    <slider>
                        <div v-for="(item,index) in recentplayList" :key="index" class="recent-item">
                            <mitem v-for="(_item,_index) in item" :itemData="_item" :key="_item.id" /> 
                        </div>
                    </slider>
                </div>
            </div>
        </div>
        <div class="right-content">
            <div class="top-rank">
                <h2 class="title">一周口碑榜</h2>
                <div v-for="(item, index) in rankList" :key="index" class="rank-item">
                    {{ index + 1 }}<router-link :to="'/detail?id=' + item.id" class="rank-link">{{ item.title
                    }}</router-link>
                </div>
            </div>
            <div class="coopt">
                <h2 class="title">合作联系</h2>
                <ul>
                    <li>电影合作邮箱：douban@lvming.com</li>
                    <li>电视剧合作邮箱：douban@lvming.com</li>
                </ul>
            </div>
            <div class="fans">
                <h2 class="title">关注作者</h2>
                <div class="fans-list">
                    <div class="fans-item">
                        <div class="fans-img weibo"></div>
                        <div>
                            <a href="#">微博</a>
                        </div>
                    </div>
                    <div class="fans-item">
                        <div class="fans-img weixin"></div>
                        <div>
                            <a href="#">微信</a>
                        </div>
                    </div>
                    <div class="fans-item">
                        <div class="fans-img zhihu"></div>
                        <div>
                            <a href="#">知乎</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    // 定义静态方法
    name: 'home',// 组件的名称，尽量和文件名一致
}
</script>
<script setup>
import mitem from '../../components/mitem/mitem.vue'
import slider from '../../components/silder/slider.vue'
import { ref, computed, onBeforeMount, onMounted } from 'vue'

import { useDataStore } from '../../stores/dataStore'
const store = useDataStore()
onBeforeMount(() => {
    store.getHomeMovieData()
})
let nowplayList = computed(() => store.nowplayList)
let recentplayList = computed(() => store.recentplayList)
let rankList = computed(() => store.rankList)
</script>
<style scoped lang="less">
  .home-container {
    display: flex;
  }
  .left-content {
    width: 705px;
  }
  .right-content {
    width: 300px;
    margin-left: 20px;
  }

  .title {
    font-size: 16px;;
    color: #111;
    padding-bottom: 10px;
    border-bottom: 1px solid #eaeaea;
    margin-bottom: 18px;
  }
  .now-play {
    min-height: 344px;
  }
  .recent-play {
    min-height: 565px;
  }
  .play-section {
    padding: 15px;
  }
  .recent-item {
    display: inline-block;
    width: 675px;
    white-space: normal;
  }
  .top-rank {
    margin-top: 68px;
  }
  .rank-item {
    padding: 7px 0;
    border-bottom: 1px solid #eaeaea;
    font-size: 13px;
    margin-bottom: 5px;
  }
  .rank-link {
    margin-left: 7px;
  }
  .coopt,.fans {
    margin-top: 50px;
  }
  .fans-list {
    display: flex;
  }
  .fans-item {
    text-align: center;
    margin-right: 20px;
  }
  .fans-img {
    width:40px;
    height: 40px;
    background-size: cover;
    margin-bottom: 10px;

    &.weibo {
      background-image: url('./imgs/home_weibo@2x.jpg');
    }
    &.weixin {
      background-image: url('./imgs/home_weixin@2x.jpg');
    }
    &.zhihu {
      border-radius: 3px;
      background-image: url('./imgs/home_zhihu@2x.jpg');
    }
  }
</style>