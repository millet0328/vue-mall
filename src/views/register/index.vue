<template>
	<div class="container">
		<div class="head">
			注册小米帐号
		</div>
		<div class="padding">
			<div class="place">
				<span>中国</span>
				<i class="fa fa-angle-right"></i>
			</div>
			<div class="place-des">
				成功注册帐号后，国家/地区将不能被修改
			</div>
			<div class="num">
				<span>+86</span>&nbsp;&nbsp;
				<i class="fa fa-angle-right"></i>
				<input type="tel" class="tel" name="" v-model='tel' placeholder="请输入手机号码" />
			</div>
			<div class="num">
				<span>密码 </span>
				<i class="fa fa-angle-right"></i>
				<input type="password" class="tel" name="" v-model="password" placeholder="请输入登录密码" />
			</div>
			<div class="btn">
				<input type="button" @click="registerHandle" :disabled="!isAgree" name="" id="" value="立即注册" />
			</div>
			<div class="agree">
				<i class="fa fa-check-circle i1" @click="isAgree=!isAgree" :class="{agreed:isAgree}"></i>
				<i class="fa fa-circle-thin i2"></i>
				<span>注册帐号即表示您同意并愿意遵守小米</span>
				<a href="">用户协议</a>和
				<a href="">隐私政策</a>
			</div>
		</div>
		<div class="fonts">
			<a href="register.html" class="active">简体</a>&nbsp;&nbsp;|&nbsp;&nbsp;
			<a href="register.html">繁体</a>&nbsp;&nbsp;|&nbsp;&nbsp;
			<a href="register.html">English</a>&nbsp;&nbsp;|&nbsp;&nbsp;
			<a href="">常见问题</a>
		</div>
	</div>
</template>
<script>
	import {setSession} from '@/assets/js/app';
	export default {
		data() {
			return {
				tel: '',
				password: '',
				//修饰
				isAgree: true
			}
		},
		methods: {
			registerHandle() {
				this.axios.post('/users/register', {
						username: this.tel,
						password: this.password
					})
					.then((result)=>{
						//存储session
						setSession('uid',result.data.data.id)
						//跳转页面
						this.$router.push('/');
					})
			}
		}
	}
</script>

<style>
	.head {
		font-size: 20px;
		padding: 35px 0 20px;
		color: black;
		text-align: center;
	}
	
	.padding {
		padding: 0 30px;
	}
	
	.place {
		width: 100%;
		height: 35px;
		border-bottom: 1px solid #d3d3d3;
		margin-top: 38px;
	}
	
	.place span {
		color: black;
		font-size: 17px;
		text-align: left;
		width: 288px;
		display: inline-block;
	}
	
	.place i {
		font-size: 22px;
		color: #9b9b9b;
		text-align: right;
	}
	
	.place-des {
		color: #9b9b9b;
		font-size: 12px;
		margin-top: 6px;
	}
	
	.num {
		width: 100%;
		height: 35px;
		border-bottom: 1px solid #d3d3d3;
		margin-top: 40px;
	}
	
	.num span {
		color: black;
		font-size: 17px;
	}
	
	.num i {
		font-size: 22px;
		color: #9b9b9b;
	}
	
	.num input {
		font-size: 18px;
		outline: none;
		margin-left: 5px;
		display: inline-block;
		color: #4a4a4a;
	}
	
	.num input::-webkit-input-placeholder {
		color: #9b9b9b;
	}
	
	.btn {
		text-align: center;
		margin-top: 28px;
	}
	
	.btn input {
		width: 100%;
		height: 47px;
		background: #ff6700;
		font-size: 18px;
		color: white;
		line-height: 47px;
		border-radius: 6px;
		border: none;
		outline: none;
	}
	
	.btn input[disabled] {
		background: #ccc;
	}
	
	.agree {
		color: #9b9b9b;
		font-size: 12px;
		margin-top: 20px;
		position: relative;
	}
	
	.agree a {
		color: #9b9b9b;
		text-decoration: underline;
	}
	
	.agree .i1 {
		color: #EEEEEE;
		font-size: 20px;
		position: absolute;
		left: 0;
		top: -3px;
	}
	
	.agree .i1.agreed {
		color: #ff6700;
	}
	
	.agree .i2 {
		color: #9b9b9b;
		font-size: 20px;
		position: absolute;
		left: 0;
		top: -3px;
		display: none;
	}
	
	.agree span {
		display: inline-block;
		margin-left: 20px;
	}
	
	.fonts {
		margin-top: 180px;
		font-size: 14px;
		text-align: center;
		color: #9b9b9b;
	}
	
	.fonts a {
		color: #9b9b9b;
	}
	
	.fonts .active {
		color: black;
	}
</style>