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
});