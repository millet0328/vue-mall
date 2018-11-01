<template>
	<div class="tab">
		<ul class="title">
			<li @click="currentTabIndex=index" :class="{active:currentTabIndex==index}" v-for="(item,index) in tabs">{{item.title}}</li>
		</ul>
		<ul class="content">
			<li v-show="currentTabIndex==index" v-for="(item,index) in tabs">{{item.content}}</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				currentTabIndex: 0,
				tabs: [{
					title: '男装',
					content: '衬衣、西装'
				}, {
					title: '女装',
					content: '裙子、外套'
				}, {
					title: '美妆',
					content: '化妆品、洗漱用品'
				}]
			}
		},
	}
</script>

<style lang="scss">
	.tab {
		display: flex;
		ul {
			margin: 0;
			padding: 0;
			list-style: none;
		}
		.content li {
			padding: 20px;
			border-left: 1px solid #999999;
			min-height: 300px;
			margin-left: 10px;
		}
	}
	
	.title li {
		border: 1px solid #EEEEEE;
		padding: 6px 20px;
		font-size: 14px;
		margin: 6px 0;
		color: #666;
		&.active {
			border: 1px solid blue;
		}
	}
</style>