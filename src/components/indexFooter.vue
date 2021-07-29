<template>
  <van-tabbar v-model="active" @change="changeFoot">
    <van-tabbar-item name="shop" replace icon="shop-o" to="home">商城</van-tabbar-item>
    <van-tabbar-item name="friends" replace icon="friends-o" to="vip">会员</van-tabbar-item>
    <van-tabbar-item name="cluster" replace icon="cluster-o">经销商</van-tabbar-item>
    <van-tabbar-item name="user-circle" replace icon="user-circle-o" to="personal">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script>
import Vue from 'vue';
import { Tabbar, TabbarItem } from 'vant';

Vue.use(Tabbar);
Vue.use(TabbarItem);
export default {
    data(){
        return{
             active: 'shop',
        }
    },
    methods:{
      changeFoot() {
      }
    }
}
</script>

<style scoped>

  .van-tabbar-item--active{
    color: rgb(34, 201, 145);
  }
</style>