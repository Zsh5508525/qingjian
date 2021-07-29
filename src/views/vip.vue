<template>
<div class="top">
    <van-cell is-link to="editPerson">
        <dl>
            <dt><img :src="head" alt=""></dt>
            <dd>
                <h3>{{userName}}<span>{{userVip}}</span></h3>
                <p>编号：{{userNumber}}</p>
                <p>加入时间:{{date}}</p>
            </dd>
        </dl>
    </van-cell>
    <div style="padding:5px">
        <p>团队人数：<span class="white">(10/20)</span></p>
        <van-progress :percentage="50" stroke-width="20" />
    </div>
    <div style="padding:5px">
        <p>奖励金额：<span class="white">(1000/5000)</span></p>
        <van-progress :percentage="20" stroke-width="20" />
    </div>
</div>
</template>

<script>

import head from '../assets/logo.png';
import Vue from 'vue';
import { Cell } from 'vant';
import { Progress } from 'vant';

Vue.use(Progress);
Vue.use(Cell);

export default {
    data(){
        return{
            loading:true,
            userName:'微信号',
            userVip:'会员',
            userNumber:'XM0001',
            date:'2018-08-19',
            head,
        }
        
    },
     mounted() {
        this.loading = false;
    },
}
</script>

<style scoped>
    .white{
        color: #ffffff;
        font-size: 0.8rem;
    }
    .top{
        background-color: #1bc7bc;
    }
    .van-progress{
        background: #fff;
        border-radius: 8px;
    }
    .van-cell{
        background-color: transparent;
    }
    .van-cell--clickable:active{
         background-color: transparent;
    }
    dt,dd{
        display: inline-block;
        vertical-align: top;
    }
    dt{
        height: 80px;
    }
    dt img{
        border-radius: 50%;
        width: 80px;
        height: 80px;
        border: 5px solid #3cdacf;
        box-sizing: border-box;
    }
    dd{
        display: inline-flex;
        flex-direction: column;
        justify-content: space-between;
        height: 80px;
        box-sizing: border-box;
        padding: 10px 0;
        font-size: 0.8rem;
        line-height: 1rem;
        color: #fff;
    }
    dd span{
        color: rgb(197, 197, 47);
    }
    .van-progress{
        border-radius: 1em;
    }
    .van-cell__right-icon{
        line-height: 80px;
        font-size: 30px;
        color: #fff;
    }
</style>
<style>
    
    .van-progress__pivot{
        line-height: 20px;
        left: 0!important;
        right: 0;
    }
</style>
