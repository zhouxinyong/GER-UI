import './css/main.css';
import './css/user.css';
import Vue from 'vue';
import App from './app.vue';
import store from './store';
import vueRouter from 'vue-router';
import drouters from './routers';
Vue.use(vueRouter);
const router = new vueRouter({
	hashbang: false, 
	mode:'history',
  	routes: drouters
})
router.beforeEach((to, from, next) => {
  console.log(to);
  console.log(from);
  next();
})

let vueApp = new Vue({
	store,
    el: '#ger-ui',
   	...App,
   	router
});