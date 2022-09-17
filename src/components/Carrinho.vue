<template>
  <section>
    <div :class="$store.state.carrinho.open ? 'carrinhoContainer open' : 'carrinhoContainer'">
        <div class="card-header">
          <div class="card-add">
            <i class="fa-solid fa-cart-plus"></i>
          </div>
          <div class="close">
            <i class="fa-solid fa-xmark" @click="closeCart"></i>
          </div>
        </div>
        <div class="card-body">
          <div class="no-products">
            <h2>SEM PRODUTOS</h2>
            <img src="/image/icons/no-cart.svg" alt="cart">
          </div>
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
    background: rgb(143, 143, 143);
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
    display: flex;
    flex-direction: column;

    &.open{
        -webkit-transform: translateX(0);
        transform: translateX(0);
    }

    .card-header{
      border-radius: 10px 0 0 0;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 10px 10px 10px 0px;
      background: grey;
      width: 100%;

      .close{
        margin-right: 20px;
        i{
          cursor: pointer;
        }
      }
      div{
        i{
          color: #FFF;
          font-size: 22px;
          margin-left: 20px;
        }
      }
    }
    .card-body{
      height: 100vh;
      width: 100%;

      .no-products{
        padding: 100px;
        h2{
          color: #FFF;
        }
      }
    }

    .card-footer{
      height: 120px;
      width: 100%;
      background: grey;
      bottom: 0;
      border-radius: 0 0 0 10px;
    }
}
</style>