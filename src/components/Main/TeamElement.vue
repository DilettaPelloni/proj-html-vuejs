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
                    <h4>{{ memb.name }}</h4>
                    <p>{{memb.role}}</p>
                    <div class="social-box">
                        <a :href="social.url" v-for="social in memb.socials">
                            <font-awesome-icon
                                :icon="social.icon"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
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
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            top: 0;
            bottom: 0;
            right: 0;
            left: 0;

            opacity: 0;

            .text-box {
                width: 90%;
                height: 90%;
                color: white;
                background-color: $orange-bg;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;

                h4 {
                    text-transform: uppercase;
                    font-size: 1.5rem;
                }

                p {
                    text-transform: capitalize;
                    font-size: 0.8rem;
                    font-family: 'Open Sans', sans-serif;
                }

                .social-box {
                    margin-top: 1rem;
                    a {
                        padding: 0.5rem;
                    }
                }
            }

        }//info-box

        &:hover .info-box {
            opacity: 1;
        }//card hover x info-box
    }
}//section

</style>