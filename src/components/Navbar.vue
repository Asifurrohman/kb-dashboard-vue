<template>
    <aside :class="!showMenu ? '-translate-x-full lg:translate-x-0' : '' " class="bg-dark-blue-1 w-3/5 lg:w-1/5 fixed min-h-screen left-0 z-30 duration-300 ease-in-out">
        <!-- <div class="px-4 py-2 flex justify-end lg:hidden">
            <button @click="toggleSidebar(false)">
                <i class="fa-solid fa-xmark text-white text-2xl"></i>
            </button>
        </div> -->
        <RouterLink :to="{ name: 'beranda' }">
            <div class="mx-8 mt-4">
                <img src="../../public/img/logo-hz.png" alt="" class="w-48 object-cover">
            </div>
        </RouterLink>
        <nav class="text-hz-white">
            <ul class="p-4">
                <RouterLink :to="{ name: 'beranda' }">
                    <li class="text-white bg-transparent px-4 py-2 rounded hover:bg-dark-blue-2 duration-75 my-4 w-full flex gap-4">
                        <span class="w-5"><i class="fa-solid fa-house"></i></span>
                        <span>Beranda</span>
                    </li>
                </RouterLink>
                
                <RouterLink :to="{ name: 'one time donation' }">
                    <li class="text-white bg-transparent px-4 py-2 rounded hover:bg-dark-blue-2 duration-75 my-4 w-full flex gap-4">
                        <span class="w-5"><i class="fa-solid fa-heart-pulse"></i></span>
                        <span>One Time Donation</span>
                    </li>
                </RouterLink>
                
                <RouterLink to="/community-fund/description">
                    <li class="text-white bg-transparent px-4 py-2 rounded hover:bg-dark-blue-2 duration-75 my-4 w-full flex gap-4">
                        <span class="w-5"><i class="fa-solid fa-hand-holding-heart"></i></span>
                        <span>Community Fund</span>
                    </li>
                </RouterLink>
                
                <RouterLink to="/my-adik/active">
                    <li class="text-white bg-transparent px-4 py-2 rounded hover:bg-dark-blue-2 duration-75 my-4 w-full flex gap-4">
                        <span class="w-5"><i class="fa-solid fa-child-reaching"></i></span>
                        <span>Adik Bintang Saya</span>
                    </li>
                </RouterLink>
                
                <RouterLink :to="{ name: 'tulis surat bintang' }">
                    <li class="text-white bg-transparent px-4 py-2 rounded hover:bg-dark-blue-2 duration-75 my-4 w-full flex gap-4">
                        <span class="w-5"><i class="fa-solid fa-pencil"></i></span>
                        <span>Tulis Surat Bintang</span>
                    </li>
                </RouterLink>
                
                <RouterLink :to="{ name: 'tambah adik bintang' }">
                    <li class="text-white bg-transparent px-4 py-2 rounded hover:bg-dark-blue-2 duration-75 my-4 w-full flex gap-4">
                        <span class="w-5"><i class="fa-solid fa-person-circle-plus"></i></span>
                        <span>Tambah Adik Bintang</span>
                    </li>
                </RouterLink>
                
                <RouterLink :to="{ name: 'konfirmasi transfer donasi' }">
                    <li class="text-white bg-transparent px-4 py-2 rounded hover:bg-dark-blue-2 duration-75 my-4 w-full flex gap-4">
                        <span class="w-5"><i class="fa-solid fa-clipboard-check"></i></span>
                        <span>Konfirmasi Donasi</span>
                    </li>
                </RouterLink>
                
                <RouterLink :to="{ name: 'donation meter' }">
                    <li class="text-white bg-transparent px-4 py-2 rounded hover:bg-dark-blue-2 duration-75 my-4 w-full flex gap-4">
                        <span class="w-5"><i class="fa-solid fa-book"></i></span>
                        <span>Laporan</span>
                    </li>
                </RouterLink>
            </ul>
        </nav>
    </aside>
    
    <!-- background abu abu gelap ketika menu responsive terbuka -->
    <div @click="toggleSidebar(false)" :class="!showMenu ? 'hidden' : '' " class="bg-slate-800 fixed lg:hidden w-screen h-screen z-20 opacity-80">
        
    </div>
    
    <header class="h-16 bg-hz-white w-full lg:w-4/5 fixed right-0 mb-64 z-10 drop-shadow-sm">
        <div class="h-full w-full px-4 mx-auto flex items-center justify-between lg:justify-end border-b">
            <div class="lg:hidden">
                <button @click="toggleSidebar(true)" class="w-10 h-10 bg-hz-blue hover:bg-blue-900 duration-75 rounded text-xl">
                    <i class="fa-solid fa-bars text-white"></i>
                </button>
            </div>
            <!-- <RouterLink :to="{ name: 'beranda' }">
                <img src="../../public/img/logo-hz-blue.svg" alt="" class="h-10 lg:hidden">
            </RouterLink> -->
            <div class="flex flex-row items-center">
                
                <button id="dropdownMenuIconHorizontalButton" data-dropdown-toggle="dropdownDotsHorizontal" class="inline-flex mr-2 items-center p-2 text-sm font-medium text-center text-gray-900 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600" type="button"> 
                    <span class="w-6">
                        <img src="https://flagcdn.com/id.svg" alt="">
                    </span>
                    <span class="ml-2">
                        <i class="fa-solid fa-caret-down"></i>
                    </span>
                </button>
                
                <!-- Dropdown menu -->
                <div id="dropdownDotsHorizontal" class="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownMenuIconHorizontalButton">
                        <li v-for="language in languages" v-bind:key="language.id">
                            <a href="#" class="flex gap-2 px-4 py-2 hover:bg-blue-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                <img :src="language.iconFlag" class="w-6" alt="">
                                <span>{{ language.name }}</span>
                            </a>
                        </li>
                    </ul>
                </div>
                
                <div>
                    <RouterLink to="/my-profile">
                        <img src="../../public/img/acipu.jpeg" class="h-12 w-12 object-cover rounded-full" alt="">
                    </RouterLink>
                </div>
                <button id="dropdownMenuIconButton" data-dropdown-toggle="profileDropdown" class="inline-flex lg:hidden items-center p-2 text-large font-medium text-center text-gray-900 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600" type="button">
                    <span>
                        <i class="fa-solid fa-ellipsis-vertical"></i>
                    </span>
                </button>
                
                <div id="profileDropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                    <div class="w-full flex justify-center">
                        <img src="../../public/img/acipu.jpeg" class="h-20 w-20 object-cover rounded-full my-4" alt="">
                    </div>
                    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownMenuIconButton">
                        <li>
                            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                <span class="mr-2"><i class="fa-solid fa-user"></i></span>
                                <span>
                                    Profile Saya
                                </span>
                            </a>
                        </li>
                        <li>
                            <button type="button" id="languageButton" data-dropdown-toggle="languageDropdown" data-dropdown-placement="left" class="w-full text-left block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                <span class="mr-2">
                                    <i class="fa-solid fa-angle-left"></i>
                                </span>
                                <span>
                                    Bahasa
                                </span>
                            </button>
                            
                            <div id="languageDropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownLeftButton">
                                    <li>
                                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Bahasa Indonesia</a>
                                    </li>
                                    <li>
                                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">English</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                    <div class="py-2">
                        <a href="#" class="block px-4 py-2 text-sm text-red-700 hover:bg-red-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Logout</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full bg-hz-white px-4 py-2">
            <!-- Fitur Breadcrumb -->
            <div class="text-sm font-semibold text-gray-800"> 
                <span class="capitalize">{{ currentRouteName }}</span>
            </div>
        </div>
    </header>
    
    <div :class="!showMenu ? 'hidden' : '' " class="fixed top-0 right-0 z-20 lg:hidden">
        <div class="px-4 py-2 lg:hidden">
            <button @click="toggleSidebar(false)" class="bg-hz-white rounded-full h-8 w-8">
                <i class="fa-solid fa-xmark text-slate-800 text-2xl"></i>
            </button>
        </div>
    </div>
    
    <!-- <RouterLink :to="{name: 'halaman depan pesan'}">
        <div class="fixed bottom-0 right-0 px-4 py-4">
            <div class="">
                <div class="rounded-full h-14 w-14 bg-dark-blue-1 drop-shadow-md hover:drop-shadow-lg flex justify-center items-center">
                    <i class="fa-solid fa-comment text-2xl text-hz-white"></i>
                </div>
            </div>
        </div>
    </RouterLink> -->
    
    <!-- <RouterLink :to="{name: 'halaman depan pesan'}">
        <div class="bg-dark-blue-1 fixed right-5 bottom-5 w-14 h-14 flex justify-center items-center rounded-full">
            <i class="fa-solid fa-comment text-2xl text-hz-white"></i>
        </div>
    </RouterLink> -->
    
    <div class="fixed bottom-0 right-0 z-10">
        <div class="px-8 py-8">
            <RouterLink :to="{name: 'halaman depan pesan'}">
                
                <button class="bg-dark-blue-1 rounded-lg h-12 w-12 shadow-md shadow-slate-400">
                    <i class="fa-solid fa-comment text-hz-white text-2xl"></i>
                </button>
            </RouterLink>
            
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showMenu: false,
            showLanguageBar: false,
            languages: [
            {id: 1, name: 'Bahasa Indonesia', iconFlag: 'https://flagcdn.com/id.svg'},
            {id: 2, name: 'English', iconFlag: 'https://flagcdn.com/gb-eng.svg'}
            ]
        }
    },
    
    methods: {
        toggleSidebar(value) {
            this.showMenu = value
        },
        toggleLanguageBar() {
            this.showLanguageBar = !this.showLanguageBar
        }
    },
    
    computed: {
        currentRouteName() {
            return this.$route.name;
        }
    }
}


</script>

<style lang="scss" scoped>

</style>