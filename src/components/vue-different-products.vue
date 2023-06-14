
<template>
  <div class="forms forms-stekla">
      <span class="covers">Разные товары</span>
      <div class="covers_forms">
          
          
          <div class="colums_flex">
            <span>Разное</span>
            <div class="forms_area">
              <input class="forms_style" type="text">
            </div>
            <button class="button_main">Добавить</button>
            <span class="selected_items">123</span>
          </div>

         
      </div>
    </div>
</template>

<script>
export default {
    name: 'DifferentProducts',
  data () {
    return {
    }
  }
}
</script>

<style lang='scss' scoped>

.covers_forms{
    font-size: 30px;
    margin: 5% 0 0 0;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }




  @media screen and (min-width: 295px) and (max-width: 1250px) {
  input[type="text"] {
    width: 74vh;
  }
  

  
}


input[type="text"] {
    width: 300px;
    padding: 3%;
    margin-right: 10px;
    border-radius: 5px;
}

.button_main{
    width: 35vh;
    height: 8vh;

}



</style>
