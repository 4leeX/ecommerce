<template>
  <div class="homeContainer">

  <MenuCategorias />
  <SecaoMedia :produtos="products" />

  <div class="cardContainerProvisory" 
    v-if="typeof products=='undefined'">
    <!-- v-if="typeof products==undefined || products.length==0"> -->
    <div  v-for="i in 12" :key="i"
      class="cardContainer">
      <div class="cardImg card__header header__img skeleton"></div>
      <div class="cardContent card__body">
        <p class="skeleton skeleton-text" style="display:inline-block;width:auto;">ppppppppppppppppppppppppppppppp</p><br><br>
        <p class="skeleton skeleton-text" style="display:inline-block;width:auto;">aaaaaaaaaaaaaaaaaaaaaaaaa</p><br>
        <p class="skeleton skeleton-text" style="display:inline-block;width:auto;">pppppppppppppppppppp</p><br>
        <p class="skeleton skeleton-text" style="display:inline-block;width:auto;">pppppppppppppppppppp</p><br>
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
        <!-- <p>{{p.stars}}</p> -->
        <star-rating :rating="p.stars"></star-rating>
        <p>{{p.price_string}}</p>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import Products from '../service/Products';
import MenuCategorias from './MenuCategorias.vue';
import SecaoMedia from './SecaoMedia.vue';
import StarRating from './star-rating.vue';

export default {
  data(){
    return{
      products: [],
    }
  },
  components:{
    MenuCategorias,
    SecaoMedia,
    StarRating
  },
  mounted(){
    this.getProducts();
  },
  // computed: {},
  methods: {
    getProducts(){
      Products.then(data => {
        this.products = data.data.results;
        
        // console.log(data.data);
      })
    },
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
  background: var(--bkg-primary);
    
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
        background: var(--bkg-info-card);
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

// loading animation
.skeleton {
  animation: skeleton-loading 1s linear infinite alternate;
}

@keyframes skeleton-loading {
  0% {
    background-color: hsl(200, 20%, 80%);
  }
  100% {
    background-color: hsl(200, 20%, 95%);
  }
}

.skeleton-text {
  width: 100%;
  height: 1rem;
  color: transparent;
  margin-bottom: 0.5rem;
  border-radius: 10px;
}

.skeleton-text__body {
  width: 75%;
}

.skeleton-footer {
  width: 30%;
}

</style>
