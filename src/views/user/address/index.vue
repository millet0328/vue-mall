<template>
	<div class="container">
		<HeaderTitle title="收货地址"></HeaderTitle>
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
								{{item.code}}
							</div>
						</div>
					</div>
					<div class="action pull-right">
						<router-link :to="{ name: 'UserAddressEdit', params: { id: item.id }}">
							<img class="edit" src="../../../assets/img/address_icon_editor.png" />
						</router-link>
						<div @click="deleteHandle(item.id)" class="del">×</div>
					</div>
				</li>
			</ul>
		</div>
		<router-link class="addbtn" to="/user/address/add">+添加地址</router-link>
	</div>
</template>

<script>
	import { getSession } from '@/assets/js/app';
	import HeaderTitle from "@/components/HeaderTitle";
	export default {
		data() {
			return {
				list: [],
				msg: ''
			}
		},
		components: {
			HeaderTitle
		},
		created() {
			this.getAddressList();
		},
		methods: {
			getAddressList: function() {
				//初始数据获取
				this.axios.get('/users/address/list', {
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
			//删除收货地址
			deleteHandle: function(id) {
				this.axios.post("/users/address/delete/", {
						id: id
					})
					.then((result) => {
						if(result.data.status) {
							//方法一：数组删除
							//方法二：重新获取数据
							this.getAddressList();
						} else {
							alert(result.data.msg);
						}
					})
			}
		}
	}
</script>

<style lang="scss" scoped>
	/*收货地址*/
	
	.addressbox {
		width: 100%;
	}
	
	.addressbox .itemlist {
		width: 100%;
		height: 88%;
		margin: 0;
	}
	
	.addbtn {
		position: fixed;
		bottom: 2vw;
		left: 0;
		right: 0;
		width: 85vw;
		margin: 0 auto;
		text-align: center;
		color: rgb(132, 95, 63);
		border: 1px solid rgb(132, 95, 63);
		border-radius: 4px;
		font-size: 3.73vw;
		background-color: #FFFFFF;
		padding: 13px;
		display: block;
	}
	
	.addressbox .itemlist .item {
		display: block;
		width: 100%;
		border-bottom: 1px solid rgb(229, 229, 229);
	}
	
	.addressbox .item .addresscon {
		width: 80%;
		padding: 3%;
	}
	
	.addressbox .item .addresscon .top {
		font-size: 4vw;
	}
	
	.addressbox .item .addresscon .bot {
		font-size: 3.2vw;
		margin-top: 10px;
	}
	
	.addressbox .item .action {
		width: 14%;
		line-height: 48px;
		text-align: center;
		.del {
			font-size: 21px;
			color: #CCCCCC;
		}
	}
	
	.addressbox .item .action img {
		display: inline-block;
		width: 4.53vw;
	}
</style>