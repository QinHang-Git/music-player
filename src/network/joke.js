import {request} from "network/request.js"

export function getJoke(page){
  return request({
    url:"https://v1.alapi.cn/api/joke",
    params:{
      page:page,
      maxResult:10
    }
  })
}
export function getJdJoke(page){
  return request({
    url:"/api/dtgxt",
    params:{
      appkey:"d6d9037525ee3200fde9fdfad45c635e",
      page:2,
      maxResult:10
    }
  })
}

