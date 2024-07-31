
/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */


// import LandingPages from "@/pages/LandingPages.vue"


// Composables
// import { createRouter, createWebHistory } from 'vue-router/auto'
// import { routes } from 'vue-router/auto-routes'

import { createRouter, createWebHistory } from "vue-router";  
import LandingTrainPage from "@/pages/LandingTrainPage.vue";
import NewsPage from "@/pages/NewsPage.vue";
import LandingBusPage from "@/pages/LandingBusPage.vue";
import LoginPages from "@/pages/LoginPages.vue";
import RegisterPages from "@/pages/RegisterPages.vue";
import ProfilePage from "@/pages/ProfilePage.vue";
import ChangeProfilePage from "@/pages/ChangeProfilePage.vue";
import DetailBusPage from "@/pages/DetailBusPage.vue";
import DetailKendaraanBusPage from "@/pages/DetailKendaraanBusPage.vue";
import DetailKendaraanKrlPage from "@/pages/DetailKendaraanKrlPage.vue";
import DetailKendaraanAngkotPage from "@/pages/DetailKendaraanKeretaPage.vue";
import KomentarPage from "@/pages/KomentarPage.vue";
import LaporkanPage from "@/pages/LaporkanPage.vue";
import DetailKrlPage from "@/pages/DetailKrlPage.vue";

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes : [
    {path: '/', component: LandingBusPage,},
    {path : '/train', component : LandingTrainPage},
    {path : '/login', component : LoginPages},
    {path: '/register', component : RegisterPages},
    {path: "/news", component: NewsPage},
    {path: '/profile', component: ProfilePage},
    {path: '/changeProfile', component: ChangeProfilePage},
    {path: '/detailBus', component: DetailBusPage},
    {path: '/detailKrl', component: DetailKrlPage},
    {path: '/DetailkendaraanBus', component: DetailKendaraanBusPage},
    {path: '/DetailKendaraanKrl', component: DetailKendaraanKrlPage},
    {path: '/komentar', component: KomentarPage},
    {path: '/laporkan', component: LaporkanPage}
  ]
});


// Workaround for https://github.com/vitejs/vite/issues/11804
// router.onError((err, to) => {
//   if (err?.message?.includes?.('Failed to fetch dynamically imported module')) {
//     if (!localStorage.getItem('vuetify:dynamic-reload')) {
//       console.log('Reloading page to fix dynamic import error')
//       localStorage.setItem('vuetify:dynamic-reload', 'true')
//       location.assign(to.fullPath)
//     } else {
//       console.error('Dynamic import error, reloading page did not fix it', err)
//     }
//   } else {
//     console.error(err)
//   }
// })

// router.isReady().then(() => {
//   localStorage.removeItem('vuetify:dynamic-reload')
// })

export default router
