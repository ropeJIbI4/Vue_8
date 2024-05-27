<template>
    <div class="content__block center"></div>
    <div class="center">
        <div class="blog_news">
            <div class="tags">
                <div>
                    <h2 class="blog_news__title">Tags</h2>
                </div>
                <div>
                    <button class="tag" v-for="(tag, index) in tags" :key="index" @click="selectTag(tag)"
                        :class="{ active: selectedTag === tag }">
                        {{ tag }}
                    </button>
                </div>
            </div>
            <div class="blog_news__items">
                <div class="blog_news__item" v-for="(item, index) in filteredBlog" :key="index">
                    <h2 class="blog_news__title">{{ item.title_1 }}</h2>
                    <img class="blog_news__image__1" :src="item.image_1" :alt="item.image_is_none">
                    <div v-if="item.text_1 != ''" class="blog_news__block">
                        <p class="blog_news__text">26 December,2022</p>
                        <p class="blog_news__text">Interior / Home / Decore</p>
                    </div>
                    <p class="blog_news__text">{{ item.text_1 }}</p>
                    <br>
                    <p class="blog_news__text">{{ item.text_2 }}</p>
                    <br>
                    <div v-if="item.text_1 != ''" class="blog_news__reconstruct">
                        <img class="blog_news__image__2" :src="item.image_is_none" :alt="item.text_image_is_none">
                        <p class="blog_news__text__reconstruct">{{ item.text_image_is_none }}</p>
                    </div>
                    <h2 class="blog_news__title">{{ item.title_2 }}</h2>
                    <br>
                    <p class="blog_news__text">{{ item.text_3 }}</p>
                    <br>
                    <ol TYPE=1 v-if="item.text_1 != ''">
                        <li>1 {{ item.text_li_1 }}</li><br>
                        <li>2 {{ item.text_li_1 }}</li><br>
                        <li>3 {{ item.text_li_1 }}</li><br>
                    </ol>
                    <div>
                        <img class="blog_news__image__3" :src="item.image_1" :alt="item.image_is_none">
                        <p class="blog_news__text">{{ item.text_4 }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    data() {
        return {
            selectedTag: null,
            blogNewsData: [
                {
                    image_1: "/public/assets/content_1_dz_3.png",
                    image_2: "/public/assets/content_2_dz_3.png",
                    image_is_none: "/public/assets/image_is_none.png",
                    title_1: "Let’s Get Solution for Building Construction Work",
                    title_2: "Design sprints are great",
                    text_1:
                        "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
                    text_2:
                        "Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
                    text_3:
                        "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
                    text_4:
                        "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
                    text_li_1:
                        "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
                    text_image_is_none: "The details are not the details. They make the design.",
                    tags: ["Kitchen",],
                },
                {
                    image_1: "",
                    title_1: "",
                    text_1: "",
                    tags: ["Bedroom", "Building", "Architecture", "Kitchen Planning", "Bedroom"],
                },
            ],
        };
    },
    computed: {
        tags() {
            return Array.from(new Set(this.blogNewsData.map((blog) => blog.tags).flat()));
        },
        filteredBlog() {
            if (!this.selectedTag) {
                return this.blogNewsData;
            }

            return this.blogNewsData.filter((blog) => blog.tags.includes(this.selectedTag));
        },
    },
    methods: {
        selectTag(tag) {
            this.selectedTag = tag;
        },
    },
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


.content__block {
    background-image: url(/public/assets//Image_laceholder.png);
    height: 351px;
    background-size: cover;
    background-position: center;
    margin-bottom: 100px;
}

.tags {
    display: flex;
    height: 100px;
    width: 930px;
    padding-top: 100px;
    align-content: stretch;
    justify-content: center;
    flex-direction: column;
}


.tag {
    width: 40%;
    height: 30px;
    line-height: 15px;
    text-align: center;
    border: 1px solid black;
    box-sizing: border-box;
    font-family: "Jost", sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;

}

.tag:active::after {
    background-color: black;
}

.tag {
    border: solid 1px #F4F0EC;
    border-color: #F4F0EC;
    border-radius: 40px;
}


.tag.active {
    background-color: #292F36;
    color: white;
}

.tag:hover {
    background-color: red;
}



.blog_news {
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
}

.blog_news__item {
    padding-left: 10px;
}

.blog_news__reconstruct {
    padding-top: 50px;
    text-align: center;
    border-radius: 40px;
    background-color: #F4F0EC;
    height: 200px;
    margin-bottom: 50px;
}

.blog_news__text__reconstruct {
    color: #CDA274;
    font-family: "Jost", sans-serif;
    font-weight: 400;
    font-style: normal;
    width: 510px;
    text-align: center;
    padding-left: 293px;
}

.blog_news__title {
    font-family: "DM Serif Display", serif;
    font-size: 55px;
    font-weight: 400;
    font-style: normal;
    padding-bottom: 20px;
}

.blog_news__text {
    font-family: "Jost", sans-serif;
    font-size: 22px;
    font-weight: 400;
    font-style: normal;

}

.blog_news__block {
    display: flex;
    align-items: flex-end;
    flex-direction: row;
    justify-content: space-evenly;
    gap: 380px;
    padding-top: 35px;
    padding-bottom: 30px;
}


ul {
    font-family: "Jost", sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    list-style: none;
}

ol {
    font-family: "Jost", sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    list-style: none;
}
</style>