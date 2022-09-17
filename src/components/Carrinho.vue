<template>
  <section>
    <div :class="$store.state.carrinho.open ? 'carrinhoContainer open' : 'carrinhoContainer'">
        <div style="card-header">

        </div>
        <div class="card-body">

        </div>
        <div class="card-footer">

        </div>
    </div>
  </section>
</template>

<script>
export default {
  data(){
    return{
      open: false,
    }
  },
  methods: {
    // openCart(){
    //   this.$store.commit("toggleOpenCart", true);
    // },
    closeCart(){
      this.$store.commit("toggleOpenCart", false);
    }
  }
}
</script>

<style lang="scss" scoped>
.carrinhoContainer{
    background: purple;
    position: fixed;
    top: 100px;
    right: 0;
    height: calc(90vh - 119px);
    width: 95%;
    max-width: 400px;
    z-index: 20;
    -webkit-transform: translateX(150%);
    transform: translateX(150%);
    transition: all .3s ease;
    box-shadow: -10px 0 35px -6px rgba(0,0,0,.5);
    min-height: 340px;
    border-radius: 10px;

    &.open{
        -webkit-transform: translateX(0);
        transform: translateX(0);
    }
}
</style>