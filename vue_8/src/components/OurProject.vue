<template>
    <div class="header__content center">
        <div class="header__content__top">
            <h1 class="header__content__top__title">Our Project</h1>
            <p class="header__content__top__parag">Home / Blog</p>
        </div>
    </div>
    <div class="tag__btn center">
        <button class="tag__btn__index" v-for="(tag, index) in tags" :key="index" @click="selectTag(tag)"
            :class="{ active: selectedTag === tag }">
            {{ tag }}

        </button>
    </div>
    <div v-if="selectedTag != null">
        <h2 class="article__title">Articles & News</h2>
        <div class="article__news">
            <div class="article__news__item" v-for="(product, index) in filteredProducts" :key="index">
                <img class="article__news__image" :src="product.image" :alt="product.title">
                <h2 class="article__news__text">{{ product.title }}</h2>
                <div class="article__news__info">
                    <p class="article__news__info__parag">{{ product.text }}</p>
                    <a href="#"><button class="article__news__info__btn"><img src="/public/assets/btn_3.png"
                                alt=""></button></a>
                </div>
            </div>
        </div>
        <div class="article__news__link" v-if="selectedTag!=null">
            <a href="#"><img src="/public/assets/1.png" alt=""></a>
            <a href="#"><img src="/public/assets/2.png" alt=""></a>
            <a href="#"><img src="/public/assets/3.png" alt=""></a>
            <a href="#"><img src="/public/assets/4.png" alt=""></a>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        tags: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            tags: ['Bathroom', 'Bed Room', 'Kitchan','Living Area'],
            selectedTag: null,
            products: [
                {
                    image: '/public/assets/Bedroom_1.png',
                    title: 'Minimal Bedroom',
                    text: 'Decor / Artchitecture',
                    category: 'Bed Room'
                },
                {
                    image: '/public/assets/Bedroom_2.png',
                    title: 'Minimal Bedroom',
                    text: 'Decor / Artchitecture',
                    category: 'Bed Room'
                },
                {
                    image: '/public/assets/Bedroom_3.png',
                    title: 'Classic Minimal Bedroom',
                    text: 'Decor / Artchitecture',
                    category: 'Bed Room'
                },
                {
                    image: '/public/assets/Bedroom_4.png',
                    title: 'Modern Bedroom',
                    text: 'Decor / Artchitecture',
                    category: 'Bed Room'
                },
                {
                    image: '/public/assets/Bedroom_5.png',
                    title: 'Minimal Bedroom table',
                    text: 'Decor / Artchitecture',
                    category: 'Bed Room'
                },
                {
                    image: '/public/assets/Bedroom_6.png',
                    title: 'System Table',
                    text: 'Decor / Artchitecture',
                    category: 'Bed Room'
                },
                {
                    image: '/public/assets/Bedroom_7.png',
                    title: 'Modern Medroom',
                    text: 'Decor / Artchitecture',
                    category: 'Bed Room'
                },
                {
                    image: '/public/assets/Bedroom_8.png',
                    title: 'Modern Bedroom',
                    text: 'Decor / Artchitecture',
                    category: 'Bed Room',
                }
            ]
        };
    },
    computed: {
        filteredProducts() {
            return this.products.filter(product => product.category === this.selectedTag);
        }
    },
    methods: {
        selectTag(tag) {
            this.selectedTag = tag;
        }
    }
};
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;

}

a {
    text-decoration: none;
    color: black;
}

.center {
    padding-left: calc(50% - 560px);
    padding-right: calc(50% - 560px);
}

.header__content {
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: flex-end;
    background-image: url(/public/assets/background_our_project.png);
    background-size: cover;
    background-position: center;
    height: 356px;
}

.header__content__top__title {
    font-size: 38px;
    font-family: "DM Serif Display", serif;
    font-weight: 400;
    font-style: normal;
    text-align: left;
    padding-left: 30px;
}

.header__content__top__parag {
    font-family: "Jost", sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-size: 22px;
    font-style: normal;
    white-space: normal;
}

.header__content__top {
    padding: 41px 78px;
    width: 503px;
    border: solid 1px;
    border-radius: 30px 30px 0px 0px;
    border-color: #FFFFFF;
    background-color: #FFFFFF;

}

.header__content__top__title{
    text-align: center;
}

.tag__btn{
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: nowrap;
    border: solid 1px ;
    border-color: #CDA274;
    border-radius: 35px;
    width: 700px;
    margin-top: 35px;
    margin-left: 260px;
    
    
}

.tag__btn__index{
    border-radius: 40px;
    width: 150px;
    height: 50px;
    border: none;
}

.tag__btn__index.active {
    background-color: #CDA274;
    color: white;
}
.tag__btn__index:hover{
    background-color: #dbbb9b;
}

.article__news{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    
}


.article__news__item{
    padding-bottom: 50px
}
.article__news__info {
    display: flex;
    align-items: flex-end;
    flex-direction: row;
    justify-content: space-between;
    
    padding-right: 20px;
}

.article__news__text{
    font-size: 28px;
    font-family: "DM Serif Display", serif;
    font-weight: 400;
    font-style: normal;
    white-space: pre-line;
    text-align: left;
    padding-left: 23px;
    }

.article__news__info__parag {
    font-family: "Jost", sans-serif;
    font-weight: 400;
    font-optical-sizing: auto;
    font-style: normal;
    font-size: 16px;
    white-space: normal;
    padding-left: 25px;
    padding-bottom: 20px;
}

.article__news__info__btn {
    border: none;
    background-color: white;

}

.article__news__link{
    text-align-last: center;
}

</style>
