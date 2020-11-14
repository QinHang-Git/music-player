import { request, musicRequest } from "network/request.js"

export class MusicDetail {
  constructor(musicUrl, musicDetail) {
    this.url = musicUrl.data.url
    this.id = musicUrl.data.id
    this.name = musicDetail.data.songs[0].name
    this.alia = musicDetail.data.songs[0].al.name
    this.picUrl = musicDetail.data.songs[0].al.picUrl
    this.singer = musicDetail.data.songs[0].ar[0].name
  }
}
// ——————————————第一部分——音乐搜索————————————————
// 1.1搜索单曲：
export function searchMusic(name, page) {
  return musicRequest({
    url: "/search",
    params: {
      keyword: name,
      limit: 20,       //每页数量
      offset: 20 * page, //偏移
      type: 1
    }
  })
}
// ——————————————获取歌单列表————————————————————
//1.2获取5*7个歌单
export function getHomeMusicList() {
  return Promise.all([
    searchMusicList("国风"),
    searchMusicList("抖音"),
    searchMusicList("民谣"),
    searchMusicList("青春"),
    searchMusicList("轻音乐"),
  ])
}
// 1.2搜索歌单
export function searchMusicList(name) {
  return musicRequest({
    url: "/search",
    params: {
      keyword: name,
      limit: 7,       //每页数量
      offset: Math.floor(Math.random() * 10) + 1,
      type: 1000
    }
  })
}
// 1.3获取歌曲详情
export function getMusicDetails(id) {
  return Promise.all([
    getMusicUrl(id),
    getMusicDetail(id),
  ])
}
// 1.3.1获取单曲URL
export function getMusicUrl(id) {
  return musicRequest({
    url: "/url",
    params: {
      id: id,
      format: 'json'
    }
  })
}
// 1.3.2获取音乐详情
export function getMusicDetail(id) {
  return musicRequest({
    url: "/detail",
    params: {
      id: id,
    }
  })
}
// 1.5歌曲评论
export function getMusicComment(id, page) {
  return musicRequest({
    url: "/comment/hot",
    params: {
      id: id,
      limit: 10,       //每页数量
      offset: 10 * page, //偏移
      type: 0
    }
  })
}
// 1.6————————————————获取歌单(根据歌单ID)————————————————————————
export function getMusicList(id) {
  return request({
    url: "https://api.imjad.cn/cloudmusic/",
    params: {
      type: 'playlist',
      id: id
    }
  })
}
// ————————————————获取音乐MV————————————————
export function getMusicMV(id) {
  return request({
    url: "https://api.imjad.cn/cloudmusic/",
    params: {
      type: "mv",
      id: id
    }
  })
}



// ————————————————获取音乐详情————————————————







//歌单备用api，不稳定
export function getHomeMusicList2() {
  return Promise.all([
    getMusicListId2("国风"),
    getMusicListId2("抖音"),
    getMusicListId2("民谣"),
    getMusicListId2("青春"),
    getMusicListId2("轻音乐"),
  ])
}
export function getMusicListId2(name) {
  return request({
    url: "https://api.imjad.cn/cloudmusic/",
    params: {
      type: 'search',
      search_type: 1000,
      s: name,
      // limit:7, //每页数量
    }
  })
}
