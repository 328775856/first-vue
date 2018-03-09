import Vue from 'vue'
import Router from 'vue-router'
import View1 from './view/view1.vue'
import View2 from './view/view2.vue'
import View3 from './view/view3.vue'
import View4 from './view/view4.vue'

import Pic1 from './pic/pic1.vue'
import Pic2 from './pic/pic2.vue'
import Pic3 from './pic/pic3.vue'
import Pic4 from './pic/pic4.vue'


Vue.use(Router)
 
export default new Router({
	linkActiveClass: 'active',
	routes: [
	{
		path: '/view1',
		component: View1
	},{
		path: '/view2',
		component: View2
	},{
		path: '/view3',
		component: View3
	},{
		path: '/view4',
		component: View4
	},/*{
		path: '/*',
		component: View1
	},*/{
		path:'/pic1',
		component:Pic1
	},{
		path:'/pic2',
		component:Pic2
	},{
		path:'/pic3',
		component:Pic3
	},{
		path:'/pic4',
		component:Pic4
	},{
		path: '/*',
		component: Pic1
	}
	]
})