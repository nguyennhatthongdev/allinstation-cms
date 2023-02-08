import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  // Auth
  {
    path: '/auth',
    name: 'Auth',
    redirect: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '@/views/pages/AuthView.vue'),
    children: [
      {
        path: 'login',
        name: 'Login',
        component: () => import('@/views/pages/LoginView.vue')
      }
    ]
  },

  // Main
  {
    path: '/',
    name: 'Index',
    redirect: { name: 'Dashboard' },
    component: () => import(/* webpackChunkName: "about" */ '@/views/pages/IndexView.vue'),
    children: [
      {
        path: '',
        name: 'Dashboard',
        component: () => import('@/views/pages/DashboardView.vue')
      },
      {
        path: '/post',
        name: 'PostList',
        component: () => import('@/views/pages/PostListView.vue')
      },
      {
        path: '/post/create',
        name: 'PostCreate',
        component: () => import('@/views/pages/PostCreateView.vue')
      }
    ]
  }
]

export const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior () {
    return { top: 0, behavior: 'smooth' }
  }
})

export function setupRouter (app) {
  app.use(router)
}
