import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'

axios.defaults.baseURL = 'https://we-are-innov-default-rtdb.europe-west1.firebasedatabase.app'

//set global headers
axios.defaults.headers.common['Auth'] = 'Authentication'
axios.defaults.headers.get['Accepts'] = 'application/json'

const reqInterceptor = axios.interceptors.request.use(config => {
    console.log('Request Interceptor', config);
    //to set a specific request header
    // config.headers['SOMETHING'];
    return config
})

const resInterceptor = axios.interceptors.response.use(res => {
    console.log('Response Interceptor', res);
    return res
})

//to remove requests and responses
axios.interceptors.request.eject(reqInterceptor)
axios.interceptors.response.eject(resInterceptor)

createApp(App).use(store).use(router).mount('#app')