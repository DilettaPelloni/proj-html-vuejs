<script>
    import { store } from '../../store';
	export default {
		name:'RevSlide',
        props: {
            slide: Object,
            slideList: String,
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
                    v-for="item, i in store[slideList]"
                    :class="{
                        active: index == i
                    }"
                />
            </div>
        </div>
    </div>
</template>

<style  lang="scss" scoped>

.slide {
    padding: 5rem 0;
    .container {
        max-width: 40%;
        text-align: center;
        @include flex-center;
        flex-direction: column;
        svg {
            font-size: 4rem;
            color: $gold-text;
        }//quote mark
        h2 {
            margin-top: 0.5rem;
            color: $dark-title;
        }//h2
        p {
            margin-top: 0.5rem;
            font-size: 0.8rem;
            font-weight: bold;
            letter-spacing: 0.1em;
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
    }//container
}//slide

</style>