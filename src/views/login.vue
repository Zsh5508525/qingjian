<template>
	<div class="bigBg">
		<h3>轻简风尚</h3>
		<van-form @submit="onSubmit">
			<van-field
			 	autocomplete="off"
				v-model="username"
				name="用户名"
				placeholder="用户名"
				:rules="[{ required: true, message: '请填写用户名'},{ pattern:name,message:'长度在3到6个字符之间',}]"
			/>
			<van-field
				v-model="password"
				type="password"
				name="密码"
				placeholder="密码"
				:rules="[{ required: true, message: '请填写密码' },{ pattern:pass,message:'长度在6到15个字符之间',}]"
			/>
			<div class="forget"><router-link to="forget">忘记密码？</router-link></div>
			<div style="margin: 16px;">
				<van-button round block type="info" native-type="submit">登录</van-button>
			</div>
		</van-form>
		<p>还没有账号，点击立即<a href="">申请代理商</a></p>
	</div>
</template>

<style scoped>

	h3{
		text-align: center;
		font-size: 3rem;
		letter-spacing: 1rem;
		color: #1bc7bc;
	}
	.bigBg{
		box-sizing: border-box;
		padding-top:25vh;
		height: 100vh;
		background: url("../assets/img/login_bg.png") no-repeat;
		background-size: contain;
	}
	.van-form{
		padding: 0 10vw;
	}
	.van-cell{
		background: none;
		border-bottom: 1px solid #1bc7bc;
	}
	p{
		text-align: center;
	}
	.van-button{
		background: #1bc7bc;
    	box-shadow: 1px 2px 3px #1bc7bc;
		border: 0;
	}
	.forget{
		text-align: right;
		margin-top: 10px;
		
	}
	.forget a{
		color: rgb(236, 194, 67);
	}
	p a{
		color: rgb(236, 194, 67);
		text-decoration: underline;
	}
</style>

<script>
import imgBg from '../assets/img/login_bg.png';

	export default {
		imgBg:imgBg,
        name:'login',
		data() {
			return {
			username: '',
			password: '',
			name:/^[a-zA-Z0-9\-\.]{3,6}$/,
			pass:/^[a-zA-Z0-9\-\.]{6,15}$/,
			};
		},
		methods: {
			onSubmit(values) {
			console.log('submit', values);
			this.$router.replace("/home");
			},
		},
	};
</script>