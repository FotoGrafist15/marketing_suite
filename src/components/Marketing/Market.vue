<template>
    <div class="market">
        <div class="market-services">
            <h5 class="services-title">Мы работаем со сложными рынками</h5>
            <div
                v-for="elem in squareWrapper"
                :key="elem.id"
                class="services-wrapper"
            >
                <gray-square
                    v-for="item in elem.squareItems"
                    :key="item.id"
                    class="services-markets"
                >
                    {{ item.label }}
                </gray-square>
            </div>
            <p class="market-description">
                Мы знаем, как выстроить эффективную стратегию <br> даже в нишевых и высококонкурентных отраслях. <br>
                <span class="weight">80% клиентов приходят по рекомендациям.</span>
            </p>
        </div>
        <div class="market-square">
            <h3 class="square-title">Хотите обсудить вашу задачу? </h3>
            <div class="square-wrapper">
                <p class="square-description">Свяжитесь с нами, чтобы:</p>
                <div
                    class="square-profitItem"
                    v-for="item in profitItems"
                    :key="item.id"
                >
                    <img src="@/assets/icons/decor/check.svg" alt="decor-icon">
                    <span>
                        {{ item.subtitle }}
                    </span>
                </div>
            </div>
            <white-button class="market-btn">Записаться на консультацию</white-button>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import GraySquare from '../UI/GraySquare.vue';
    import WhiteButton from '@/components/UI/Buttons/WhiteButton.vue'

    interface squareItem {
        label: string;
        id: number;
    }

    interface squareWrapper {
        squareItems: squareItem[];
        id: number;
    }

    const squareWrapper: squareWrapper[] = [
        {
            squareItems: [
                {
                    label: 'B2B',
                    id: 1
                },
                {
                    label: 'Промышленность',
                    id: 2
                },
                {
                    label: 'Медицина',
                    id: 3
                },
                {
                    label: 'HoReCa',
                    id: 4
                }
            ],
            id: 1
        },
        {
            squareItems: [
                {
                    label: 'Строительство',
                    id: 5
                },
                {
                    label: 'eCommerce',
                    id: 6
                },
                {
                    label: 'Услуги',
                    id: 7
                }
            ],
            id: 2
        }
    ]

    interface profitItem {
        subtitle: string;
        id: number;
    }

    const profitItems: profitItem[] = [
        {
            subtitle: 'Получить предварительный аудит',
            id: 1
        },
        {
            subtitle: 'Понять, как может выглядеть стратегия под ваш бизнес',
            id: 2
        }
    ]
    
</script>

<style lang="scss" scoped>
    .market {
        display: flex;
        flex-direction: row;
        margin-bottom: 100px;
        gap: 150px;
        &-services {
            gap: 10px;
            display: flex;
            flex-direction: column;
        }
        &-square {
            min-width: 604px;
            min-height: 524px;
            border-radius: 34px;
            background: linear-gradient(135deg, #23476b 0%, #8ad0ff 100%);
            padding: 70px;
            padding-right: 156px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: space-between;
        }
        &-description {
            margin-top: 40px;
            font-size: 20px;
        }
        &-btn {
            transition: all 0.3s;
            &:hover {
                background-color: #000000;
                color: #fff;
            }
        }
    }
    .services {
        &-title {
            font-size: 28px;
            font-weight: 400;
            margin-bottom: 40px;

        }
        &-wrapper {
            display: flex;
            flex-direction: row;
            gap: 10px;
        }
        &-markets {
            width: auto;
            height: auto;
            padding: 14px 22px;
            text-align: center;
            font-size: 18px;
            border-radius: 50px;
        }
    }
    .square {
        &-wrapper {
            gap: 10px;
            display: flex;
            flex-direction: column;
        }
        &-title {
            color: #fff;
            font-size: 38px;
            padding-right: 20px;
            font-family: 'Geo-300', sans-serif;
            font-weight: 300;
        }
        &-description {
            color: #fff;
            margin-bottom: 5px;
            font-family: 'Geo-300', sans-serif;
            font-weight: 300;
        }
        &-profitItem {
            display: flex;
            gap: 15px;
            color: #fff;
        }
    }

    .weight {
        color: rgba(0, 0, 0, 1);
        font-style: italic;
        font-family: 'Geo-600', sans-serif;
        font-weight: 600;
    }
</style>