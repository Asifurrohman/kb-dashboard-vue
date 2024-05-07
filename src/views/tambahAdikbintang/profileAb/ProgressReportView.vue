<template>
    <div class="w-full lg:w-4/5 absolute right-0 font-inter">
        <main id="main" class=" mt-20 p-5">
            <div class="bg-white w-full rounded pb-5">
                <div class="bg-gray-300 w-full flex justify-center rounded-t">
                    <div class="w-40 -mb-12 pt-5">
                        <img src="../../../../public/img/klee.jpg" alt="" class="h-40 w-full object-cover rounded-full border-soft-blue border-8">
                    </div>
                </div>
                
                <div class="text-center mt-20">
                    <h2 class="font-bold text-3xl">Klee</h2>
                    <span class="text-xl">15 Tahun</span>
                </div>
                
                <!-- Menu pada profile adik bintang -->
                <TambahAdikBintagProfileMenu />
                
                <h3 class="text-lg text-soft-blue font-semibold text-center mt-10">Progress Report</h3>
                <hr class="w-full my-1 bg-gray-200">
                
                <div class="p-10">
                    <div>
                        <h3 class="text-xl">Periode: <span class="font-semibold">Juli - Desember 2023</span></h3>
                        <div>
                            <form action="">
                                <img src="../../../../public/img/contoh-form.png" alt="" class="w-40 object-cover">
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script setup>
import TambahAdikBintagProfileMenu from '../../../components/TambahAdikBintangProfileMenu.vue'
</script>

<style lang="scss" scoped>

</style>