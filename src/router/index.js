import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BerandaView from '../views/beranda/BerandaView.vue'

import OneTimeDonationView from '../views/oneTimeDonation/Index.vue'
import CommunityFundView from '../views/communityFund/Index.vue'

import AdikBintangSayaView from '../views/adikbintang/Index.vue'
import TambahAdikBintangView from '@/views/tambahAdikbintang/Index.vue'
import DipilihAdikBintangView from '@/views/tambahAdikbintang/DipilihAdikBintangView.vue'
import RekomendasiAdikBintangView from '../views/tambahAdikbintang/RekomendasiAdikBintangView.vue'
import ProfileAdikBintangView from '../views/adikbintang/detail/ProfileAdikBintangView.vue'
import CatatanInterviewView from '../views/adikbintang/detail/CatatanInterviewView.vue'
import CatatanHomeVisitView from '../views/adikbintang/detail/CatatanHomeVisitView.vue'
import ProgressReportView from '../views/adikbintang/detail/ProgressReportView.vue'

import TambahProfileAdikBintangView from '../views/tambahAdikbintang/profileAb/ProfileAdikBintangView.vue'
import TambahCatatanInterviewView from '../views/tambahAdikbintang/profileAb/CatatanInterviewView.vue'
import TambahCatatanHomeVisitView from '../views/tambahAdikbintang/profileAb/CatatanHomeVisitView.vue'
import TambahProgressReportView from '../views/tambahAdikbintang/profileAb/ProgressReportView.vue'

import KonfirmasiTransferDonasiView from '../views/konfirmasiDonasi/Index.vue'

import DonationMeterView from '../views/laporanDonasi/Index.vue'
import RingkasanDonasiView from '../views/laporanDonasi/RingkasanDonasiView.vue'
import KonfirmasiDonasiView from '../views/laporanDonasi/KonfirmasiDonasiView.vue'

import ProfileKakakBintangView from '../views/profileKakakbintang/Index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'beranda',
      component: BerandaView
    },
    {
      path: '/one-time-donation',
      name: 'one time donation',
      component: OneTimeDonationView
    },
    {
      path: '/community-fund',
      name: 'community fund',
      component: CommunityFundView
    },
    {
      path: '/adik-bintang-saya',
      name: 'adik bintang saya',
      component: AdikBintangSayaView
    },
    {
      path: '/adik-bintang-saya/profile-ab',
      name: 'profile adik bintang',
      component: ProfileAdikBintangView
    },
    {
      path: '/adik-bintang-saya/profile-ab/catatan-interview-ab',
      name: 'catatan interview adik bintang',
      component: CatatanInterviewView
    },
    {
      path: '/adik-bintang-saya/profile-ab/catatan-homevisit-ab',
      name: 'catatan home visit adik bintang',
      component: CatatanHomeVisitView
    },
    {
      path: '/adik-bintang-saya/profile-ab/progress-report-ab',
      name: 'progress report adik bintang',
      component: ProgressReportView
    },
    {
      path: '/tambah-adik-bintang',
      name: 'tambah adik bintang',
      component: TambahAdikBintangView
    },
    {
      path: '/tambah-adik-bintang/dipilih-adik-bintang',
      name: 'dipilih adik bintang',
      component: DipilihAdikBintangView
    },
    {
      path: '/tambah-adik-bintang/rekomendasi-adik-bintang',
      name: 'rekomendasi adik bintang',
      component: RekomendasiAdikBintangView
    },
    {
      path: '/tambah-adik-bintang/profile-ab/',
      name: 'profile tambah adik bintang',
      component: TambahProfileAdikBintangView
    },
    {
      path: '/tambah-adik-bintang/profile-ab/catatan-interview-ab',
      name: 'catatan interview tambah adik bintang',
      component: TambahCatatanInterviewView
    },
    {
      path: '/tambah-adik-bintang/profile-ab/catatan-homevisit-ab',
      name: 'catatan home visit tambah adik bintang',
      component: TambahCatatanHomeVisitView
    },
    {
      path: '/tambah-adik-bintang/profile-ab/progress-report-ab',
      name: 'progress report tambah adik bintang',
      component: TambahProgressReportView
    },
    {
      path: '/laporan-donasi',
      name: 'donation meter',
      component: DonationMeterView
    },
    {
      path: '/laporan-donasi/ringkasan-donasi',
      name: 'ringkasan donasi',
      component: RingkasanDonasiView
    },
    {
      path: '/laporan-donasi/konfirmasi-donasi',
      name: 'konfirmasi donasi',
      component: KonfirmasiDonasiView
    },
    {
      path: '/konfirmasi-transfer-donasi',
      name: 'konfirmasi transfer donasi',
      component: KonfirmasiTransferDonasiView
    },
    {
      path: '/profile-kakak-bintang',
      name: 'profile kakak bintang',
      component: ProfileKakakBintangView
    },
  ],
})

export default router
