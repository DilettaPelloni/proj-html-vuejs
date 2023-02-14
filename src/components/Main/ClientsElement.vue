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
        <div class="box">
            <a :href="client.url" v-for="client in clients">
                <img :src="getImgPath(client.logo)" alt="big cheese">
            </a>
        </div>
    </section>
</template>

<style  lang="scss" scoped>
section {
    background-color: $light-bg;
    .box {
        margin: 0 auto;
        padding: 4rem 0;
        max-width: 1000px;
        display: flex;
        flex-wrap: wrap;
        a {
            width: 20%;
            display: block;
            img {
                display: block;
                width: 100%
            }//img
        }//a
    }//box
}
</style>