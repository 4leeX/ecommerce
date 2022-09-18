<template>
  <section class="secaoMediaSection">
    <div class="secaoMediaContainer">
        <CardMedio tipo="img" pathImg="/image/cardm/file.jpg" 
          texto="Bla bla bla" link=""/>
        <CardMedio tipo="img" pathImg="/image/cardm/alexa.jpg" 
          texto="Bla bla bla" link=""/>
        <CardMedio tipo="card" texto="Testando" link="" :produto="produtos"/>
        <CardMedio tipo="card" texto="Teste" link="" :produto="produtos"/>
    </div>
  </section>
</template>

<script>
import CardMedio from './CardMedio.vue';

export default {
  components: { CardMedio },
  props: ['produtos'],

}
</script>

<style lang="scss" scoped>
.secaoMediaSection{
    padding-top: 30px;

    .secaoMediaContainer{
        max-width: 100%;
        height: 400px;
        background: rgb(204, 204, 204);
        border-radius: 10px;
        padding: 20px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
}
</style>