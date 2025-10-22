<template>
    <ul class="square">
        <slot/>
    </ul>
</template>
    
<script setup lang="ts">
</script>
    
<style scoped lang="scss">
    .square {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 275px;
        height: 261px;
        background-color: rgb(255, 255, 255);
        z-index: 100;
        padding: 30px 0 45px 35px;
        box-shadow: 1px 1px 1px #000;
    } 

</style>