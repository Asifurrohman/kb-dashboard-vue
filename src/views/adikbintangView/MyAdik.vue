<template>
    <div class="w-full lg:w-4/5 absolute right-0 ">
        <main id="main" class=" mt-28 p-5">
            <h1 class="font-semibold text-xl">Adik Bintang Saya</h1>
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <CardAdikBintang>
                    <template v-slot:card>
                        <img src="../../../public/img/sakamoto.jpg" alt="">
                        <div class="p-2">
                            <h3 class="font-semibold mb-1 text-lg">Vladimir Monomakh</h3>
                            <div class="flex gap-1 mb-1">
                                <span><i class="fa-solid fa-location-dot"></i></span>
                                <span>Sleman</span>
                                <span>-</span>
                                <span>DI Yogyakarta</span>
                            </div>
                            <div class="flex gap-4 mb-2">
                                <span>
                                    Jenjang: <span class="bg-blue-800 text-hz-white p-1">SMP</span>
                                </span>
                                <span>
                                    Kelas: <span>8</span>
                                </span>
                            </div>
                            <div>
                                <p class="text-sm italic">
                                    Saya mempunyai cita-cita menjadi guru karena guru adalah sosok yang mulia dan pi...
                                </p>
                            </div>
                        </div>
                    </template>
                </CardAdikBintang>
                
                <CardAdikBintang>
                    <template v-slot:abPhoto>
                        <img src="../../../public/img/masha.jpg" alt="">
                    </template>
                </CardAdikBintang>
            </div>
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