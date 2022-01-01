import { createApp } from 'vue';
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

import LoginComponent from './pages/Login/LoginComponent'
import HomeComponent from './pages/Home/HomeComponent'
import ProductsComponent from './pages/Products/ProductsComponent'
import ClientsComponent from './pages/Clients/ClientsComponent'

const routes = [
    { path: '/', name: 'login', component: LoginComponent },
    { path: '/home', name: 'home', component: HomeComponent },
    { path: '/clients', name: 'clients', component: ClientsComponent}, 
    { path: '/produtos', name: 'products', component: ProductsComponent} 
    //{ path: '*', component: {template: `<h1>Page Not Found</h1>` }}
]

axios.defaults.baseURL = 'http://localhost:8000/api/';

const router = createRouter({
    history: createWebHistory(),
    routes
})

const app = createApp(App)

app.use(router)
app.mount('#app')
