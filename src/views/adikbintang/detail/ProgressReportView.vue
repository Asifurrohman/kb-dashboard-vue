<template>
    <div class="bg-white w-full rounded pb-5">
        <div class="bg-gray-300 w-full flex justify-center rounded-t">
            <div class="w-40 -mb-12 pt-5">
                <img src="../../../../public/img/sakamoto.jpg" alt="" class="h-40 w-full object-cover rounded-full border-soft-blue border-8">
            </div>
        </div>
        
        <div class="text-center mt-20">
            <h2 class="font-bold text-3xl">Sakamoto</h2>
            <span class="text-xl">15 Tahun</span>
        </div>
        
        <!-- Menu pada profile adik bintang -->
        <AdikBintagProfileMenu />
        
        <h3 class="text-lg text-soft-blue font-semibold text-center mt-10">Progress Report</h3>
        <hr class="w-full my-1 bg-gray-200">
        
        <div class="p-10">
            <div>
                <h3 class="text-xl">Periode: <span class="bg-emerald-600 text-white text-base p-2 rounded">Juli - Desember 2023</span></h3>
                <div class="w-full flex mt-5">
                    <div class="border-2 border-slate-400 w-1/2 rounded">
                        <div class="p-2 bg-slate-200 font-semibold">Surat</div>
                        <div class="px-2 py-4">
                            <button>
                                <img src="../../../../public/img/contoh-form.png" alt="" class="w-20 mr-2 object-cover">
                            </button>
                        </div>
                        <div class="bg-slate-200 w-full px-2 py-4">
                            <form action="">
                                <input type="text" placeholder="Tulis balasan surat..." class="border-2 rounded p-2 w-full">
                            </form>
                        </div>
                    </div>
                    <div class="border-2 border-slate-400 w-1/2 rounded">
                        <div class="p-2 bg-slate-200 font-semibold">Rapor</div>
                        <div class="px-2 py-4">
                            <button>
                                <img src="../../../../public/img/contoh-form.png" alt="" class="w-20 mr-2 object-cover">
                            </button>
                            <button>
                                <img src="../../../../public/img/contoh-form.png" alt="" class="w-20 mr-2 object-cover">
                            </button>
                            <button>
                                <img src="../../../../public/img/contoh-form.png" alt="" class="w-20 mr-2 object-cover">
                            </button>
                        </div>
                        <div class="bg-slate-200 w-full px-2 py-4">
                            <form action="">
                                <input type="text" placeholder="Tulis balasan surat..." class="border-2 rounded p-2 w-full">
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import AdikBintagProfileMenu from '../../../components/AdikBintangProfileMenu.vue'
</script>

<style lang="scss" scoped>

</style>