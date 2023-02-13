<script>
    import JumboSlide from './JumboSlide.vue'
	export default {
		name:'AppMain',
        components: {
            JumboSlide,
        },//components
        data() {
            return {
                activeSlide: '0',
                jumboSlides: [
                    {
                        bgImg:'h3-rev-img-5.png',
                        centerImg:'h3-rev-img-6.png',
                        altTxt:'crust-img',
                    },
                    {
                        bgImg:'h3-rev-img-1.png',
                        centerImg:'h3-rev-img-2.png',
                        altTxt:'taste-img',
                    },
                    {
                        bgImg:'h3-rev-img-3.png',
                        centerImg:'h3-rev-img-4.png',
                        altTxt:'urban-img',
                    }
                ],//jumboSlides
            };//return
        },//data
        methods: {
            nextSlide() {
                if(this.activeSlide == this.jumboSlides.length - 1) {
                    this.activeSlide = 0;
                }
                else {
                    this.activeSlide++;
                }
            },//nextSlide
            prevSlide() {
                if(this.activeSlide == 0) {
                    this.activeSlide = this.jumboSlides.length - 1;
                }
                else {
                    this.activeSlide--;
                }
            },//prevSlide
        },//methods
	}
</script>

<template>
    <main>
        <section class="jumbotron">
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

            <JumboSlide
                v-for="slide, i in jumboSlides"
                :slide="slide"
                v-show="activeSlide == i"
            />

        </section>
    </main>
</template>

<style  lang="scss" scoped>
.jumbotron {
    padding-top: 130px;
    background-image: url(../assets/img/cielostellato.PNG);
    background-position: center bottom;
    background-size: 110%;
    position: relative;
    overflow: hidden;

    button {
        cursor: pointer;
        padding-bottom: 1.2rem;
        height: 3rem;
        width: 3rem;
        font-size: 0.8rem;
        border-radius: 50%;
        border: none;
        outline: none;
        background-color: white;
        color: $orange-bg;
        position: absolute;
        transform: translateY(-50%);
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
    
    }
}
</style>