<template>
    <div class="contacts">
        <div class="contacts-square">
            <h2 class="contacts-title">Мы на связи!</h2>
            <p class="contacts-description">С радостью ответим на ваши вопросы по телефону:</p>
            <a href="tel:+7 (927) 710-51-35" class="contacts-tel">+7 (927) 710-51-35</a>
            <h6 class="contacts-description">Узнайте больше о нашем агентстве:</h6>
            <border-button class="contacts-btn">Скачать презентацию Spika</border-button>
        </div>
        
        <div class="contacts-form">
            <p class="form-slogan">
                Оставьте заявку в этой форме <span class="slogan-wrap">и наш звонок не заставит долго ждать!</span>
            </p>
            
            <form-field
                v-for="item in inputItems"
                :key="item.id"
                :item="item"
                :model-value="getFieldValue(item.modelKey)"
                @update:model-value="handleFieldInput($event, item.modelKey)"
                @focus="setFieldActive(item.modelKey, true)"
                @blur="setFieldActive(item.modelKey, false)"
            />
            
            <div class="form-checkbox">
                <custom-checkbox class="checkbox-input">
                    <p class="checkbox-description">
                        Я согласен на <span class="description-border">обработку персональных данных.</span>
                    </p>
                </custom-checkbox>
            </div>
            
            <black-button class="form-btn">ОТПРАВИТЬ</black-button>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import BlackButton from '../UI/Buttons/BlackButton.vue';
    import BorderButton from '../UI/Buttons/BorderButton.vue';
    import CustomCheckbox from '../UI/Customs/CustomCheckbox.vue';
    import FormField from '@/components/Marketing/FormField.vue';
    import { reactive, ref, computed, provide } from 'vue'

    interface UserData {
        nameForm: string;
        telForm: string;
        messageForm: string;
    }

    type UserDataKey = keyof UserData;

    const dataUser = reactive<UserData>({
        nameForm: '',
        telForm: '',
        messageForm: ''
    })

    const activeFields = ref<Record<UserDataKey, boolean>>({
        nameForm: false,
        telForm: false,
        messageForm: false
    })

    provide('isFieldActive', (fieldKey: UserDataKey): boolean => 
        activeFields.value[fieldKey] || dataUser[fieldKey].length > 0
    );

    const cleanPhoneNumber = computed(() => dataUser.telForm.replace(/\D/g, ''));

    const formattedPhoneValue = computed(() => {
        const digits = cleanPhoneNumber.value;
        if (!digits) return '';
        
        const parts = [];
        if (digits.length > 0) parts.push(` (${digits.substring(0, 3)}`);
        if (digits.length > 3) parts.push(`) ${digits.substring(3, 6)}`);
        if (digits.length > 6) parts.push(`-${digits.substring(6, 8)}`);
        if (digits.length > 8) parts.push(`-${digits.substring(8, 10)}`);
        
        return parts.join('');
    });

    const getFieldValue = (modelKey: UserDataKey): string => 
        modelKey === 'telForm' ? formattedPhoneValue.value : dataUser[modelKey];

    const handleFieldInput = (value: string, modelKey: UserDataKey) => {
        if (modelKey === 'telForm') {
            const digits = value.replace(/\D/g, '');
            const cleanDigits = digits.startsWith('7') ? digits.substring(1) : digits;
            dataUser.telForm = cleanDigits.substring(0, 10);
        } else if (modelKey === 'nameForm') {
            dataUser.nameForm = value.replace(/[^a-zA-Zа-яА-ЯёЁ\s-]/g, '');
        } else {
            dataUser[modelKey] = value;
        }
    };

    const setFieldActive = (fieldKey: UserDataKey, isActive: boolean) => {
        activeFields.value[fieldKey] = isActive;
    };

    const inputItems = [
        {
            type: 'text',
            placeholder: 'Ваше Имя',
            modelKey: 'nameForm',
            className: 'input-styles1',
            id: 1
        },
        {
            type: 'tel',
            placeholder: 'Телефон',
            classTel: 'form-inputTel',
            maxlength: 16,
            modelKey: 'telForm',
            className: 'input-styles1',
            id: 2
        },
        {
            type: 'textarea',
            placeholder: 'Сообщение',
            modelKey: 'messageForm',
            className: 'input-styles2',
            id: 3
        }
    ] as const;
</script>

<style lang="scss" scoped>
    .contacts {
        display: flex;
        justify-content: space-between;
        background-color: #f5f5f5;
        border-radius: 40px;
        min-width: 1252px;
        min-height: 640px;
        margin-bottom: 200px;

        &-square {
            color: #fff;
            background: linear-gradient(135deg, #2c4d50 0%, #499c85 50%, #2aaeb5 100%);
            flex: 0 1 47%;
            border-radius: 50px;
            padding: 103px 60px;
        }

        &-title {
            font-size: 56px;
            margin-bottom: 30px;
        }

        &-description {
            font-size: 22px;
            padding-right: 50px;
            margin-bottom: 30px;
        }

        &-tel {
            font-size: 54px;
            margin-bottom: 65px;
            text-decoration: none;
            color: #fff;
            transition: color 0.5s;
            display: block;

            &:hover {
                color: #6cf8ff;
            }
        }

        &-btn {
            background-color: transparent;
            border-radius: 17px;
            padding: 19px 24px;
            border-color: #fff;
            color: #fff;
            font-size: 15.52px;
            font-family: 'Geo-600', sans-serif;
            font-weight: 600;
            transition: all 0.3s;

            &:hover {
                border-color: #fff;
                background-color: #fff;
                color: #000;
                border-radius: 30px;
            }
        }

        &-form {
            display: flex;
            flex-direction: column;
            gap: 20px;
            flex: 0 1 53%;
            padding: 80px;
        }
    }

    .form {
        &-slogan {
            font-size: 20px;
        }

        &-checkbox {
            display: flex;
            align-items: center;
        }

        &-btn {
            font-size: 16px;
            font-family: 'Geo-600', sans-serif;
            font-weight: 600;
            padding: 14px 198px;
            transition: all 0.3s;

            &:hover {
                background-color: #3de3eb;
                border-color: #3de3eb;
            }
        }
    }

    .slogan-wrap {
        text-wrap-mode: nowrap;
    }

    .description-border {
        text-decoration: underline;
        text-decoration-thickness: from-font;
    }

    .checkbox-description {
        font-size: 15px;
    }
</style>