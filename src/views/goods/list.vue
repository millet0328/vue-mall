<template>
	<div class="container">
		<HeaderTitle title="商品列表"></HeaderTitle>
		<listtab></listtab>
		<div class="listcontent">
			<ul class="itemlist clearfix">
				<li class="item">
					<div class="top">
						<div class="photo">
							<img src="../../assets/img/d5961b4e4c32cddc6aaeecc28ac31f2b.png" />
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
	import listtab from "./listtab";
	import HeaderTitle from "@/components/HeaderTitle";
	export default {
		components: {
			listtab,
			HeaderTitle
		}
	}
</script>

<style scoped lang="scss">
	@charset "utf-8";
	* {
		padding: 0;
		margin: 0;
		list-style: none;
		text-decoration: none;
	}
	
	::-webkit-scrollbar {
		width: 0;
		height: 0;
	}
	
	.container {
		width: 100%;
		max-width: 375px;
		margin: 0 auto;
		padding: 0;
	}
	
	.listhead .headline {
		height: 45px;
		display: flex;
		background: white;
	}
	
	.listhead .headline img {
		width: 39px;
		height: 100%;
	}
	
	.listhead .headline .text {
		color: rgb(51, 51, 51);
		font-size: 16px;
		width: 285px;
		text-align: center;
		line-height: 45px;
	}
	
	.navline {
		width: 375px;
		height: 30px;
		overflow: hidden;
	}
	
	.listcontent {
		width: 100%;
	}
	
	.listcontent .itemlist {
		width: 100%;
	}
	
	.listcontent .itemlist .item {
		width: 48%;
		margin: 0 1%;
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
		background-color: #FFFFFF;
		height: 22px;
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
	
	.item .bom .price span {
		text-align: left;
		color: rgb(182, 9, 9);
		font-size: 15px;
		float: left;
	}
	
	.item .bom .price .priicon {
		font-size: 10px;
	}
</style>