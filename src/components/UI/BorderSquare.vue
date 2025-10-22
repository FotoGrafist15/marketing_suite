<template>
    <div class="square">
        <slot/>
    </div>
</template>
    
<script lang="ts" setup>
    
</script>
    
<style lang="scss" scoped>
    .square {
        border: 1px solid #000;
        border-radius: 20px;
        padding: 33px;
    }
</style>