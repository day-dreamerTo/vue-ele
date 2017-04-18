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
/* eslint-disable no-new */ // 跳过校验
let app = Vue.extend(App);
var router = new VueRouter({
   linkActiveClass: 'active'
});
router.map({
  '/goods': {
    component: goods
  },
  '/ratings': {
    component: ratings
  },
  '/seller': {
    component: seller
  }
});
router.start(app, '#app');
router.go('/goods');
