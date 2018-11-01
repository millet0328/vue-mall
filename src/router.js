import Vue from 'vue'
import Router from 'vue-router';
//导入页面级组件
import Home from './views/home/index.vue'
import Classify from './views/classify/index.vue'
import Taste from './views/taste/index.vue'
import Cart from './views/cart/index.vue'
import User from './views/user/index.vue'
import UserOrder from './views/user-order/index.vue'
import Login from './views/login/index.vue'
import Register from './views/register/index.vue'

Vue.use(Router)

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [{
		path: '/',
		name: 'home',
		component: Home
	}, {
		path: '/classify',
		name: 'classify',
		component: Classify
	}, {
		path: '/taste',
		name: 'taste',
		component: Taste
	}, {
		path: '/cart',
		name: 'cart',
		component: Cart
	}, {
		path: '/user',
		name: 'user',
		component: User
	}, {
		path: '/user/order',
		name: 'userOrder',
		component: UserOrder
	}, {
		path: '/login',
		name: 'login',
		component: Login
	}, {
		path: '/register',
		name: 'register',
		component: Register
	}]
})