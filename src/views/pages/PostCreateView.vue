<template>
  <a-card>
    <template #title>
      Tạo mới bài viết
    </template>

    <a-form
      :model="formState"
      name="basic"
      :label-col="{ span: 6 }"
      :wrapper-col="{ span: 14 }"
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

      <a-form-item
        label="Nội dung"
        name="content"
        :rules="[{ required: true, message: 'Please input your password!' }]"
      >
        <a-upload
          v-model:file-list="fileList"
          name="avatar"
          list-type="picture-card"
          class="avatar-uploader"
          :show-upload-list="false"
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          :before-upload="beforeUpload"
          @change="handleChange"
        >
          <img v-if="imageUrl" :src="imageUrl" alt="avatar" />
          <div v-else>
            <loading-outlined v-if="loading"></loading-outlined>
            <plus-outlined v-else></plus-outlined>
            <div class="ant-upload-text">Upload</div>
          </div>
        </a-upload>
      </a-form-item>

      <a-form-item
        label="Nội dung"
        name="content"
        :rules="[{ required: true, message: 'Please input your password!' }]"
      >
        <ckeditor :editor="editor" v-model="formState.content"></ckeditor>
      </a-form-item>

      <a-button style="margin-right: 12px;" size="large">Quay lại</a-button>
      <a-button type="primary" html-type="submit" size="large">Tạo mới</a-button>
    </a-form>
  </a-card>
</template>

<script setup lang="ts">
import { reactive, onMounted, ref } from 'vue'
import { message } from 'ant-design-vue'
import type { UploadChangeParam, UploadProps } from 'ant-design-vue';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

interface IPostForm {
  username: string;
  password: string;
  content: string;
}

const formState = reactive<IPostForm>({
  username: '',
  password: '',
  content: ''
})

const editor = ClassicEditor

const fileList = ref([])
const loading = ref<boolean>(false)
const imageUrl = ref<string>('')

const onFinish = (values: any) => {
  console.log('Success:', values)
}

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo)
}

const getBase64 = (img: Blob, callback: (base64Url: string) => void) => {
  const reader = new FileReader()
  // eslint-disable-next-line node/no-callback-literal
  reader.addEventListener('load', () => callback(reader.result as string))
  reader.readAsDataURL(img)
}

const handleChange = (info: UploadChangeParam) => {
  if (info.file.status === 'uploading') {
    loading.value = true
    return
  }
  if (info.file.status === 'done') {
    // Get this url from response in real world.
    getBase64(info.file.originFileObj, (base64Url: string) => {
      imageUrl.value = base64Url
      loading.value = false
    })
  }
  if (info.file.status === 'error') {
    loading.value = false
    message.error('upload error')
  }
}

const beforeUpload = (file: UploadProps['fileList'][number]) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
  if (!isJpgOrPng) {
    message.error('You can only upload JPG file!')
  }
  const isLt2M = file.size / 1024 / 1024 < 2
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!')
  }
  return isJpgOrPng && isLt2M
}

onMounted(() => {
  ClassicEditor
    .create(document.querySelector('#editor'))
    .then(editor => {
      console.log('Editor was initialized', editor)
    })
    .catch(error => {
      console.error(error.stack)
    })
})
</script>

<style lang="scss">
.avatar-uploader > .ant-upload {
  width: 128px;
  height: 128px;
}
.ant-upload-select-picture-card i {
  font-size: 32px;
  color: #999;
}

.ant-upload-select-picture-card .ant-upload-text {
  margin-top: 8px;
  color: #666;
}
</style>
