<template>
    <aside :class="!showMenu ? '-translate-x-full lg:translate-x-0' : '' " class="bg-hz-blue w-3/5 lg:w-1/5 fixed min-h-screen left-0 z-20 duration-300 ease-in-out">
        <RouterLink :to="{ name: 'beranda' }">
            <div class="my-4 w-full hidden lg:flex justify-center">
                <img src="../../public/img/logo-hz.png" alt="" class=" w-48 object-cover">
            </div>
        </RouterLink>
        <div class="px-4 py-2 flex justify-end lg:hidden">
            <button @click="toggleSidebar(false)">
                <i class="fa-solid fa-xmark text-white text-2xl"></i>
            </button>
        </div>
        
        <nav class="text-hz-white">
            <ul class="p-4">
                <RouterLink :to="{ name: 'beranda' }">
                    <li class="text-white bg-transparent px-4 py-2 rounded hover:bg-sky-100 hover:text-hz-blue duration-75 my-4">
                        <span class="mr-2"><i class="fa-solid fa-house"></i></span>
                        <span>Beranda</span>
                    </li>
                </RouterLink>
                
                <RouterLink :to="{ name: 'one time donation' }">
                    <li class="text-white bg-transparent px-4 py-2 rounded hover:bg-sky-100 hover:text-hz-blue duration-75 my-4">
                        <span class="mr-2"><i class="fa-solid fa-heart-pulse"></i></span>
                        <span>One Time Donation</span>
                    </li>
                </RouterLink>
                
                <RouterLink :to="{ name: 'community fund' }">
                    <li class="text-white bg-transparent px-4 py-2 rounded hover:bg-sky-100 hover:text-hz-blue duration-75 my-4">
                        <span class="mr-2"><i class="fa-solid fa-hand-holding-heart"></i></span>
                        <span>Community Fund</span>
                    </li>
                </RouterLink>
                
                <RouterLink :to="{ name: 'adik bintang saya' }">
                    <li class="text-white bg-transparent px-4 py-2 rounded hover:bg-sky-100 hover:text-hz-blue duration-75 my-4">
                        <span class="mr-2"><i class="fa-solid fa-child-reaching"></i></span>
                        <span>Adik Bintang Saya</span>
                    </li>
                </RouterLink>
                
                <RouterLink :to="{ name: 'tulis surat bintang' }">
                    <li class="text-white bg-transparent px-4 py-2 rounded hover:bg-sky-100 hover:text-hz-blue duration-75 my-4">
                        <span class="mr-2"><i class="fa-solid fa-pencil"></i></span>
                        <span>Tulis Surat Bintang</span>
                    </li>
                </RouterLink>
                
                <RouterLink :to="{ name: 'tambah adik bintang' }">
                    <li class="text-white bg-transparent px-4 py-2 rounded hover:bg-sky-100 hover:text-hz-blue duration-75 my-4">
                        <span class="mr-2"><i class="fa-solid fa-person-circle-plus"></i></span>
                        <span>Tambah Adik Bintang</span>
                    </li>
                </RouterLink>
                
                <RouterLink :to="{ name: 'konfirmasi transfer donasi' }">
                    <li class="text-white bg-transparent px-4 py-2 rounded hover:bg-sky-100 hover:text-hz-blue duration-75 my-4">
                        <span class="mr-2"><i class="fa-solid fa-clipboard-check"></i></span>
                        <span>Konfirmasi Donasi</span>
                    </li>
                </RouterLink>
                
                <RouterLink :to="{ name: 'donation meter' }">
                    <li class="text-white bg-transparent px-4 py-2 rounded hover:bg-sky-100 hover:text-hz-blue duration-75 my-4">
                        <span class="mr-2"><i class="fa-solid fa-book"></i></span>
                        <span>Laporan</span>
                    </li>
                </RouterLink>
            </ul>
        </nav>
    </aside>
    
    <header class="h-16 bg-hz-white w-full lg:w-4/5 fixed right-0 mb-64 z-10 drop-shadow-sm">
        <div class="h-full w-full px-4 mx-auto flex items-center justify-between lg:justify-end border-b">
            <div class="lg:hidden">
                <button @click="toggleSidebar(true)" class="w-10 h-10 bg-hz-blue hover:bg-blue-900 duration-75 rounded text-xl">
                    <i class="fa-solid fa-bars text-white"></i>
                </button>
            </div>
            <RouterLink :to="{ name: 'beranda' }">
                <img src="../../public/img/logo-hz-blue.svg" alt="" class="h-10 lg:hidden">
            </RouterLink>
            <div class="flex flex-row items-center">
                <img src="../../public/img/acipu.jpeg" class="h-12 w-12 object-cover rounded-full" alt="">
            </div>
        </div>
        <div class="w-full bg-hz-white px-4 py-2">
            <!-- Fitur Breadcrumb -->
            <div class="text-sm font-semibold text-gray-800"> 
                <span>Adik Bintang Saya</span>
                <span class="mx-2">/</span>
                <span>Detail</span>
            </div>
        </div>
    </header>
    
    <RouterLink :to="{name: 'halaman depan pesan'}">
        <div class="fixed right-5 bottom-5 text-2xl text-hz-white bg-soft-green rounded-full object-cover px-4 py-2 flex justify-center items-center z-40">
            <span class="mr-2">
                <i class="fa-solid fa-message"></i>
            </span>
            <span class="text-sm">Chat kami</span>
        </div>
    </RouterLink>
    
    <!-- <div class="w-4/5">
        <div class="w-full bg-hz-white px-4 py-2">
            <div class="text-sm font-semibold text-gray-800">
                <span>Adik Bintang Saya</span>
                <span class="mx-2">/</span>
                <span>Detail</span>
            </div>
        </div>
        
        <main class="p-5">
            <h1 class="text-gray-900 font-bold font-inter text-3xl">title</h1>
            <p class="text-gray-800 font-opensans text-base leading-7">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores dignissimos nobis eligendi iusto numquam nulla, sunt fuga non quasi officia. Tailwind includes an expertly-crafted default color palette out-of-the-box that is a great starting point if you don’t have your own specific branding in mind.
            </p>
        </main>
    </div> -->
</template>

<script>
export default {
    data() {
        return {
            showMenu: false
        }
    },
    methods: {
        toggleSidebar(value) {
            this.showMenu = value
            console.log('clicked')
        }
    }
}


</script>

<style lang="scss" scoped>

</style>