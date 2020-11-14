import {request} from "network/request.js"

export class MusicDetail{
  constructor(musicDetail,musicSrc,musicComments){
    this.name = musicDetail.data.data.songs[0].name
    this.alia = musicDetail.data.data.songs[0].al.name
    this.picUrl = musicDetail.data.data.songs[0].al.picUrl
    this.singer = musicDetail.data.data.songs[0].ar[0].name
    this.url = musicSrc.data.data[0].url
    this.comments = musicComments.data.comments
    this.id = musicSrc.data.data[0].id
   }
}
// ————————————————音乐搜索————————————————
export function getMusic(name,page){
  return request({
    url:"https://v1.alapi.cn/api/music/search",
    params:{
      // token:"M0w6IsCR3xHRTK5N1BnW",
      token:"kvBgUtFEUJH2T7y75ipr",

      keyword:name,
      limit:20, //每页数量
      offset:20*page //页码
    }
  })
}

// ————————————————获取音乐详情————————————————
export function playMusic(id){
  return Promise.all([
    getMusicDetail(id),
    getMusicSrc(id),
    getMusicComments(id)
  ])
}
function getMusicDetail(id){
  return request({
    url:"https://v1.alapi.cn/api/music/detail",
    params:{
      // token:"M0w6IsCR3xHRTK5N1BnW",
      token:"kvBgUtFEUJH2T7y75ipr",

      id:id
    }
  })
}
function getMusicSrc(id){
  return request({
    url:"https://api.imjad.cn/cloudmusic/",
    params:{
      type:"song",
      id:id
    }
  })
}
function getMusicComments(id){
  return request({
    url:"https://api.imjad.cn/cloudmusic/",
    params:{
      type:"comments",
      id:id
    }
  })
}

// ————————————————获取音乐MV————————————————
export function getMusicMV(id){
  return request({
    url:"https://api.imjad.cn/cloudmusic/",
    params:{
      type:"mv",
      id:id
    }
  })
}

// ——————————————获取歌单列表————————————————————
export function getHomeMusicList(){
  return Promise.all([
    getMusicListId("国风"),
    getMusicListId("抖音"),
    getMusicListId("民谣"),
    getMusicListId("青春"),
    getMusicListId("轻音乐"),
  ])
}
export function getMusicListId(name){
  return request({
    url:"https://v1.alapi.cn/api/music/search",
    params:{
      // token:"M0w6IsCR3xHRTK5N1BnW",
      token:"kvBgUtFEUJH2T7y75ipr",

      keyword:name,
      limit:7, //每页数量
      // offset:20*page, //页码
      type:1000
    }
  })
}
export function getHomeMusicList2(){
  return Promise.all([
    getMusicListId2("国风"),
    getMusicListId2("抖音"),
    getMusicListId2("民谣"),
    getMusicListId2("青春"),
    getMusicListId2("轻音乐"),
  ])
}
export function getMusicListId2(name){
  return request({
    url:"https://api.imjad.cn/cloudmusic/",
    params:{
      type:'search',
      search_type:1000,
      s:name,
      // limit:7, //每页数量
    }
  })
}
// export function getMusicListId(name){
//   return request({
//     url:"/api/search/pc",
//     // method: 'post',
//     params: {
//       s:name,
//       limit:7,
//       type:1000
//     }
//   })
// }
// ————————————————获取歌单(根据歌单ID)————————————————————————
export function getMusicList(id){
    return request({
      url:"https://api.imjad.cn/cloudmusic/",
      params:{
        type:'playlist',
        id:id
      }
    })
  }
// 此API签名过期，手机无法访问
// export function getMusicList(id){
//   return request({
//     url:"https://api.mlwei.com/music/api/wy/?",
//     params:{
//       key:523077333,
//       type:'songlist',
//       cache:1,
//       id:id
//     }
//   })
// }

// export function getMusicList(id){
//   return request({
//     url:"/api/playlist/detail",
//     // method: 'post',
//     params: {
//       id:id
//     }
//   })
// }

