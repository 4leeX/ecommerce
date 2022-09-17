<template>
  <div class="cardMedioContainer" 
    :class="tipo=='img' ? 'img-card' : 'prod-card'">
    <h2>{{texto}}</h2>
    <div class="img-card" :style="tipo=='card' ? 'display:none':''">
      <img :src="pathImg" alt="imagem">
    </div>
    <a href="#">Ver mais</a>
  </div>
</template>

<script>
export default {
  data(){
    return{
      products: [],
    }
  },
  props: ['tipo', 'texto', 'pathImg'],
  mounted(){},
  methods: {}
}
</script>

<style lang="scss" scoped>
    /* .img-card{
      img{
        max-height: 100%;
        max-width: 100%;
      }
    }
    .prod-card{ */

    /* } */
    .cardMedioContainer{
        width: 25%;
        background: #FFF;
        border-radius: 10px;
        margin: 0 5px;
        padding: 20px;
        text-align: center;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

        a{
          font-size: 15px;
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
    }
</style>