<template>
  <a-layout-sider v-model:collapsed="collapsed" collapsible theme="dark">
    <div class="logo" />
    <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
      <a-menu-item key="1">
        <router-link :to="{ name: 'Dashboard' }">
          <pie-chart-outlined />
          <span>Trang chủ</span>
        </router-link>
      </a-menu-item>
      <a-menu-item key="2">
        <router-link :to="{ name: 'PostList' }">
          <desktop-outlined />
          <span>Danh sách bài viết</span>
        </router-link>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>

<script setup lang="ts">
import { Ref, ref } from 'vue'
const collapsed: Ref<boolean> = ref(false)
const selectedKeys: Ref<string[]> = ref(['1'])
</script>

<style scoped>
.logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
}

.site-layout .site-layout-background {
  background: #fff;
}
</style>
