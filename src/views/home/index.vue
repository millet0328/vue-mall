<template>
	<div class="container">
		<searchBar></searchBar>
		<div class="board">
			<swiper></swiper>
		</div>
		<div class="gray-box"></div>
		<ul class="goods-list">
			<li>
				<a href="mi8/mi8.html">
					<div class="pic">
						<img src="../../assets/img/b4e12ce48aba2f194c4a9975ce3f643a.png" />
					</div>
					<div class="text">每日新品</div>
				</a>
			</li>
			<li>
				<a href="mi8/mi8.html">
					<div class="pic">
						<img src="../../assets/img/3bbf4ad033dcfd271d072cc1b12041d9.png" />
					</div>
					<div class="text">小米众筹</div>
				</a>
			</li>
			<li>
				<a href="">
					<div class="pic">
						<img src="../../assets/img/688_di27imjwfw4o.png" />
					</div>
					<div class="text">限时抢购</div>
				</a>
			</li>
			<li>
				<a href="">
					<div class="pic">
						<img src="../../assets/img/dd186b0f8b9bba40cbe2c57c7dad73e3.png" />
					</div>
					<div class="text">星品驾到</div>
				</a>
			</li>
			<li>
				<a href="">
					<div class="pic">
						<img src="../../assets/img/a61016fbc9aae9a18ef0bde46c56f80d.png" />
					</div>
					<div class="text">全屋智能</div>
				</a>
			</li>
		</ul>
		<div class="gray-box"></div>
		<floor title="手机"></floor>
		<div class="gray-box"></div>
		<floor title="智能"></floor>
		<div class="gray-box"></div>
		<floor title="出行"></floor>
		<!--底部导航-->
		<FooterNav></FooterNav>
	</div>
</template>

<script>
	import searchBar from './searchBar';
	import floor from "./floor";
	import swiper from "./swiper";
	import FooterNav from '@/components/FooterNav';
	export default {
		components: {
			floor,
			swiper,
			searchBar,
			FooterNav
		}
	}
</script>

<style>
	.gray-box {
		height: 10px;
		width: 100%;
		background: #EEEEEE;
	}
	
	.goods-list {
		display: flex;
	}
	
	.goods-list li {
		margin: 10px 22px 0 10px;
		text-align: center;
	}
	
	.goods-list img {
		width: 100%;
		height: 100%;
	}
	
	.goods-list .text {
		font-size: 12px;
		margin-top: 8px;
		color: rgb(102, 102, 102);
		line-height: 12px;
		font-weight: bold;
	}
</style>