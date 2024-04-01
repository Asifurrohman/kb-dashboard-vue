<template>

        <aside id="sidebar" class="w-2/5 sm:w-3/5 lg:w-1/5 min-h-screen bg-white lg:bg-soft-blue fixed top-0 -translate-x-full lg:translate-x-0 lg:left-0 transition ease-in-out duration-300 z-20 lg:z-0 shadow-md font-inter">
            <div class="w-full px-5 py-4 flex flex-row justify-between lg:justify-center">
                <a href="#" class=""><img src="../../public/img/logo.svg" alt="" class="h-8"></a>
                <button id="closeHamburgerMenu">
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
                        <RouterLink to="/program-donasi" class="text-white flex mx-3 p-2 rounded hover:bg-blue-300" activeClass="bg-blue-400">
                            <span class="w-5 h-5"><ion-icon name="heart-half-outline"></ion-icon></span>
                            <span class="ms-3">One Time Donation</span>
                        </RouterLink>
                    </li>
                    <li class="my-2">
                        <RouterLink to="/program-donasi" class="text-white flex mx-3 p-2 rounded hover:bg-blue-300" activeClass="bg-blue-400">
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
                        <RouterLink to="/tambah-adik-bintang" class="text-white flex mx-3 p-2 rounded hover:bg-blue-300" activeClass="bg-blue-400">
                            <span class="w-5 h-5"><ion-icon name="person-add-outline"></ion-icon></span>
                            <span class="ms-3">Tambah Adik Bintang</span>
                        </RouterLink>
                    </li>
                    <li class="my-2">
                        <RouterLink to="/konfirmasi-donasi" class="text-white flex mx-3 p-2 rounded hover:bg-blue-300" activeClass="bg-blue-400">
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

<script setup>

</script>

<style lang="scss" scoped>

</style>