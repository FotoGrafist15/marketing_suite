<template>
    <div class="need">
        <h2 class="need-label">Для чего бизнесу нужна стратегия</h2>
        <ul
            class="need-container"
            v-for="group in infoElements"
            :key="group.id"
            :class="group.classGrid"
        >
            <border-square
                v-for="elem in group.items"
                :key="elem.id"
                class="need-square"
            >
                <h4 class="need-title">{{ elem.title }}</h4>
                <p class="need-subtitle">{{ elem.subtitle }}</p>
            </border-square>
        </ul>
        <black-button class="need-btn">Задать вопрос специалисту</black-button>
    </div>
</template>
    
<script lang="ts" setup>
    import BlackButton from '@/components/UI/Buttons/BlackButton.vue'
    import BorderSquare from '@/components/UI/BorderSquare.vue'

    interface InfoItem {
        title: string;
        subtitle: string;
        id: number;
    }

    interface InfoGroup {
        classGrid: string;
        items: InfoItem[];
        id: number;
    }

    const infoElements: InfoGroup[] = [
        {
            classGrid: 'gridThree',
            items: [
                {
                    title: 'Для быстрого роста и масштабирования',
                    subtitle: 'Стратегия задает вектор развития, помогает определить приоритетные направления.',
                    id: 11
                },
                {
                    title: 'Для снижения рисков и экономии ресурсов компании',
                    subtitle: 'Когда есть стратегия, можно принимать решения на основе данных, а не догадок. А это помогает избежать неэффективных вложений.',
                    id: 12
                },
                {
                    title: 'Для эффективного распределения бюджета на продвижение',
                    subtitle: 'Стратегия показывает, какие каналы и инструменты действительно работают. Вы вкладываетесь туда, где есть результат.',
                    id: 13
                }
            ],
            id: 1
        },
        {
            classGrid: 'gridTwo',
            items: [
                {
                    title: 'Для создания более эффективных коммуникаций с клиентами',
                    subtitle: 'Вы лучше понимаете целевую аудиторию, ее поведение и мотивацию.',
                    id: 21
                },
                {
                    title: 'Для создания уникальности и отстройки от конкурентов',
                    subtitle: 'Стратегия помогает сформулировать сильное позиционирование и быстрее занять свое место на рынке.',
                    id: 22
                }
            ],
            id: 2
        }
    ]

</script>
    
<style lang="scss" scoped>

    .need {
        margin-bottom: 120px;
        &-container {
            display: grid;
            gap: 30px;
            margin-bottom: 40px;
            padding: 0;
        }
        &-label {
            text-transform: uppercase;
            font-size: 36px;
            margin-bottom: 40px;
            font-family: 'Geo-500', sans-serif;
            font-weight: 500;
        }
        &-title {
            font-size: 22px;
        }
        &-subtitle {
            font-size: 18px;
        }
        &-btn {
            place-self: center;
            transition: all 0.3s;
            &:hover {
                background-color: #005b93;
            }
        }
    }

    .gridThree {
        grid-template-columns: repeat(3, minmax(388px, 1fr));
    }

    .gridTwo {
        grid-template-columns: repeat(2, minmax(603px, 1fr));
    }
    
</style>