<template>
	<div>
		<h1>我是view1</h1>
		<a> 我是View1 </a>
		<div>{{message}}</div>
		<div>
			<p v-if='seen'>现在你看到我了</p>
		</div>
		<ol>
			<li v-for='todo in todos'>
				{{todo.text}}
			</li>
		</ol>
	</div>
</template>

<script type="text/javascript">
import axios from 'axios'

	export default {
		name: 'view1',
		data () {
			return {
				message:"Hello World!"+new Date().toLocaleString(),
				seen:true,
				todos:[
						{text:'学习 Javascript'},
						{text:'学习 Vue'},
						{text:'学习整个项目'}
				]
			}
		},
		// methods:
		mounted:function(){
			axios.post('/user?ID=12345')
			.then(function(res){
				console.log(res);
			})
			.catch(function(res){
				console.log(res);
			})
		}
	}
</script>

<style type="text/css">
	
</style>