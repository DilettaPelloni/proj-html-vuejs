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

                    <div class="day">
                        <h5>
                            monday
                        </h5>
                        <p class="red">Kitchen Closed</p>
                    </div>

                    <div class="day">
                        <h5>
                            tuesday until friday
                        </h5>
                        <p>09:00 - 22:00</p>
                    </div>

                    <div class="day">
                        <h5>
                            Saturday
                            <span class="red">*</span>
                        </h5>
                        <p>Saturday 11am to midnight</p>
                    </div>

                    <div class="day">
                        <h5>
                            sunday
                        </h5>
                        <p>09:00 - 22:00</p>
                    </div>

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
                <div class="quote">
                    <h3>the don peppe crew first and foremost values an authentic, well baked slice of pizza.</h3>
                </div>
            </section>
            <section class="lower-sec">
                <div class="credit">
                    <span>
                        Created with 
                        <font-awesome-icon icon="fa-regular fa-face-sad-cry" />
                        by
                        <a href="https://github.com/DilettaPelloni">Diletta</a>
                    </span>
                </div>
                <div>
                    <img src="../assets/img/footer-bottom-img.png" alt="footer bottom">
                </div>
            </section>
        </div>
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
            padding: 4rem 2rem 2rem;
            background-image: url('../assets/img/cielostellato.PNG');
            .upper-sec {
                display: flex;
                & > * {
                    width: calc(100% / 3);
                }

                h3 {
                    color: white;
                    text-transform: uppercase;
                }

                h4, h5 {
                color: $gold-text;
                text-transform: uppercase;
                }
                ul {
                    list-style: none;
                    li {
                        margin-top: 0.7rem;
                    }
                }
                p {
                    font-size: 0.6rem;
                    font-family: 'Open Sans', sans-serif;
                    color:$lighter-text;
                }

                .day {
                    margin-top: 0.7rem;
                    .red {
                        color: $orange-bg;
                    }
                }

                .social {
                    margin-top: 2rem;
                    span {
                        color: $gold-text;
                        font-weight: bold;
                        text-transform: uppercase;
                    }
                    svg {
                        margin-left: 0.5rem;
                        color: white;
                        font-size: 0.6rem;
                    }
                }

                .quote {
                    padding: 0 2rem;
                }
                
            }//upper-sec
            .lower-sec {
                margin-top: 1.5rem;
                display: flex;
                justify-content: space-between;
                align-items: flex-end;

                .credit span {
                    color: $gold-text;
                    font-family: 'Open Sans', sans-serif;
                    font-size: 0.6rem;
                    a {
                        color: $green-text;
                        font-family: inherit;
                    }
                }
                img {
                    height: 80px;
                }
            }
        }
        .img-col {
            background-image: url('../assets/img/footer-img-1.jpg');
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
        }
    }
</style>