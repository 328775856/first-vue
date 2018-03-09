<template>
	<ul>
		<li v-for="text in textList">{{text.msg}}</li>
	</ul>
</template>

<script type="text/javascript">
	export default{
		data () {
			return {
					textList:[
					{msg:'Copyright © 2011-2018 SegmentFault. 当前呈现版本 17.06.16'},
					{msg:'浙ICP备 15005796号-2   浙公网安备 33010602002000号 杭州堆栈科技有限公司版权所有'},
					{msg:''},
					{msg:'CDN 存储服务由 又拍云 赞助提供 '}
					]
			}
		}
	}

</script>

<style type="text/css">
	ul{
		width: 100%;
		background: rgba(0,0,0,.3);
	}
	ul li{
		padding: 10px 0;
	}

</style>