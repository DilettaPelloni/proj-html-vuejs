<script>
	export default {
		name:'AppFooter',
        data() {
            return {
                restaurants: [
                    {
                        address: '1614 E. Bell Rd #104',
                        city: 'Salerno, AZ 85022',
                        tel: '(602) 867-1010',
                    },
                    {
                        address: '204 E. Pizzetta Tommaso',
                        city: 'Sorrento, AZ 85022',
                        tel: '(358) 867-1010',
                    },
                    {
                        address: 'Vale Puglia 54',
                        city: 'Torre Del Greco AZ 85022',
                        tel: '(359) 867-1010',
                    },
                    {
                        address: 'Corso Itali AA',
                        city: 'Naples, AZ 85022',
                        tel: '(989) 867-1010',
                    },
                ]
            };//return
        },//data
	}
</script>

<template>
    <footer>
        <div class="col info-col">
            <!-- ------------------------- SEZIONE SUPERIORE ------------------------- -->
            <section class="upper-sec">
                <!-- COLONNA INDIRIZZI -->
                <div class="addresses">
                    <h4>find our restaurants</h4>
                    <ul>
                        <li v-for="restaurant in restaurants">
                            <p>{{restaurant.address}}</p>
                            <p>{{restaurant.city}}</p>
                            <p>{{restaurant.tel}}</p>
                        </li>
                    </ul>
                </div>
                <!-- COLONNA ORARI -->
                <div class="work hours">
                    <h4>working hours</h4>
                    <!-- MONDAY -->
                    <div class="day">
                        <h5>
                            monday
                        </h5>
                        <p class="red">Kitchen Closed</p>
                    </div>
                    <!-- TUESDAY-FRIDAY -->
                    <div class="day">
                        <h5>
                            tuesday until friday
                        </h5>
                        <p>09:00 - 22:00</p>
                    </div>
                    <!-- SATURDAY -->
                    <div class="day">
                        <h5>
                            Saturday
                            <span class="red">*</span>
                        </h5>
                        <p>Saturday 11am to midnight</p>
                    </div>
                    <!-- SUNDAY -->
                    <div class="day">
                        <h5>
                            sunday
                        </h5>
                        <p>09:00 - 22:00</p>
                    </div>
                    <!-- SOCIAL CTA -->
                    <div class="social">
                        <span>follow us: </span>
                        <a href="#">
                            <font-awesome-icon icon="fa-brands fa-twitter" />
                        </a>
                        <a href="#">
                            <font-awesome-icon icon="fa-brands fa-facebook-f" />
                        </a>
                        <a href="#">
                            <font-awesome-icon icon="fa-brands fa-instagram" />
                        </a>
                        <a href="#">
                            <font-awesome-icon icon="fa-brands fa-linkedin-in" />
                        </a>
                    </div>
                </div>
                <!-- COLONNA FRASE -->
                <div class="quote">
                    <h3>the don peppe crew first and foremost values an authentic, well baked slice of pizza.</h3>
                </div>
            </section>

            <!-- ------------------------- SEZIONE INFERIORE ------------------------- -->
            <section class="lower-sec">
                <!-- CREATED BY -->
                <div class="credit">
                    <span>
                        Created with 
                        <font-awesome-icon icon="fa-regular fa-face-sad-cry" />
                        by
                        <a href="https://github.com/DilettaPelloni">Diletta</a>
                    </span>
                </div>
                <!-- BOLLINO -->
                <div>
                    <img src="../assets/img/footer-bottom-img.png" alt="footer bottom">
                </div>
            </section>
        </div>
        <!-- ------------------------- COLONNA IMMAGINE ------------------------- -->
        <div class="col img-col">
        </div>
    </footer>
</template>

<style  lang="scss" scoped>
footer {
    display: flex;
    .col {
        width: 50%;
    }
    .info-col {
        padding: 5rem 2rem 2rem;
        background-image: url('../assets/img/cielostellato.PNG');

        // --------- SEZIONE SUPERIORE ---------
        .upper-sec {
            display: flex;
            & > * {
                width: calc(100% / 3);
            }//il contenuto della sezione superiore è diviso in 3 colonne
            h4, h5 {
            color: $gold-text;
            }//titoli colonne
            ul {
                list-style: none;
                li {
                    margin-top: 0.7rem;
                }//li
            }//ul
            p {
                @include paragraph;
                font-size: 0.6rem;
                color:$lighter-text;
            }//testo piccolo

            .day {
                margin-top: 0.7rem;
                .red {
                    color: $orange-bg;
                }//testo rosso
            }//sezioni working hours

            .social {
                margin-top: 2rem;
                span {
                    font-weight: bold;
                    color: $gold-text;
                }//cta
                svg {
                    margin-left: 0.5rem;
                    font-size: 0.6rem;
                    color: white;
                }//icone
            }//social cta
            .quote {
                padding: 0 2rem;
                h3 {
                    color: white;
                }//testo frase
            }//colonna frase
        }//upper-sec

        // --------- SEZIONE INFERIORE ---------
        .lower-sec {
            margin-top: 1.5rem;
            display: flex;
            justify-content: space-between;
            align-items: flex-end;

            .credit span {
                font-family: 'Open Sans', sans-serif;
                font-size: 0.6rem;
                text-transform: none;
                color: $gold-text;
                a {
                    color: $green-text;
                }//diletta
            }//created by
            img {
                height: 80px;
            }//bollino
        }//lower sec
    }//info-col
    .img-col {
        background-image: url('../assets/img/footer-img-1.jpg');
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    }//img-col
}//footer
</style>