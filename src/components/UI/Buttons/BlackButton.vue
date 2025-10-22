<template>
    <button class="btn">
        <slot/>
    </button>
</template>
    
<script lang="ts" setup>
    
</script>
    
<style lang="scss" scoped>

    .btn {
        background-color: #000;
        border-radius: 50px;
        padding: 28px 42px;
        border: 1px solid #000;
        text-transform: uppercase;
        width: auto;
        color: #fff;
        font-size: 18px;
        pointer-events: all;
        cursor: pointer;
    }
</style>