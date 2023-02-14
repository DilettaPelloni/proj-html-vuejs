import {reactive} from 'vue'

export const store = reactive ({
    menuOptions: [
        {
            name: 'home',
            url: '#',
        },
        
        {
            name: 'pages',
            url: '#',
        },
        
        {
            name: 'menu',
            url: '#',
        },
        
        {
            name: 'event',
            url: '#',
        },
        
        {
            name: 'blog',
            url: '#',
        },
        
        {
            name: 'landing',
            url: '#',
        },
    ],//menuOptions
    jumboSlides: [
        {
            bgImg:'h3-rev-img-5.png',
            centerImg:'h3-rev-img-6.png',
            altTxt:'crust-img',
        },
        {
            bgImg:'h3-rev-img-1.png',
            centerImg:'h3-rev-img-2.png',
            altTxt:'taste-img',
        },
        {
            bgImg:'h3-rev-img-3.png',
            centerImg:'h3-rev-img-4.png',
            altTxt:'urban-img',
        }
    ],//jumboSlides
    revSlides: [
        {
            quote:'"forget the trendy pizza shops, this hidden spot makes the best new york-style pizza slice in naples"',
            name:'washington post 2018',
        },
        {
            quote:'"La pizza è molto buona. La mangio anche a colazione col capuccino"',
            name:'diletta 2023',
        },
        {
            quote:'"La pizza è molto buona, ma un altro carosello anche no grazie. Free the carosello!"',
            name:'diletta 2023',
        }
    ],//revSlides
    pizzas: [
        {
            img: 'h3-product-img-1a-100x100.png',
            name: 'pizza bismarck',
            oldPrice: '$15.00',
            price: '$30.00',
            sold: false,
        },
        {
            img: 'h3-product-img-2a-150x150.png',
            name: 'fior di zucca',
            oldPrice: '',
            price: '$7.00 - $50.00',
            sold: false,
        },
        {
            img: 'h3-product-img-3a-150x150.png',
            name: 'valdostana',
            oldPrice: '',
            price: '$55.00',
            sold: true,
        },
        {
            img: 'h3-product-img-4a-150x150.png',
            name: 'pizza tartufata',
            oldPrice: '',
            price: '$45.00',
            sold: false,
        },
        {
            img: 'h3-product-img-5a-150x150.png',
            name: 'francescana',
            oldPrice: '',
            price: '$25.00',
            sold: false,
        },
        {
            img: 'h3-product-img-6a-100x100.png',
            name: 'campagnola',
            oldPrice: '',
            price: '$50.00 - $95.00',
            sold: false,
        },
    ]
});