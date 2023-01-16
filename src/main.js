import Vue from 'vue'
import App from './App.vue'
// import './plugins/element.js' //按需引入
import 'font-awesome/css/font-awesome.min.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI)
    // import axios from 'axios'
import service from './service.js'
import router from '../src/router'
Vue.prototype.service = service //挂载到原型 全局可以使用
Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')