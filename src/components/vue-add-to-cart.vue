<!--  -->
<template>
  <div class="toCart">
    <div class="wrapper_toCart">
        <span>Что будет добавленно:</span>
        <span class="selected_items_all">13 pro</span>
    </div>
    <button class="button_main-cart">Добавить в список закупок</button>

  </div>
</template>

<script>
export default {
    name: 'AddToCart',
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">

.wrapper_toCart{
  font-size: 30px;
  font-weight: bolder;
}

.wrapper_toCart{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}

.selected_items_all{
    padding: 2%;
    border: 1px solid #008CBA;
    border-radius: 12px;
    margin-top: 2%;
    font-size: 20px;
    max-width: 800px;
}

.button_main-cart{
    margin-top: 2%;
    margin-bottom: 2%;
    height: 8vh;
    cursor: pointer;
    background: #008CBA;
    border: 5px;
    border-radius: 20px;
    color: azure;
}

</style>
