/**
 * @author zhaodonghong
 * @fileoverview routers user.js
 * @date 2017/02/27
 */
import stroe from '../store';
import index from '../pages/user/list.vue';
import add from '../pages/user/add.vue';
import edit from '../pages/user/edit.vue';
import modpwd from '../pages/user/modpwd.vue';
export default  [
	{
		path: '/index', 
		component: index,
		redirect: () => {
			if(!stroe.state.initModule.isAdmin){
				return '/report';
			}
	      // 方法接收 目标路由 作为参数
	      // return 重定向的 字符串路径/路径对象
	    }
	},
	{
		path: '/index/:id', 
		component: index 
	},
	{
		path: '/user/edit/:name', 
		component: edit 
	},
	{
		path: '/user/add', 
		component: add 
	},
	{
		path: '/user/modpwd/:name', 
		component: modpwd 
	}
];