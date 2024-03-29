import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import {
    faMagnifyingGlass,
    faQuoteLeft,
    faCircle,
    faLocationDot,
    faUserGroup,
    faDroplet
} from '@fortawesome/free-solid-svg-icons';

import {
    faEye,
    faCalendar,
    faClock
} from '@fortawesome/free-regular-svg-icons';

import {
    faInstagram,
    faTwitter,
    faFacebookF,
    faLinkedinIn
} from '@fortawesome/free-brands-svg-icons';

library.add(
    faMagnifyingGlass,
    faEye, faQuoteLeft,
    faCircle,
    faInstagram,
    faTwitter,
    faFacebookF,
    faLocationDot,
    faUserGroup,
    faCalendar,
    faClock,
    faLinkedinIn,
    faDroplet
);

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
