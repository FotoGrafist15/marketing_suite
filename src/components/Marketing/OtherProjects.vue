<template>
    <div class="otherProjects">
        <div class="otherProjects-display">
            <div
                class="otherProjects-square"
                v-for="item in projectsItems"
                :key="item.id"
            >
                <h5 class="square-title">
                    {{ item.title }}
                </h5>
                <p class="square-description">
                    {{ item.description }}
                </p>
                <black-button
                    class="square-btn weight"
                >
                    посмотреть кейс
                    <img src="@/assets/icons/decor/arrowTop1.svg" alt="стрелка-вверх">
                </black-button>
            </div>
        </div>
        <border-button class="otherProjects-btn weight">
            Посмотреть другие проекты SPIKA
            <img src="@/assets/icons/decor/arrowTop2.svg" alt="стрелка-вверх">
        </border-button>
    </div>
</template>

<script lang="ts" setup>
    import BlackButton from '../UI/Buttons/BlackButton.vue';
    import BorderButton from '../UI/Buttons/BorderButton.vue';


    interface projectsItem {
        title: string;
        description: string;
        id: number;
    }

    const projectsItems: projectsItem[] = [
        {
            title: 'Компания Aironic',
            description: 'Помогли системе правильного дыхания  Aironic  сфокусироваться на самом платежеспособном сегменте аудитории и повысить продажи на маркетплейсах на 20%.',
            id: 1
        },
        {
            title: 'Бренд напитков «Лимонадкин»',
            description: 'Разработали план продвижения и коммуникационные идеи для бренда напитков «Лимонадкин». В результате компания смогла войти в федеральные розничные сети.',
            id: 2
        }
    ]
</script>

<style lang="scss" scoped>
    .otherProjects {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        margin-bottom: 150px;
        &-display {
            display: flex;
            flex-direction: row;
            gap: 40px;
            margin-bottom: 30px;
        }
        &-square {
            border: 1px solid #000;
            border-radius: 20px;
            background: linear-gradient(18deg, #deeeff 0%, #e9b3fa 50%, #6fc2fa 100%);
            padding: 48px;
            padding-right: 32px;
            flex: 0 1 50%;
        }
    }
    .square {
        &-title {
            font-size: 24px;
            margin-bottom: 15px;
        }
        &-description {
            font-size: 18px;
            margin-bottom: 30px;
        }
        &-btn {
            padding: 18px 28px;
            border-radius: 32px;
            font-size: 14px;
            align-items: center;
            display: flex;
            gap: 10px;
            transition: all 0.5s;
            & img {
                transition: all 0.5s;
            }
            &:hover {
                background-color: rgb(54, 195, 227);
                border-color: rgb(54, 195, 227);
                transition: all 0.5s;
            }
            &:hover img {
                transform: rotate(45deg);
            }
        }

    }
    .otherProjects {
        &-btn {
            border-radius: 32px;
            padding: 20px 28px;
            align-items: center;
            display: flex;
            gap: 10px;
            transition: all 0.5s;
            & img {
                transition: all 0.5s;
            }
            &:hover {
                background-color: rgb(255, 255, 255);
                filter: invert(1);
                transition: all 0.5s;
            }
            &:hover img {
                transform: rotate(45deg);
            }
        }
    }

    .weight {
        font-family: 'Geo-400', sans-serif;
        font-weight: 400;
    }
</style>