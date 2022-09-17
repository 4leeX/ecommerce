<template>
  <div class="homeContainer">

  <MenuCategorias />

  <div class="cardContainerProvisory" 
    v-if="products.length!=undefined">
    <div  v-for="i in 12" :key="i"
      class="cardContainer">
      <div class="cardImg fbloading"></div>
      <div class="cardContent">
        <p class="fbloading" style="display:inline-block;width:auto;">ppppppppppppppppppppppp</p><br><br>
        <p class="fbloading" style="display:inline-block;width:auto;">aaaaaaaaaaaaaaaaaaaa</p><br>
        <p class="fbloading" style="display:inline-block;width:auto;">ppppppppppppppppp</p><br>
        <p class="fbloading" style="display:inline-block;width:auto;">ppppppppppppppppp</p><br>
      </div>
    </div>
  </div>

  <div class="cardContainerProvisory" v-else>
    <div v-for="(p, i) in products" :key="i"
      class="cardContainer">
      <div class="cardImg">
        <img :src="p.image" alt="image">
      </div>
      <div class="cardContent">
        <p>{{p.name}}</p>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import products from '../service/products';
import MenuCategorias from '../components/MenuCategorias.vue';

export default {
  data(){
    return{
      products: [],
    }
  },
  components:{
    MenuCategorias
  },
  mounted(){
    this.getProducts();
  },
  methods: {
    getProducts(){
      products.then(data => {
        this.products = data.data.results;
        
        console.log(data.data);
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.homeContainer{
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 30px;
  justify-content: center;
    
  .cardContainerProvisory{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 30px;
    /* flex-direction: column; */

    .cardContainer{
      width: 300px;
      height: 400px;
      padding: 0 5px;
  
      .cardImg{
        padding: 10px;
        height: 50%;
        background: #FFF;
        border-radius: 10px 10px 0 0px;
  
        img{
          display: block;
          margin-left: auto;
          margin-right: auto;
          /* min-width: 100px; */
          max-width: 200px;
          height: 100%;
        }
      }
      .cardContent{
        padding: 15px 5px 5px 5px;
        height: 150px;
        background: grey;
        border-radius: 0 0 10px 10px;
        
        p{
          max-height: 34px;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
  }
}

.fbloading{
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: wave;
  animation-timing-function: linear;
  -webkit-animation-duration: 1s;
  -webkit-animation-fill-mode: forwards;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-name: wave;
  -webkit-animation-timing-function: linear;
  -moz-animation-duration: 1s;
  -moz-animation-fill-mode: forwards;
  -moz-animation-iteration-count: infinite;
  -moz-animation-name: wave;
  -moz-animation-timing-function: linear;
  background: #dddddd;background-image: -webkit-gradient(linear,  left center,  right center,  from(#dddddd),  color-stop(.2,  #f5f5f5),  color-stop(.4,  #e5e5e5),  to(#dddddd));background-image: -webkit-linear-gradient(left,  #dddddd 0%,  #f5f5f5 20%,  #e5e5e5 40%,  #dddddd 100%);
  background-image: -moz-gradient(linear,  left center,  right center,  from(#dddddd),  color-stop(.2,  #f5f5f5),  color-stop(.4,  #e5e5e5),  to(#dddddd));background-image: -moz-linear-gradient(left,  #dddddd 0%,  #f5f5f5 20%, #e5e5e5 40%, #dddddd 100%);background-repeat: repeat-y;
  background-size: 1200px 104px;
  height: auto;
  position: relative;
  color:transparent;
	user-select: none;
}
</style>
