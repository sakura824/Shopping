import axios from 'axios'

export function request(config) {
  const instance = new axios.create({
   //home/data?type=pop&page=2
    baseURL:'http://152.136.185.210:7878/api/hy66', //默认路径
    timeout: 5000
  });

  // 请求拦截器
  instance.interceptors.request.use(config => {
    //拦截后需要将拦截下来的请求数据返回发送
    return config;
  }, err => {
    console.log(err);
  })

  // 响应拦截器
  instance.interceptors.response.use(res => {
    // 拦截后需要将拦截下来处理成的结果返回
    return res.data
  }, err => {
    console.log(err)
  })
  // 发送网络请求
  return instance(config)
}
