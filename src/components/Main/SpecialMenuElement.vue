<script>
	export default {
		name:'SpecialMenuElement',
        data() {
            return {
                menuSpecials: [
                    {
                        price: '10$',
                        name: 'combo piccolo',
                        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ab iste architecto!',
                    },
                    {
                        price: '20$',
                        name: 'combo mezzo',
                        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ab iste architecto!',
                    },
                    {
                        price: '30$',
                        name: 'combo grande',
                        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ab iste architecto!',
                    },
                ],//menuSpecials
            };//return
        },//data
	}
</script>

<template>
    <section>
        <div class="col img-col">
            <img src="../../assets/img/h1-img-7n.png" alt="Pizza Specials">
        </div>
        <div class="col menu-col">

            <div class="text-box">

                <!-- TITOLO E SOTTOTITOLO -->
                <h2>specials*</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, repellat.</p>

                <!-- MENU -->
                <div class="menu-box" v-for="menu in menuSpecials">
                    <div class="price-col">
                        <h3>{{ menu.price }}</h3>
                    </div>
                    <div class="item-col">
                        <h3>{{ menu.name }}</h3>
                        <p>{{ menu.desc }}</p>
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>

<style  lang="scss" scoped>
    section {
        display: flex;

        .col {
            width: 50%;
            height: 30vw;
            display: flex;
            justify-content: center;
            align-items: center;

            &.img-col {
                background-image: url('../../assets/img/h1-img-4.jpg');
                background-repeat: no-repeat;
                background-size: cover;
                img {
                    height: 50%;
                }
            }

            &.menu-col {
                .text-box {
                    padding-right: 20px;
                    max-width: 50%;
                    h2,h3 {
                        font-size: 2rem;
                        text-transform: uppercase;
                        color:$dark-title;
                    }
                    p {
                        color: $light-text;
                        font-size: 0.8rem;
                        font-family: 'Open Sans', sans-serif;
                    }
                    .menu-box {
                        margin-top: 1rem;
                        display: flex;
                        h3 {
                            font-size: 1.2rem;
                        }
                        p {
                            margin-top: 0.4rem;
                            font-size: 0.7rem;
                        }
                        .price-col {
                            padding-right: 0.8rem;
                            h3 {
                                color: $dark-orange-text
                            }//h3
                        }//price-col
                    }//menu-box

                }//text-box
            }//menu-col
        }//col



    }

</style>