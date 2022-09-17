<template>
  <section class="secaoMediaSection">
    <div class="secaoMediaContainer">
        <CardMedio tipo="" texto="Paulinho maluco" link=""/>
        <CardMedio tipo="" texto="Gurupi" link=""/>
        <CardMedio tipo="" texto="Zazau pica de cachorro" link=""/>
        <CardMedio tipo="" texto="Toperinha gameplaus" link=""/>
    </div>
  </section>
</template>

<script>
import CardMedio from './CardMedio.vue';

export default {
  components: { CardMedio },

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