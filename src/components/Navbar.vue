<template>
  <header class="navContainer">
    <div class="firtContainer">
      <div class="searchContent">
        <button class="menuNavbar" @click="openMenu">
          <i class="fa-solid fa-bars"></i>
        </button>
        <input type="text" value="">
        <button>
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
        <button class="cartNavbar" @mouseenter="openCart">
          <i class="fa-solid fa-cart-shopping"></i>
        </button>
      </div>
    </div>
    <nav class="secondContainer">
        
    </nav>
  </header>
</template>

<script>
export default {
  data(){
    return{
      open: false,
    }
  },
  mounted(){
    console.log(this.$store.state.menu.open);
  },
  methods: {
    openCart(){
      this.$store.commit("toggleOpenCart", true);
    },
    closeCart(){
      this.$store.commit("toggleOpenCart", false);
    },
    openMenu(){
      this.$store.commit("toggleOpenMenu", true);
      this.closeCart();
    },
    closeMenu(){
      this.$store.commit("toggleOpenMenu", false);
    }
  }
}
</script>

<style lang="scss">
.navContainer{
    height: 80px;
    background: var(--bkg-secondary);
    padding: 0 30px;
    padding-top: 30px;

    .firtContainer{
      /* justify-content: center; */

      .searchContent{
        display: flex;
        flex-direction: row;
        justify-content: center;

        input{
          border-radius: 50px 0 0 50px;
          padding-left: 10px;
          font-size: 15px;
          padding: 10px;
          border: none;
          width: 50%;
  
          &:focus{
            outline: none !important;
          }
        }
        button{
          border: none;
          height: 100%;
          padding: 10px;
          padding-right: 20px;
          background: rgb(116, 114, 114);
          border-radius: 0 50px 50px 0;
          cursor: pointer;
          i{
            font-size: 25px;
            color: #FFF;
          }
        }

        .cartNavbar, .menuNavbar{
          border-radius: 50px;
          padding: 10px 35px;
          margin-left: 10px;
          background: var(--color-one);

            i{
              color: #FFF;
            }
        }
        .menuNavbar{
          margin-right: 10px;
        }
      }
    }

    .secondContainer{
      margin-top: 10px;
    }
}
</style>