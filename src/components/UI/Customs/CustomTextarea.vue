<template>
    <textarea
        class="textarea"
        :type="type"
        :placeholder="placeholder"
        :value="modelValue"
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
        :id="id"
        @focus="$emit('focus', $event)"
        @blur="$emit('blur', $event)"
        required
    >
    </textarea>
</template>

<script lang="ts" setup>

    interface Props {
        modelValue: string;
        placeholder: string;
        type: string;
        id: string;
    }

    defineProps<Props>()
    defineEmits<{
        'update:modelValue': [value: string]
        'focus': [event: Event]
        'blur': [event: Event]
    }>()

</script>

<style lang="scss" scoped>

    .textarea {
        border: none;
        outline: none;
        background: transparent;
        padding-left: 10px;
        font-size: 18px;
        resize: none;
    }

</style>