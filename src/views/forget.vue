<template>
<div>
    <van-form @submit="onSubmit">
        <van-field
            v-model="phone"
            center
            clearable
            name="手机号"
            label="手机号"
            placeholder="请输入手机号"
            :rules="[{ required: true, message: '短信验证码不能为空'},{ pattern:patternPhone,message:'手机格式错误',}]"
            >
                <template #button>
                    <!-- 一个表单里面有其他button时，type默认是submit要改成button才行 -->
                    <van-button size="small" type="primary" v-if="show" native-type="button" @click="send">发送验证码</van-button>
                    <van-button size="small" type="primary" v-if="!show" disabled  native-type="button">{{times}}秒后重新发送</van-button>
                </template>
        </van-field>
        <van-field
            v-model="sms"
            name="短信验证码"
            label="短信验证码"
            placeholder="请输入短信验证码"
            :rules="[{ required: true, message: '短信验证码不能为空'},{ pattern:patternSms,message:'验证码不正确',}]"
        />
        <van-field
            type="password"
            v-model="newPass"
            name="新密码"
            label="新密码"
            placeholder="请输入新密码"
            :rules="[{ required: true, message: '密码不能为空'},{ pattern:patternNewpass,message:'长度在6到15个字符之间',}]"
        />
        <van-field
            type="password"
            v-model="confirmPass"
            name="确认密码"
            label="确认密码"
            placeholder="请确认密码"
            @input='cpass'
            :rules="[{ required: true, message: '密码不一致'},{ pattern:patternConfirmPass,message:'两次密码不一致',}]"
        />
        <div style="margin: 16px;">
				<van-button round block type="info" native-type="submit">确定</van-button>
			</div>
    </van-form>
</div>
</template>

<script>

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
            times:'60',
            show:true,
        }
    },
    methods: {
			
            cpass(){   //校验两次密码是否一致
                let pass = this.newPass;
                let cpass = this.confirmPass;
                if(pass == cpass){
                    this.patternConfirmPass = '';
                }else{
                    this.patternConfirmPass = /^[0-9]{1111}$/
                }
            },
            onSubmit(values) {
			    console.log('submit', values);
			},
            send(){  //手机倒计时
                console.log(this.phone);
                this.show = false
                this.timer = setInterval(()=>{
                    this.times--
                    if(this.times===0){
                    this.show = true
                    clearInterval(this.timer)
                    }
                },1000)
            }
		},
}
</script>

<style>

</style>