import Vue from 'vue'
import App from './App.vue'
import router from './router'
//swiper
import './assets/lib/swiper/swiper.css';
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper);
//axios
import axios from 'axios'
import VueAxios from 'vue-axios'
//配置默认header
axios.defaults.headers.common['cywlfw-data'] = 'wechat';
Vue.use(VueAxios, axios)

Vue.config.productionTip = true

new Vue({
	router,
	render: h => h(App)
}).$mount('#app')