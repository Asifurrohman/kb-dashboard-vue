<template>
    <div class="bg-hz-white p-2 rounded my-4">
                <h2 class="text-lg font-bold">Ingin mentransfer donasi Anda?</h2>
                <p>
                    Anda dapat melakukannya langsung dari Akun Hoshizora! Platform ini menerima transfer bank, GoPay, dan kartu debit / kredit. Bukti trasfer donasi akan dikirim segera setelah Anda menyelesaikan pembayaran. Dijamin lebih cepat!
                </p>
                <button class="bg-soft-green text-white px-4 py-2 rounded mt-2 duration-150 hover:bg-emerald-600">
                    Bayar Donasi
                </button>
            </div>

            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <CardAdikBintang>
                    <template v-slot:card>
                        <img src="../../../../public/img/sakamoto.jpg" alt="" class="h-40 w-full object-cover rounded-t">
                        <div class="p-2">
                            <h3 class="font-semibold mb-1 text-lg">Vladimir Monomakh</h3>
                            <div class="flex gap-1 mb-1 text-sm md:text-base">
                                <span><i class="fa-solid fa-location-dot"></i></span>
                                <span>Sleman</span>
                                <span>-</span>
                                <span>DI Yogyakarta</span>
                            </div>
                            <div class="flex gap-4 mb-2">
                                <span>
                                    Jenjang: <span class="bg-blue-800 text-hz-white p-1 rounded">SMP</span>
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
                    <template v-slot:card>
                        <img src="../../../../public/img/masha.jpg" alt="" class="h-40 w-full object-cover rounded-t">
                        <div class="p-2">
                            <h3 class="font-semibold mb-1 text-lg">Max Immelmann</h3>
                            <div class="flex gap-1 mb-1 text-sm md:text-base">
                                <span><i class="fa-solid fa-location-dot"></i></span>
                                <span>Kulon Progo</span>
                                <span>-</span>
                                <span>DI Yogyakarta</span>
                            </div>
                            <div class="flex gap-4 mb-2">
                                <span>
                                    Jenjang: <span class="bg-red-600 rounded text-hz-white p-1">SD</span>
                                </span>
                                <span>
                                    Kelas: <span>6</span>
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
                    <template v-slot:card>
                        <img src="../../../../public/img/acipu.jpeg" alt="" class="h-40 w-full object-cover">
                        <div class="p-2">
                            <h3 class="font-semibold mb-1 text-lg">Sutan Sjahrir</h3>
                            <div class="flex gap-1 mb-1 text-sm md:text-base">
                                <span><i class="fa-solid fa-location-dot"></i></span>
                                <span>Pati</span>
                                <span>-</span>
                                <span>Jawa Tengah</span>
                            </div>
                            <div class="flex gap-4 mb-2">
                                <span>
                                    Jenjang: <span class="bg-sky-400 rounded text-hz-white p-1">SMA</span>
                                </span>
                                <span>
                                    Kelas: <span>11</span>
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
            </div>
</template>

<script setup>
    import CardAdikBintang from '../../../components/CardAdikBintang.vue'
</script>

<style lang="scss" scoped>

</style>