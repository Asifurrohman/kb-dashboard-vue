<template>
    <div class="rounded bg-hz-white">
        <!-- <slot name="card"></slot>
        <div class="action p-2">
            <RouterLink to="detail-adik">
                <button class="w-full bg-hz-blue rounded p-2 text-hz-white hover:bg-dark-blue-1 duration-150">Lihat Detail</button>
            </RouterLink>
        </div> -->
        <slot name="card-image"></slot>
        
        <div class="p-2">
            <h3 class="font-semibold mb-1 text-lg">
                <slot name="card-nama"></slot>
            </h3>
            <div class="flex gap-1 mb-1 text-sm md:text-base">
                <span><i class="fa-solid fa-location-dot"></i></span>
                <span><slot name="card-kabupaten"></slot></span>
                <span>-</span>
                <span><slot name="card-provinsi"></slot></span>
            </div>
            <div class="flex gap-4 mb-2">
                <span>
                    Jenjang: <span class="bg-blue-800 text-hz-white p-1 rounded"><slot name="card-jenjang"></slot></span>
                </span>
                <span>
                    Kelas: <span><slot name="card-kelas"></slot></span>
                </span>
            </div>
            <div>
                <p class="text-sm italic">
                    <slot name="card-citacita"></slot>
                </p>
            </div>
            <div class="w-full">
                <button class="bg-hz-blue text-hz-white w-full py-2 rounded mt-2 hover:bg-sky-300">
                    <slot name="card-button"></slot>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>

</style>