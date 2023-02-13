<script>
    import {store} from '../store.js'
	export default {
		name:'AppHeader',
        data() {
            return {
                store,
            };//return
        },//data
	}
</script>

<template>
    <header>
        <div class="container">
            <!-- BOTTONE ORDINI -->
            <a href="#" class="button">
                ORDER ONLINE
            </a>

            <!-- NAVBAR -->
            <nav>
                <ul>
                    <li>
                        <img src="../assets/svg/svg-0.svg" alt="active icon">
                        <a href="#">
                            home
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            pages
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            menu
                        </a>
                    </li>
                </ul>

                <img src="../assets/img/h5-logo-divided-header.png" alt="header logo">

                <ul>
                    <li>
                        <a href="#">
                            event
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            blog
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            landing
                        </a>
                    </li>
                </ul>
            </nav>

            <!-- LINK UTENTE -->
            <div class="user-tools">
                <!-- CARRELLO -->
                <div class="cart">
                    <span class="cart-icon">
                        <img src="../assets/svg/svg-1.svg" alt="cart icon">
                        <span class="item-counter">
                            0
                        </span>
                    </span>
                    <a href="#">
                        cart
                    </a>
                </div>
                <!-- RICERCA -->
                <div class="search">
                    <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                    <a href="#">
                        search
                    </a>
                </div>
            </div>
        </div>
    </header>
</template>

<style  lang="scss" scoped>

    header {
        padding: 1rem 0;
        width: 100%;
        position: sticky;
        top: 0;
        left: 0;
        z-index: 90;

        background-color: aqua;
    }

    .container {
        margin: 0 auto;
        max-width: 1200px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        background-color: darkcyan;

        nav {
            display: flex;
            align-items: center;
            ul {
                list-style: none;
                display: flex;

                // background-color: saddlebrown;
                li {
                    padding: 1rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    img {
                        margin-right: 0.2rem;
                        height: 0.7rem;
                        filter: invert(100%) sepia(0%) saturate(1%) hue-rotate(206deg) brightness(108%) contrast(101%);
                    }
                    a {
                        color: white;
                        text-transform: uppercase;
                    }
                }//li
            }//ul
            & > img {
                display: block;
                margin: 0 1rem;
                height: 90px;
            }//img
        }//nav

        .user-tools {
            color: white;
            display: flex;
            align-items: center;
            a {
                color: white;
                text-transform: uppercase;
            }//a

            & > * {
                margin-left: 1rem;
            }

            .cart {
                display: flex;
                align-items: center;
                .cart-icon {
                    position: relative;
                    .item-counter {
                        display: inline-block;
                        height: 0.8rem;
                        width: 0.8rem;
                        line-height: 0.8rem;
                        font-size: 0.8rem;
                        text-align: center;
                        border-radius: 50%;
                        font-weight: bold;
                        color: $orange-bg;
                        background-color: white;
                        position: absolute;
                        top: 0;
                        left: 0;
                    }
                    img {
                        margin-right: 0.3rem;
                        filter: invert(100%) sepia(0%) saturate(1%) hue-rotate(206deg) brightness(108%) contrast(101%);
                    }//img
                }//cart-icon
            }//cart
        }//user tools

    }

</style>