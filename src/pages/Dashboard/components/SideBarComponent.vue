<template>
    <div class="sidebar">
        <div class="top">
            <div class="avatar">
                <span><i class="fa fa-user icon"/></span>
            </div>

            <div class="info">
                <p class="name">Apache Pachecone</p>
                <p class="status">Online</p>
            </div>
        </div>

        <div class="menu">
            <ul>
                <li><router-link :to="{name: 'home'}"><i class="fa fa-home"/>Inicio</router-link></li>
                <li><router-link :to="{name: 'clients'}"><i class="fa fa-box"/>Clientes</router-link></li>
                <li><router-link :to="{name: 'products'}"><i class="fa fa-box"/>Produtos</router-link></li>
                <li><router-link :to="{name: 'products'}"><i class="fa fa-store"/>Vendas</router-link></li>
                <li><router-link :to="{name: 'products'}"><i class="fa fa-chart-bar"/>Relatórios</router-link></li>
            </ul>
        </div>
    </div>
</template>


<script>
export default {
    name: 'SideBarComponent',
}
</script>


<style lang="scss">
@import '@/assets/scss/_main';

    .sidebar{

        .top{
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 25px 5px;
            margin: 20px;

            .avatar{
                margin-right: 10px;

                span{
                    display: block;
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    background-color: #CCC;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 25px;
                    color: #666;
                     
                }
            }


            .info{

                p{
                    margin: 0;
                    color: #fff;
                }

                .name{
                    font-size: 14px;
                }

                .status{
                    font-size: 10px;
                }
            }
        }

.menu{
    padding: 10px;
    

    ul li{
        margin: 15px 0 15px 5px;
        font-size: 18px;
    }

    ul{
        
        list-style-type: none;
        li{
            
            a{                
                 color: #fff;
                 text-decoration: none;
        
                svg{
                 margin-right: 10px;
                }
            }

        }
    }
}

    }
</style>