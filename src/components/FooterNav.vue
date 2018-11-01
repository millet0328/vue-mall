<template>
	<div class="footer-fixed">
		<div class="footer">
			<ul>
				<li>
					<router-link to='/'>
						<div class="icon icon1"></div>
						<div class="text">首页</div>
					</router-link>
				</li>
				<li>
					<router-link to='/classify'>
						<div class="icon icon2"></div>
						<div class="text">分类</div>
					</router-link>
				</li>
				<li>
					<router-link to='/taste'>
						<div class="icon icon3"></div>
						<div class="text">品味</div>
					</router-link>
				</li>
				<li>
					<router-link to='/cart'>
						<div class="icon icon4"></div>
						<div class="text">购物车</div>
					</router-link>
				</li>
				<li>
					<router-link to='/user'>
						<div class="icon icon5"></div>
						<div class="text">个人</div>
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
</script>

<style>
	.footer-fixed {
		width: 100%;
		height: 50px;
		background-color: white;
	}
	
	.footer-fixed .footer {
		width: 100%;
		height: 50px;
		background-color: white;
		border-top: thin solid #b0b0b0;
		position: fixed;
		z-index: 100;
		bottom: 0;
	}
	
	.footer-fixed .footer ul {
		display: flex;
		justify-content: space-around;
		margin-top: 5px;
	}
	
	.footer-fixed .footer li {
		text-align: center;
	}
	
	.footer-fixed .footer li .text {
		font-size: 12px;
		color: rgb(132, 95, 63);
	}
	
	.footer-fixed .icon {
		background: url(../assets/img/xuebi.png);
		width: 24px;
		height: 24px;
		background-size: 100%;
		display: inline-block;
	}
	
	.footer-fixed .icon1 {
		background-position: 0 0%;
	}
	
	.footer-fixed .router-link-exact-active .icon1 {
		background-position: 0 11.111111%;
	}
	
	.footer-fixed .icon2 {
		background-position: 0 22.222222%;
	}
	
	.footer-fixed .router-link-exact-active .icon2 {
		background-position: 0 33.333333%;
	}
	
	.footer-fixed .icon3 {
		background-position: 0 44.444444%;
	}
	
	.footer-fixed .router-link-exact-active .icon3 {
		background-position: 0 55.555556%;
	}
	
	.footer-fixed .icon4 {
		background-position: 0 66.666667%;
	}
	
	.footer-fixed .router-link-exact-active .icon4 {
		background-position: 0 66.666667%;
	}
	
	.footer-fixed .icon5 {
		background-position: 0 88.888889%;
	}
	
	.footer-fixed .router-link-exact-active .icon5 {
		background-position: 0 100%;
	}
</style>