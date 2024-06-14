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
                
                <RouterLink :to="{ name: 'community fund' }">
                    <li class="text-white bg-transparent px-4 py-2 rounded hover:bg-dark-blue-2 duration-75 my-4 w-full flex gap-4">
                        <span class="w-5"><i class="fa-solid fa-hand-holding-heart"></i></span>
                        <span>Community Fund</span>
                    </li>
                </RouterLink>
                
                <RouterLink :to="{ name: 'adik bintang saya' }">
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
                <div class="mr-10">
                    <button class="text-sm bg-slate-200 hover:bg-slate-300 duration-150 px-4 py-2 flex items-center">
                        <span class="mr-1 hidden lg:block">Language: </span>
                        <div class="flex items-center">
                            <span class="font-semibold mr-1 hidden md:block">{{ language[0].name }}</span>
                            <img v-bind:src="language[0].iconFlag" width="30" v-bind:alt="language[0].name">
                        </div>
                        <div class="ml-2">
                            <i class="fa-solid fa-angle-down"></i>
                        </div>
                    </button>
                </div>
                <img src="../../public/img/acipu.jpeg" class="h-12 w-12 object-cover rounded-full" alt="">
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
            language: [
                {name: 'Bahasa Indonesia', iconFlag: 'https://flagcdn.com/id.svg'},
                {name: 'English', iconFlag: 'https://flagcdn.com/gb-eng.svg'}
            ]
        }
    },
    
    methods: {
        toggleSidebar(value) {
            this.showMenu = value
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