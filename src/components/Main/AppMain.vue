<script>
    import CarouselElement from './CarouselElement.vue'
    import NewsElement from './NewsElement.vue'
	export default {
		name:'AppMain',
        components: {
            CarouselElement,
            NewsElement
        },//components
	}
</script>

<template>
    <main>
        <section class="jumbo">
            <CarouselElement :component="'JumboSlide'" :list="'jumboSlides'"/>
        </section>

        <NewsElement/>

    </main>
</template>

<style  lang="scss" scoped>

.jumbo {
    padding: 150px 0 40px;
    background-image: url(../../assets/img/cielostellato.PNG);
    background-position: center bottom;
    background-size: auto 105%;
}
</style>