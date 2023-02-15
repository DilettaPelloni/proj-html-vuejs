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
                isDown: false,
                startX: '',
                scrollLeft: '',
            };//return
        },//data
        methods: {
            grab(event) {
                const cardBox = this.$refs.cardBox;

                this.isDown = true;
                cardBox.classList.add('active');
                this.startX = event.clientX - cardBox.offsetLeft;
                this.scrollLeft = cardBox.scrollLeft;
            },//grab
            leave() {
                const cardBox = this.$refs.cardBox;

                this.isDown = false;
                cardBox.classList.remove('active');
            },//leave
            drag(event) {
                const cardBox = this.$refs.cardBox;

                if(!this.isDown) return;
                const x = event.clientX - cardBox.offsetLeft;
                const walk = (x - this.startX);
                cardBox.scrollLeft = this.scrollLeft - walk;
            },//drag
        },//methods
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
        <div class="card-box"
            ref="cardBox"
            @mousedown="grab"
            @mouseleave="leave"
            @mouseup="leave"
            @mousemove.prevent="drag"
        >
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
        display: flex;
        overflow-x: auto;
        cursor: pointer;
        &.active {
            cursor: grabbing;
        }
        &::-webkit-scrollbar {
            display: none;
        }

    }//card-box
}//section
</style>