<template>
  <div class="my_card">
      <div class="content top">
          <h3>{{ type }}</h3>
          <p class="percentage"><i class="fa fa-arrow-up"></i> {{ percentage }}</p>
      </div>

      <div class="content footer">
          <i :class="['fa ico', icon]"/>
          <p class="qtd">{{ qtd }}</p>
      </div>
  </div>
</template>




<script>


export default {
    name: 'CardsComponent',
    props:{
        type: String,
        percentage: Number,
        icon: String,
        qtd: Number
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_main';


    .my_card{
        display: flex;
        flex-direction: column;
        background-color: $purple;
        width: 100%;
        padding: 15px;
        border-radius: 7px;
        color: $white;

        .content{
            display: flex;
            justify-content: space-between;
        }

        .top{

            .percentage{
                color: $green;

            }

        }

        .footer{
        
        
            .ico{
                font-size: 40px;
            }

            .qtd{
                font-size: 30px;
                margin: 0;
            }
        }
    }


</style>