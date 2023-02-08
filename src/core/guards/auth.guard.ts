// import { useAuthStore } from '@/stores/AuthStore'
//
// export const AuthGuard = async (to, from, next) => {
//   const useAuth = useAuthStore()
//
//   if (!useAuth.token) {
//     return next({ name: 'Login' })
//   }
//
//   if (!useAuth.profile) {
//     await useAuth.userProfile()
//   }
//   next()
// }
