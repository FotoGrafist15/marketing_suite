<template>
    <ul
        class="header-nav"
    >
        <li
            v-for="item in titleItems"
            :key="item.id"
            class="header-itemTitle"
            @mouseleave="closeDropdown"
            @touchstart.passive="handleTouch(item)"
        >
            <router-link
                class="header-title"
                :to="item.toRoute"
                @mouseenter="openDropdown(item.id)"
                @click="handleClick(item)"
            >
                {{ item.title }}
                <img
                    class="header-arrow"
                    v-if="item.isNeedArrow"
                    src="@/assets/icons/contacts/arrow.svg"
                    alt=""
                    :class="{ rotated: activeDropdown === item.id }"
                >
            </router-link>
            <transition 
                name="dropdown"
            >
            <div 
                v-if="activeDropdown === item.id && item.childrenItems"
                class="dropdown-container"
            >
                <div class="dropdown-bridge"></div>
                <white-square 
                    v-if="activeDropdown === item.id && item.childrenItems"
                    class="dropdown-submenu"
                >
                    <ul class="dropdown-list">
                        <li 
                            v-for="column in item.childrenItems"
                            :key="column.id"
                            class="dropdown-column"
                        >
                        <router-link
                            :to="column.toRoute"
                            class="dropdown-link"
                            @click="closeDropdown"
                        >
                            <h4 class="column-title">
                                {{ column.title }}
                            </h4>
                        </router-link>
                        </li>
                    </ul>
                </white-square>
            </div>
            </transition> 
        </li>
    </ul>
</template>
    
<script lang="ts" setup>
    import WhiteSquare from "@/components/UI/WhiteSquare.vue"
    import { ref } from 'vue'

    const activeDropdown = ref<number | null>(null);
    let closeTimeout: number | null = null;

    const openDropdown = (id: number) => {
        if (closeTimeout) {
            clearTimeout(closeTimeout);
            closeTimeout = null;
        }
        
        const titleItem = titleItems.find(item => item.id === id);
        if (titleItem?.childrenItems) {
            activeDropdown.value = id;
        }
    };

    const closeDropdown = () => {
        closeTimeout = setTimeout(() => {
            activeDropdown.value = null;
        }, 150);
    };

    const handleClick = (item: any) => {
        if (item.childrenItems && isTouchDevice()) {
            if (activeDropdown.value === item.id) {
                activeDropdown.value = null;
            } else {
                activeDropdown.value = item.id;
            }
        } else if (!item.childrenItems) {
            activeDropdown.value = null;
        }
    };

    const handleTouch = (item: any) => {
        if (item.childrenItems) {
            if (activeDropdown.value === item.id) {
                activeDropdown.value = null;
            } else {
                activeDropdown.value = item.id;
            }
        }
    };

    const isTouchDevice = (): boolean => {
        return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    };

    const titleItems = [
        {
            title: 'Главная',
            toRoute: '/',
            isNeedArrow: false,
            id: 1
        },
        {
            title: 'Компания',
            toRoute: '/company',
            isNeedArrow: true,
            id: 2,
            childrenItems: [
                {
                    title: 'О компании',
                    toRoute: '/company/about',
                    id: 201
                },
                {
                    title: 'Наша команда',
                    toRoute: '/company/team',
                    id: 202
                },
                {
                    title: 'Отзывы',
                    toRoute: '/company/reviews',
                    id: 203
                },
                {
                    title: 'Заказчики',
                    toRoute: '/company/clients',
                    id: 204
                }
            ]
        },
        {
            title: 'Услуги',
            toRoute: '/services',
            isNeedArrow: true,
            id: 3,
            childrenItems: [
                {
                    title: 'Бренд-стратегия',
                    toRoute: '/services/brand-strategy',
                    id: 301
                },
                {
                    title: 'Маркетинговые исследования',
                    toRoute: '/services/marketing-research',
                    id: 302
                },
                {
                    title: 'Разработка HR бренда',
                    toRoute: '/services/development-brand',
                    id: 303
                },
                {
                    title: 'Маркетинговая стратегия',
                    toRoute: '/services/marketing-strategy',
                    id: 304
                },
                {
                    title: 'Стратегические сессии',
                    toRoute: '/services/strategy-session',
                    id: 305
                },
                {
                    title: 'Креативные сессии',
                    toRoute: '/services/creative-session',
                    id: 306
                }
            ]
        },
        {
            title: 'Наши проекты',
            toRoute: '/projects',
            isNeedArrow: false,
            id: 4
        },
        {
            title: 'Новости',
            toRoute: '/news',
            isNeedArrow: false,
            id: 5
        },
        {
            title: 'Блог',
            toRoute: '/blog',
            isNeedArrow: false,
            id: 6
        },
        {
            title: 'Контакты',
            toRoute: '/contacts',
            isNeedArrow: false,
            id: 7
        }
    ]
</script>
    
<style lang="scss" scoped>
    .header {
        &-nav {
            display: flex;
            flex-direction: row;
            place-self: self-end;
            min-width: 998px;
            gap: 70px;
            align-items: center;
            position: relative;
        }
        &-itemTitle {
            display: flex;
            align-items: flex-end;
            gap: 6px;
            position: relative;
            &:hover {
            
                .header-arrow {
                    opacity: 1;
                    transform: rotate(-180deg);
                }
            }
        }
        &-title {
            text-decoration: none;
            color: #000;
            font-size: 18px;
            transition: all 0.3s;
            display: flex;
            align-items: center;
            gap: 4px;
            &:hover {
                color: rgb(55, 152, 191);
            }
        }
        &-arrow {
            transition: all 0.3s ease;
            &.rotated {
                transform: rotate(-180deg);
            }
        }
    }
    .dropdown {
        &-container {
            position: absolute;
            top: 100%;
            transform: translateX(0%);
            z-index: 100;
        }
        &-bridge {
            width: 100%;
            height: 20px;
            background: transparent;
            position: absolute;
            bottom: 90%;
            left: 0;
        }
        &-submenu {
            position: relative;
            margin-top: 10px;
            min-width: 350px;
            height: auto;
        }
        &-link {
            text-decoration: none;
            transition: all 0.5s;
            &:hover {
                transition: all 0.5s;
            }
        }
        &-enter-from {
            opacity: 0;
            transform: translateY(10px);
        }
        &-leave-to {
            opacity: 0;
            transform: translateY(10px);
        }
        &-enter-active,
        &-leave-active {
            transition: all 0.5s ease;
        }
    }
    .column-title {
        cursor: pointer;
        color: rgb(93, 93, 93);
        transition: all 0.5s;
        display: inline-block;
        margin: 15px 0;
        padding: 10px;
        display: flex;
        &:hover {
            color: #34b2f6;
            background-color: #e8e8e8;
            margin-right: 45px;
            transition: all 0.5s;
        }
    }


</style>