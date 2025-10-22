<template>
    <header class="header container">
        <header-contacts/>
        <header-nav/>
    </header>
</template>
    
<script lang="ts" setup>
    import HeaderContacts from '@/components/Header/HeaderContacts.vue'
    import HeaderNav from '@/components/Header/HeaderNav.vue'
</script>
    
<style lang="scss" scoped>
    .header {
        margin: 25px auto;
        margin-bottom: 50px;
    }
</style>