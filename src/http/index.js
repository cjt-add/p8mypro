import axios from 'axios'
// import { Loading } from 'element-ui';
//创建axios的实例
var instance = axios.create({
    baseURL: '',
    timeout: 6000
})
// var loadingInstance;
//请求拦截器 在发送请求之前自动的执行
instance.interceptors.request.use(
    config => {
        //alert('数据在加载的路上')
        //获取到token值
        // loadingInstance= Loading.service({ fullscreen: true });
        var token = JSON.parse(sessionStorage.getItem('token'))
        if (token) {
            //附加到请求头上
            config.headers.authorization = token
        } else {
            // alert('请先登录')
        }
        return config;
    },
    err => {
    }
)
instance.interceptors.response.use(
    response => {
        return response
    }
)
export default instance;