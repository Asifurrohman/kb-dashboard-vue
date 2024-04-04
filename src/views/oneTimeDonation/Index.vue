<template>
    <div>
        <h1 class="text-3xl font-semibold">One Time Donation</h1>
        <hr class="w-full mt-1 mb-4 bg-gray-200 h-1 rounded">
        <p class="text-gray-600 text-sm mt-2 sm:w-4/5 mb-5">
            <span class="font-semibold">One Time Donation</span> merupakan salah satu program donasi Hoshizora di mana Anda dapat bergabung kapan saja dan di mana saja dengan memberikan kontribusi finansial berapapun.
        </p>
        <p class="text-gray-600 text-sm mt-2 sm:w-4/5 mb-10">
            Dana dari program ini digunakan untuk program pengembangan dan pengelolaan Adik Bintang serta membantu sebagian Adik Bintang Hoshizora yang memerlukan biaya lebih. Melalui program ini Anda dapat membuat sebuah perubahan yang lebih baik bagi masa depan anak-anak Indonesia.
        </p>
        <div class="border rounded bg-white p-10">
            <h2>Donasi Sekarang</h2>
            <p class="text-gray-600 mt-2 mb-10">
                Pilih nominal yang tersedia, lalu klik tombol "Pilih Metode Pembayaran" untuk membuka jendela donasi.
            </p>
            <form action="" class="">
                <div class="grid gap-4 grid-cols sm:grid-cols-2 md:grid-cols-4">
                    <div>
                        <input type="radio" id="limaPuluh" name="nominal_one_time_donation" class="hidden">
                        <label for="limaPuluh" class="border hover:border-hz-blue rounded text-hz-blue p-5 flex flex-col cursor-pointer">
                            <span>Rp</span>
                            <span class="text-3xl font-bold">50.000</span>
                        </label>    
                    </div>
                    <div>
                        <input type="radio" id="seratus" name="nominal_one_time_donation" class="hidden">
                        <label for="seratus" class="border border-hz-blue rounded text-hz-blue p-5 flex flex-col cursor-pointer">
                            <span>Rp</span>
                            <span class="text-3xl font-bold">100.000</span>
                        </label>
                    </div>
                    <div>
                        <input type="radio" id="duaRatus" name="nominal_one_time_donation" class="hidden">
                        <label for="duaRatus" class="border border-hz-blue rounded text-hz-blue p-5 flex flex-col cursor-pointer">
                            <span>Rp</span>
                            <span class="text-3xl font-bold">200.000</span>
                        </label>
                    </div>
                    <div>
                        <input type="radio" id="tigaRatus" name="nominal_one_time_donation" class="hidden">
                        <label for="tigaRatus" class="border border-hz-blue rounded text-hz-blue p-5 flex flex-col cursor-pointer">
                            <span>Rp</span>
                            <span class="text-3xl font-bold">300.000</span>
                        </label>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>