<template>
	<div class="head-fixed">
		<div class="head">
			<div class="logo-left">
				<img src="../../assets/img/navi_title_v4.png" />
			</div>
			<div class="serch">
				<a href="search.html">
					<img src="../../assets/img/3331492_2093810242.png" />
					<span>小米8</span>
				</a>
			</div>
			<div class="logo-right">
				<img src="../../assets/img/std_titlebar_home_message.png" />
			</div>
		</div>
	</div>
</template>

<script>
	export default {

	}
</script>

<style lang="scss">
	.head-fixed {
		display: none;
		width: 100%;
		height: 38px;
		background-color: white;
		.head {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;
			height: 38px;
			background-color: white;
			position: fixed;
			top: 0;
			z-index: 100;
			.logo-left {
				width: 76px;
				height: 28px;
				img {
					width: 64px;
					height: 28px;
				}
			}
			.logo-right {
				width: 40px;
				height: 28px;
				text-align: center;
				img {
					width: 28px;
					height: 28px;
				}
			}
			.serch {
				position: relative;
				height: 28px;
				width: 260px;
				background-color: rgb(238, 238, 238);
				border-radius: 1.5px;
				line-height: 28px;
				a {
					display: block;
				}
				img {
					width: 13px;
					height: 13px;
					margin-left: 6px;
					display: inline-block;
					margin-bottom: 7px;
				}
				span {
					font-size: 12px;
					margin-left: 4px;
					margin-right: 6px;
					color: #999999;
					overflow: hidden;
					text-overflow: ellipsis;
					display: inline-block;
				}
			}
		}
	}
</style>