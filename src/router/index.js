import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BerandaView from '../views/beranda/BerandaView.vue'
import AdikBintangSayaView from '../views/adikbintang/AdikBintangSayaView.vue'
import TambahAdikBintangView from '@/views/adikbintang/TambahAdikBintangView.vue'
import DipilihAdikBintangView from '@/views/adikbintang/DipilihAdikBintangView.vue'
import RekomendasiAdikBintangView from '../views/adikbintang/RekomendasiAdikBintangView.vue'
import ProfileAdikBintangView from '../views/adikbintang/detail/ProfileAdikBintangView.vue'
import CatatanInterviewView from '../views/adikbintang/detail/CatatanInterviewView.vue'
import CatatanHomeVisitView from '../views/adikbintang/detail/CatatanHomeVisitView.vue'
import ProgressReportView from '../views/adikbintang/detail/ProgressReportView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'beranda',
      component: BerandaView
    },
    {
      path: '/adik-bintang-saya',
      name: 'adik bintang saya',
      component: AdikBintangSayaView
    },
    {
      path: '/tambah-adik-bintang',
      name: 'tambah adik bintang',
      component: TambahAdikBintangView
    },
    {
      path: '/dipilih-adik-bintang',
      name: 'dipilih adik bintang',
      component: DipilihAdikBintangView
    },
    {
      path: '/rekomendasi-adik-bintang',
      name: 'rekomendasi adik bintang',
      component: RekomendasiAdikBintangView
    },
    {
      path: '/detail/profile-ab',
      name: 'profile adik bintang',
      component: ProfileAdikBintangView
    },
    {
      path: '/detail/catatan-interview-ab',
      name: 'catatan interview adik bintang',
      component: CatatanInterviewView
    },
    {
      path: '/detail/catatan-homevisit-ab',
      name: 'catatan home visit adik bintang',
      component: CatatanHomeVisitView
    },
    {
      path: '/detail/progress-report-ab',
      name: 'progress report adik bintang',
      component: ProgressReportView
    },
  ],
})

export default router
