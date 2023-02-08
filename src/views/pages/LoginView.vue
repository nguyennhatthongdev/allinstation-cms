<template>
  <div class="login-page">
    <div class="login-page__wrap">

      <h3>Đăng nhập</h3>

      <a-form
        :model="formState"
        name="basic"
        :label-col="{ span: 24 }"
        :wrapper-col="{ span: 24 }"
        autocomplete="off"
        @finish="onFinish"
        @finishFailed="onFinishFailed"
        layout="vertical"
      >
        <a-form-item
          label="Tên tài khoản"
          name="username"
          :rules="[{ required: true, message: 'Please input your username!' }]"
        >
          <a-input v-model:value="formState.username" size="large" />
        </a-form-item>

        <a-form-item
          label="Mật khẩu"
          name="password"
          :rules="[{ required: true, message: 'Please input your password!' }]"
        >
          <a-input-password v-model:value="formState.password" size="large" />
        </a-form-item>

        <a-button type="primary" html-type="submit" size="large" block>Đăng nhập</a-button>
      </a-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

interface ILoginForm {
  username: string;
  password: string;
  remember: boolean;
}

const formState = reactive<ILoginForm>({
  username: '',
  password: '',
  remember: true
})

const onFinish = (values: any) => {
  console.log('Success:', values)
}

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo)
}
</script>

<style scoped lang="scss"></style>
