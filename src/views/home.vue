<template>

<div>
	<van-swipe :autoplay="3000" style="height:200px">
	  <van-swipe-item v-for="(image, index) in images" :key="index">
	    <img class="swipeImg" :src="image" />
	  </van-swipe-item>
	</van-swipe>
	<van-grid :column-num="5">
	  <van-grid-item icon="like" text="日常商品" color="#ff3300" />
	  <van-grid-item icon="fire" text="当季热品" color="#ff0000" />
	  <van-grid-item icon="gift" text="优享商品" color="#ff0033" />
	  <van-grid-item icon="friends" text="合作商品" color="#33ff00" />
      <van-grid-item icon="shopping-cart" text="购物车" color="#0033ff" />
	</van-grid>
	<dl v-for="(list,i) in lists" :key="i">
        <dt>{{list.type}}<router-link to="shopList">更多</router-link></dt>
        <dd v-for="(shop,index) in list.shops" :key="index">
            <van-card
            :num="shop.num"
            :price="shop.price.toFixed(2)"
            :desc="shop.desc"
            :title="shop.title"
            :origin-price="shop.originPrice"
            :thumb="shop.thumb"
            >
                <template #tags>
                    <van-tag plain type="danger">标签</van-tag>
                    <van-tag plain type="danger">标签</van-tag>
                </template>
                <template #footer>
                    <van-button size="mini">按钮</van-button>
                    <van-button size="mini">按钮</van-button>
                </template>

            </van-card>
            <van-divider />
        </dd>
        
    </dl>
</div>
</template>

<script>
	import axios from 'axios';
	export default {
	  data() {
	    return {
	      images: [
	        require('../assets/img/1.jpg'),
	        require('../assets/img/2.jpg'),
	        require('../assets/img/3.jpg'),
	        require('../assets/img/4.jpg'),
	        require('../assets/img/5.jpg'),
	        
	      ],
		  lists:'',
	    };
	  },
	  created(){
		  axios.get('http://localhost:1111/xxx').then( a=>{
			  console.log(a.data);
			  this.lists = a.data;
		  })
	  }
	};

</script>

<style>
	.swipeImg{
		width: 100%;
	}
	dt{
        display: flex;
        font-weight: bold;
        padding: 8px 16px;
        justify-content: space-between;
    }
    dt a{
        font-size: 0.8rem;
        color: #000;
        font-weight: normal;
    }
</style>
