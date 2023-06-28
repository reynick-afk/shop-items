<template>
  <div class="home">
    <div class="header_home_page">
 
   <span class="forms_info">Формы заявок магазина Витязь</span>
   <span>Добавьте товар в списки для закупа</span>
    </div>

  <div class="wrapper_box">
  
  <CoversItems class="hr_line"/>
    
  <SafetyGlass class="hr_line"/>
    
  <PcPeripherals class="hr_line"/>
 
  <WiresAcamulators class="hr_line"/>
 
  <ChargingDevices class="hr_line"/>

  <AppliancesShop class="hr_line"/>

  <MalePeriphery class="hr_line"/>

  <DifferentProducts class="hr_line"/>
   
</div>



  </div>
</template>

<script>
// @ is an alias to /src
import CoversItems from '../components/vue-covers.vue'
import SafetyGlass from '../components/vue-safety-glass.vue'
import PcPeripherals from '../components/vue-pc-peripherals_rashod.vue'
import WiresAcamulators from '../components/vue-wires_acamulators.vue'
import ChargingDevices from '../components/vue-charging-devices.vue'
import AppliancesShop from '../components/vue-appliances.vue'
import MalePeriphery from '../components/vue-male-periphery.vue'
import DifferentProducts from '../components/vue-different-products.vue'


export default {
  name: 'HomeView',
  components: {
    CoversItems,
    SafetyGlass,
    PcPeripherals,
    WiresAcamulators,
    ChargingDevices,
    AppliancesShop,
    MalePeriphery,
    DifferentProducts,

  }
}
</script>

<style lang="scss" scoped>
    $font_size: 30px;


  .home{
    text-align: center;
  }

  .wrapper_box{
    padding: 0 5% 0 5%;
    display: grid;
    grid-template-columns: repeat(1, auto);
  }



  .header_home_page{
    display: flex;
    flex-direction: column;
    margin: 2%;
    font-size: $font-size;
  }


  .covers{
    font-size: $font-size;
  }

  .covers_forms{
    font-size: $font_size;
    margin: 5% 0 0 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  .colums_flex{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .forms_area{
    display: flex;
    justify-content: space-around;
    margin: 10px;
  }

  .hr_line{
    border: 1px solid rgb(110, 110, 110);
    box-shadow: 10px 10px 10px rgba(0,0,0,.15);
    padding: 2%;
  }


 input[type="text"]{
  width: 100%;
  padding: 3%;
  margin-right: 10px;

 }

 .button_main{
  background: #0c3eaaec;
  border-radius: 6px;
  color: whitesmoke;
  cursor: pointer;
 }

  .button_main:hover{
    background-color: #008CBA;
      color: white;
}


</style>