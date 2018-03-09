<template>
	<div id="firstComponent">
		<h1>标题：</h1>
		<a>作者：{{author}}</a>
	</div>
</template>

<script type="text/javascript">
	export default {
		data () {
			return {
				author: 'someone like you'
			}
		}
	}
</script>

<style type="text/css">
	#firstComponent h1{
		background: #f6c;
	}
</style>