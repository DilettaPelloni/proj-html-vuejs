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

        <section class="testimonials">
            <CarouselElement :component="'RevSlide'" :list="'revSlides'"/>
        </section>

    </main>
</template>

<style  lang="scss" scoped>

.jumbo {
    padding: 150px 0 40px;
    background-image: url(../../assets/img/cielostellato.PNG);
    background-position: center bottom;
    background-size: auto 105%;
}

.testimonials {
    background-color: $light-bg;
    background-image: url('../../assets/img/h3-testimonials-bckgrnd.jpg');
    background-repeat: no-repeat;
    background-position: -10% center;
    background-size: contain;
}
</style>