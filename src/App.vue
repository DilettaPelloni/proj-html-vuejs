<script>
    import AppHeader from './components/AppHeader.vue';
    import AppMain from './components/Main/AppMain.vue'
    import AppFooter from './components/AppFooter.vue'
	export default {
		name:'App',
        components: {
            AppHeader,
            AppMain,
            AppFooter,
        },//components
	};//export
</script>

<template>
    <AppHeader/>
    <AppMain/>
    <AppFooter/>
    <!-- PULSANTE PIZZA FLUTTUANTE -->
    <button class="pizza-floating">
        <img src="./assets/svg/svg-4.svg" alt="pizza slice">
    </button>
    <!-- BARRA GESTIONE CARELLO A SCOMPARSA -->
    <div class="cart-bar">
        <div class="button-box">
            <a class="wheel-button" href="#">
                <img src="./assets/svg/svg-7.svg" alt="wheel">
            </a>
            <a class="cart-button" href="#">
                <img src="./assets/svg/svg-9.svg" alt="cart">
            </a>
        </div>
    </div>
</template>

<style lang="scss">
@import "./style/main.scss";
.pizza-floating {
    padding-block: 0.2rem;
    @include round-label(2rem);
    border: none;
    background-color: $light-bg;
    position:fixed;
    bottom: 20px;
    right: 20px;
    z-index: 90;
    img {
        height: 60%;
    }//img
}//pulsante fluttuante in basso a destra

.cart-bar {
    height: 100vh;
    width: 200px;
    position:fixed;
    top: 0;
    right: 0;
    z-index: 50;

    opacity: 0;

    &:hover {
        opacity:1;
    }//diventa visibile all'hover

    .button-box {
        width: 100%;
        position: absolute;
        top: 70%;
        right: 0;
        transform: translateY(-50%);
        z-index: 60;
        a {
            @include flex-center;
            margin-left: auto;
            margin-bottom: 0.5rem;
            height: 35px;
            width: 35px;
            background-color: wheat;
            box-shadow: 0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px -1px rgba(0,0,0,0.1);
            &.wheel-button {
                background-color: $pink-bg;
                img {
                    width: 60%;
                }
            }//bottone con ruota
            &.cart-button {
                background-color: white;
                img {
                    width: 40%;
                }
            }//bottone con carrello
        }//a
    }//contenitore bottoni
}
</style>
