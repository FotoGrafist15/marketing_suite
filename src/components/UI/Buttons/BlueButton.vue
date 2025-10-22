<template>
    <button class="btn">
        <slot/>
    </button>
</template>

<script lang="ts" setup>
    
</script>

<style lang="scss" scoped>
    .btn {
        background: linear-gradient(293.52deg, #59CBE8 -10.9%, #0070B6 155.16%);
        border-radius: 18px;
        width: auto;
        color: #fff;
        cursor: pointer;
        padding: 26px 32px;
        text-align: center;
        border: 1px solid transparent;
        text-transform: uppercase;
        font-size: 18px;
    }
</style>