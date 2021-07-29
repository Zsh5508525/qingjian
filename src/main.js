import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'vant/lib/index.css';
import {Button,Card, Cell, CellGroup, DropdownMenu, DropdownItem, Divider, Form, Field, Grid, GridItem , Swipe, SwipeItem, Search, Tag, Tabbar, TabbarItem, } from 'vant';

Vue.use(Button).use(Card).use(Cell).use(CellGroup).use(Divider).use(DropdownMenu).use(DropdownItem).use(Form).use(Field).use(Grid ).use(GridItem).use(Swipe).use(SwipeItem).use(Search).use(Tag).use(Tabbar).use(TabbarItem);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
