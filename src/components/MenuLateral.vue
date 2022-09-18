<template>
  <section class="container" :class="$store.state.menu.open ? 'container open' : 'container'">
    <header class="containerMenu">
        <div class="card-header">
          <div class="card-add">
            <!-- <i class="fa-solid fa-cart-plus"></i> -->
          </div>
          <div class="close">
            <i class="fa-solid fa-xmark" @click="closeMenu"></i>
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
    </header>
  </section>
</template>

<script>
export default {
    data(){
        return{}
    },
    methods: {
        closeMenu(){
            this.$store.commit("toggleOpenMenu", false);
        }
    }
}
</script>

<style lang="scss" scoped>
.container{

    background: rgb(143, 143, 143);
    position: fixed;
    height: 100%;
    width: 95%;
    max-width: 400px;
    z-index: 20;
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
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
      border-radius: 0 0 0 10px ;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 10px 0;
      border-radius: 0 10px 0 0;
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

    /* .card-footer{
      height: 120px;
      width: 100%;
      background: grey;
      bottom: 0;
      border-radius: 0 0 0 10px;
    } */
}
</style>