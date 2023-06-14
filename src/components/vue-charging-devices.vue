
<template>
    <div class="forms forms-stekla">
      <span class="covers">Зарядные устройства</span>
      
      
        <div class="covers_forms">
            <div class="colums_flex">
              <span>Зарядные устройства комплекты</span>
                <div class="forms_area">
                  <input class="forms_style" type="text">
                  <button class="button_main">Добавить</button>
                </div>
            
                  <span class="selected_items">123</span>

            <div class="wrapper_checkbox">
              
              <span class="wrapper_checbox_column">
              <input type="checkbox" id="scales" name="scales">
              <label for="scales">iphone / дешевые</label>
              </span>

              <span class="wrapper_checbox_column">
              <input type="checkbox" id="scales" name="scales">
              <label for="scales">iphone / дорогие</label>
              </span>

              <span class="wrapper_checbox_column">
              <input type="checkbox" id="scales" name="scales">
              <label for="scales">typeC / дешевые</label>
              </span>

              <span class="wrapper_checbox_column">
              <input type="checkbox" id="scales" name="scales">
              <label for="scales">typeC / дорогие</label>
              </span>

              <span class="wrapper_checbox_column">
              <input type="checkbox" id="scales" name="scales">
              <label for="scales">micro / дешевые</label>
              </span>

              <span class="wrapper_checbox_column">
              <input type="checkbox" id="scales" name="scales">
              <label for="scales">micro / дорогие</label>
              </span>            
              
            </div>
            <button class="button_main-charging">Добавить выбранные</button>
          </div>

         <div class="colums_flex">
            <span>Блоки отдельно</span>
            <div class="forms_area">
              <input class="forms_style" type="text">
              <button class="button_main">Добавить</button>
            </div>
            
            <span class="selected_items">123</span>
            <div class="wrapper_checkbox">
              
              <span class="wrapper_checbox_column">
              <input type="checkbox" id="scales" name="scales">
              <label for="scales">iphone / дубликат</label>
              </span>

              <span class="wrapper_checbox_column">
              <input type="checkbox" id="scales" name="scales">
              <label for="scales">iphone / оригинал</label>
              </span>

              <span class="wrapper_checbox_column">
              <input type="checkbox" id="scales" name="scales">
              <label for="scales">Блоки дешевые</label>
              </span>

              <span class="wrapper_checbox_column">
              <input type="checkbox" id="scales" name="scales">
              <label for="scales">Блоки качественные</label>
              </span>

          

                       
              
            </div>
            <button class="button_main-charging">Добавить выбранные</button>


          </div>

          <div class="colums_flex">
            <span>Зарядные устройства для ноутбука</span>
            <div class="forms_area">
              <input class="forms_style" type="text">
              <button class="button_main">Добавить</button>
            </div>
            
            <span class="selected_items">123</span>
          </div>
      </div>
    </div>

</template>

<script>
export default {
  name: 'ChargingDevices',
  data () {
    return {
    }
  }
}
</script>

<style src="../app.css">

</style>
