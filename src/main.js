import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faMagnifyingGlass, faQuoteLeft, faCircle, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { faInstagram, faTwitter, faFacebookF } from '@fortawesome/free-brands-svg-icons';
library.add(
    faMagnifyingGlass,
    faEye, faQuoteLeft,
    faCircle,
    faInstagram,
    faTwitter,
    faFacebookF,
    faLocationDot,
);

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
