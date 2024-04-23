<template>
    <header class="w-full lg:w-4/5 h-16 bg-soft-blue lg:bg-white shadow fixed right-0 top-0 z-10 font-inter">
        <nav class=" w-full h-full">
            <div class="w-full h-full p-5 flex flex-row justify-between lg:justify-end items-center">
                <button class="block lg:hidden text-white" id="hamburgerMenu" @click="showSidebar(true)">
                    <ion-icon name="menu-outline" class="h-10" size="large"></ion-icon>
                </button>
                <div class="flex flex-row">
                    <button id="langButton" class="flex flex-row items-center mr-5 lg:mr-10 relative">
                        <img src="../../public/img/flags/id.svg" alt="" class="h-3 rounded mr-2">
                        <span class="text-white lg:text-black">ID</span>
                        <div id="langMenu" class="hidden text-center text-base bg-white border border-inherit rounded w-52 absolute top-0 right-0 mt-10 z-30 p-2">
                            <a href="#" class="flex flex-row justify-between items-center ">
                                <img src="../../public/img/flags/id.svg" alt="" class="h-3 rounded mr-2">
                                <span>Bahasa Indonesia</span>
                            </a>
                            <hr class="my-2">
                            <a href="#" class="flex flex-row justify-between items-center 2">
                                <img src="../../public/img/flags/gb.svg" alt="" class="h-3 rounded mr-2">
                                <span>English</span>
                            </a>
                        </div>
                    </button>
                    <RouterLink to="/profile-kakak-bintang" class="flex flex-row items-center relative">
                        <span class="mr-2.5 hidden md:block text-white lg:text-black">Michelangelo</span>
                        <div class="w-12 h-12">
                            <img class="rounded-full max-w-full h-auto align-middle border-none" src="../../public/img/shanon.jpg" alt="user image" />
                        </div>
                        <div id="avatarMenu" class="hidden text-center text-base bg-white border border-inherit rounded w-40 absolute top-0 right-0 mt-10 z-30 p-2">
                            <a href="profil.html">Profil saya</a>
                            <hr class="my-2">
                            <a href="#" class="w-full text-red-600 hover:text-red-900">Sign out</a>
                        </div>
                    </RouterLink>
                </div>
            </div>
        </nav>
    </header>
    <aside id="sidebar" :class="!menuVisible ? '-translate-x-full lg:translate-x-0' : '' " class="w-2/5 sm:w-3/5 lg:w-1/5 min-h-screen bg-soft-blue fixed top-0 lg:left-0 ease-in-out duration-300 z-20 lg:z-0 shadow-md font-inter">
        <div class="w-full px-5 py-4 flex flex-row justify-between lg:justify-center">
            <a href="#" class=""><img src="../../public/img/logo.svg" alt="" class="h-8"></a>
            <button id="closeHamburgerMenu" @click="showSidebar(false)">
                <ion-icon name="close-outline" class="block lg:hidden text-soft-green" size="large"></ion-icon>
            </button>
        </div>
        <hr class="border-slate-50/[.09]">
        <div class="link-wrapper text-sm sm:text-base w-full">
            <ul class="mt-5 w-full font-semibold">
                <li class="my-2">
                    <!-- <RouterLink to="/" activeClass="flex bg-soft-blue mx-3 items-center rounded p-2 text-white mb-2.5 hover:text-white" class="flex mx-3 items-center rounded p-2 text-dark-grey mb-2.5 hover:text-soft-blue"> -->
                        <RouterLink to="/" class="text-white flex mx-3 p-2 rounded hover:bg-blue-300" activeClass="bg-blue-400">
                            <span class="w-5 h-5"><ion-icon name="grid"></ion-icon></span>
                            <span class="ms-3">Beranda</span>
                        </RouterLink>
                    </li>
                    <li class="my-2">
                        <RouterLink to="/program-donasi" class="text-white flex mx-3 p-2 rounded hover:bg-blue-300" activeClass="bg-blue-400">
                            <span class="w-5 h-5"><ion-icon name="library"></ion-icon></span>
                            <span class="ms-3">Program Donasi</span>
                        </RouterLink>
                    </li>
                    <li class="my-2">
                        <RouterLink to="/one-time-donation" class="text-white flex mx-3 p-2 rounded hover:bg-blue-300" activeClass="bg-blue-400">
                            <span class="w-5 h-5"><ion-icon name="heart-half-outline"></ion-icon></span>
                            <span class="ms-3">One Time Donation</span>
                        </RouterLink>
                    </li>
                    <li class="my-2">
                        <RouterLink to="/community-fund" class="text-white flex mx-3 p-2 rounded hover:bg-blue-300" activeClass="bg-blue-400">
                            <span class="w-5 h-5"><ion-icon name="earth-outline"></ion-icon></span>
                            <span class="ms-3">Community Fund</span>
                        </RouterLink>
                    </li>
                    <li class="my-2">
                        <RouterLink to="/adik-bintang-saya" class="text-white flex mx-3 p-2 rounded hover:bg-blue-300" activeClass="bg-blue-400">
                            <span class="w-5 h-5"><ion-icon name="people"></ion-icon></span>
                            <span class="ms-3">Adik Bintang Saya</span>
                        </RouterLink>
                    </li>
                    <li class="my-2">
                        <RouterLink to="/tulis-surat" class="text-white flex mx-3 p-2 rounded hover:bg-blue-300" activeClass="bg-blue-400">
                            <span class="w-5 h-5"><ion-icon name="mail-outline"></ion-icon></span>
                            <span class="ms-3">Tulis Surat Bintang</span>
                        </RouterLink>
                    </li>
                    <li class="my-2">
                        <RouterLink to="/tambah-adik-bintang" class="text-white flex mx-3 p-2 rounded hover:bg-blue-300" activeClass="bg-blue-400">
                            <span class="w-5 h-5"><ion-icon name="person-add-outline"></ion-icon></span>
                            <span class="ms-3">Tambah Adik Bintang</span>
                        </RouterLink>
                    </li>
                    <li class="my-2">
                        <RouterLink to="/konfirmasi-transfer-donasi" class="text-white flex mx-3 p-2 rounded hover:bg-blue-300" activeClass="bg-blue-400">
                            <span class="w-5 h-5"><ion-icon name="stats-chart-outline"></ion-icon></span>
                            <span class="ms-3">Konfirmasi Donasi</span>
                        </RouterLink>
                    </li>
                    <li class="my-2">
                        <RouterLink to="/laporan-donasi" class="text-white flex mx-3 p-2 rounded hover:bg-blue-300" activeClass="bg-blue-400">
                            <span class="w-5 h-5"><ion-icon name="bookmarks-outline"></ion-icon></span>
                            <span class="ms-3">Laporan Donasi</span>
                        </RouterLink>
                    </li>
                </ul>
            </div>
        </aside>
    </template>
    
    
    <script>
    export default {
        data() {
            return {
                menuVisible: false
            }
        },
        methods: {
            showSidebar(value) {
                this.menuVisible = value
            }
        }
    }
</script>