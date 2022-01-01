<template>
    <DashboardComponent>
        <template v-slot:slot-page >
            <div :class="$style.Contentpages">
                <header :class="$style.title_pages">
                    <p>Inicio</p>
                </header>


            <div>
                <div class="row">
                    <div class="col-12 col-md-3">
                        <CardsComponent 
                        :type="'Clientes'" 
                        :percentage="'7%'" 
                        :icon="'fa-users'"
                        :qtd="clients.length"
                        />
                    </div>

                    <div class="col-12 col-md-3">
                        <CardsComponent 
                        :type="'Produtos'" 
                        :percentage="'12%'" 
                        :icon="'fa-box'"
                        :qtd="products.length"
                        />
                    </div>

                    <div class="col-12 col-md-3">
                        <CardsComponent 
                        :type="'Serviços'" 
                        :percentage="'3%'" 
                        :icon="'fa-store'"
                        :qtd="'270'"
                        />
                    </div>

                    <div class="col-12 col-md-3">
                        <CardsComponent 
                        :type="'Relatórios'" 
                        :percentage="'25%'" 
                        :icon="'fa-chart-bar'"
                        :qtd="'30'"
                        />
                    </div>
                </div>
            </div>


            <div class="mt-5">
                <div class="row">
                    <div class="col-12 col-md-6">
                        <ListsComponent 
                        :data="clients" 
                        :description="'Clientes'"
                        :columns="['Nome', 'E-mail']"
                        />
                    </div>
                    <div class="col-12 col-md-6">
                        <ListsComponent 
                        :data="products" 
                        :description="'Produtos'"
                        :columns="['Nome', 'Valor']"
                        />
                    </div>
                </div>
            </div>


            </div>
        </template>
    </DashboardComponent>
</template>


<script> 
/* eslint-disable */
import DashboardComponent from '../Dashboard/DashboardComponent.vue';
import CardsComponent from '../../components/CardsComponent.vue';
import ListsComponent from '../../components/ListsComponent.vue';
const axios = require('axios');

export default{
    name: 'HomeComponent',
    data(){
        return{
            clients: [],
            products: []
        }
    },
    methods:{
        async getData(){

        try{
        const response = await axios.get('/')

        this.clients = response.data.clients;
        this.products = response.data.products;
            
        }catch(error){
            console.error("tipo do erro: " + error.response.status)
            console.error("tipo do erro: " + error)
            //pegar o tipo do erro e responder na pagina do cliente
            //o porque nao estar vindo os dados
        }

           
        }
    },
    mounted(){
        this.getData();
    },
    components:{
        DashboardComponent,
        CardsComponent,
        ListsComponent
    }

}
</script>

<style lang="scss" src="./style.module.scss" scoped module/>