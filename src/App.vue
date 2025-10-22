<template>
  <div class="app">
    <Header/>
    <Layout/>
    <main class="main container">
      <router-view/>
    </main>
    <Footer/>
  </div>
</template>
  
<script lang="ts" setup>
  import Header from "@/components/Header/Header.vue"
  import Footer from "@/components/Footer/Footer.vue"
  import Layout from "@/components/UI/Layout.vue";
</script>
  
<style lang="scss" scoped>
  @import url(@/assets/scss/fonts.scss);
  @import url(./main.css);

  .app {
    display: flex;
    flex-direction: column;
  }
</style>