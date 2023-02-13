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
});