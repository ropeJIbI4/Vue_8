<template>
    <div class="content__block center"></div>
    <div class="content__info">

        <h2 class="content__info__title">Minimal Look Bedrooms</h2>
        <p class="content__info__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae
            turpis dignissim maximus. Aliquam
            sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in
            mi
            fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.
            <br>
            <br>

            In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc,
            mattis
            quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis
            convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id
            purus porttitor.
        </p>

    </div>
    <div>
        <div v-for="(slide, index) in slides" :key="index">
            <img class="img__slide" :src="slide.src" :alt="slide.alt" v-show="index === currentSlide">
        </div>
        <div class="dots">
            <button v-for="(slide, index) in slides" :key="index" @click="setCurrentSlide(index)"
                :class="{ active: currentSlide === index }"></button>
        </div>
    </div>

</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
    computed: {
        ...mapState(['currentSlide'])
    },
    methods: {
        ...mapMutations(['setCurrentSlide'])
    },
    data() {
        return {
            slides: [
                { src: '/public/assets/for_slide.png', alt: 'Slide 1' },
                { src: '/public/assets/img_top_content.png', alt: 'Slide 2' },
                { src: '/public/assets/for_slide.png', alt: 'Slide 3' }
            ]
        }
    }
}
</script>


<style>
.content__block {
    background-image: url(/public/assets//content_block_2.png);
    height: 351px;
    background-size: cover;
    background-position: center;
    margin-bottom: 100px;
}

.content__info{
    width: 700px;
    margin-left: 240px;
    margin-bottom: 120px;
}

.content__info__title{
    font-family: "DM Serif Display", serif;
    font-size: 55px;
    font-weight: 400;
    font-style: normal;
    
}

.content__info__text{
    font-family: "Jost", sans-serif;
    font-size: 22px;
    font-weight: 400;
    font-style: normal;
}

.dots {
    display: flex;
    justify-content: center;
    margin-top: 10px;
}

.img__slide{
    border-radius: 40px;
}

button {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border: solid 1px;
    background-color: #ccc;
    margin: 0 5px
}

button.active {
    background-color: #000;
}

</style>