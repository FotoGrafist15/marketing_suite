<template>
    <div class="advantages">
        <h2 class="advantages-title">Наши преимущества</h2>
        <div
            class="advantages-container"
        >
            <div
                class="advantages-group"
                v-for="item in advantagesItems"
                :key="item.id"
            >
                <border-square
                    class="advantages-label"
                    :class="item.classLabel"
                >
                    {{ item.label }}
                </border-square>
                <span class="advantages-description">
                    {{ item.description }}
                </span>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import BorderSquare from '../UI/BorderSquare.vue';
    interface advantagesItem {
        label: string;
        classLabel: string;
        description: string;
        id: number;
    }


    const advantagesItems: advantagesItem[] = [
        {
            label: 'Data-driven',
            classLabel: 'colorLabel1',
            description: 'Мы работаем с цифрами: анализируем продажи, воронки, CRM, данные маркетплейсов. Используем только проверенные источники и аналитику.',
            id: 1
        },
        {
            label: 'Кастомизация',
            classLabel: 'colorLabel2',
            description: 'Стратегия подбирается под ваши цели, особенности и ресурсы — чтобы вы могли легко внедрить, использовать и достичь результатов.',
            id: 2
        },
        {
            label: 'Человекоцентричность',
            classLabel: 'colorLabel3',
            description: 'Маркетинг — это про людей. Мы разговариваем с клиентами, строим карты клиентского пути (CJM) и карты эмпатии, чтобы понять, как и почему люди выбирают ваш бренд или компанию.',
            id: 3
        }
    ]
</script>

<style lang="scss" scoped>
    .advantages {
        margin-bottom: 120px;
        &-title {
            font-size: 36px;
            text-transform: uppercase;
            margin-bottom: 40px;
        }
        &-container {
            gap: 25px;
            display: flex;
            flex-direction: row;
        }
        &-group {
            gap: 25px;
            display: flex;
            flex-direction: column;
        }
        &-label {
            font-size: 24px;
            border-radius: 90px;
            width: fit-content;
            padding: 13px 28px;
            height: 63px;
            font-family: 'Geo-600', sans-serif;
            font-weight: 600;
        }
        &-description {
            font-size: 20px;
        }
    }
    .colorLabel1 {
        color: rgba(0, 176, 185, 1);
    }
    .colorLabel2 {
        color: rgba(0, 199, 177, 1);
    }
    .colorLabel3 {
        color: rgba(104, 91, 199, 1);
    }
</style>