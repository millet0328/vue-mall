<template>
	<div>
		用户中心
		<h3>
			<router-link to="/user/order">订单</router-link>
		</h3>
		<!--底部导航-->
		<FooterNav></FooterNav>
	</div>
</template>

<script>
	import FooterNav from '@/components/FooterNav';
	export default {
		components: {
			FooterNav
		}
	}
</script>

<style>

</style>