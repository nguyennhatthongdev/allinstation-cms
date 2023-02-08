<template>
  <a-layout style="min-height: 100vh">
    <Sidebar />
    <a-layout>
      <Header />
      <a-layout-content style="margin: 0 16px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>User</a-breadcrumb-item>
          <a-breadcrumb-item>Bill</a-breadcrumb-item>
        </a-breadcrumb>
        <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
          <router-view />
        </div>
      </a-layout-content>
      <Footer />
    </a-layout>
  </a-layout>
</template>

<script setup lang="ts">
import Sidebar from '@/views/layouts/Sidebar.vue'
import Header from '@/views/layouts/Header.vue'
import Footer from '@/views/layouts/Footer.vue'
</script>

<style lang="scss"></style>
