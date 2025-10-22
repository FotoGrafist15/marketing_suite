<template>
    <div class="techniques">
        <h2 class="techniques-title">Какие методики мы используем</h2>
        <div class="techniques-group">
            <div
                v-for="item in techniquesItems"
                :key="item.id"
                class="techniques-items"
                :class="item.className"
            >
                <h6 class="items-title">{{ item.title }}</h6>
                <p class="items-description">{{ item.description }}</p>
            </div>
            <border-button class="techniques-btn">Обсудить стратегию</border-button>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import BorderButton from '@/components/UI/Buttons/BorderButton.vue'

    interface techniquesItem {
        title: string;
        description: string;
        className?: string;
        id: number;
    }

    const techniquesItems: techniquesItem[] = [
        {
            title: 'Глубинные интервью и CustDev',
            description: 'Проводим структурированные беседы с клиентами и целевой аудиторией.  Это помогает понять, как люди принимают решения, что для них важно, и какие барьеры нужно снять.',
            id: 1
        },
        {
            title: 'Карта пути клиента (CJM)',
            description: 'Моделируем реальный путь клиента — от первого контакта до повторной покупки. Это помогает выявить «узкие места» в коммуникации и улучшить опыт клиента на каждом этапе.',
            id: 2
        },
        {
            title: 'Конкурентный анализ',
            description: 'Изучаем стратегии продвижения конкурентов, их позиционирование, офферы, отзывы и каналы. Это помогает найти уникальные точки роста и отстройки.',
            id: 3
        },
        {
            title: 'Дизайн-мышление: карта эмпатии и buyer persona',
            description: 'Формируем портреты целевых клиентов — с болями, мотивациями и целями. Это позволяет строить коммуникации, которые попадают точно в ожидания аудитории.',
            id: 4
        },
        {
            title: 'Адаптивное стратегическое планирование',
            description: 'Строим гибкие стратегии: от краткосрочных решений до трехлетнего плана. Стратегия адаптируется под возможности команды, корпоративную культуру и темпы роста бизнеса.',
            className: 'orderGrid',
            id: 5
        }
    ]
</script>

<style lang="scss" scoped>
    .techniques {
        margin-bottom: 120px;
        &-title {
            font-size: 36px;
            text-transform: uppercase;
            margin-bottom: 40px;
        }
        &-group {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 35px;
        }
        &-items {
            gap: 15px;
            display: flex;
            flex-direction: column;
        }
        &-btn {
            width: fit-content;
            height: fit-content;
            align-self: center;
            justify-self: center;
            transition: all 0.3s;
            &:hover {
                background-color: #000000;
                color: #fff;
            }
        }
    }


    .items {
        &-title {
            font-size: 23px;
        }
        &-description {
            font-size: 20px;
        }
    }

    .orderGrid {
        order: 1;
    }

</style>