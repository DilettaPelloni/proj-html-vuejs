<script>
    import CarouselElement from './CarouselElement.vue'
    import NewsElement from './NewsElement.vue'
    import SpecialMenuElement from './SpecialMenuElement.vue'
	export default {
		name:'AppMain',
        components: {
            CarouselElement,
            NewsElement,
            SpecialMenuElement,
        },//components
	}
</script>

<template>
    <main>
        <div class="jumbo">
            <CarouselElement :component="'JumboSlide'" :list="'jumboSlides'"/>
        </div>

        <NewsElement/>

        <section class="testimonials">
            <CarouselElement :component="'RevSlide'" :list="'revSlides'"/>
        </section>

        <SpecialMenuElement/>

    </main>
</template>

<style  lang="scss" scoped>

section {
    margin: 6px 0;
}
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