<template>
<div :class="$style.main">
    <div :class="$style.sidebar">
        <SideBarComponent />
    </div>

    <div :class="$style.container">

        <div :class="$style.navbar">
            <NavbarComponent />
        </div>

        <div :class="$style.content">
            <slot name="slot-page"></slot>
        </div>

    </div>
    
</div>
</template>


<script> 
import SideBarComponent from './components/SideBarComponent.vue';
import NavbarComponent from './components/NavbarComponent.vue';

export default{
    name: 'DashboardComponent',
    components: {
        SideBarComponent,
        NavbarComponent
    }
}
</script>

<style lang="scss" src="./style.module.scss" scoped module/>