import './bootstrap';

import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();


import { createApp } from 'vue'; 
import router from './router'
 
import DailyChecks from './components/dailyChecks/DailyChecks.vue';
 
createApp({
    components: {
      DailyChecks
    }
}).use(router).mount('#app') 
