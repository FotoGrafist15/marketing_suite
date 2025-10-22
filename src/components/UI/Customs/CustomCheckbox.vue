<template>
    <label class="checkbox">
        <input
            class="checkbox__input"
            aria-label="checkbox"
            type="checkbox"
            hidden
        >
        <span class="checkbox__checkmark"></span>
        <slot/>
    </label>
</template>

<script lang="ts" setup>
    
</script>

<style lang="scss" scoped>
    .checkbox {
        display: flex;
        align-items: center;
        gap: 11px;
        cursor: pointer;

        &__checkmark {
            width: 22px;
            height: 22px;
            border: 1px solid rgba(130, 130, 130, 1);
            border-radius: 6px;
            position: relative;
            background-color: rgba(255, 255, 255, 1);
        }
        &__input:checked + &__checkmark::after {
            content: "";
            position: absolute;
            left: 6px;
            top: 2px;
            width: 5px;
            height: 10px;
            border: solid rgb(77, 77, 77);
            border-width: 0 2px 2px 0;
            transform: rotate(45deg);
        }
    }
</style>