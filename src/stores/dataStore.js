import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import service  from '../utils/service'
import configapi from '../utils/configapi'
function Datas(data, num) {
	let index = 0
	let array = []
	while(index < data.length) {
          array.push(data.slice(index, index += num));
      }
    return array ;
}

export const useDataStore = defineStore('data', {
  state:()=>({
    userInfo:{
      nickname:null,
      name:'',
      age:18
    },
    detailTitle:'',
    commentList:[],
    nowplayList:[],
    recentplayList:[],
    rankList:[]

  }),
  
  actions:{
    setUser(userInfo){
      this.userInfo=userInfo
    },
    async getHomeMovieData(){
      // 请求正在热映数据
      let nowplayList = await service.get(configapi.nowmovie,{
        start:0,
        count:50,
      })
      // 请求最近热映数据
      let recentplayList = await service.get(configapi.recentmovie,{
        start:0,
        count:50,
      })
      // 请求榜单映数据
      let rankList = await service.get(configapi.toprank,{
        start:0,
        count:10,
      })
      
      this.nowplayList=nowplayList.subject_collection_items
      this.recentplayList=Datas(recentplayList.subject_collection_items,10)
      this.rankList=rankList.subject_collection_items
      
    },
    setTitle(title){
      this.detailTitle=title
    },
    setCommentList(comment){
      this.commentList.push(comment)
    }
  }
})
