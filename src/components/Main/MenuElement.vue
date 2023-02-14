<script>
    import { store } from '../../store';
    import PizzaCardElement from './PizzaCardElement.vue';

	export default {
		name:'MenuElement',
        components: {
            PizzaCardElement,
        },//components
        data() {
            return {
                store,
            };//return
        },//data    
	}
</script>

<template>
    <section>
        <!-- TITOLO -->
        <div class="title-box container">
            <span>choose your flavor</span>
            <h2>the best pizza menu in town</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam similique illo optio mollitia tenetur voluptatum harum totam earum repudiandae.
            </p>
        </div>

        <!-- CARDS -->
        <div class="card-box">
            <PizzaCardElement
                v-for="pizza in store.pizzas"
                :pizza="pizza"
            />
        </div>

    </section>
</template>

<style  lang="scss" scoped>
section {
    padding-block: 5rem;
    @include flex-center;
    flex-direction: column;
    overflow: hidden;

    .title-box {
        max-width: 40%;
        text-align: center;
        span {
            color: $orange-bg;
            font-size: 0.8rem;
            font-weight: bold;
        }//span (sovra-titolo arancione)
        h2 {
            color: $dark-title;
            font-size: 2rem;
        }//titolo
        p {
            margin-top: 1rem;
            @include paragraph;
        }//p
    }//title box

    .card-box {
        margin-top: 3rem;
        width: 115%;
        display: flex;
    }//card-box
}//section
</style>