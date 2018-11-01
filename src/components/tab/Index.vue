<template>
	<div>
		<button class="title" :class="{active:currentTab==item}" @click="currentTab=item" v-for="item in tabs">{{item}}</button>
		<keep-alive>
			<component class="component" :is="currentTabComponent"></component>
		</keep-alive>
	</div>
</template>

<script>
	import HomeTab from './Home';
	import ClassifyTab from './Classify';
	import TasteTab from './Taste';
	export default {
		data() {
			return {
				currentTab: '首页',
				tabs: ['首页', '分类', '品味']
			}
		},
		components: {
			HomeTab,
			ClassifyTab,
			TasteTab
		},
		computed: {
			currentTabComponent: function() {
				let tabName = '';
				switch(this.currentTab) {
					case '首页':
						tabName = 'Home';
						break;
					case '分类':
						tabName = 'Classify';
						break;
					default:
						tabName = 'Taste';
						break;
				}
				return tabName + 'Tab';
			}
		}
	}
</script>

<style lang="scss">
	.title {
		border: 0;
		padding: 4px 16px;
		margin-right: 10px;
		font-size: 16px;
		border-radius: 3px;
		outline: 0;
		&.active {
			background-color: blue;
			color: white;
		}
		.component {
			margin-top: 5px;
			border: 1px solid #999999;
			padding: 20px;
			font-size: 14px;
		}
	}
</style>