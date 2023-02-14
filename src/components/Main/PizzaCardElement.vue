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
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .img-box {
        width: 60%;
        position: relative;
        
        img {
            display: block;
            width: 100%;
        }//img
        .sold {
            height: 2.5rem;
            width: 2.5rem;
            line-height: 2.5rem;
            background-color: $orange-bg;
            color: white;
            text-align: center;
            text-transform: uppercase;
            font-size: 0.6rem;
            border-radius: 50%;
            position: absolute;
            top: 5px;
            right: 5px;
        }//sold
    }//img-box

    h4 {
        margin-top: 0.8rem;
        text-transform: uppercase;
        color: $gold-text;
    }
    span {
        margin-right: 0.5rem;
        color: $orange-bg;
        font-size: 0.9rem;
        font-weight: bold;
        &.old-price {
            text-decoration: line-through;
            color:$light-gold-text;
        }
    }
}

</style>