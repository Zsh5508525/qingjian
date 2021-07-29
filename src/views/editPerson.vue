<template>
  <div>
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="vipId"
        type="text"
        disabled
        label="会员编号"
      />
      <div style="margin: 16px;">
          <van-field
        v-model="userName"
        type="text"
        label="用户姓名"
        placeholder="用户姓名"
        :rules="[{ required: true, message: '请填写用户姓名' }]"
      />
      </div>
      <div style="margin: 16px;">
          <van-field
        v-model="phone"
        type="text"
        label="手机号"
        placeholder="手机号"
      />
      </div>
      <div style="margin: 16px;">
          <van-field
        v-model="grade"
        type="text"
        label="等级"
        disabled
      />
      </div>
      <div style="margin: 16px;">
          <van-field
        v-model="cerNumber"
        type="text"
        name="证件号"
        label="证件号"
        placeholder="证件号"
      />
      </div>
      <div style="margin: 16px;">
          <van-field
        v-model="References"
        label="推荐人"
      />
      </div>
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
  name:'editpweson',
  data() {
    return {
      vipId:'VX001',
      uploader: [{ url: 'https://img01.yzcdn.cn/vant/leaf.jpg' }],
      username: '',
      password: '',
    };
  },
  methods: {
    onSubmit(values) {
      console.log('submit', values);
    },
  },
};
</script>

<style>

</style>