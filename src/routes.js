import appFront from './components/App-front.vue';
import appOrders from './components/App-orders.vue';
import appOrders2 from './components/App-orders2.vue';

export default [
    {path:'/',component:appFront},
    {path:'/orders', component:appOrders},
    {path:'/orders2', component:appOrders2},
]
