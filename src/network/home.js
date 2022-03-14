import {request, shopRequest} from "network/request.js"

export function getGoodList(page){
  return shopRequest({
    url:"/goods/get-goods-list",
    params:{
      appKey:'5fa0d3a407682',
      pageId:page,
      pageSize:10,
      version:'v1.2.3'
    }
  })
}
//每日爆品推荐
export function getPop(page){
  return shopRequest({
    url:"/goods/explosive-goods-list",
    params:{
      appKey:'5fa0d3a407682',
      pageId:page,
      pageSize:10,
      version:'v1.0.0'
    }
  })
}
//精选
export function getSell(page){
  return shopRequest({
    url:"/goods/exclusive-goods-list",
    params:{
      appKey:'5fa0d3a407682',
      pageId:page,
      pageSize:10,
      sort:"0",
      version:'v1.0.0'
    }
  })
}

//获取单品详情
export function getGoodsDetails(goodsId){
  return shopRequest({
    url:"/goods/get-goods-details",
    params:{
      appKey:'5fa0d3a407682',
      goodsId:goodsId,
      version:'v1.2.3'
    }
  })
}

export function getGoodsActivity(){
  return shopRequest({
    // url:"/category/get-tb-topic-list",
    url:"/goods/topic/carouse-list",
    params:{
      appKey:'5fa0d3a407682',
      pageId:"1",
      pageSize:10,
      version:'v2.0.0'
    }
  })
}

//淘宝联盟聚划算,不会使用这个的sign，以后再完善
// export function getJu(){
//   //1.创建实例
//   const instance = axios.create({
//     //baseURL:'http://123.207.32.32:8000',
//     timeout:5000
//   })
//   let a = Date.parse(new Date())
//   let time = a.toString()
//   let config = {
//     url:"http://gw.api.taobao.com/router/rest",
//     params:{
//       app_key:'31750883',
//       method:'taobao.ju.items.search',
//       sign_method:'md5',
//       timestamp: "2020-11-03 19:04:59",
//       v:'2.0',
//       param_top_item_query:"%7Bcurrent_page%3A1%7D"
//     }
//   }

//   instance.interceptors.request.use(config => {
//     console.log(config.params)
//     const secret = "96b9b13786a2c6d82f549a2c8b168069"
//     let a = secret + "app_key31750883methodtaobao.ju.items.searchparam_top_item_query{current_page:1}sign_methodmd5timestamp2020-11-03 19:04:59v2.0" + secret
//     console.log(a)
//     // let c = writeUTF(a)
//     // console.log(c)
//     let c = md5(a)
//     let d = upperCase(c)
//     console.log(d)
//     config.params.sign = d
//     // config.params.param_top_item_query = {'current_page':1}

//     console.log(config)
//     return config
//   }, err =>{
//     console.log(err);
//   });

//   //3.发送真正的网络请求
//   return instance(config)
// }
