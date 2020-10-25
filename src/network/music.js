import {request} from "network/request.js"

export function getMusic(name){
  return request({
    url:"https://v1.alapi.cn/api/music/search?keyword="+name
  })
}

export function playMusic(murl){
  return request({
    url:"https://api.imjad.cn/cloudmusic/?type=song&id="+murl
  })
}
