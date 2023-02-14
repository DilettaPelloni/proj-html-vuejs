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
        <div class="title-box">
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
    padding: 5rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;

    .title-box {
        margin: 0 auto;
        max-width: 40%;
        text-align: center;
        span {
            text-transform: uppercase;
            color: $orange-bg;
            font-size: 0.8rem;
            font-weight: bold;
        }
        h2 {
            text-transform: uppercase;
            color: $dark-title;
            font-size: 2rem;
        }
        p {
            margin-top: 1rem;
            color: $light-text;
            font-size: 0.8rem;
            font-family: 'Open Sans', sans-serif;
        }
    }//title box

    .card-box {
        margin-top: 3rem;
        width: 110%;
        display: flex;
    }//card-box


}
</style>