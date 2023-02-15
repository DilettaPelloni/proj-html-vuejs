<script>
    import { store } from '../../store';
    import JumboSlide from '../Main/JumboSlide.vue';
    import RevSlide from '../Main/RevSlide.vue';
	export default {
		name:'CarouselElement',
        components: {
            JumboSlide,
            RevSlide,
        },//components
        props: {
            component: String,
            list: String,
        },//props
        data() {
            return {
                store,
                activeSlide: '0',
            };//return
        },//data
        methods: {
            nextSlide() {
                if(this.activeSlide == this.store[this.list].length - 1) {
                    this.activeSlide = 0;
                }
                else {
                    this.activeSlide++;
                }
            },//nextSlide
            prevSlide() {
                if(this.activeSlide == 0) {
                    this.activeSlide = this.store[this.list].length - 1;
                }
                else {
                    this.activeSlide--;
                }
            },//prevSlide
        },//methods
        mounted() {
            setInterval(() => {this.nextSlide()}, 3000)
        },//mounted
	}
</script>

<template>
    <section class="carousel">
        <button class="prev-btn"
            @click="prevSlide()"
        >
            PREV
        </button>
        
        <button class="next-btn"
            @click="nextSlide()"
        >
            NEXT
        </button>

        <component
            :is="component"
            v-for="slide, i,  in store[list]"
            :slide="slide"
            :slideList="list"
            :index="i"
            v-show="activeSlide == i"
        > </component>

    </section>
</template>

<style  lang="scss" scoped>
.carousel {
    position: relative;
    //per tagliare i bottoni
    overflow: hidden;

    button {
        cursor: pointer;
        padding-bottom: 1.2rem;
        height: 3rem;
        width: 3rem;
        font-size: 0.8rem;
        border-radius: 50%;
        border: none;
        background-color: white;
        color: $orange-bg;

        position: absolute;
        transform: translateY(-50%);
        z-index: 100;
        &.prev-btn {
            top: 50%;
            left:-1.5rem;
            transform: rotate(90deg);
        }//prev
        &.next-btn {
            top: 50%;
            right:-1.5rem;
            transform: rotate(-90deg);
        }//next
    }//button
}//carousel
</style>