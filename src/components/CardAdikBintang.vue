<template>
    <div class="rounded bg-hz-white">
        <slot name="card"></slot>
        <div class="action p-2">
            <RouterLink to="detail-adik">
                <button class="w-full bg-hz-blue rounded p-2 text-hz-white hover:bg-dark-blue-1 duration-150">Lihat Detail</button>
            </RouterLink>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>