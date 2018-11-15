<template>
	<div class="category">
		<!--一级分类-->
		<div class="left">
			<div class="wrapper">
				<ul class="content">
					<li @click="subCateHandle(item)" :class="{active:activeCate==item}" v-for="(item,index) in cate_1st" :key="item.id">
						{{item.name}}
					</li>
				</ul>
			</div>
		</div>
		<!--二级分类-->
		<div class="right">
			<div class="wrapper">
				<div class="content">
					<!--banner-->
					<div class="banner">
						<img src="../../assets/img/sasasz.png" />
					</div>
					<ul class="item-list">
						<li v-for="item in cate_2nd">
							<router-link :to="{ name: 'GoodsList', params: { id: item.id }}">
								<div class="pic">
									<img src="../../assets/img/qqq.png" />
								</div>
								<div class="name">{{item.name}}</div>
							</router-link>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<!--底部导航-->
		<FooterNav></FooterNav>
	</div>
</template>

<script>
	import FooterNav from '@/components/FooterNav';
	import BScroll from 'better-scroll';

	export default {
		components: {
			FooterNav
		},
		data() {
			return {
				cate_1st: [],
				//缓存激活的菜单
				activeCate: '',
				//二级菜单
				cate_2nd: []
			}
		},
		created() {
			//获取一级分类
			this.getSubCategory(1)
				.then((data) => {
					this.cate_1st = data;
					this.subCateHandle(data[0]);
				});
		},
		mounted() {
			//一级分类
			let leftScroll = new BScroll('.left .wrapper', {
				click: true
			});
			//二级分类
			let rightScroll = new BScroll('.right .wrapper', {
				click: true
			});
		},
		methods: {
			//获取下一级分类
			getSubCategory(id) {
				return this.axios
					.get('/api/category/sub/', {
						params: {
							pId: id
						}
					})
					.then((result) => {
						if(result.data.status) {
							return Promise.resolve(result.data.data);
						} else {
							alert(result.data.msg);
						}
					});
			},
			//点击一级分类
			subCateHandle(cate) {
				this.activeCate = cate;
				this.getSubCategory(cate.id)
					.then((data) => {
						this.cate_2nd = data;
					})
			}
		}
	}
</script>

<style scoped lang="scss">
	.category {
		height: 100vh;
		padding: 45px 0 51px 0;
		box-sizing: border-box;
		display: flex;
		img {
			max-width: 100%;
		}
		.right {
			flex: 1;
			.wrapper {
				height: 100%;
				overflow: hidden;
				.banner {
					height: 135.687px;
					margin-top: 20px;
				}
				.item-list {
					display: flex;
					flex-wrap: wrap;
					align-items: center;
					li {
						width: 33.3333%;
						margin-bottom: 13px;
						text-align: center;
					}
				}
			}
		}
		.left {
			height: 100%;
			width: 75px;
			text-align: center;
			.wrapper {
				height: 100%;
				overflow: hidden;
				border-right: 1px solid rgba(0, 0, 0, 0.1);
			}
			.content li {
				font-size: 12px;
				color: #333333;
				line-height: 24px;
				margin: 20px 0;
				border-left: 3px solid white;
				cursor: pointer;
				&.active {
					border-left: 3px solid #845f3f;
				}
			}
		}
	}
</style>