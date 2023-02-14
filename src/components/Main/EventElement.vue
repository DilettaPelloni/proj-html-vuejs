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
        <!-- -------------------COLONNA EVENTI------------------- -->
        <div class="col event-col">
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

        <!-- -------------------IMMAGINE------------------- -->
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
    }//entrambe le colonne
    .img-col {
        img {
            width: 100%;
        }
    }//colonna con immagine

    .event-col {
        @include flex-center;
        padding-block: 5rem;
        background-image: url('../../assets/img/cielostellato.PNG');
        .text-box {
            padding-right: 20px;
            width: 50%;
            span {
                color: $orange-bg;
            }//sovra-titolo arancione
            h2 {
                font-size: 2rem;
                color: white;
            }//titolo
            .event-box {
                margin-top: 1rem;
                .event {
                    display: flex;
                    padding-block: 2rem;
                    &:not(:first-child, :last-child) {
                        border-top: 1.5px dotted $gold-text;
                        border-bottom: 1.5px dotted $gold-text;
                    }// bordi per gli eventi centrali

                    .date {
                        margin-right: 1rem;
                        text-align: center;
                        h2 {
                            margin-top: -10px;
                            font-size: 3rem;
                            color: $dark-orange-text;
                        }//giorno
                        h4 {
                            font-size: 1.5rem;
                            line-height: 0.2;
                            color: white;
                        }//mese
                    }//date
                    .desc {
                        h3 {
                            color: white;
                        }//titolo
                        p {
                            margin-top: 0.5rem;
                            font-size: 0.7rem;
                            text-transform: none;
                            color: $orange-bg;
                            svg {
                                margin-right: 0.2rem;
                            }//icona
                        }//indirizzo
                    }//dettagli evento
                }//event
            }//event box
        }//text-box
    }//event-col
}//section
</style>