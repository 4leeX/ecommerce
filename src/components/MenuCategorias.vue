<template>
  <section>
    <div class="categoriaContainer">
        <div class="cardImage">
            <div class="imgCategoria">
                <i class="fa-solid fa-mug-saucer"></i>
            </div>
            <div class="textContent">
                <p>Paulo</p>
            </div>
        </div>

        <div class="cardImage">
            <div class="imgCategoria">
                <i class="fa-solid fa-computer"></i>
            </div>
            <div class="textContent">
                <p>Teste</p>
            </div>
        </div>

        <div class="cardImage">
            <div class="imgCategoria">
                <i class="fa-solid fa-socks"></i>
            </div>
            <div class="textContent">
                <p>Teste</p>
            </div>
        </div>

        <div class="cardImage">
            <div class="imgCategoria">
                <i class="fa-solid fa-book"></i>
            </div>
            <div class="textContent">
                <p>Teste</p>
            </div>
        </div>

        <div class="cardImage">
            <div class="imgCategoria">
                <i class="fa-sharp fa-solid fa-bullhorn"></i>
            </div>
            <div class="textContent">
                <p>Teste</p>
            </div>
        </div>

        <div class="cardImage">
            <div class="imgCategoria">
                <i class="fas fa-mobile-alt"></i>
            </div>
            <div class="textContent">
                <p>Teste</p>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .categoriaContainer{
        max-width: 100%;
        height: 200px;
        background: rgb(204, 204, 204);
        border-radius: 10px;
        padding: 20px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;


        .cardImage{
            padding-top: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
            
            .imgCategoria{
                padding: 40px;
                border-radius: 50%;
                background: rgb(49, 49, 49);
                box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
                transition: 0.4s;

                i{
                    font-size: 40px;
                    color: #FFF;
                }

                &:hover{
                    transform: scale(1.1);
                }
            }

            p{
                text-transform: uppercase;
                padding-top: 10px;
                font-weight: 600;
            }

        }
    }
</style>