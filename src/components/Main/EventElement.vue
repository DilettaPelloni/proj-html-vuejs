<script>
	export default {
		name:'EventElement',
        data() {
            return {
                events: [
                    {
                        day: '02',
                        month: 'nov',
                        title: 'traditional neapolitan pies in kyoto pizza mercato',
                        address: '204 E. Pizzatta Tommaso',
                    },
                    {
                        day: '03',
                        month: 'nov',
                        title: 'terrazza patio dining space opening this weekend',
                        address: '204 E. Pizzatta Tommaso',
                    },
                    {
                        day: '05',
                        month: 'nov',
                        title: 'sienna private dining room with stéphane brunn',
                        address: '204 E. Pizzatta Tommaso',
                    },
                ]
            };//return
        },//data
	}
</script>

<template>
    <section>
        <div class="col event-col">

            <!-- EVENTI -->
            <div class="text-box">

                <!-- TITOLO -->
                <span>made with love</span>
                <h2>delish pizza deals</h2>

                <!-- EVENTI -->
                <div class="event-box" >
                    <div class="event" v-for="event in events">
                        <!-- DATA -->
                        <div class="date">
                            <h2>{{ event.day }}</h2>
                            <h4>{{ event.month }}</h4>
                        </div>
                        <!-- DESCRIZIONE -->
                        <div class="desc">
                            <h3>{{ event.title }}</h3>
                            <p>
                                <font-awesome-icon icon="fa-solid fa-location-dot" />
                                {{ event.address }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <!-- IMMAGINE -->
        <div class="col img-col">
            <img src="../../assets/img/h3-img-5a.jpg" alt="comic">
        </div>

    </section>
</template>

<style  lang="scss" scoped>

section {
        display: flex;
        align-items: flex-start;
        .col {
            width: 50%;
            &.img-col {
                img {
                    width: 100%;
                }
            }

            &.event-col {
                padding: 4rem 0;
                background-image: url('../../assets/img/cielostellato.PNG');
                display: flex;
                justify-content: center;
                align-items: center;
                .text-box {
                    padding-right: 20px;
                    width: 50%;
                    span {
                        color: $orange-bg;
                    }
                    h2 {
                        font-size: 2rem;
                        text-transform: uppercase;
                        color: white;
                    }

                    .event-box {
                        margin-top: 1rem;
                        .event {
                            display: flex;
                            align-items: flex-start;
                            padding: 2rem 0;
                            &:not(:first-child, :last-child) {
                                border-top: 1.5px dotted $gold-text;
                                border-bottom: 1.5px dotted $gold-text;
                            }

                            .date {
                                padding-right: 1rem;
                                text-align: center;
                                h2 {
                                    margin-top: -10px;
                                    font-size: 3rem;
                                    color: $dark-orange-text;
                                }
                                h4 {
                                    font-size: 1.5rem;
                                    line-height: 0.2;
                                    text-transform: uppercase;
                                    color: white;
                                }
                            }//date
                            .desc {
                                h3 {
                                    color: white;
                                    text-transform: uppercase;
                                }
                                p {
                                    margin-top: 0.5rem;
                                    color: $orange-bg;
                                    font-size: 0.7rem;
                                    svg {
                                        margin-right: 0.2rem;
                                    }
                                }
                            }
                        }//event
                    }//event box
                }//text-box
            }//menu-col
        }//col



    }
</style>