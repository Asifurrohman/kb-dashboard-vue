<template>
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
    </div>
</template>

<script setup>
import CardAdikBintang from '../../../components/CardAdikBintang.vue'
</script>

<style lang="scss" scoped>

</style>