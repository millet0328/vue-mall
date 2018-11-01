//存储session
function setSession(key, value = '') {
	//obj=>string
	if(typeof value == 'object') {
		value = JSON.stringify(value);
	}
	sessionStorage.setItem(key, value);
}
//获取session
function getSession(key) {
	//string=>obj
	let val = sessionStorage.getItem(key);
	let value = JSON.parse(val);
	return value
}
//判断是否已登录
function isLogin() {
	let {uid} = getSession('user');
	return uid ? true : false;
}

export {
	setSession,
	getSession,
	isLogin
}