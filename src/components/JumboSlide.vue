<script>
	export default {
		name:'JumboSlide',
        props: {
            slide: Object,
        },//props
        methods: {
            getImgPath(img) {
                return new URL(`../assets/img/${img}`, import.meta.url).href;
            },//getImgPath
        },//methods
	}
</script>

<template>
    
    <div class="slide"
        :style="{backgroundImage: 'url(' + getImgPath(slide.bgImg) +')'}"
    >
        <img :src="getImgPath(slide.centerImg)" alt="jumbo img2">
    </div>
</template>

<style  lang="scss" scoped>

.slide {
    height: 100%;
    padding-bottom: 2rem;
    background-repeat: no-repeat;
    background-position: center top;
    background-size: auto 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
        height: 350px;
    }//img
}

</style>