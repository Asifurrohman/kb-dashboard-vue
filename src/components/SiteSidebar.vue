<template>
    <!-- <aside id="sidebar" class="w-2/5 sm:w-3/5 lg:w-1/5 bg-hz-blue min-h-screen fixed top-0 -translate-x-full lg:translate-x-0 lg:left-0 transition ease-in-out duration-300 z-20 lg:z-0">
            <div class="w-full px-5 py-4 flex flex-row justify-between lg:justify-center">
                <a href="#" class=""><img src="../../public/img/logo.svg" alt="" class="h-8"></a>
                <button id="closeHamburgerMenu">
                    <ion-icon name="close-outline" class="block lg:hidden text-white" size="large"></ion-icon>
                </button>
            </div>
            <hr class="border-slate-50/[.09]">
            <div class="link-wrapper px-3 text-sm sm:text-base">
                <ul class="mt-5">
                    <li>
                        <a href="#" class="flex items-center rounded p-2 text-white bg-slate-50/[.09] mb-2.5">
                            <span class="w-5 h-5"><ion-icon name="grid"></ion-icon></span>
                            <span class="ms-3">Beranda</span>
                        </a>
                        <a href="program_donasi.html" class="flex items-center rounded p-2 hover:bg-custom-blue text-white mb-2.5">
                            <span class="w-5 h-5"><ion-icon name="library"></ion-icon></span>
                            <span class="ms-3">Program Donasi</span>
                        </a>
                        <a href="adik_bintang_saya.html" class="flex items-center rounded p-2 hover:bg-custom-blue text-white mb-2.5">
                            <span class="w-5 h-5"><ion-icon name="people"></ion-icon></span>
                            <span class="ms-3">Adik Bintang Saya</span>
                        </a>
                        <a href="tambah_adik_bintang.html" class="flex items-center rounded p-2 hover:bg-custom-blue text-white mb-2.5">
                            <span class="w-5 h-5"><ion-icon name="people"></ion-icon></span>
                            <span class="ms-3">Tambah Adik Bintang</span>
                        </a>
                        <a href="adik_bintang_saya.html" class="flex items-center rounded p-2 hover:bg-custom-blue text-white mb-2.5">
                            <span class="w-5 h-5"><ion-icon name="people"></ion-icon></span>
                            <span class="ms-3">Laporan Donasi</span>
                        </a>
                    </li>
                </ul>
            </div>
        </aside> -->

        <aside id="sidebar" class="w-2/5 sm:w-3/5 lg:w-1/5 min-h-screen bg-white fixed top-0 -translate-x-full lg:translate-x-0 lg:left-0 transition ease-in-out duration-300 z-20 lg:z-0 shadow-md font-inter">
            <div class="w-full px-5 py-4 flex flex-row justify-between lg:justify-center">
                <a href="#" class=""><img src="../../public/img/logo.svg" alt="" class="h-8"></a>
                <button id="closeHamburgerMenu">
                    <ion-icon name="close-outline" class="block lg:hidden text-soft-green" size="large"></ion-icon>
                </button>
            </div>
            <hr class="border-slate-50/[.09]">
            <div class="link-wrapper text-sm sm:text-base w-full">
                <ul class="mt-5 text-dark-grey w-full font-semibold">
                    <li>
                        <RouterLink to="/" activeClass="flex bg-soft-blue mx-3 items-center rounded p-2 text-white mb-2.5 hover:text-white" class="flex mx-3 items-center rounded p-2 text-dark-grey mb-2.5 hover:text-soft-blue">
                            <span class="w-5 h-5"><ion-icon name="grid"></ion-icon></span>
                            <span class="ms-3">Beranda</span>
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/program-donasi" activeClass="flex bg-soft-blue mx-3 items-center rounded p-2 text-white mb-2.5 hover:text-white" class="flex mx-3 items-center rounded p-2 text-dark-grey mb-2.5 hover:text-soft-blue">
                            <span class="w-5 h-5"><ion-icon name="library"></ion-icon></span>
                            <span class="ms-3">Program Donasi</span>
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/adik-bintang-saya" exactActiveClass="flex bg-soft-blue mx-3 items-center rounded p-2 text-white mb-2.5 hover:text-white" class="flex mx-3 items-center rounded p-2 text-dark-grey mb-2.5 hover:text-soft-blue">
                            <span class="w-5 h-5"><ion-icon name="people"></ion-icon></span>
                            <span class="ms-3">Adik Bintang Saya</span>
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/tambah-adik-bintang" exactActiveClass="flex bg-soft-blue mx-3 items-center rounded p-2 text-white mb-2.5 hover:text-white" class="flex mx-3 items-center rounded p-2 text-dark-grey mb-2.5 hover:text-soft-blue">
                            <span class="w-5 h-5"><ion-icon name="people"></ion-icon></span>
                            <span class="ms-3">Tambah Adik Bintang</span>
                        </RouterLink>
                    </li>
                </ul>
            </div>
        </aside>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>