<script>
    import {store} from '../store.js'
	export default {
		name:'AppHeader',
        data() {
            return {
                store,
            };//return
        },//data
        created() {
            window.addEventListener('scroll', this.scrollHeader)
        },//created
        methods: {
            scrollHeader() {
                if (window.scrollY > 5) {
                    this.$refs.header.classList.add('scrolled');
                }
                else {
                    this.$refs.header.classList.remove('scrolled');
                }
            },//scrollHeader
        }
	}
</script>

<template>
    <header ref="header">
        <div class="container">
            <!-- BOTTONE ORDINI -->
            <a href="#" class="button">
                order online
            </a>

            <!-- NAVBAR -->
            <nav>
                <ul>
                    <li v-for="item, i in store.menuOptions.slice(0,3)">
                        <img v-if="i == 0"
                            src="../assets/svg/svg-0.svg"
                            alt="active icon"
                        />
                        <a :href="item.url"
                            @click="activeMenu = i"
                        >
                            {{ item.name }}
                        </a>
                    </li>
                </ul>

                <img id="header-logo"
                    src="../assets/img/h5-logo-divided-header.png"
                    alt="header logo"
                />

                <ul>
                    <li v-for="item, i in store.menuOptions.slice(3)">
                        <a :href="item.url">
                            {{ item.name }}
                        </a>
                    </li>
                </ul>
            </nav>

            <!-- TOOLS UTENTE -->
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
        height: 130px;
        width: 100%;

        position: fixed;
        top: 0;
        left: 0;
        z-index: 90;

        &.scrolled {
            height: 70px;
            background-color: $nq-black-bg;
        }
    }

    .container {
        @include flex-between-center;
        height: 100%;
        // -------- STILE NAV --------
        nav {
            height: 100%;
            color: white;
            @include flex-between-center;
            ul {
                display: flex;
                height: 100%;
                list-style: none;
                li {
                    @include flex-center;
                    height: 100%;
                    //icone
                    img { 
                        margin-right: 0.2rem;
                        height: 0.7rem;
                        filter: invert(100%) sepia(0%) saturate(1%) hue-rotate(206deg) brightness(108%) contrast(101%);
                    }//icone
                    a {
                        padding: 1rem;
                    }//a
                }//li
            }//ul
            #header-logo {
                display: block;
                margin: 0 1rem;
                height: 100%;
            }//img
        }//nav

        // -------- STILE USER TOOLS --------
        .user-tools {
            @include flex-between-center;
            color: white;

            & > * {
                margin-left: 1rem;
            } //tutti i figli di user tools

            .cart {
                @include flex-center;
                .cart-icon {
                    position: relative;
                    .item-counter {
                        @include round-label(0.8rem);
                        font-size: 0.7rem;
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
    }//container

</style>