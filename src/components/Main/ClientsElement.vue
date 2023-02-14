<script>
	export default {
		name:'ClientsElement',
        data() {
            return {
                clients: [
                    {
                        logo: 'h1-clients-img-4.png',
                        url: '#',
                    },
                    {
                        logo: 'h1-clients-img-3.png',
                        url: '#',
                    },
                    {
                        logo: 'h1-clients-img-1.png',
                        url: '#',
                    },
                    {
                        logo: 'h1-clients-img-2.png',
                        url: '#',
                    },
                    {
                        logo: 'h1-clients-img-5.png',
                        url: '#',
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
        <div class="container">
            <a :href="client.url" v-for="client in clients">
                <img :src="getImgPath(client.logo)" alt="big cheese">
            </a>
        </div>
    </section>
</template>

<style  lang="scss" scoped>
section {
    padding-block: 5rem;
    background-color: $light-bg;
    .container {
        display: flex;
        flex-wrap: wrap;
        a {
            width: 20%;
            img {
                display: block;
                width: 100%
            }//img
        }//a
    }//container
}
</style>