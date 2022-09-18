<script setup>
  import HelloWorld from './components/HelloWorld.vue'
  import Navbar from './components/Navbar.vue'
  import Footer from './components/Footer.vue'
  import Carrinho from './components/Carrinho.vue'
  import MenuLateral from './components/MenuLateral.vue'
</script>

<template>
  <div>
    <transition name="fade">
      <Carrinho />
    </transition>
    <transition name="fade">
      <MenuLateral />
    </transition>
    <Navbar />
    <HelloWorld msg="Vite + Vue" />
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .6s;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}
</style>
