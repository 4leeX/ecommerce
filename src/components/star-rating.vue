<template>
  <div class="star-wrapper">
    <a class="fas fa-star" :style="s1"></a>
    <a class="fas fa-star" :style="s2"></a>
    <a class="fas fa-star" :style="s3"></a>
    <a class="fas fa-star" :style="s4"></a>
    <a class="fas fa-star" :style="s5"></a>
</div>
</template>

<script>
export default {
    data() {
        return {
            s1: null,
            s2: null, 
            s3: null, 
            s4: null, 
            s5: null,
            starColor:'color: rgb(218, 185, 1);',
        }
    },
    props: ['rating'],
    mounted(){
        this.setupRating();
    },
    methods:{
        setupRating(){
            let rating = parseInt(this.rating);
            if(rating == 1){
                this.s1 = this.starColor
            }
            if(rating == 2){
                this.s1 = this.starColor
                this.s2 = this.starColor
            }
            if(rating == 3){
                this.s1 = this.starColor
                this.s2 = this.starColor
                this.s3 = this.starColor
            }
            if(rating == 4){
                this.s1 = this.starColor
                this.s2 = this.starColor
                this.s3 = this.starColor
                this.s4 = this.starColor
            }
            if(rating == 5){
                this.s1 = this.starColor
                this.s2 = this.starColor
                this.s3 = this.starColor
                this.s4 = this.starColor
                this.s5 = this.starColor
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.star-wrapper {
  a {
    font-size: 1em;
    color: #999;
    text-decoration: none;
    transition: all 0.5s;
    margin: 4px;
    &:hover {
        color: gold;
        transform: scale(1.3);
    }
  }
}
</style>