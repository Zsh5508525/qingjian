<template>
<div>
    <van-form @submit="onSubmit">
        <van-field
            v-model="phone"
            center
            clearable
            label="手机号"
            placeholder="请输入手机号"
            :rules="[{ required: true, message: '短信验证码不能为空'},{ pattern:patternPhone,message:'长度在3到6个字符之间',}]"
            >
                <template #button>
                    <van-button size="small" type="primary">发送验证码</van-button>
                </template>
        </van-field>
        <van-field
            v-model="sms"
            label="短信验证码"
            placeholder="请输入短信验证码"
            :rules="[{ required: true, message: '短信验证码不能为空'},{ pattern:patternSms,message:'长度在3到6个字符之间',}]"
        />
        <van-field
            v-model="newPass"
            label="新密码"
            placeholder="请输入新密码"
            :rules="[{ required: true, message: '密码不能为空'},{ pattern:patternNewpass,message:'长度在3到6个字符之间',}]"
        />
        <van-field
            v-model="confirmPass"
            label="确认密码"
            placeholder="请确认密码"
            :rules="[{ required: true, message: '密码不一致'},{ pattern:patternConfirmPass,message:'长度在3到6个字符之间',}]"
        />
        <div style="margin: 16px;">
				<van-button round block type="info" native-type="submit">确定</van-button>
			</div>
    </van-form>
</div>
</template>

<script>
import Vue from 'vue';
import { Field,Form} from 'vant';

Vue.use(Field);
Vue.use(Form);
export default {
    data(){
        return{
            phone:'',
            sms:'',
            newPass:'',
            confirmPass:'',
            patternPhone:/^[0-9]{11}$/,
			patternSms:/^[0-9]{4}$/,
            patternNewpass:/^[a-zA-Z0-9\-\.]{6,15}$/,
            patternConfirmPass:'',
        }
    },
    methods: {
			onSubmit(values) {
			console.log('submit', values);
			},
		},
}
</script>

<style>

</style>