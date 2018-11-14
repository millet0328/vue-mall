<template>
	<div class="content clearfix">
		<div class="navline">
			<ul class="navlist">
				<li class="navitem" @click="currentTabIndex=index;getHandle(index)" :class="{active:currentTabIndex==index}" v-for="(item,index) in navList">
					{{item}}
				</li>
			</ul>
		</div>
		<div class="listcontent">
			<ul class="itemlist clearfix">
				<li v-for="(item,index) in contentList">
					<div class="top">
						<div class="photo">
							<img src="img/list1.png" />
						</div>
						<div class="hotPoint">
							偏硬睡感更护脊，进口黄麻更环保
						</div>
					</div>
					<div class="bom">
						<div class="bar">
							<span class="icon">直降</span>
						</div>
						<div class="title">
							8H成人健康护脊床垫MH
						</div>
						<div class="price">
							<span class="priicon">￥</span>
							<span class="prinum">1699</span>
							<span class="priicon">起</span>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	//存到session
	import { setSession } from '@/assets/js/app';
	//获取session
	import { getSession } from '@/assets/js/app';
	export default {
		data() {
			return {
				currentTabIndex: 0,
				navList: ['个人护理', '时尚彩妆', '护肤馆'],
				contentList: []
			}
		},
		created() {
			
		},
		methods: {
			
		}
	}
</script>

<style scoped lang="scss">
	.navline {
		width: 375px;
		height: 40px;
		overflow: hidden;
		border-bottom: 2px solid rgb(191, 191, 192);
	}
	
	.navline .navlist {
		width: 100%;
		line-height: 40px;
	}
	
	.navline .navlist .navitem {
		float: left;
		font-size: 12px;
		width: 60px;
		text-align: center;
		line-height: 38px;
		margin: 0 6px;
		display: block;
	}
	
	.navline .navlist .navitem.active {
		border-bottom: 2px solid #C0A16B;
	}
	
	.listcontent {
		width: 100%;
	}
	
	.listcontent .itemlist {
		width: 98%;
		padding: 0 1%;
	}
	
	.listcontent .itemlist .item {
		width: 48%;
		padding: 0 1%;
		float: left;
	}
	
	.top {
		width: 100%;
	}
	
	.top .photo {
		width: 96%;
		padding: 2%;
	}
	
	.top img {
		width: 100%;
	}
	
	.hotPoint {
		background-color: rgb(245, 242, 240);
		max-width: 100%;
		width: 100%;
		height: 32px;
		color: rgb(159, 128, 82);
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
		font-size: 12px;
		line-height: 32px;
	}
	
	.bom {
		width: 100%;
		margin-top: 10px;
	}
	
	.bom .bar {
		width: 100%;
	}
	
	.bom .bar .icon {
		font-size: 10;
		padding: 1px 8px;
		color: #FFFFFF;
		background-color: rgb(247, 135, 36);
	}
	
	.bom .title {
		font-size: 13px;
		color: rgb(51, 51, 51);
		margin: 8px 0;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}
	
	.bom .price {
		width: 100%;
		text-align: left;
		color: rgb(182, 9, 9);
		font-size: 15px;
	}
	
	.bom .price .priicon {
		font-size: 10px;
	}
</style>