<template>
    <div
        class="layout"
        v-if="route.path !== '/'"
    >
        <nav class="layout-nav container">
            <ul class="layout-list">
                <li
                    v-for="(page, index) in dynamicPages"
                    :key="page.path"
                    class="layout-item"
                >
                    <router-link
                        :to="page.path"
                        class="layout-link"
                        :class="{ 'last-page': index === dynamicPages.length - 1 }"
                    >
                        {{ page.title }}
                        <img
                            v-if="index < dynamicPages.length - 1"
                            class="pageData-separator"
                            src="@/assets/icons/contacts/arrow.svg"
                            alt="arrow"
                        >
                    </router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>
    
<script lang="ts" setup>
    import { useRoute } from 'vue-router'
    import { computed } from 'vue'

    const route = useRoute();

    interface PageData {
        pattern?: string;
        title: string;
        path?: string | any;
    }

    const pageTitles: PageData[] = [
        { pattern: '/services-page', title: 'Услуги' },
        { pattern: '/services-page/brand-strategy', title: 'Бренд-стратегия' },
        { pattern: '/services-page/marketing-research', title: 'Маркетинговые исследования' },
        { pattern: '/services-page/development-brand', title: 'Разработка HR бренда' },
        { pattern: '/services-page/marketing-strategy', title: 'Маркетинговая стратегия' },
        { pattern: '/services-page/creative-session', title: 'Креативные сессии' },
        { pattern: '/services-page/strategy-session', title: 'Стратегические сессии' },
        { pattern: '/company', title: 'Компания' },
        { pattern: '/company/about', title: 'О компании' },
        { pattern: '/company/team', title: 'Наша команда' },
        { pattern: '/company/reviews', title: 'Отзывы' },
        { pattern: '/company/clients', title: 'Заказчики' },
        { pattern: '/projects', title: 'Проекты' },
        { pattern: '/news', title: 'Новости' },
        { pattern: '/blog', title: 'Блог' },
        { pattern: '/contacts', title: 'Контакты' }
    ]


    const dynamicPages = computed<PageData[]>(() => {
        const pages: PageData[] = [{ title: 'Spika.PRO', path: '/' }]

        const pathSegments = route.path.split('/').filter(segment => segment)

        let currentPath = ''

        for (const segment of pathSegments) {
            currentPath += `/${segment}`
            
            const page = pageTitles.find(p => p.pattern === currentPath)
            
            if (page) {
                pages.push({
                    title: page.title,
                    path: page.pattern
                })
            }
        }

        return pages
    })
</script>
    
<style lang="scss" scoped>
    .layout {
        background-color: rgba(245, 245, 245, 1);
        height: 50px;
        place-content: center;
        margin-bottom: 90px;
        &-list {
            display: flex;
        }
        &-link {
            text-decoration: none;
            color: #adb5bd;
            font-size: 16px;
            display: flex;
            transition: all 0.5s;
            &:hover:not(.last-crumb) {
                color: #313131;
                transition: all 0.5s;
            }
            &.last-page {
                color: rgba(0, 0, 0, 1);
                cursor: default;
                pointer-events: none;
            }
        }
    }
    .pageData-separator {
        margin: 0 10px;
        transform: rotate(-90deg);
    }
</style>