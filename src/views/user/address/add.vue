<template>

	<div class="addnewaddress">
		<HeaderTitle title="新增收货地址"></HeaderTitle>
		<div class="from">
			<div class="line">
				<div class="linecon">
					<label>收货人姓名:</label>
					<input class="name" type="text" name="" v-model="name" placeholder="请输入姓名" />
				</div>
			</div>
			<div class="line">
				<div class="linecon">
					<label>手机号码:</label>
					<input class="name" type="text" name="" v-model="tel" placeholder="请输入手机号码" />
				</div>
			</div>
			<div class="line">
				<div class="region">
					<div @click="show=true" class="PCA-box">
						<span>{{province||'省'}}</span>,
						<span>{{city||'市'}}</span>,
						<span>{{area||'区'}}</span>
					</div>
					<i class="fa fa-chevron-right"></i>
				</div>
			</div>
			<div class="line">
				<div class="linecon">
					<label>街道地址:</label>
					<input class="name" type="text" name="" v-model="street" placeholder="请输入街道地址" />
				</div>
			</div>
			<div class="line">
				<div class="linecon last">
					<label>邮政编码:</label>
					<input class="name" type="text" name="" v-model="code" placeholder="请输入邮政编码" />
				</div>
			</div>
			<div class="default">
				<span @click="isDefault = isDefault?0:1" class="set" :class="{active:isDefault}"></span>
				<span>设为默认地址</span>
			</div>
		</div>
		<button @click="saveHandle" class="save">保存新地址</button>
		<!--省市区-->
		<transition name="translateUp">
			<div v-show="show" class="bg">
				<v-distpicker type="mobile" :province='province' :city='city' :area='area' @selected="onSelected"></v-distpicker>
			</div>
		</transition>
	</div>
</template>

<script>
	import { getSession } from "@/assets/js/app";
	import HeaderTitle from "@/components/HeaderTitle";
	import VDistpicker from 'v-distpicker'
	export default {
		data() {
			return {
				name: '',
				tel: '',
				province: '',
				city: '',
				area: '',
				street: '',
				code: '',
				isDefault: 1,
				show: false,
			}
		},
		components: {
			HeaderTitle,
			VDistpicker
		},
		methods: {
			//三级联动
			onSelected(data) {
				this.province = data.province.value;
				this.city = data.city.value;
				this.area = data.area.value;
				this.show = false;
			},
			//保存新地址
			saveHandle: function() {
				this.axios.post('/users/address/add/', {
						uid: getSession('uid'),
						name: this.name,
						tel: this.tel,
						province: this.province,
						city: this.city,
						area: this.area,
						street: this.street,
						code: this.code,
						isDefault: this.isDefault,
					})
					.then((result) => {
						if(result.data.status) {
							this.$router.push('/user/address/');
						} else {
							alert(result.data.msg);
						}
					});
			}
		}
	}
</script>

<style lang="scss" scoped>
	/*新增地址*/
	
	.addnewaddress {
		width: 100%;
		height: 100vh;
		background-color: #EEEEEE;
	}
	
	.addnewaddress .from {
		width: 100%;
		margin: 0;
	}
	
	.addnewaddress .save {
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
	
	.addnewaddress .line {
		background-color: #FFFFFF;
		color: rgb(51, 51, 51);
		width: 100%;
		box-sizing: border-box;
		padding: 0 5.3vw;
	}
	
	.PCA-box {
		display: flex;
		width: 70%;
		align-items: center;
		justify-content: space-between;
	}
	
	.addnewaddress .line .linecon {
		width: 100%;
		padding: 5.3vw 0;
		border-bottom: 1px solid rgb(191, 191, 192);
	}
	
	.addnewaddress .line .linecon.last {
		border-bottom: 0;
	}
	
	.addnewaddress .default {
		margin-top: 10px;
		background-color: #FFFFFF;
		color: rgb(51, 51, 51);
		width: 100%;
		padding: 5.3vw;
		display: flex;
		.set {
			width: 18px;
			height: 18px;
			background-color: #CCCCCC;
			display: inline-block;
			border-radius: 100%;
			text-align: center;
			margin-right: 10px;
			&::after {
				content: '√';
				color: white;
				line-height: 18px;
			}
			&.active {
				background-color: rgb(132, 95, 63);
			}
		}
	}
	
	.addnewaddress .line .region {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		padding: 5.3vw 0;
		border-bottom: 1px solid rgb(191, 191, 192);
	}
	
	.addnewaddress .line>label {
		display: inline-block;
		width: 23%;
		text-align: left;
	}
	
	.addnewaddress .line input {
		border: 0;
		/*margin-left: 10px;*/
		outline: none;
	}
	
	.distpicker-address-wrapper {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 300px;
		background-color: white;
		overflow: auto;
		transition: all 0.5s;
	}
	
	.translateUp-enter,
	.translateUp-leave-to {
		opacity: 0;
		.distpicker-address-wrapper {
			transform: translateY(100%);
		}
	}
	
	.translateUp-enter-to,
	.translateUp-leave {
		opacity: 1;
		.distpicker-address-wrapper {
			transform: translateY(0);
		}
	}
	
	.translateUp-enter-active,
	.translateUp-leave-active {
		transition: all 0.5s;
	}
	
	.bg {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.3);
	}
</style>