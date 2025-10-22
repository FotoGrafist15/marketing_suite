<template>
    <div class="form-wrapper" :class="item.className">
        <label
            :for="String(item.id)"
            class="form-label"
            :class="{ active: isFieldActive(item.modelKey) }"
        >
            {{ item.placeholder }}
        </label>
        
        <p 
            v-if="item.modelKey === 'telForm' && isFieldActive(item.modelKey)" 
            class="form-telRus"
        >
            +7
        </p>
        
        <custom-input
            v-if="item.type !== 'textarea'"
            class="form-input"
            :class="item.classTel"
            :placeholder="item.placeholder"
            :type="item.type"
            :modelValue="modelValue"
            @update:modelValue="$emit('update:modelValue', $event)"
            :id="String(item.id)"
            @focus="$emit('focus')"
            @blur="$emit('blur')"
            @keydown="handleKeyDown($event, item.modelKey)"
            :maxlength="item.maxlength"
            autocomplete="off"
        />
        
        <custom-textarea
            v-else
            class="form-input"
            :placeholder="item.placeholder"
            :modelValue="modelValue"
            @update:modelValue="$emit('update:modelValue', $event)"
            :id="String(item.id)"
            @focus="$emit('focus')"
            @blur="$emit('blur')"
            @keydown="handleKeyDown($event, item.modelKey)"
        />
    </div>
</template>

<script lang="ts" setup>
    import CustomInput from '../UI/Customs/CustomInput.vue'
    import CustomTextarea from '../UI/Customs/CustomTextarea.vue'
    import { inject } from 'vue'

    interface Props {
        item: any;
        modelValue: string;
    }

    defineProps<Props>();
    defineEmits<{
        'update:modelValue': [value: string];
        'focus': [];
        'blur': [];
    }>();

    const isFieldActive = inject('isFieldActive') as (fieldKey: string) => boolean;

    const handleKeyDown = (event: KeyboardEvent, modelKey: string) => {
        if (modelKey === 'telForm') handlePhoneKeyDown(event);
        else if (modelKey === 'nameForm') handleNameKeyDown(event);
    };

    const handlePhoneKeyDown = (event: KeyboardEvent) => {
        const allowedKeys = [46, 8, 9, 27, 13, 35, 36, 37, 38, 39, 40];
        const allowedWithCtrl = [65, 67, 86, 88];
        
        if (allowedKeys.includes(event.keyCode) || 
            (event.ctrlKey && allowedWithCtrl.includes(event.keyCode))) return;
        
        if ((event.keyCode < 48 || event.keyCode > 57) && 
            (event.keyCode < 96 || event.keyCode > 105)) {
            event.preventDefault();
        }
    };

    const handleNameKeyDown = (event: KeyboardEvent) => {
        const allowedKeys = [8, 9, 13, 16, 17, 18, 19, 20, 27, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46, 144];
        const allowedWithCtrl = [65, 67, 86, 88];
        
        if (allowedKeys.includes(event.keyCode) || 
            (event.ctrlKey && allowedWithCtrl.includes(event.keyCode))) return;
        
        const isLetter = (event.keyCode >= 65 && event.keyCode <= 90) ||
                        (event.keyCode >= 97 && event.keyCode <= 122) ||
                        (event.keyCode >= 1040 && event.keyCode <= 1103);
        const isSpaceOrDash = event.keyCode === 32 || event.keyCode === 189 || event.keyCode === 109;
        
        if (!isLetter && !isSpaceOrDash) event.preventDefault();
    };
</script>

<style lang="scss" scoped>
    .form {
        &-wrapper {
            width: auto;
            border-radius: 20px;
            border: 1px solid #828282;
            display: flex;
            align-items: center;
            position: relative;
            background-color: #fff;
            padding-top: 20px;
        }
        &-label {
            position: absolute;
            left: 20px;
            top: 50%;
            transform: translateY(-50%);
            font-size: 18px;
            color: #999;
            transition: all 0.3s ease;
            background: transparent;
            width: 96%;
            z-index: 0;
            padding: 15px 0;

            &.active {
                top: 20px;
                font-size: 10px;
                color: #999;
            }
        }
        &-input {
            margin-left: 10px;
            width: 96%;
            z-index: 1;
            font-family: 'Geo-400', sans-serif;
            font-weight: 400;

            &::placeholder {
                opacity: 0;
            }
        }
        &-inputTel {
            margin-left: 14px;
            position: absolute;
            left: 20px;
            top: 50%;
        }
        &-telRus {
            position: absolute;
            left: 20px;
            top: 50%;
            font-size: 18px;
            font-family: 'Geo-400', sans-serif;
            font-weight: 400;
            pointer-events: none;
        }
    } 

    .input {
        &-styles1 {
            height: 64px;
        }
        &-styles2 {
            padding-top: 20px;
            height: auto;
            min-height: 134px;

            .form-label {
                top: 30px;
            }

            :deep(.input) {
                height: 100px;
                resize: none;
                padding-top: 15px;
            }
        }
    }

</style>