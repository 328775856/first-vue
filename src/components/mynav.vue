<template>
	<ul class="mynav">
		<li v-for="item in list"><a href="javascript::void(0)">{{item.text}}</a></li>
	</ul>
</template>
<script type="text/javascript">
	export default{
		data () {
			return {
				list:[
					{text:'首页'},
					{text:'资讯'},
					{text:'关于'}
				]
			}
		}
	}
</script>

<style type="text/css">
	.mynav{
		width: 100%;
		height: 60px;
		background: black;
		margin: 0 auto;
		text-align: center;
	}
	.mynav li{
		display: inline-block;
		background: #41B883;
		margin:10px 0 0 10px;
		padding: 10px;
		border-radius: 10px;
	}
	.mynav li a{
	color: white; 
	}
</style>