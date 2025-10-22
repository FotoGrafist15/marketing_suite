<template>
    <div class="header-contacts">
        <div
            v-for="logoItem in logoItems"
            :key="logoItem.id"
            class="header-logo"
        >
            <img
                :src="logoItem.logoSrc"
                alt="logo"
            >
        </div>
        <div class="header-contact">
            <a
                v-if="telItem"
                class="header-tel"
                :href="`tel:${telItem.tel}`"
            >
                {{ telItem.tel }}
            </a>
            <img
                v-for="socialItem in socialItems"
                :key="socialItem.id"
                :src="socialItem.contactSrc"
                alt="social-icon"
                class="header-social"
            >
        </div>
    </div>
</template>
    
<script lang="ts" setup>
    import { logo, vk, tg } from '@/assets/urlImages'
    import { computed } from 'vue'

    interface ContactItem {
        type: string;
        logoSrc?: string | any;
        tel?: string;
        contactSrc?: string | any;
        id: number;
    }

    const contactsItems: ContactItem[] = [
        {
            type: 'logo',
            logoSrc: logo,
            id: 1
        },
        {
            type: 'tel',
            tel: '+7 (927) 710-51-35 ',
            id: 2
        },
        {
            type: 'social',
            contactSrc: vk,
            id: 3
        },
        {
            type: 'social',
            contactSrc: tg,
            id: 4
        }
    ]

    const logoItems = computed(() => 
        contactsItems.filter(item => item.type === 'logo')
    );

    const telItem = computed(() => 
        contactsItems.find(item => item.type === 'tel')
    );

    const socialItems = computed(() => 
        contactsItems.filter(item => item.type === 'social')
    );
</script>
    
<style lang="scss" scoped>
    .header {
        &-contacts {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 15px;
        }
        &-logo {
            cursor: pointer;
        }
        &-contact {
            display: flex;
            gap: 20px;
            align-items: center;
        }
        &-tel {
            color: #000;
            text-decoration: none;
            font-family: 'Geo-400';
            font-weight: 400;
            transition: all 0.3s;
            &:hover {
                color: rgb(55, 152, 191);
            }
        }
        &-social {
            cursor: pointer;
            transition: all 0.3s;
            &:hover {
                filter: drop-shadow(2px 4px 6px rgb(40, 99, 158));
            }
        }
    }
    
</style>