<script>
    import { store } from '../../store';
	export default {
		name:'RevSlide',
        props: {
            slide: Object,
            slideArray: String,
            index: Number,
        },//props
        data() {
            return {
                store,
            };//return
        },//data
        methods: {
            getImgPath(img) {
                return new URL(`../../assets/img/${img}`, import.meta.url).href;
            },//getImgPath
        },//methods
	}
</script>

<template>
    
    <div class="slide">
        <div class="container">
            <!-- SIMBOLO QUOTE -->
            <font-awesome-icon icon="fa-solid fa-quote-left" />

            <!-- CITAZIONE -->
            <h2>
                {{ slide.quote }}
            </h2>

            <!-- TESTIMONIAL -->
            <p>
                {{ slide.name }}
            </p>

            <!-- INDICATORI -->
            <div class="indicators">
                <font-awesome-icon icon="fa-solid fa-circle"
                    v-for="item, i in store[slideArray]"
                    :class="{
                        active: index == i
                    }"
                />
            </div>

            <!-- ICONA PIZZA -->
            <span class="pizza-icon">
                <img src="../../assets/svg/svg-4.svg" alt="pizza icon">
            </span>

        </div>
    </div>
</template>

<style  lang="scss" scoped>

.slide {
    padding: 5rem 0;
    position: relative;
    .container {
        margin: 0 auto;
        max-width: 40%;
        text-align: center;
        text-transform: uppercase;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        svg {
            font-size: 4rem;
            color: $gold-text;
        }//svg
        h2 {
            margin-top: 0.5rem;
            color: $dark-title;
        }//h2
        p {
            margin-top: 0.5rem;
            letter-spacing: 0.1em;
            font-size: 0.8rem;
            font-weight: bold;
            color: $orange-bg;
        }//p
        
        .indicators {
            margin-top: 1rem;
            svg {
                display: inline-block;
                margin: 0.2rem;
                font-size: 0.5rem;
                color: $light-gold-text;
                &.active {
                    color: $gold-text;
                }
            }
        }

        .pizza-icon {
            position: absolute;
            right: 30px;
            bottom: 20px;
            img {
                height: 20px;
            }
        }
    }//container
}//slide

</style>