<template>
  <div>
    <img :src="imgUrl1" style="height:230px;width:100%"/>
    <van-tabbar router :fixed="fixed">
        <van-tabbar-item name="peer-pay" icon="peer-pay" badge="">待付款</van-tabbar-item>
        <van-tabbar-item name="send-gift" icon="send-gift-o" badge="">待发货</van-tabbar-item>
        <van-tabbar-item name="logistics" icon="logistics" badge="">待收货</van-tabbar-item>
        <van-tabbar-item name="sign" icon="sign" badge="">已完成</van-tabbar-item>
    </van-tabbar>
    <van-cell title="我的订单" is-link to="index" icon="description" />
    <van-cell title="我的钱包" is-link to="index" icon="balance-o" />
    <van-cell title="购物车" is-link to="index" icon="cart-o" />
    <van-cell title="我的会员卡" is-link to="index" icon="vip-card" />
    <van-cell title="我的优惠券" is-link to="index" icon="coupon-o" />
    <van-cell title="公告" is-link to="index" icon="volume-o" />
    <div style="padding:0 30px"><van-button round type="info" block @click="outLogin">退出登录</van-button></div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Tabbar, TabbarItem,Cell, CellGroup ,Button} from 'vant';
import imgUrl1 from '../assets/img/1.jpg';
import { Dialog } from 'vant';

Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Button);
export default {
    name:'personal',
    data(){
        return{
             fixed:false,
             imgUrl1:imgUrl1
        }
    },
    methods:{
      outLogin(){
        console.log("1");
        Dialog.confirm({
        message: '是否要退出登录',
      })
        .then(() => {
          // on confirm
          this.$router.replace('login');
        })
        .catch(() => {
          // on cancel
        });

      }
    }
}
</script>

<style>
  .van-tabbar-item--active{
    color: rgb(34, 201, 145);
  }
  .van-icon-arrow{
      float: right;
  }
  .van-button--round{
    margin-top: 30px;
    background: #1bc7bc;
    border: 0;
  }
</style>