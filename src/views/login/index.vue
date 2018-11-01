<template>
	<div class="container">
		<div class="logo">
			<img src="../../assets/img/logo.png" />
		</div>
		<div class="head">
			小米帐号登录
		</div>
		<div class="padding">
			<div class="num">
				<p class="wow slideInLeft">
					<span>+86</span>&nbsp;&nbsp;
					<i class="fa fa-angle-right"></i>
				</p>
				<input type="tel" name="" id="" value="" placeholder="手机号码" />
			</div>
			<div class="proof">
				<input type="number" name="" id="" value="" placeholder="短信验证码" />
				<a href="">获取验证码</a>
			</div>
			<div class="btn">
				<a href="person-login.html">
					<input type="submit" name="" id="" value="立即登录" />
				</a>
			</div>
			<div class="name-btn">
				<router-link to='/register'>注册</router-link>
			</div>
			<div class="other-login">
				<span></span>
				<p>其他方式登录</p>
				<span></span>
			</div>
			<div class="other-logo">
				<a href=""><img src="../../assets/img/assas_03.jpg" /></a>
				<a href=""><img src="../../assets/img/assas_05.jpg" /></a>
				<a href=""><img src="../../assets/img/assas_07.jpg" /></a>
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
	
</script>

<style lang="scss" scoped>
	.logo {
		text-align: center;
		margin-top: 25px;
	}
	
	.head {
		font-size: 18px;
		padding: 12px 0 20px;
		color: black;
		text-align: center;
	}
	
	.padding {
		padding: 0 30px;
	}
	
	.num,
	.proof {
		width: 100%;
		height: 35px;
		border-bottom: 1px solid #d3d3d3;
	}
	
	.proof {
		margin-top: 20px;
	}
	
	.num p {
		display: inline-block;
	}
	
	.num span {
		color: #9b9b9b;
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
	
	.proof input::-webkit-input-placeholder {
		color: #9b9b9b;
	}
	
	.proof input {
		font-size: 18px;
		outline: none;
		display: inline-block;
		color: #4a4a4a;
		width: 216px;
	}
	
	.proof a {
		cursor: pointer;
		color: #2ea5e5;
		font-size: 14px;
	}
	
	.btn {
		text-align: center;
		margin-top: 28px;
	}
	
	.name-btn {
		text-align: center;
		margin-top: 22px;
	}
	
	.btn input {
		width: 100%;
		height: 46px;
		font-size: 18px;
		line-height: 46px;
		border-radius: 6px;
		border: none;
		outline: none;
		background: #ff6700;
		color: white;
	}
	
	.name-btn a {
		width: 100%;
		height: 46px;
		font-size: 18px;
		line-height: 46px;
		border-radius: 6px;
		border: 1px solid #d3d3d3;
		background: white;
		color: black;
		display: inline-block;
	}
	
	.other-login {
		margin-top: 50px;
	}
	
	.other-login p {
		display: inline-block;
		vertical-align: middle;
		color: #9b9b9b;
	}
	
	.other-login span {
		display: inline-block;
		width: 118px;
		background: #d3d3d3;
		height: 1px;
		vertical-align: middle;
	}
	
	.other-logo {
		text-align: center;
		margin-top: 20px;
	}
	
	.other-logo img {
		margin-right: 10px;
	}
	
	.fonts {
		margin-top: 80px;
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