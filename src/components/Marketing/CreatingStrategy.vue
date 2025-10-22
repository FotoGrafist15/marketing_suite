<template>
    <div class="creating">
        <h2 class="creating-title">Как мы создаем стратегию для бизнеса</h2>
        <div class="creating-container">
            <div
                class="creating-planes"
                :class="elem.classGap"
                v-for="elem in creatingElements"
                :key="elem.id"
            >
                <span class="creating-number">{{ elem.number }}</span>
                <h5 class="creating-subtitle">{{ elem.title }}</h5>
                <ul class="creating-list">
                    <span class="creating-description">{{ elem.description }}</span>
                    <li
                        class="creating-items"
                        v-for="item in elem.items"
                        :key="item.id"
                    >
                        {{ item.item }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>

    interface creatingElem {
        number: number;
        title: string;
        description: string;
        classGap: string;
        items: item[];
        id: number;
    }

    interface item {
        item: string;
        id: number;
    }
    
    const creatingElements: creatingElem[] = [
        {
            number: 1,
            title: 'Исследование и аудит',
            description: 'Мы погружаемся в ваш бизнес и анализируем все, что влияет на маркетинг. Проводим:',
            classGap: 'classGap1',
            items: [
                {
                    item: "Интервью с руководством и ключевыми сотрудниками",
                    id: 11
                },
                {
                    item: "Аудит текущего маркетинга: УТП, каналы, офферы, воронки",
                    id: 12
                },
                {
                    item: "Анализ конкурентов: их предложения, стратегии, слабые стороны",
                    id: 13
                },
                {
                    item: "Исследование рынка и ключевых тенденций",
                    id: 14
                },
                {
                    item: "Глубинные интервью с клиентами и экспертами рынка",
                    id: 15
                }
            ],
            id: 1
        },
        {
            number: 2,
            title: 'Разработка маркетинговой стратегии',
            description: 'На основе собранных данных мы разрабатываем стратегию продвижения:',
            classGap: 'classGap2',
            items: [
                {
                    item: "Обновляем позиционирование ",
                    id: 21
                },
                {
                    item: "Сегментируем целевую аудиторию, описываем профили (buyer personas) и формулируем ценностные предложения для каждой целевой группы",
                    id: 22
                },
                {
                    item: "Составляем маркетинговую стратегию на 6/ 12 месяцев: цели, этапы, инструменты достижения, KPI и метрики для оценки результатов",
                    id: 23
                },
                {
                    item: "Готовим инструменты для продаж и маркетинга: презентации, рекламные материалы, офферы и скрипты продаж",
                    id: 24
                }
            ],
            id: 2
        },
        {
            number: 3,
            title: 'Внедрение стратегии',
            description: 'Помогаем внедрить стратегию и настроить процессы:',
            classGap: 'classGap1',
            items: [
                {
                    item: "Презентуем стратегию команде",
                    id: 21
                },
                {
                    item: "Проводим стратегическую сессию и составляем план внедрения",
                    id: 22
                },
                {
                    item: "Разрабатываем детальный маркетинговый план с каналами продвижения, бюджетами и метриками",
                    id: 23
                }
            ],
            id: 3
        }
    ]
</script>

<style lang="scss" scoped>
    .creating {
        margin-bottom: 120px;
        &-title {  
            font-size: 36px;
            text-transform: uppercase;
            margin-bottom: 45px;
        }
        &-planes {
            display: flex;
            flex-direction: row;
            margin-bottom: 50px;
        }
        &-number {
            font-size: 68px;
            color: rgba(0, 176, 185, 1);
            font-family: 'Geo-500', sans-serif;
            font-weight: 500;
        }
        &-subtitle {
            max-width: 284px;
            font-size: 24px;
        }
        &-list {
            display: flex;
            flex-direction: column;
            font-size: 20px;
            gap: 16px
        }
        &-items {
            max-width: 852px;
            display: flex;
            gap: 15px;
            align-items: center;
            &::before {
                content: "";
                background-color: #000;
                padding: 5px;
                border-radius: 50%;
                display: block;
            }
        }
    }

    .classGap1 {
        gap: 30px;
    }
    .classGap2 {
        gap: 18px;
    }

</style>