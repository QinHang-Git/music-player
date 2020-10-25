import axios from 'axios'

//一般使用
export function request(config){
  //1.创建实例
  const instance = axios.create({
    //baseURL:'http://123.207.32.32:8000',
    timeout:5000
  })

  //2.axios拦截器
  // 2.1请求拦截
  // instance.interceptors.request.use(config => {
  //   //拦截后进行处理
  //   //1.比如说config中的一些内容不符合服务器的要求

  //   //2.比如每次发送网络请求时，都希望在界面中显示一个请求图标
  //   //3.某些网络请求（比如登录(token)），必须携带一些特殊的信息
  //   //console.log(config);

  //   //处理后进行返回
  //   return config
  // }, err =>{
  //   console.log(err);
  // });
  // // 2.2响应拦截
  // instance.interceptors.response.use(res => {
  //   //console.log(res)
  //   //对结果进行处理
  //   return res.date
  // }, err=>{
  //   console.log(err)
  // });

  //3.发送真正的网络请求
  return instance(config)
}
