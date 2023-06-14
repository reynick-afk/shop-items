<template>
  <div class="home">
    <div class="header_home_page">
 
   <span class="forms_info">Формы заявок магазина Витязь</span>
   <span>Добавьте товар в списки для закупа</span>
    </div>


    <hr>
  <CoversItems />
    <hr>
  <SafetyGlass />
    <hr>
  <PcPeripherals />
    <hr>
  <WiresAcamulators />
    <hr>
  <ChargingDevices />
    <hr>
  <AppliancesShop />
    <hr>
  <MalePeriphery />
    <hr>
  <DifferentProducts />
    <hr>
    <AddToCart />



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
import AddToCart from '../components/vue-add-to-cart.vue' 

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
    AddToCart
  }
}
</script>

<style lang="scss" scoped>
      $font_size: 30px;


  .home{
    max-height: 1000vh;
    max-width: 1000vw;
  };

  .header_home_page{
    display: flex;
    flex-direction: column;
    margin: 2%;
    font-size: $font-size;
  };

  .forms_info{
    margin: 1%;
  }

  .forms{
    margin-top: 5%;
    margin-bottom: 5%;
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


/// MEDIA
// SMALL TELEPHONE
@media screen and (min-width: 320px) and (max-width: 1250px) {
  .covers_forms{
    grid-template-columns: repeat(1, 1fr);
  }
}


</style>