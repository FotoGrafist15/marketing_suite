<template>
    <button class="btn">
        <slot/>
    </button>
</template>

<script lang="ts" setup>
    
</script>

<style lang="scss" scoped>
    .btn {
        border: 1px solid #000;
        border-radius: 50px;
        width: auto;
        color: #000000;
        background-color: #fff;
        cursor: pointer;
        padding: 28px 42px;
        text-align: center;
        text-transform: uppercase;
        font-size: 18px;
    }
</style>