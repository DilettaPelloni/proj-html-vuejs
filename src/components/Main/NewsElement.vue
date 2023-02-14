<script>
	export default {
		name:'NewsElement',
        data() {
            return {
                news: [
                    {
                        img: 'h3-img-1.jpg',
                        ulr: '#',
                        title:'new place',
                    },
                    {
                        img: 'h3-img-2.jpg',
                        ulr: '#',
                        title:'mangia una buona pizza',
                    },
                    {
                        img: 'h3-img-3.jpg',
                        ulr: '#',
                        title:'yum yum',
                    },
                    {
                        img: 'h3-img-4.jpg',
                        ulr: '#',
                        title:'la pizza è più grande di tutti',
                    },
                ]//news
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
    <section class="card-box">
        <div class="card" v-for="item in news">
            <img :src="getImgPath(item.img)" :alt="item.title">
            <div class="link">
                <a :href="item.url">
                    <font-awesome-icon icon="fa-regular fa-eye" />
                </a>
            </div>
        </div>
    </section>
</template>

<style  lang="scss" scoped>
.card-box {
    display: flex;
    justify-content: space-between;
    .card {
        width: calc(25% - 5px);
        cursor: pointer;
        position:relative;
        img {
            display: block;
            width: 100%;
        }//img

        .link {
            display: flex;
            justify-content: center;
            align-items: center;
            
            @include pattern-bg;

            opacity: 0;
            position: absolute;
            top:0;
            bottom: 0;
            right: 0;
            left: 0;
            a {
                display: block;
                height: 3rem;
                width: 3rem;
                line-height: 3rem;
                border-radius: 50%;
                text-align: center;
                color: white;
                background-color: $orange-bg;
            }//a
        }//link

        &:hover .link {
            opacity: 1;
        }
    }//card
}
</style>