<template>
  <van-grid :column-num="5">
	  <van-grid-item icon="like" text="日常商品" color="#ff3300" />
	  <van-grid-item icon="fire" text="当季热品" color="#ff0000" />
	  <van-grid-item icon="gift" text="优享商品" color="#ff0033" />
	  <van-grid-item icon="friends" text="合作商品" color="#33ff00" />
      <van-grid-item icon="shopping-cart" text="购物车" color="#0033ff" />
	</van-grid>
</template>

<script>

import Vue from 'vue';

import { Grid, GridItem } from 'vant';
	
Vue.use(Grid);
Vue.use(GridItem);
export default {
    name:'indexNav',
    data(){
        return{};
    }
} 

</script>

<style>

</style>