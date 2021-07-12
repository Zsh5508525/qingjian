<template>

<div>
	<van-swipe :autoplay="3000" style="height:300px">
	  <van-swipe-item v-for="(image, index) in images" :key="index">
	    <img v-lazy="image.imgUrl" />
	  </van-swipe-item>
	</van-swipe>
	<index-nav></index-nav>
	<index-list></index-list>
</div>
</template>

<script>
	
	import Vue from 'vue';
	import { Lazyload } from 'vant';
	import imgUrl1 from '../assets/img/1.jpg';
	import imgUrl2 from '../assets/img/2.jpg';
	import imgUrl3 from '../assets/img/3.jpg';
	import imgUrl4 from '../assets/img/4.jpg';
	import imgUrl5 from '../assets/img/5.jpg';
	import 'vant/lib/index.css';
	import indexList from '../components/indexList.vue';
	import indexNav from '@/components/indexNav';
	
	Vue.use(Lazyload);
	
	export default {
  	components: { indexNav,indexList, },
	  data() {
	    return {
	      images: [
	        {imgUrl:imgUrl1},
	        {imgUrl:imgUrl2},
	        {imgUrl:imgUrl3},
	        {imgUrl:imgUrl4},
	        {imgUrl:imgUrl5},
	      ],
	    };
	  },
	};

</script>

<style>
	
</style>
