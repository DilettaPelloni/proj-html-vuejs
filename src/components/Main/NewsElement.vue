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
    padding: 6px 0;
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
            
            background-color: #FFFFFF;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='100%25' height='100%25'%3E%3Cdefs%3E%3Cpattern id='p' width='100' height='100' patternUnits='userSpaceOnUse' patternTransform='scale(0.09)'%3E%3Ccircle id='a' data-color='outline' fill='none' stroke='%23CDCDCD' stroke-width='13.68' r='.5'%3E%3C/circle%3E%3Cuse xlink:href='%23a' y='100'%3E%3C/use%3E%3Cuse xlink:href='%23a' x='100'%3E%3C/use%3E%3Cuse xlink:href='%23a' x='100' y='100'%3E%3C/use%3E%3Cuse xlink:href='%23a' x='50' y='50'%3E%3C/use%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23p)' width='100%25' height='100%25'%3E%3C/rect%3E%3C/svg%3E");
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;

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