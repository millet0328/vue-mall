<template>
	<div class="headline">
		<div class="arrow" @click="$router.go(-1)">
			<img src="../assets/img/std_tittlebar.png" />
		</div>
		<div class="text">{{title}}</div>
	</div>
</template>

<script>
	export default {
		props: ['title']
	}
</script>

<style scoped lang="scss">
	.headline {
		height: 45px;
		display: flex;
		background: white;
		position: relative;
		border-bottom: 1px solid rgb(191, 191, 192);
		.arrow {
			position: absolute;
			left: 0;
			top: 0;
			img {
				height: 45px;
				display: block;
			}
		}
		.text {
			color: rgb(51, 51, 51);
			font-size: 16px;
			text-align: center;
			flex: 1;
			line-height: 45px;
		}
	}
</style>