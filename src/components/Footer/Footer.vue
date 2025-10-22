<template>
    <footer class="footer">
        <div class="footer-body container">
            <img class="footer-logo" src="@/assets/icons/contacts/logo2.svg" alt="logo">
            <div class="footer-menu">
                <ul class="menu-list">
                    <li
                        class="menu-item"
                        v-for="item in menuItems"
                        :key="item.id"
                    >
                        <router-link
                            :to="item.route"
                            class="menu-link"
                        >
                            {{ item.title }}
                        </router-link>
                    </li>
                    <white-button class="menu-btn">
                        заказать проект
                    </white-button>
                    <scroll-button class="menu-arrow"/>
                </ul>
                <div class="menu-contacts">
                    <div
                        class="menu-social"
                        v-for="socialItem in socialItems"
                        :key="socialItem.id"
                    >
                        <img :src="socialItem.srcImage" alt="contact">
                    </div>
                    <div class="menu-display">
                        <div
                            class="menu-connect"
                            v-for="connectItem in connectItems"
                            :key="connectItem.id"
                        >
                            <img :src="connectItem.srcImage" alt="contact" :id="String(connectItem.id)">
                            <a class="menu-label" :href="connectItem.href" :for="String(connectItem.id)">
                                {{ connectItem.labelName }}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-wrapper">
            <p class="footer-copyright">© 2024 Spika.PRO</p>
        </div>
    </footer>
</template>

<script lang="ts" setup>
import WhiteButton from '../UI/Buttons/WhiteButton.vue';
import { message, tel, vk2, yt} from '@/assets/urlImages'
import { computed } from 'vue'
import ScrollButton from '@/components/UI/ScrollButton.vue'

    interface menuItem {
        title: string;
        route: string;
        id: number;
    }

    interface contactsItem {
        type: string;
        srcImage: string | any;
        labelName?: string;
        href?: string;
        id: number;
    }

    const menuItems: menuItem[] = [
        {
            title: 'Компания',
            route: '/company',
            id: 1
        },
        {
            title: 'Услуги',
            route: '/services-page',
            id: 2
        },
        {
            title: 'Проекты',
            route: '/projects',
            id: 3
        },
        {
            title: 'Новости',
            route: '/news',
            id: 4
        },
        {
            title: 'Блог',
            route: '/blog',
            id: 5
        },
        {
            title: 'Контакты',
            route: '/contacts',
            id: 6
        }
    ]

    const contactsItems: contactsItem[] = [
        {
            type: 'social',
            srcImage: vk2,
            id: 1
        },
        {
            type: 'social',
            srcImage: yt,
            id: 2
        },
        {
            type: 'connect',
            srcImage: message,
            labelName: 'spika@spika.pro',
            href: 'mailto:maybebox@mail.ru',
            id: 3
        },
        {
            type: 'connect',
            srcImage: tel,
            labelName: '+7 (927) 710-51-35 ',
            href: 'tel:+7 (927) 710-51-35',
            id: 4
        }
    ]

    const socialItems = computed(() => 
        contactsItems.filter(item => item.type === 'social')
    );
    const connectItems = computed(() => 
        contactsItems.filter(item => item.type === 'connect')
    );
</script>

<style lang="scss" scoped>
    .footer {
        background: linear-gradient(135deg, #3a2c50 0%, #005e61 50%, #9647d8 100%);
        border-radius: 60px 60px 0 0;
        margin-top: auto;
        &-body {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            padding: 50px 0 150px 0;
        }
        &-logo {
            cursor: pointer;
        }
        &-menu {
            display: flex;
            flex-direction: column;
            gap: 40px;
        }
        &-wrapper {
            padding-bottom: 20px;
        }
        &-copyright {
            text-align: center;
            color: #fff;
            font-family: 'Geo-100';
            font-weight: 100;
        }
    }
    .menu {
        &-list {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 24px;
            color: #fff;
        }
        &-item {
            font-size: 16px;
            cursor: pointer;
            &:hover {
                text-decoration: underline;
            }
        }
        &-link {
            text-decoration: none;
            color: #fff;
        }
        &-btn {
            padding: 16px 26px;
            border-radius: 31px;
            transition: all 0.3s;
            font-family: 'Geo-600';
            font-weight: 600;
            &:hover {
                background-color: #00000000;
                border-color: #000;
                filter: invert(1);
            }
        }
        &-arrow {
            &:hover {
                background-color: #000;
                filter: invert(1);
            }
        }
        &-contacts {
            display: flex;
            flex-direction: row;
            gap: 17px;
            align-items: center;
            justify-content: flex-end;
        }
        &-social {
            cursor: pointer;
            transition: all 0.3s;
            &:hover {
                filter: invert(1);
            }
        }
        &-connect {
            display: flex;
            flex-direction: row;
            gap: 17px;
            color: #fff;
            cursor: pointer;
            transition: all 0.6s;
            &:hover a {
                color: rgb(171, 7, 7);
                transition: all 0.3s;
            }
            &:hover {
                filter: invert(1);
            }
        }
        &-display {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
        &-label {
            color: #fff;
            text-decoration: none;
            font-family: 'Geo-400';
            font-weight: 400;
        }
    }
</style>