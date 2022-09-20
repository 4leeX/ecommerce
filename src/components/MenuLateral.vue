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
          <div class="categoryContainer">
            <h3>Categoria 1</h3>
            <p>lalalal</p>
            <p>lalalal</p>
            <p>lalalal</p>
            <p>lalalal</p>
            <p>lalalal</p>
          </div>
          <div class="categoryContainer">
            <h3>Categoria 2</h3>
            <p>lalalal</p>
            <p>lalalal</p>
            <p>lalalal</p>
            <p>lalalal</p>
            <p>lalalal</p>
          </div>
          <div class="categoryContainer">
            <h3>Categoria 3</h3>
            <p>lalalal</p>
            <p>lalalal</p>
            <p>lalalal</p>
            <p>lalalal</p>
            <p>lalalal</p>
          </div>
          <div class="categoryContainer">
            <h3>Categoria 4</h3>
            <p>lalalal</p>
            <p>lalalal</p>
            <p>lalalal</p>
            <p>lalalal</p>
            <p>lalalal</p>
          </div>
          <div class="categoryContainer">
            <h3>Configuracoes</h3>
            <p>Sua Conta</p>
            <p>Sair</p>
          </div>
        </div>
        <div class="card-footer">
          <p>dsa</p>
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
      width: 100%;
      padding:20px 0;
      margin:4px, 4px;
      height: 100vh;
      overflow-x: hidden;
      overflow-y: auto;
      
      .categoryContainer{
        width: 100%;
        /* min-height: 10px; */
        height: 200px;
        padding-bottom: 10px;
        padding-top: 10px;
        border-bottom: 1px solid rgb(175, 175, 175);

        h3{
          padding-left: 25px;
          padding-bottom: 10px;
        }
        p{
          line-height: 35px;
          padding-left: 25px;
          &:hover{
            background: rgb(194, 194, 194)
          }
        }
      }
    }

    /* .card-footer{
      height: 320px;
      width: 100%;
      background: rgb(75, 75, 75);
      bottom: 0;
      border-radius: 0 0 0 10px;
    } */
}
</style>