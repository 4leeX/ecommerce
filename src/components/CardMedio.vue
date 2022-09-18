<template>
  <div class="cardMedioContainer" 
    :class="tipo=='img' ? 'img-card' : 'prod-card'">
    <h2>{{texto}}</h2>
    <div class="img-card" :style="tipo=='card' ? 'display:none':''">
      <img :src="pathImg" alt="imagem">
    </div>
    
    <div class="img-prod" :style="tipo=='img' ? 'display:none':''" 
      v-if="typeof produto=='undefined'">
        <div class="mini-card card__header header__img skeleton" v-for="p in 4" :key="p"></div>
    </div>

    <div class="img-prod" :style="tipo=='img' ? 'display:none':''" v-else>
        <!-- <div v-for="(p, i) in produto.slice(0, 4)" :key="i">
           {{ p.image }} 
        </div> -->
        <div class="mini-card" v-for="p in 4" :key="p">
          <img src="" alt="">
        </div>
    </div>
    <a href="#">{{tipo=='img' ? 'Ver mais' : 'Veja a categoria completa'}}</a>
  </div>
</template>

<script>
export default {
  data(){
    return{}
  },
  props: ['tipo', 'texto', 'pathImg', 'produto'],
  computed:{
    // reduceArrayOfProducts(){
      // reduceArray(){
      //   setTimeout(() => {
      //     return this.produto.slice(0, 4);
      //     // console.log(this.produto);
      //   }, 5000);
      // }      
    // }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.cardMedioContainer{
  width: 25%;
  background: #FFF;
  border-radius: 10px;
  margin: 0 5px;
  padding: 20px;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  a{
    font-size: 12px;
    text-decoration: none;
    &:hover{
      color: grey;
      text-decoration: underline;
      text-decoration-color: grey;
    }
  }
  h2{
      border-bottom: 1px solid rgb(207, 207, 207);
      padding-bottom: 10px;
  }

  .img-card{
    width: 100%;
    height: 300px;
    padding: 5px 0;
    img{
      border-radius: 10px;
      max-height: 100%;
      min-width: 100%;

    }
  }

  /* .prod-card{
    display: flex;
    text-align: center;
  } */
  
  .img-prod{
    display: flex;
    width: 100%;
    height: 300px;
    flex-wrap: wrap;
    padding: 5px 0;
    
    .mini-card{
      height: 50%;
      min-width: 50%;

      img{
        width: 100%;
        height: 100%;
        border-radius: 10px;
      }
    }
    a{
      padding-top: 5px;
      font-size: 15px;
    }
  }
}

// loading animation
.skeleton {
  animation: skeleton-loading 1s linear infinite alternate;
  border-radius: 30px;
}

@keyframes skeleton-loading {
  0% {
    background-color: hsl(200, 20%, 80%);
  }
  100% {
    background-color: hsl(200, 20%, 95%);
  }
}

.skeleton-text__body {
  width: 75%;
}
</style>