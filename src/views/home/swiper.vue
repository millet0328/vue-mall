<template>
	<swiper :options="swiperOption" ref="mySwiper">
		<!-- slides -->
		<swiper-slide>
			<a href="">
				<img src="../../assets/img/img.jpeg" />
			</a>
		</swiper-slide>
		<swiper-slide>
			<a href="">
				<img src="../../assets/img/img11.jpeg" />
			</a>
		</swiper-slide>
		<swiper-slide>
			<a href="">
				<img src="../../assets/img/img111112.jpeg" />
			</a>
		</swiper-slide>
		<swiper-slide>
			<a href="">
				<img src="../../assets/img/img122121.jpeg" />
			</a>
		</swiper-slide>
		<swiper-slide>
			<a href="">
				<img src="../../assets/img/img2211.jpeg" />
			</a>
		</swiper-slide>
		<!-- Optional controls -->
		<div class="swiper-pagination" slot="pagination"></div>
	</swiper>
</template>

<script>
	export default {
		name: 'carrousel',
		data() {
			return {
				swiperOption: {
					// some swiper options/callbacks
					// 所有的参数同 swiper 官方 api 参数
					loop: true,
					spaceBetween: 30,
					centeredSlides: true,
					autoplay: {
						delay: 2500,
						disableOnInteraction: false,
					},
					pagination: {
						el: '.swiper-pagination',
						clickable: true,
					}
				}
			}
		},
		computed: {
			swiper() {
				return this.$refs.mySwiper.swiper
			}
		},
		mounted() {
			// current swiper instance
			// 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
			this.swiper.slideTo(0, 1000, false)
		}
	}
</script>

<style lang="scss">
	.board {
		position: relative;
	}
	
	.board .swiper-container {
		height: 160px;
	}
	
	.board .swiper-slide {
		text-align: right;
	}
	
	.board img {
		max-width: 100%;
	}
	
	.board .swiper-pagination-bullets {
		width: 120px;
		left: initial;
		right: 0;
	}
	
	.board .swiper-pagination-bullet {
		width: 6.5px;
		height: 6.5px;
		background: rgba(255, 255, 255, 0.5);
		opacity: 1;
		margin: 0 2px;
	}
	
	.board .swiper-pagination-bullet-active {
		background-color: rgb(255, 80, 0);
		width: 6.5px;
		height: 6.5px;
		opacity: 1;
	}
</style>