<template>
    <div class="w-full lg:w-4/5 absolute right-0 ">
        <main id="main" class="mt-28 p-5">
            <p class="text-gray-600 mb-2 leading-7 ">
                <span class="font-semibold text-2xl">One Time Donation</span> merupakan salah satu program donasi Hoshizora di mana Anda dapat bergabung kapan saja dan di mana saja dengan memberikan kontribusi finansial berapapun.
            </p>
            <p class="text-gray-600 mb-10">
                Dana dari program ini digunakan untuk <span class="font-semibold">program pengembangan dan pengelolaan Adik Bintang</span> serta membantu sebagian Adik Bintang Hoshizora yang memerlukan biaya lebih. Melalui program ini Anda dapat membuat sebuah perubahan yang lebih baik bagi masa depan anak-anak Indonesia.
            </p>
            <div class="border rounded bg-white p-10">
                <h2 class="font-semibold text-2xl">Donasi Sekarang</h2>
                <p class="text-gray-600 mt-2 mb-10">
                    Pilih nominal yang tersedia, lalu klik tombol "Pilih Metode Pembayaran" untuk membuka jendela donasi.
                </p>
                <form action="" class="">
                    <div class="grid gap-4 grid-cols sm:grid-cols-2 md:grid-cols-4">
                        <div v-for="nominal in nominalDonasi" :key="nominal.id">
                            <input type="radio" :value="nominal.nilai" v-bind:id="nominal.name" name="nominal_one_time_donation">
                            <label v-bind:for="nominal.name" class="border border-hz-blue rounded text-hz-blue p-5 flex flex-col cursor-pointer">
                                <span>Rp</span>
                                <span class="text-3xl font-bold">{{ nominal.nilai }}</span>
                            </label>
                        </div>
                    </div>
                    <div class="w-full flex justify-end">
                        <button type="button"@click="togglePaymentModal(true)" class="bg-soft-green text-white px-5 py-2 rounded hover:bg-emerald-600 mt-5">Pilih Metode Pembayaran</button>
                    </div>
                </form>
            </div>
        </main>
    </div>
    
    <Modal :class="!openPaymentModal ? 'hidden' : '' " class="w-96">
        <template v-slot:modalHeader>
            <div class="flex items-center justify-between">
                <span>
                    Choose payment method
                </span>
                <button @click="togglePaymentModal(false)">
                    <ion-icon name="close" size="large"></ion-icon>
                </button>
            </div>
            
        </template>
        <template v-slot:modalContent>
            <div class="m-4 border rounded">
                <div class="bg-slate-200 p-2">
                    <span class="font-semibold">Instant Payment</span>
                    <p class="text-sm">Verifikasi otomatis, mudah, dan cepat!</p>
                </div>
                <div class="w-[500px]">
                    <!-- <div class="py-4 px-2 hover:bg-slate-400 hover:text-hz-white focus:bg-slate-700 flex justify-between items-center">
                        <span>Mandiri Virtual Account</span>
                        <button class="bg-soft-green px-4 py-2 rounded text-white">
                            Lanjut
                        </button>
                    </div> -->
                    
                    <div v-for="bank in namaBank" class="py-4 px-2 border-t border-b hover:bg-slate-400 hover:text-hz-white focus:bg-slate-700 flex justify-between items-center">
                        <span>{{ bank.nama }}</span>
                        <button class="bg-soft-green px-4 py-2 rounded text-white" :value="bank.nilai">
                            Lanjut
                        </button>
                    </div>
                </div>
            </div>
        </template>
    </Modal>
</template>

<script setup>
import Modal from '../../components/ModalGeneral.vue'
</script>

<script>
export default {
    data() {
        return {
            openPaymentModal: false,
            showNextButton: false,
            nominalDonasi: [
            {id: 1, nilai: 50000, name: 'limaPuluhRibu'},
            {id: 2, nilai: 100000, name: 'seratusRibu'},
            {id: 3, nilai: 200000, name: 'duaRatusRibu'},
            {id: 4, nilai: 300000, name: 'tigaRatusRibu'},
            ],
            namaBank: [
            {id: "mandiri", nama: "Mandiri Virtual Account", nilai: "mandiri"},
            {id: "bni", nama: "BNI Virtual Account", nilai: "bni"},
            {id: "bri", nama: "BRI Virtual Account", nilai: "bri"},
            {id: "bca", nama: "BCA Virtual Account", nilai: "bca"},
            {id: "permata", nama: "PermataBank VA", nilai: "permata"},
            {id: "gopay", nama: "GoPay", nilai: "gopay"},
            ]
        }
    },

    methods: {
        togglePaymentModal(value){
            this.openPaymentModal = value
        },
        toggleNextButton(){

        }
    }
}
</script>

<style lang="scss" scoped>

</style>