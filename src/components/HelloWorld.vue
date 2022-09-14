<template>
  <div class="homeContainer">

    <MenuCategorias />

  <div class="cardContainerProvisory">
    <div v-for="(p, i) in products" :key="i"
      class="cardContainer">
      <div class="cardImg">
        <img :src="p.image" alt="image">
      </div>
      <div class="cardContent">
        <p>{{p.title}}</p>
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
        
        console.log(data.data.results);
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.homeContainer{
  display: flex;
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
          min-width: 100px;
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
</style>
