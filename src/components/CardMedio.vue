<template>
  <div class="cardMedioContainer">
    <h2>{{texto}}</h2>

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
  props: ['tipo', 'texto'],
  mounted(){},
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

        h2{
            border-bottom: 1px solid rgb(207, 207, 207);
            padding-bottom: 10px;
        }
    }
</style>