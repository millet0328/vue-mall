<template>
	<div class="container">
		<div class="fixed-bar">
			<HeaderTitle title="商品列表"></HeaderTitle>
			<listtab></listtab>
		</div>
		<div class="wrapper">
			<ul class="goodsList content">
				<li v-for="item in list" class="item">
					<div class="top">
						<div class="photo">
							<img :src="item.img_md" />
						</div>
						<div class="hotPoint">
							{{item.hotPoint}}
						</div>
					</div>
					<div class="bom">
						<div class="bar">
							<span class="icon">直降</span>
						</div>
						<div class="title">
							{{item.name}}
						</div>
						<div class="price">
							<span class="priicon">￥</span>
							<span class="prinum">{{item.price}}</span>
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
	import BScroll from 'better-scroll';
	export default {
		components: {
			listtab,
			HeaderTitle
		},
		props: ['id'],
		data() {
			return {
				list: [], //商品列表
				i: 1,
				isUpLoad: false,
			}
		},
		created() {
			this.getGoodsList(1)
				.then((result) => {
					this.list = result.data.data;
				});
		},
		mounted() {
			this.$nextTick(() => {
				if(!this.scroll) {
					this.scroll = new BScroll('.wrapper', {
						click: true,
						pullDownRefresh: true, //下拉刷新
						pullUpLoad: true //上拉加载
					});
				} else {
					this.scroll.refresh();
				}
				//下拉刷新
				this.scroll.on('pullingDown', () => {
					this.isUpLoad = false;
					this.i = 1;
					this.getGoodsList(1)
						.then((result) => {
							this.list = result.data.data;
							this.scroll.finishPullDown();
							this.scroll.refresh(); //刷新组件
						});
				});
				//上拉加载
				this.scroll.on('pullingUp', () => {
					this.isUpLoad = true;
					if(this.isUpLoad) {
						this.i += 1;
						this.getGoodsList(this.i)
							.then((result) => {
								this.list = this.list.concat(result.data.data);
								this.scroll.finishPullUp();
								this.scroll.refresh(); //刷新组件
								this.isUpLoad = false;
							});
					}
				});
			});
		},
		methods: {
			//获取商品列表,i：第几页
			getGoodsList(i) {
				return this.axios.get('/api/goods/', {
					params: {
						pageIndex: i,
						pageSize: 3,
						//						cate_2nd: this.id
					}
				});
			}
		}
	}
</script>

<style scoped lang="scss">
	.container {
		position: relative;
		padding-top: 88px;
		height: 100vh;
		box-sizing: border-box;
	}
	
	.fixed-bar {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 88px;
	}
	
	.wrapper {
		height: 100%;
		overflow: hidden;
	}
	
	.goodsList {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		.item {
			width: 48%;
			margin: 0 1%;
		}
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