<template>
    <div class="bg-slate-200 text-center flex flex-col py-4 rounded hover:bg-slate-300 duration-150">
        <div class="text-black text-xl font-semibold">
            <slot name="stat-text"></slot>
        </div>
        <div class="text-hz-blue text-4xl font-bold">
            <slot name="stat-number"></slot>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>