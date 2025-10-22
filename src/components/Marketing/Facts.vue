<template>
    <div class="facts">
        <h2 class="facts-title">
            Факты
        </h2>
        <ul class="facts-list fact">
            <li
                class="fact-item"
                v-for="item in factsItems"
                :key="item.id"
            >
                <h4 class="fact-title">{{ item.title }}</h4>
                <span class="fact-description">{{ item.description }}</span>
            </li>
        </ul>
    </div>
</template>

<script lang="ts" setup>

    interface factsItem {
        title: string;
        description: string;
        id: number;
    }

    const factsItems: factsItem[] = [
        {
            title: '2-3 месяца',
            description: 'занимает разработка маркетинговой стратегии.',
            id: 1
        },
        {
            title: 'Больше 100 страниц',
            description: 'занимает отчетная презентация, которая состоит из аналитической и креативной части.',
            id: 2
        },
        {
            title: 'Готовый план',
            description: 'с этапами, сроками и метриками получает заказчик в финале. Бери и делай.',
            id: 3
        },
        {
            title: 'Не менее 3 онлайн или очных встреч',
            description: 'с руководителями и командой проекта предусмотрено во время проекта. Мы постоянно на связи.',
            id: 4
        },
        {
            title: 'Более 100 кейсов',
            description: 'по разработке маркетинговой стратегии в разных отраслях В2В и В2С на счету SPIKA. Мы работали с заказчиками из сфер медицины, туризма, индустрии красоты, консалтинга, продуктов питания, производства товаров народного потребления, промышленных предприятий, строительства, it-компаний, ресторанного бизнеса, авиаперевозок, недвижимости.',
            id: 5
        },
        {
            title: 'Мы можем работать как отдельная команда и дать готовый результат.',
            description: 'А можем часть разработки вести через стратсессии с вовлечением вашей команды.',
            id: 6
        }
    ]
</script>

<style lang="scss" scoped>
    .facts {
        margin-bottom: 150px;
        &-title {
            font-size: 36px;
            text-transform: uppercase;
            margin-bottom: 40px;
        }
        &-list {
            display: flex;
            flex-direction: column;
            gap: 15px;
            list-style-type: disc;
            padding-left: 20px;
        }
    }
    .fact {
        &-item {
            font-size: 24px;
            margin-bottom: 15px;
        }
        &-title {
            white-space: nowrap;
            display: inline-block;
            margin-right: 7px;
            margin-left: 4px;
        }
    }
</style>