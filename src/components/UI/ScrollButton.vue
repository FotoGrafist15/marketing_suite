<template>
    <img
        class="arrow"
        src="@/assets/icons/contacts/arrow2.svg"
        alt="arrow"
        @click="scrollToTop"
    >
</template>

<script lang="ts" setup>

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

</script>

<style lang="scss" scoped>
    .arrow {
        border-radius: 50%;
        border: 1px solid #fff;
        padding: 15px;
        cursor: pointer;
        height: 50px;
        width: 50px;
        transition: all 0.3s;
    }

</style>