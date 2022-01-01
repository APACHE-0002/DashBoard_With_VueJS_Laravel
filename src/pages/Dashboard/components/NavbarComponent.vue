<template>
    <div class="navbar">
        <h3 class="logo"><i class="fa fa-users"/>Logo Marca</h3>
        <a class="logout" @click.prevent="logout" href="">Sair<i class="fa fa-sign-out-alt"/></a>
    </div>
</template>


<script>

export default {
    name: 'NavbarComponent',
    methods: {
        logout(){
                    this.$router.push({name: "login"})
                }
    },
    data(){
        return {


        }
    },
}
</script>


<style lang="scss">


.navbar{
    .logo{
        color: #fff;
    }
    .logout{
        color: #fff;
        
    }
}

</style>