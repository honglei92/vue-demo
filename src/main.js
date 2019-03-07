// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//  引入全局组件

import Header from '../src/components/Header'
// 引入全局css
import '../src/assets/css/reset.css'

Vue.config.productionTip = false

//  注册

Vue.component(Header.name, Header)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
