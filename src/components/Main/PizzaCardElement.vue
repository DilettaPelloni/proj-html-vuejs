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
        <img :src="getImgPath(pizza.img)" :alt="pizza.name">

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
    img {
        display: block;
        width: 60%;
    }
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