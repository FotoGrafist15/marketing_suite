<template>
    <div class="square">
        <slot/>
    </div>
</template>

<script lang="ts" setup>
    
</script>

<style lang="scss" scoped>
    .square {
        background-color: rgba(245, 245, 245, 1);
        border-radius: 20px;
        width: 388px;
        height: 136px;
        font-family: 'Geo-400', sans-serif;
        font-weight: 400;
    }
</style>