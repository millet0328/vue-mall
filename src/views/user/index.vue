<template>
	<div class="container">
		<div class="headline">
			<a href="login.html">
				<div class="logo">
					<img src="../../assets/img/icon_default_head_portrait.png" />
				</div>
				<div class="text">
					请登录
				</div>
				<div class="arrow">
					<img src="../../assets/img/device_shop_right_arrow.png" />
				</div>
			</a>
		</div>
		<div class="my-orders">
			<a href="login.html">
				<div class="text">我的订单</div>
				<div class="arrow">
					<img src="../../assets/img/device_shop_right_arrow.png" />
				</div>
			</a>
		</div>
		<ul class="logo-list">
			<a href="login.html">
				<li>
					<img src="../../assets/img/personal_icon_paid.png" />
					<div class="text">待付款</div>
				</li>
				<li>
					<img src="../../assets/img/personal_icon_receipt.png" />
					<div class="text">待收货</div>
				</li>
				<li>
					<img src="../../assets/img/personal_icon_received_goods.png" />
					<div class="text">待评价</div>
				</li>
				<li>
					<img src="../../assets/img/personal_icon_return_goods.png" />
					<div class="text">退款订单</div>
				</li>
			</a>
		</ul>
		<div class="new-banner">
			<a href="index.html"><img src="../../assets/img/newUserBanner.png" /></a>
		</div>
		<div class="item">
			<a href="login.html">
				<div class="left">
					<div class="logo">
						<img src="../../assets/img/personal_icon_assets.png" />
					</div>
					<div class="text">我的资产</div>
				</div>

				<div class="des">优惠券/积分</div>
				<div class="arrow">
					<img src="../../assets/img/device_shop_right_arrow.png" />
				</div>
				<div class="border"></div>
			</a>
		</div>
		<div class="item">
			<a href="login.html">
				<div class="left">
					<div class="logo">
						<img src="../../assets/img/pin_logo.jpg" />
					</div>
					<div class="text">拼团订单</div>
				</div>
				<div class="arrow">
					<img src="../../assets/img/device_shop_right_arrow.png" />
				</div>
				<div class="border"></div>
			</a>
		</div>
		<div class="item item1">
			<a href="login.html">
				<div class="left">
					<div class="logo">
						<img src="../../assets/img/personal_icon_collection.png" />
					</div>
					<div class="text">我的收藏</div>
				</div>
				<div class="arrow">
					<img src="../../assets/img/device_shop_right_arrow.png" />
				</div>
			</a>
		</div>
		<div class="item">
			<router-link to="/user/address">
				<div class="left">
					<div class="logo">
						<img src="../../assets/img/personal_icon_address.png" />
					</div>
					<div class="text">地址管理</div>
				</div>
				<div class="arrow">
					<img src="../../assets/img/device_shop_right_arrow.png" />
				</div>
				<div class="border"></div>
			</router-link>
		</div>
		<div class="item">
			<a href="login.html">
				<div class="left">
					<div class="logo">
						<img src="../../assets/img/set_icon_message_new.png" />
					</div>
					<div class="text">消息中心</div>
				</div>
				<div class="arrow">
					<img src="../../assets/img/device_shop_right_arrow.png" />
				</div>
				<div class="border"></div>
			</a>
		</div>
		<div class="item item2">
			<a href="login.html">
				<div class="left">
					<div class="logo">
						<img src="../../assets/img/personal_icon_feedback.png" />
					</div>
					<div class="text">帮助与反馈</div>
				</div>
				<div class="arrow">
					<img src="../../assets/img/device_shop_right_arrow.png" />
				</div>
				<div class="border"></div>
			</a>
		</div>
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

<style lang="scss" scoped>
	.container {
		width: 100%;
		max-width: 375px;
		margin: 0 auto;
		background-color: rgb(243, 243, 243);
	}
	
	.headline {
		width: 375px;
		height: 100px;
		background: url(../../assets/img/personal_bg_top.png);
		background-position: center center;
		background-repeat: no-repeat;
		background-size: cover;
	}
	
	.headline a {
		width: 375px;
		height: 100px;
		display: block;
		display: flex;
		align-items: center;
	}
	
	.headline .logo {
		margin-left: 25px;
	}
	
	.headline .logo img {
		width: 60px;
		height: 60px;
	}
	
	.headline .text {
		color: rgb(255, 255, 255);
		font-size: 14px;
		margin-left: 20px;
	}
	
	.headline .arrow {
		margin-left: 190px;
	}
	
	.headline .arrow img {
		width: 18px;
		height: 18px;
	}
	
	.my-orders {
		width: 345px;
		height: 40px;
		padding-left: 20px;
		padding-right: 10px;
		background: white;
		margin-top: 5px;
		border-bottom: 1px solid rgb(229, 229, 229);
	}
	
	.my-orders a {
		width: 345px;
		height: 40px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	
	.my-orders .text {
		color: rgb(51, 51, 51);
		font-size: 14px;
	}
	
	.my-orders .arrow img {
		width: 15px;
		height: 15px;
	}
	
	.logo-list {
		background: white;
		width: 375px;
		height: 69px;
	}
	
	.logo-list a {
		display: block;
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 375px;
		height: 69px;
	}
	
	.logo-list li {
		width: 93.75px;
		text-align: center;
	}
	
	.logo-list img {
		width: 23px;
		height: 23px;
	}
	
	.logo-list .text {
		color: rgba(0, 0, 0, 0.6);
		font-size: 12px;
		margin-top: 5px;
	}
	
	.new-banner img {
		width: 375px;
		height: 83px;
	}
	
	.item {
		width: 345px;
		height: 50px;
		padding-left: 20px;
		padding-right: 10px;
		background: white;
		position: relative;
	}
	
	.item a {
		width: 345px;
		height: 50px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	
	.item a .left {
		display: flex;
		align-items: center;
	}
	
	.item .logo img {
		width: 38px;
		height: 38px;
	}
	
	.item .text {
		color: rgb(51, 51, 51);
		font-size: 14px;
	}
	
	.item .des {
		color: rgb(153, 153, 153);
		font-size: 12px;
		margin-left: 166px;
	}
	
	.item .arrow img {
		width: 15px;
		height: 15px;
	}
	
	.item .border {
		width: 365px;
		height: 1px;
		background: rgb(229, 229, 229);
		position: absolute;
		left: 0;
		bottom: 0;
	}
	
	.item1 {
		margin-bottom: 5px;
	}
</style>