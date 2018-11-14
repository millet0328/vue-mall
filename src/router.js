import Vue from 'vue'
import Router from 'vue-router';
import { isLogin } from '@/assets/js/app';
//导入页面级组件
import Home from './views/home/index.vue'
import Classify from './views/classify/index.vue'
import Taste from './views/taste/index.vue'
import Cart from './views/cart/index.vue'
import User from './views/user/index.vue'
import UserOrder from './views/user/order/index.vue'
import UserAddress from './views/user/address/index.vue'
import UserAddressAdd from './views/user/address/add.vue'
import UserAddressEdit from './views/user/address/edit.vue'
import Login from './views/login/index.vue'
import Register from './views/register/index.vue'
import GoodsList from './views/goods/list.vue'

Vue.use(Router)

let router = new Router({
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
		path: '/goods/list/:id',
		name: 'GoodsList',
		component: GoodsList
	}, {
		path: '/cart',
		name: 'cart',
		component: Cart
	}, {
		path: '/user',
		name: 'user',
		component: User,
		meta: {
			requiresAuth: true
		}
	}, {
		path: '/user/order',
		name: 'userOrder',
		component: UserOrder,
		meta: {
			requiresAuth: true
		}
	}, {
		path: '/user/address',
		name: 'userAddress',
		component: UserAddress,
		meta: {
			requiresAuth: true
		}
	}, {
		path: '/user/address/add',
		name: 'UserAddressAdd',
		component: UserAddressAdd,
		meta: {
			requiresAuth: true
		}
	}, {
		path: '/user/address/edit/:id',
		name: 'UserAddressEdit',
		component: UserAddressEdit,
		props: true,
		meta: {
			requiresAuth: true
		}
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
//全局导航守卫
router.beforeEach((to, from, next) => {
	if(to.matched.some(record => record.meta.requiresAuth)) {
		// this route requires auth, check if logged in
		// if not, redirect to login page.
		if(!isLogin()) {
			next({
				path: '/login',
				query: {
					redirect: to.fullPath
				}
			})
		} else {
			next()
		}
	} else {
		next() // 确保一定要调用 next()
	}
});

export default router