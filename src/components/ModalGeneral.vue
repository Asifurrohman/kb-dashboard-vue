<template>
    <div class="fixed bg-sky-800 bg-opacity-75 top-0 left-0 w-screen min-h-screen flex items-center justify-center z-30 py-10">
        <div class="bg-white rounded">
            <div class="bg-hz-blue text-hz-white p-2 text-center rounded-t">
                <slot name="modalHeader"></slot>
            </div>

            <div class="text-center">
                <slot name="modalContent"></slot>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>