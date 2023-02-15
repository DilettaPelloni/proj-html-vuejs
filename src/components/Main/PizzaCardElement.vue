<script>
	export default {
		name:'PizzaCardElement',
        props: {
            pizza: Object,
        },//props
        methods: {
            getImgPath(img) {
                return new URL(`../../assets/img/${img}`, import.meta.url).href;
            },//getImgPath
        },//methods
	}
</script>

<template>
    <div class="card">
        <!-- IMMAGINE -->
        <div class="img-box">
            <img :src="getImgPath(pizza.img)" :alt="pizza.name">

            <!-- ETICHETTE -->
            <div class="sold" v-if="pizza.sold">
                sold
            </div>
        </div>

        <!-- NOME -->
        <h4>{{ pizza.name }}</h4>

        <!-- PREZZI -->
        <div>
            <span class="old-price"
                v-if="pizza.oldPrice != ''"
            >
                {{ pizza.oldPrice }}
            </span>
            <span>{{ pizza.price }}</span>
        </div>
    </div>
</template>

<style  lang="scss" scoped>

.card {
    margin-bottom: 1rem;
    width: 18vw;
    @include flex-center;
    flex-direction: column;
    flex-shrink: 0;
    user-select: none;
    .img-box {
        width: 60%;
        position: relative;
        img {
            display: block;
            width: 100%;
        }//img
        .sold {
            @include round-label(2.5rem);
            font-size: 0.6rem;
            color: white;
            background-color: $orange-bg;
            position: absolute;
            top: 5px;
            right: 5px;
        }//sold
    }//img-box

    h4 {
        margin-top: 0.8rem;
        color: $gold-text;
    }//name
    span {
        margin-right: 0.5rem;
        color: $orange-bg;
        font-size: 0.9rem;
        font-weight: bold;
        &.old-price {
            text-decoration: line-through;
            color:$light-gold-text;
        }//old-price
    }//price
}//card
</style>