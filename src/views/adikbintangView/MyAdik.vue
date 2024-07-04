<template>
    <div class="w-full lg:w-4/5 absolute right-0 ">
        <main id="main" class=" mt-28 p-5">
            <!-- <h1 class="font-semibold text-xl">Adik Bintang Saya</h1> -->
            
            <div class="flex justify-end">
                <a href="#" class="bg-hz-blue hover:bg-dark-blue-1 duration-150 text-white px-4 py-2 rounded">
                    <span class="mr-2"><i class="fa-solid fa-square-plus"></i></span>
                    <span>Tambah Adik Bintang</span>
                </a>
            </div>
            <div>
                <ul class="flex gap-4">
                    <li class="border-b-4 border-b-transparent hover:border-dark-blue-1 duration-150 px-2 py-3">
                        <RouterLink to="/my-adik">
                            <a href="#" class="hover:text-dark-blue-1 font-semibold duration-150 px-2 py-3">Aktif</a>
                        </RouterLink>
                    </li>
                    <li class="border-b-4 border-b-transparent hover:border-dark-blue-1 duration-150 px-2 py-3">
                        <a href="#" class="hover:text-dark-blue-1 font-semibold duration-150 px-2 py-3">Menunggu Persetujuan</a>
                    </li>
                    <li class="border-b-4 border-b-transparent hover:border-dark-blue-1 duration-150 px-2 py-3">
                        <a href="#" class="hover:text-dark-blue-1 font-semibold duration-150 px-2 py-3">Selesai</a>
                    </li>
                </ul>
            </div>
            <hr class="h-1 bg-slate-400 -mt-1">

            <router-view></router-view>

            
        </main>
    </div>
</template>


<script setup>
    import CardAdikBintang from '../../components/CardAdikBintang.vue'
</script>

<script>
export default {
}
</script>

<style lang="scss" scoped>

</style>