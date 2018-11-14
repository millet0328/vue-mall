<template>
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
</template>

<script>
</script>

<style scoped>
	.footer {
		width: 100%;
		height: 50px;
		background-color: white;
		border-top: thin solid #b0b0b0;
		position: fixed;
		z-index: 100;
		bottom: 0;
	}
	
	.footer ul {
		display: flex;
		justify-content: space-around;
		margin-top: 5px;
	}
	
	.footer li {
		text-align: center;
	}
	
	.footer li .text {
		font-size: 12px;
		color: rgb(132, 95, 63);
	}
	
	.icon {
		background: url(../assets/img/xuebi.png);
		width: 24px;
		height: 24px;
		background-size: 100%;
		display: inline-block;
	}
	
	.icon1 {
		background-position: 0 0%;
	}
	
	.router-link-exact-active .icon1 {
		background-position: 0 11.111111%;
	}
	
	.icon2 {
		background-position: 0 22.222222%;
	}
	
	.router-link-exact-active .icon2 {
		background-position: 0 33.333333%;
	}
	
	.icon3 {
		background-position: 0 44.444444%;
	}
	
	.router-link-exact-active .icon3 {
		background-position: 0 55.555556%;
	}
	
	.icon4 {
		background-position: 0 66.666667%;
	}
	
	.router-link-exact-active .icon4 {
		background-position: 0 66.666667%;
	}
	
	.icon5 {
		background-position: 0 88.888889%;
	}
	
	.router-link-exact-active .icon5 {
		background-position: 0 100%;
	}
</style>