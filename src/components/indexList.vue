<template>
<div>
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
import Vue from 'vue';
import { Card,Button,Tag,Divider } from 'vant';

Vue.use(Divider);
Vue.use(Card);
Vue.use(Button);
Vue.use(Tag);
export default {
    data(){
        return{
            lists:[
                {
                    type:'第一类商品',
                    shops:[
                        {id:1,num:1,desc:'商品1',title:'这是第一个商品',price:5.00,thumb:'https://img01.yzcdn.cn/vant/ipad.jpeg'},
                        {id:2,num:2,desc:'商品2',title:'这是第二个商品',price:15.00,originPrice:30.00,thumb:'https://img01.yzcdn.cn/vant/ipad.jpeg'},
                    ]
                },
                {
                    type:'第二类商品',
                    shops:[
                        {id:1,num:1,desc:'商品1',title:'这是第一个商品',price:5.00,thumb:'https://img01.yzcdn.cn/vant/ipad.jpeg'},
                        {id:2,num:2,desc:'商品2',title:'这是第二个商品',price:15.00,originPrice:30.00,thumb:'https://img01.yzcdn.cn/vant/ipad.jpeg'},
                        {id:3,num:3,desc:'商品3',title:'这是第三个商品',price:105.00,thumb:'https://img01.yzcdn.cn/vant/ipad.jpeg'},
                    ]
                },
                 {
                    type:'第三类商品',
                    shops:[
                        {id:1,num:1,desc:'商品1',title:'这是第一个商品',price:5.00,thumb:'https://img01.yzcdn.cn/vant/ipad.jpeg'},
                        {id:2,num:2,desc:'商品2',title:'这是第二个商品',price:15.00,originPrice:30.00,thumb:'https://img01.yzcdn.cn/vant/ipad.jpeg'},
                        {id:3,num:3,desc:'商品3',title:'这是第三个商品',price:105.00,thumb:'https://img01.yzcdn.cn/vant/ipad.jpeg'},
                        {id:4,num:4,desc:'商品4',title:'这是第四个商品',price:1005.00,thumb:'https://img01.yzcdn.cn/vant/ipad.jpeg'},
                    ]
                },
            ]
        }
    }
}
</script>

<style scoped>
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