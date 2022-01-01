<template>
    <DashboardComponent>
        <template v-slot:slot-page >
            <div :class="$style.Contentpages">

            <header :class="$style.title_pages">
                <p>Produtos</p>
            </header>

            </div>
        </template>
    </DashboardComponent>
</template>


<script> 
import DashboardComponent from '../Dashboard/DashboardComponent.vue';

export default{
    name: 'ProductsComponent',
    components:{
        DashboardComponent
    }

}
</script>

<style lang="scss" src="./style.module.scss" scoped module/>