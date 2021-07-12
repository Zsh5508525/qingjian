<template>
<div>
 <van-search v-model="value" placeholder="请输入搜索关键词" />
    <van-dropdown-menu active-color="#1989fa">
    <van-dropdown-item v-model="value1" :options="option1" @change="option1Click(value1)" />
    <van-dropdown-item v-model="value2" :options="option2" @change="option2Click(value2)" />
    </van-dropdown-menu>
    <ul>
        <li v-for="(list,index) in lists" :key=index>
            <div><img :src="list.img">
            <p>{{list.text}}</p>
            <span>￥{{list.price}}</span></div>
        </li>
        
    </ul>
</div>
</template>

<script>
import Vue from 'vue';
import { Search,DropdownMenu, DropdownItem,Divider  } from 'vant';
import 'vant/lib/index.css';

Vue.use(Divider);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Search);
export default {
    data(){
        return{
            lists:[
                {img:'https://img01.yzcdn.cn/vant/ipad.jpeg',text:'一次性毛巾一次性毛巾一次性毛巾一次性毛巾',price:'2.00'},
                {img:'https://img01.yzcdn.cn/vant/ipad.jpeg',text:'一次性毛巾',price:'2.00'},
                {img:'https://img01.yzcdn.cn/vant/ipad.jpeg',text:'一次性毛巾',price:'2.00'},
                {img:'https://img01.yzcdn.cn/vant/ipad.jpeg',text:'一次性毛巾',price:'2.00'},
                {img:'https://img01.yzcdn.cn/vant/ipad.jpeg',text:'一次性毛巾',price:'2.00'},
                {img:'https://img01.yzcdn.cn/vant/ipad.jpeg',text:'一次性毛巾',price:'2.00'},
                {img:'https://img01.yzcdn.cn/vant/ipad.jpeg',text:'一次性毛巾',price:'2.00'},
                {img:'https://img01.yzcdn.cn/vant/ipad.jpeg',text:'一次性毛巾',price:'2.00'},
            ],
            value: '',
            value1: 0,
            value2: 'a',
            option1: [
                { text: '全部分类', value: 0 },
                { text: '当季热品', value: 1 },
                { text: '优享商品', value: 2 },
                { text: '合作商品', value: 3 },
                { text: '日常商品', value: 4 },
            ],
            option2: [
                { text: '全部商品', value: 'a' },
                { text: '毛巾', value: 'b' },
                { text: '日用品', value: 'c' },
                { text: '化妆棉', value: 'd' },
                { text: '抹布', value: 'e' },
                { text: '马桶垫', value: 'f' },
                { text: '吸水地垫', value: 'g' },
                { text: '活动专拍', value: 'h' },
            ],
        }
    },
    methods:{
        option1Click(value1){
            console.log(value1);
        },
        option2Click(value2){
            console.log(value2);
        }
    }
}
</script>

<style scoped>
    ul{
        padding: 0 5px;
        background: #eeeeee;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        place-content: flex-start space-between;
        box-sizing: border-box;
    }
    ul li{
        padding: 10px 5px 0px 5px;
        width: 50%;
        box-sizing: border-box;
        overflow: hidden;
    }
    ul li div{
        background: #fff;
        border-radius: 5px;
        width: 100%;
    }
    ul li img{
        width: 100%;
        border-radius: 5px 5px 0 0;
    }
    ul li p{
        display: block;
        box-sizing: border-box;
        padding: 0 10px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space:nowrap;
        width: 100%;
    }
    ul li span{
        color: #ff3300;
        padding: 0 10px;
        box-sizing: border-box;
        margin: 5px 0;
        display: inline-block;
    }
</style>>
