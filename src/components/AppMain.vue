<script>
    import CarouselElement from './CarouselElement.vue'
	export default {
		name:'AppMain',
        components: {
            CarouselElement,
        },//components
	}
</script>

<template>
    <main>
        <section class="jumbo">
            <CarouselElement/>
        </section>
        <section class="row-4">
            <div class="col">

            </div>
            
            <div class="col">

            </div>

            <div class="col">

            </div>

            <div class="col">

            </div>
        </section>
    </main>
</template>

<style  lang="scss" scoped>

.jumbo {
    padding: 150px 0 40px;
    background-image: url(../assets/img/cielostellato.PNG);
    background-position: center bottom;
    background-size: auto 105%;
}

.row-4 {
    background-color: aqua;
    display: flex;
    justify-content: space-between;
    .col {
        height: 50px;
        width: calc(25% - 5px);
        background-color: saddlebrown;
    }
}
</style>