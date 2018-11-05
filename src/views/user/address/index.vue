<template>
	<div class="container">
		<ul class="adjblock">
			<li class="shippingaddress active">
				<div class="nav clearfix">
					<a href="../confirm/confirm.html">
						<i class="fa fa-chevron-left fl"></i>
					</a>
					<span>收货地址</span>
				</div>
				<div class="addressbox">
					<ul id="itemlist" class="itemlist">
						<li v-for="item in list" class="item clearfix">
							<div class="addresscon pull-left">
								<div class="top clearfix">
									<div id="newname" class="name pull-left">
										{{item.name}}
									</div>
									<div class="tel pull-right">
										{{item.tel}}
									</div>
								</div>
								<div class="bot">
									<div class="adres">
										<span>{{item.province}}省{{item.city}}市{{item.area}}</span>
										<span class="address">{{item.street}}</span>
									</div>
									<div class="postnum">
										266041
									</div>
								</div>
							</div>
							<div class="edit pull-right">
								<img class="editicon" id="edit" src="../../../assets/img/address_icon_editor.png" />
							</div>
						</li>
					</ul>
					<button id="addbtn" class="addbtn">+添加地址 </button>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	import { getSession } from '@/assets/js/app';
	export default {
		data() {
			return {
				list: [],
				msg: ''
			}
		},
		created() {
			//初始数据获取
			this.axios.get('/users/addressList', {
				params: {
					uid: getSession('uid')
				}
			}).then((result) => {
				if(result.data.status) {
					this.list = result.data.data
				} else {
					this.msg = result.data.msg;
				}
			})
		},
	}
</script>

<style lang="scss" scoped>
	.nav {
		font-size: 4.2vw;
		position: fixed;
		top: 0;
		z-index: 10;
		width: 100%;
		height: 12vw;
		line-height: 12vw;
		background-color: white;
		border-bottom: 2px solid rgb(191, 191, 192);
	}
	
	.nav .fa-chevron-left {
		margin-left: 10px;
	}
	
	.nav span {
		margin-left: 36vw;
	}
	
	.adjblock li {
		display: none;
	}
	
	.adjblock li.active {
		display: block;
	}
	/*收货地址*/
	
	.addressbox {
		width: 100%;
		height: 160.47vw;
		margin-top: 12vw;
	}
	
	.addressbox .itemlist {
		width: 100%;
		height: 88%;
		margin: 0;
	}
	
	.addressbox .addbtn {
		width: 92vw;
		margin: 2vw 4vw;
		text-align: center;
		color: rgb(132, 95, 63);
		border: 1px solid rgb(132, 95, 63);
		border-radius: 4px;
		font-size: 3.73vw;
		background-color: #FFFFFF;
		padding: 13px;
	}
	
	.addressbox .itemlist .item {
		display: block;
		width: 100%;
		border-bottom: 1px solid rgb(229, 229, 229);
	}
	
	.addressbox .item .addresscon {
		width: 80%;
		height: 26.67vw;
		padding: 3%;
	}
	
	.addressbox .item .addresscon .top {
		font-size: 4vw;
	}
	
	.addressbox .item .addresscon .bot {
		font-size: 3.2vw;
		margin-top: 10px;
	}
	
	.addressbox .item .edit {
		width: 14%;
		height: 26.67vw;
		line-height: 26.67vw;
		text-align: center;
	}
	
	.addressbox .item .edit img {
		display: inline-block;
		width: 4.53vw;
	}
</style>