<template>
    <div class="hero">
        <h1 class="hero-title">Маркетинговая стратегия</h1>
        <p class="hero-description">Хаос в маркетинге обходится дорого. Чтобы ресурсы не тратились впустую, нужна система. Мы в SPIKA разрабатываем маркетинговые стратегии, которые помогают бизнесу быстро расти и вкладываться только в то, что реально работает.</p>
        <blue-button class="hero-btn">Получить бесплатную консультацию</blue-button>
    </div>
</template>

<script lang="ts" setup>
    import BlueButton from '@/components/UI/Buttons/BlueButton.vue'
    
</script>

<style lang="scss" scoped>
    .hero {
        width: 1252px;
        height: 512px;
        border-radius: 30px;
        margin-bottom: 90px;
        padding: 115px 100px;
        background: linear-gradient(135deg, #2c3e50 0%, #3498db 100%);
        
        &-title {
            font-size: 60px;
            text-transform: uppercase;
            color: #fff;
            margin-bottom: 25px;
        }
        &-description {
            font-size: 22px;
            color: #fff;
            max-width: 986px;
            margin-bottom: 40px;
        }
        &-btn {
            font-family: 'Geo-600', sans-serif;
            font-weight: 600;
        }
    }
</style>