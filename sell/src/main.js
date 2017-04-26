import Vue from 'vue';
import VueRouter from 'vue-router';
import VueRsource from 'vue-resource';
import App from './App';

import goods from 'components/goods/goods';
import ratings from 'components/ratings/ratings';
import seller from 'components/seller/seller';

import 'common/stylus/index.styl'; // 这样只能在html中直接使用

Vue.use(VueRouter);
Vue.use(VueRsource);

const routes = [{
  path: '/',
  redirect: goods
}, {
  path: '/goods',
  component: goods
}, {
  path: '/ratings',
  component: ratings
}, {
  path: '/seller',
  component: seller
}];

const router = new VueRouter({
  linkActiveClass: 'active',
  routes
});

/* eslint-disable no-new */ // 跳过校验
new Vue({
  el: '#app',
  router,
  render: h => h(App) // h 就是一个createElement函数
});
