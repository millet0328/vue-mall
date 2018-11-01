<template>
	<div class="products-list">
		<a href="">
			<div class="headline">
				<div>{{title}}</div>
				<div class="more">
					<span>更多</span> <img src="../../assets/img/down.png" />
				</div>
			</div>
		</a>
		<div class="banner">
			<a href=""><img src="../../assets/img/asaszzzx.png" /></a>
		</div>
		<ul>
			<li>
				<a href="">
					<div class="box">
						<div class="pic">
							<img src="../../assets/img/2d63d69d360304f493b43b3760f6cdbb.png" />
						</div>
					</div>
					<div class="des">
						小米8 屏幕指纹版
					</div>
					<div class="price">
						￥
						<span>3199</span>起
					</div>
				</a>
			</li>
			<li>
				<a href="">
					<div class="box">
						<div class="pic">
							<img src="../../assets/img/6874c0c9ab598a3fbaf7bbae5fe34ede.png" />
						</div>
						<div class="tip2">
							直降10元
						</div>
					</div>
					<div class="des">
						红米6A
					</div>
					<div class="price">
						￥
						<span>549</span>起
					</div>
				</a>
			</li>
			<li>
				<a href="">
					<div class="box">
						<div class="pic">
							<img src="../../assets/img/ba3dde926973d829cb46fef1a4f57334.png" />
						</div>
						<div class="tip3">
							直降500元
						</div>
					</div>
					<div class="des">
						小米8
					</div>
					<div class="price">
						￥
						<span>2599</span>
					</div>
				</a>
			</li>
		</ul>
		<ul>
			<li>
				<a href="">
					<div class="box">
						<div class="pic">
							<img src="../../assets/img/3aec92223d6b8e5bd3927738a4889054.png" />
						</div>
						<div class="tip1">
							5色可选
						</div>
					</div>
					<div class="des">
						小米8 青春版
					</div>
					<div class="price">
						￥
						<span>1399</span>起
					</div>
				</a>
			</li>
			<li>
				<a href="">
					<div class="box">
						<div class="pic">
							<img src="../../assets/img/ba3dde926973d829cb46fef1a4f57334.png" />
						</div>

					</div>
					<div class="des">
						小米8 SE
					</div>
					<div class="price">
						￥
						<span>1649</span>起
					</div>
				</a>
			</li>
			<li>
				<a href="">
					<div class="box">
						<div class="pic">
							<img src="../../assets/img/cdfdf7bdef478e995b4701be2a937a09.png" />
						</div>
						<div class="tip2">
							直降150元
						</div>
					</div>
					<div class="des">
						小米6X
					</div>
					<div class="price">
						￥
						<span>1199</span>起
					</div>
				</a>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		props: ['title']
	}
</script>

<style>
	.products-list .headline {
		color: black;
		height: 43px;
		padding: 0 10px;
		font-size: 16px;
		line-height: 43px;
		font-weight: bold;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	
	.products-list .headline .more {
		font-size: 11px;
		color: rgb(153, 153, 153);
	}
	
	.products-list .headline .more span {
		vertical-align: middle;
	}
	
	.products-list .headline .more img {
		width: 17px;
		height: 17px;
		vertical-align: middle;
	}
	
	.products-list .banner img {
		width: 100%;
		height: 100%;
	}
	
	.products-list ul {
		padding: 6px 10px;
		display: flex;
		justify-content: space-between;
	}
	
	.products-list li {
		width: 113px;
		height: 187px;
		overflow: hidden;
	}
	
	.products-list li .box {
		position: relative;
		height: 127px;
		width: 113px;
		border-radius: 2px;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: rgb(248, 248, 248);
	}
	
	.products-list li .box .pic {
		width: 90px;
		height: 90px;
	}
	
	.products-list li .box .pic img {
		width: 100%;
		height: 100%;
	}
	
	.products-list li .box .tip1 {
		padding-top: 5px;
		position: absolute;
		left: 4px;
		top: 4px;
		width: 14px;
		height: 50px;
		color: rgb(159, 128, 82);
		border: 1px solid rgb(159, 128, 82);
		border-radius: 2px;
		font-size: 9px;
		line-height: 11px;
		text-align: center;
	}
	
	.products-list li .box .tip2 {
		position: absolute;
		bottom: 0;
		left: 0;
		border-radius: 1px;
		background-color: rgb(217, 112, 112);
		color: white;
		height: 16px;
		font-size: 9px;
		padding: 0 4px;
	}
	
	.products-list li .box .tip3 {
		position: absolute;
		bottom: 0;
		left: 0;
		border-radius: 1px;
		background-color: rgb(225, 134, 98);
		color: white;
		height: 16px;
		font-size: 9px;
		padding: 0 4px;
	}
	
	.products-list li .des {
		width: 109px;
		margin-top: 5px;
		font-size: 14px;
		color: rgb(51, 51, 51);
		line-height: 16px;
		max-height: 34px;
		overflow: hidden;
	}
	
	.products-list li .price {
		color: rgb(182, 9, 9);
		font-size: 10px;
	}
	
	.products-list li .price span {
		font-size: 15px;
	}
</style>