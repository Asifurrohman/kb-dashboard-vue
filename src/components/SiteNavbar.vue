<template>
    <header class="w-full lg:w-4/5 h-16 bg-soft-blue lg:bg-white shadow fixed right-0 top-0 z-10 font-inter">
        <nav class=" w-full h-full">
            <div class="w-full h-full p-5 flex flex-row justify-between lg:justify-end items-center">
                <button class="block lg:hidden text-white" id="hamburgerMenu" @click="showSidebar">
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
                    <button id="avatarButton" type="button"  class="flex flex-row items-center relative">
                        <span class="mr-2.5 hidden md:block text-white lg:text-black">Michelangelo</span>
                        <div class="w-12 h-12">
                            <img class="rounded-full max-w-full h-auto align-middle border-none" src="../../public/img/shanon.jpg" alt="user image" />
                        </div>
                        <div id="avatarMenu" class="hidden text-center text-base bg-white border border-inherit rounded w-40 absolute top-0 right-0 mt-10 z-30 p-2">
                            <a href="profil.html">Profil saya</a>
                            <hr class="my-2">
                            <a href="#" class="w-full text-red-600 hover:text-red-900">Sign out</a>
                        </div>
                    </button>
                </div>
            </div>
        </nav>
    </header>
</template>


<script setup>

</script>