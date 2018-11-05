<template>
	<div id="app">
		<router-view/>
	</div>
</template>
<script>
	import { setSession, getSession } from './assets/js/app';
	export default {
		components: {
			
		}
	}
</script>
<style lang="scss">
	@import './assets/css/reset.css';
	@import './assets/lib/font-awesome-4.7.0/css/font-awesome.min.css';
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
	}
	
	#nav {
		padding: 30px;
		a {
			font-weight: bold;
			color: #2c3e50;
			&.router-link-exact-active {
				color: #42b983;
			}
		}
	}
	
	.container {
		width: 100%;
		max-width: 600px;
		margin: 0 auto;
	}
</style>