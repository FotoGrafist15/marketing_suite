<template>
    <button class="btn">
        <slot/>
    </button>
</template>

<script lang="ts" setup>
    
</script>

<style lang="scss" scoped>
    .btn {
        background-color: #fff;
        border-radius: 25px;
        width: auto;
        color: #000;
        cursor: pointer;
        padding: 32px 42px;
        text-align: center;
        border: 1px solid #ffffff;
        text-transform: uppercase;
        font-size: 16px;
    }
</style>