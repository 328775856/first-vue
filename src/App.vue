<template>
  <div id="app">
    <mynav></mynav>
    <img src="./assets/logo.png">
    <p>{{hello}}</p>
    <div><input type="text" name="" v-model="hello" placeholder="welcome！"></div>
<!--     <router-link class="router-link" to='/view1'>图片1</router-link>
    <router-link class="router-link" to='/view2'>图片2</router-link>
    <router-link class="router-link" to='/view3'>图片3</router-link>
    <router-link class="router-link" to='/view4'>图片4</router-link>
    <router-view></router-view> -->
    <router-link class="router-link" to='/pic1'>图片1</router-link>
    <router-link class="router-link" to='/pic2'>图片2</router-link>
    <router-link class="router-link" to='/pic3'>图片3</router-link>
    <router-link class="router-link" to='/pic4'>图片4</router-link>
    <br>
    <router-view></router-view>
    <bottom></bottom>
  </div>
</template>

<script>
import firstComponent from './components/first-component.vue';
import hello from './components/hello.vue';
import mynav from './components/mynav.vue';
import bottom from './components/bottom.vue'

export default {
  name: 'app',
  data () {
    return {
      hello: ''
    }
  },
  components:{firstComponent,hello,mynav,bottom},
    methods: {
      reverseMessage:function(){
        this.message=this.message.split('').reverse().join('')
      },
      clickme:function(){
          alert(this.msg)
      }
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  /*display: inline-block;*/
  margin: 0 10px;
}

a {
  color: #42b983;
}
.router-link{
  display: inline-block;
  padding: 10px;
  background: #42b983;
  color: white;
  margin:20px 0 0 0;
}
[type]{
  width: 400px;
  height: 50px;
  text-align: center;
  border: 1px solid #42b983;
  border-radius: 50px;
  background:rgba(66, 185, 131, .5);
  color: #ff5050;
}
</style>
