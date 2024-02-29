import { createRouter, createWebHistory } from 'vue-router'
 
import DailyChecks from '@/components/dailyChecks/DailyChecks.vue'
 
const routes = [
    {
        path: '/dashboard',
        name: 'daily.checks',
        component: DailyChecks
    }
];
 
export default createRouter({
    history: createWebHistory(),
    routes
})