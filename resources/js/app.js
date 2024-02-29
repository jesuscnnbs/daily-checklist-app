import './bootstrap';
import Alpine from 'alpinejs';
import { createApp } from 'vue'; 
import router from './router'
 

import DailyChecks from './components/dailyChecks/DailyChecks.vue';

window.Alpine = Alpine;

Alpine.start();
 
createApp({
    components: {
      DailyChecks
    }
}).use(router).mount('#app') 
