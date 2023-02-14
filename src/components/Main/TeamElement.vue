<script>
	export default {
		name:'TeamElement',
        
        data() {
            return {
                team: [
                    {
                        img: 'h1-team-1a-700x700.jpg',
                        name: 'frank bailey',
                        role: 'kitchen porter',
                        socials: [
                            {
                                icon: 'fa-brands fa-instagram',
                                url: '#',
                            },
                            {
                                icon: 'fa-brands fa-twitter',
                                url: '#',
                            },
                            {
                                icon: 'fa-brands fa-facebook-f',
                                url: '#',
                            },
                        ]
                    },
                    {
                        img: 'h1-team-2a.jpg',
                        name: 'jade wright',
                        role: 'executive chef',
                        socials: [
                            {
                                icon: 'fa-brands fa-instagram',
                                url: '#',
                            },
                            {
                                icon: 'fa-brands fa-facebook-f',
                                url: '#',
                            },
                        ]
                    },
                    {
                        img: 'h1-team-4a.jpg',
                        name: 'alan jacobs',
                        role: 'purchasing manager',
                        socials: [
                            {
                                icon: 'fa-brands fa-twitter',
                                url: '#',
                            },
                            {
                                icon: 'fa-brands fa-facebook-f',
                                url: '#',
                            },
                        ]
                    },
                    {
                        img: 'h1-team-3a.jpg',
                        name: 'matilda rossi',
                        role: 'junior chef',
                        socials: [
                            {
                                icon: 'fa-brands fa-instagram',
                                url: '#',
                            },
                            {
                                icon: 'fa-brands fa-twitter',
                                url: '#',
                            },
                            {
                                icon: 'fa-brands fa-facebook-f',
                                url: '#',
                            },
                        ]
                    },
                ]
            };//return
        },//data
        methods: {
            getImgPath(img) {
                return new URL(`../../assets/img/${img}`, import.meta.url).href;
            },//getImgPath
        },//methods
	}
</script>

<template>
    <section>
        <div class="team-memb" v-for="memb in team">
            <img :src="getImgPath(memb.img)" :alt="memb.name">

            <div class="info-box">
                <div class="text-box">
                    <!-- NOME -->
                    <h4>{{ memb.name }}</h4>
                    <!-- RUOLO -->
                    <p>{{memb.role}}</p>
                    <!-- SOCIAL -->
                    <div class="social-box">
                        <a :href="social.url" v-for="social in memb.socials">
                            <font-awesome-icon
                                :icon="social.icon"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div><!-- CHIUSURA TEAM MEMB -->
    </section>
</template>

<style  lang="scss" scoped>
section {
    display: flex;
    flex-wrap: wrap;
    .team-memb {
        width: 25%;
        position: relative;
        img {
            display: block;
            width: 100%;
        }//img

        .info-box {
            @include pattern-bg;
            @include flex-center;
            @include overlay-position;
            opacity: 0;

            .text-box {
                width: 90%;
                height: 90%;
                color: white;
                background-color: $orange-bg;
                @include flex-center;
                flex-direction: column;

                h4 {
                    font-size: 1.5rem;
                }//h4

                p {
                    text-transform: capitalize;
                    font-size: 0.8rem;
                    font-family: 'Open Sans', sans-serif;
                }//p

                .social-box {
                    margin-top: 1rem;
                    a {
                        padding: 0.5rem;
                    }//a
                }//social box
            }//text-box
        }//info-box

        &:hover .info-box {
            opacity: 1;
        }//card hover x info-box
    }
}//section
</style>