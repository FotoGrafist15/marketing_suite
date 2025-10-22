<template>
    <div class="profit">
        <h2 class="profit-title">Что получит бизнес</h2>
        <div class="profit-container">
            <div
                class="profit-group"
                v-for="group in labelItems"
            >
                <gray-square
                    v-for="item in group.columnGroups"
                    :key="item.id"
                    class="profit-square"
                    :class="item.id === 31 ? 'heightSquare' : ''"
                >
                    <h5 class="profit-label">{{ item.label }}</h5>
                </gray-square>
                <black-button v-if="group.id === 3" class="profit-btn">Перейти в чат с консультантом</black-button>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import GraySquare from '@/components/UI/GraySquare.vue'
    import BlackButton from '@/components/UI/Buttons/BlackButton.vue'

    interface groupItem {
        label: string;
        id: number;
    }

    interface labelItem {
        columnGroups: groupItem[];
        id: number
    }

    const labelItems: labelItem[] = [
        {
            columnGroups: [
                {
                    label: 'Исследование сильных и слабых сторон бизнеса',
                    id: 11
                },
                {
                    label: 'Резюме по направлениям для роста и развития',
                    id: 12
                },
                {
                    label: 'Результаты исследований, портреты клиентов, CJM',
                    id: 13
                }
            ],
            id: 1
        },
        {
            columnGroups: [
                {
                    label: 'Анализ рынка и конкурентов',
                    id: 21
                },
                {
                    label: 'Данные опросов и глубинных интервью',
                    id: 22
                },
                {
                    label: 'Детализированный план маркетинга в формате Excel',
                    id: 23
                }
            ],
            id: 2
        },
        {
            columnGroups: [
                {
                    label: 'PDF-отчет с детальным описанием стратегии маркетинга по каналам коммуникаций с метриками и KPI',
                    id: 31
                }
            ],
            id: 3
        }
    ]
</script>

<style lang="scss" scoped>
    .profit {
        margin-bottom: 120px;
        &-title {
            font-size: 36px;
            text-transform: uppercase;
            margin-bottom: 40px;
        }
        &-container {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 35px;
        }
        &-group {
            display: grid;
            grid-template-rows: repeat(3, 0fr);
            gap: 35px;
        }
        &-square {
            text-align: center;
            font-size: 22px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        &-label {
            padding: 53px;
        }
        &-btn {
            transition: all 0.3s;
            &:hover {
                background-color: #005b93;
            }
        }
    }

    .heightSquare {
        height: 312px;
    }

</style>