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
            <template v-slot:card-image>
                <img src="../../../../public/img/ab-aldiano.jpg" alt="" class="h-40 w-full object-cover rounded-t">
            </template>
            <template v-slot:card-nama>
                Aldiano Putra Pratama
            </template>
            <template v-slot:card-kabupaten>
                Gunung Kidul
            </template>
            <template v-slot:card-provinsi>
                DI Yogyakarta
            </template>
            <template v-slot:card-jenjang>
                SMP
            </template>
            <template v-slot:card-kelas>
                8
            </template>
            <template v-slot:card-citacita>
                Cita-cita saya ingin menjadi tentara karena tugas tentara untuk membela negara Ind...
            </template>
            <template v-slot:card-button>
                Lihat Detail
            </template>
        </CardAdikBintang>
        <CardAdikBintang>
            <template v-slot:card-image>
                <img src="../../../../public/img/ab-fachri.jpg" alt="" class="h-40 w-full object-cover rounded-t">
            </template>
            <template v-slot:card-nama>
                Fachri Zanuar
            </template>
            <template v-slot:card-kabupaten>
                Bantul
            </template>
            <template v-slot:card-provinsi>
                DI Yogyakarta
            </template>
            <template v-slot:card-jenjang>
                SMP
            </template>
            <template v-slot:card-kelas>
                8
            </template>
            <template v-slot:card-citacita>
                ingin menjadi seorang abdi negara yang mengabdi pada negeri
            </template>
            <template v-slot:card-button>
                Lihat Detail
            </template>
        </CardAdikBintang>
    </div>
</template>

<script setup>
import CardAdikBintang from '../../../components/CardAdikBintang.vue'
</script>

<style lang="scss" scoped>

</style>