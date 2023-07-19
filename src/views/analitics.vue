<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="wrapper">
    <div class="calendar">
    <div class="calendar-header">{{ currentMonth }}</div>
    <div class="calendar-grid">
      <div v-for="day in daysInMonth" :key="day" :class="getDayClass(day)" @click="selectDay(day)">
        {{ day }}
      </div>
    </div>
    
    <div class="select_user">
      
      <div
        :class="{ 'user_1': true, 'selected_first': selectedUser === 'Дима' }"
        @click="selectUser('Дима')"
      >
        <span>Дима</span>
      </div>
      <div
        :class="{ 'user_2': true, 'selected_sec': selectedUser === 'Даниил' }"
        @click="selectUser('Даниил')"
      >
        <span>Даниил</span>
      </div>
      <div><button class="button_main calendar_button" @click="deleteSelectedDays">Удалить</button></div>
    </div>


    <div class="wrap_closeDay">
        
        <span class="closing_case">Закрытие смены</span>
        <date-picker v-model="time1" valueType="format"></date-picker>
        <input type="number" v-model="closeDay" class="style_closeDay" placeholder="Сумма">
        <button class="button_main calendar_button" @click="closingDaysCase">Отправить</button>
        <span v-if="isEmpty" class="is_empty">Заполните поля</span>

        </div>
        </div>

          <div>  
        <div class="wrapperFinal">
          <div><span>Дата: </span></div>
          <div><span>Сумма: </span></div>
        </div>
        <tr class="days_of_close">
            <td class="days_of_close" >
              
              <span 
              v-for="(item, index) in closeDateCalendar" 
              :key="index" class="days_of_close_case" 
              :class="item.style"
              >
                {{ item.value }}
                </span>
              
              </td>
            <td class="days_of_close">
              
              <span v-for="(item, index) in closeDateSum" :key="index" class="days_of_close_case" :class="item.style">
              {{ item.value }}
              </span>
              </td>

            </tr>
            <div class="final_wrapper">
            <span>Общая сумма : {{ this.allSum }}</span>
            <button @click="deleteSums" class="button_main">Удалить</button>
            <button class="button_main" @click="() => removeItemsLast()">Удалить последнию запись</button>
            <span class="plan" :class="planCompelete()">План продаж : 6 000 000</span>
            </div>

      </div>    
    

  </div>

</template>

<script>
  import DatePicker from 'vue2-datepicker';
  import 'vue2-datepicker/index.css';


export default {
    components: { DatePicker },
  data() {
    return {
      closeDay: null,
      time1: null,
      currentDate: new Date(),
      selectedUser: 'Дима',
      selectedDays: JSON.parse(localStorage.getItem('selectedDays')) || [], // Массив выбранных дней из Local Storage
      closeDateSum: JSON.parse(localStorage.getItem('allSumsData')) || [],
      closeDateCalendar: JSON.parse(localStorage.getItem('allCalendarData')) || [],
      allSum: JSON.parse(localStorage.getItem('allSums')) || 0,
      isEmpty: false,
      plan: 6000000

    };
  },
  computed: {
    currentMonth() {
      return this.currentDate.toLocaleString('default', { month: 'long', year: 'numeric' });
    },
    daysInMonth() {
      const year = this.currentDate.getFullYear();
      const month = this.currentDate.getMonth();
      const days = new Date(year, month + 1, 0).getDate();
      return Array.from({ length: days }, (_, index) => index + 1);
    },
  },
  methods:{
    selectUser(user) {
      this.selectedUser = user;
    },
    getDayClass(day) {
      return {
        'calendar-day': true,
        'selected-day': this.isSelectedDay(day),
        'selected-day-dima': this.isSelectedUserDay('Дима', day),
        'selected-day-daniil': this.isSelectedUserDay('Даниил', day),
      };
    },
    isSelectedDay(day) {
      // Проверяем, есть ли выбранный день в массиве выбранных дней
      return this.selectedDays.some((selectedDay) => selectedDay.day === day);
    },
    isSelectedUserDay(user, day) {
      // Проверяем, есть ли выбранный день для определенного пользователя
      return this.selectedDays.some((selectedDay) => selectedDay.user === user && selectedDay.day === day);
    },
    selectDay(day) {
      if (this.selectedUser) {
        // Если выбран пользователь, то разрешаем выбирать дни
        const existingIndex = this.selectedDays.findIndex((selectedDay) => selectedDay.day === day);
        if (existingIndex > -1) {
          // Если день уже выбран, удаляем его из массива выбранных дней
          this.selectedDays.splice(existingIndex, 1);
        } else {
          // Если день еще не выбран, добавляем его в массив выбранных дней с указанием пользователя
          this.selectedDays.push({ day, user: this.selectedUser });
        }
        // Сохраняем обновленный массив в Local Storage
        localStorage.setItem('selectedDays', JSON.stringify(this.selectedDays));
      }
    },
    deleteSelectedDays(){
        this.closeDay = [];
        localStorage.removeItem('selectedDays')
    },


    closingDaysCase(){

    const userColor = this.getSelectedUserColor(); // Получаем класс цвета в зависимости от выбранного пользователя
   

    if(this.closeDay === null || this.time1 === null){
      this.isEmpty = true;
    }else{
      this.closeDateSum.push({ value: this.closeDay, style: userColor });
    this.closeDateCalendar.push({ value: this.time1, style: userColor });
    this.closeDay = null;
    this.time1 = null;
    this.isEmpty = false;
    }

    const totalSum = this.closeDateSum.reduce((accumulator, currentObject) => {
  const value = parseInt(currentObject.value, 10); // Преобразовываем значение в число
  return accumulator + value;
  }, 0);
    
  this.allSum = totalSum;

  localStorage.setItem('allCalendarData', JSON.stringify(this.closeDateCalendar));
  localStorage.setItem('allSumsData', JSON.stringify(this.closeDateSum));
  localStorage.setItem('allSums', JSON.stringify(this.allSum));
  
  },

  deleteSums(){
    this.closeDateSum = []
    this.allSum = 0
    this.closeDateCalendar =[]
    localStorage.removeItem('allSums')
    localStorage.removeItem('allSumsData')
    localStorage.removeItem('allCalendarData')

    
  },

    getSelectedUserColor(){
       return this.selectedUser === 'Даниил' ? 'selected-day-daniil' : 'selected-day-dima';
    },

    removeItemsLast(){
       this.closeDateSum.splice(-1);
       this.closeDateCalendar.splice(-1);
           const totalSum = this.closeDateSum.reduce((accumulator, currentObject) => {
  const value = parseInt(currentObject.value, 10); // Преобразовываем значение в число
  return accumulator + value;
  }, 0);
    
  this.allSum = totalSum;

        localStorage.setItem('allCalendarData', JSON.stringify(this.closeDateCalendar));
        localStorage.setItem('allSumsData', JSON.stringify(this.closeDateSum));
        localStorage.setItem('allSums', JSON.stringify(this.allSum));
    },

  planCompelete(){
    return this.allSum >= this.plan ? 'plan_complete' : '';
  }

  },
  mounted() {
    // Загружаем сохраненные данные из Local Storage при запуске компонента
    const selectedDays = JSON.parse(localStorage.getItem('selectedDays'));
    if (selectedDays) {
      this.selectedDays = selectedDays;
    }
    const allSumsCash = JSON.parse(localStorage.getItem('allSums'));
    if (allSumsCash) {
      this.allSum = allSumsCash;
    }

    const allCalendarData = JSON.parse(localStorage.getItem('allCalendarData'));
    if (allCalendarData) {
      this.closeDateCalendar = allCalendarData;
    }

  const allSumsData = JSON.parse(localStorage.getItem('allSumsData'));
    if (allSumsData) {
      this.closeDateSum = allSumsData;
    }

  },
};
</script>


<style lang="scss">

.wrapper{
  display: flex;

}


/* Стили для календаря */
.calendar {
  width: 500px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-family: Arial, sans-serif;
  padding: 20px;
  margin-left: 50px;
  margin-top: 50px;
}

.calendar-header {
  text-align: center;
  font-weight: bold;
  margin-bottom: 30px;
  font-size: 30px;
}

.calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 5px;
}

.calendar-day {
  text-align: center;
  padding: 10px;
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 30px;
  
}

.calendar-day:hover {
  background-color: #e0e0e0;
  cursor: pointer;
}


.selected-day-dima{
     background-color: #0015ff;
     color: white; 

}

.selected-day-daniil{
     background-color: #00ff88;
     color: white;
}

.calendar_button{
    margin-top: 20px;
    font-size: 20px;
}

.days_of_close{
  width: 100px;
  width: 1000px;

  padding: 30px;
}

.days_of_close_case{

  width: 100%;
  font-size: 30px;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  
}

.select_user{
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    font-size: 50px;
    font-weight: bolder;
    align-items: center;
    align-content: center;
    
}

.user_1{
    margin-bottom: 20px;
     cursor: pointer;
     padding: 10px;
     width: 124px;
}

.user_2{
     cursor: pointer;
     padding: 10px;
     width: 184px;
}

.selected_first {



    display: inline-block;
    border-radius: 10px;

    border: 1px solid rgb(19, 19, 230);
}

.selected_sec{



    display: inline-block;
    border-radius: 10px;

    border: 1px solid rgb(0, 255, 136);
}



.wrap_closeDay{
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  align-items: center;
}

.mx-input{
    height: 60px;
    
}

input[type="number"] {
	-moz-appearance: textfield;
	-webkit-appearance: textfield;
	appearance: textfield;
}
 
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
	display: none;
}

.style_closeDay{
    padding: 10px;
    margin-top: 20px;
    height: 38px;
    font-size: 19px;
}

.wrapperFinal{
  width: 1150px;
  display: flex;
  justify-content: space-between;
  margin: 30px 30px 0 30px;
  font-size: 30px;
  color: green;
}


.closing_case{
  margin-bottom: 20px;
  font-size: 36px;
  font-weight: bolder;
  margin-top: 20px;
}


.final_wrapper{
  font-size: 40px;
  width: 300px;
  display: flex;
  flex-direction: column;
  margin-left: 20px;
}

.is_empty{
  font-size: 20px;
  color: red;
}

.plan{
  margin-top: 100px;
  font-size: 40px;
}

.plan_complete{
  color: green;
}


@media screen and (min-width: 320px) and (max-width: 640px) {

.wrapper{
  display: grid;
}

.calendar{
  width: 280px;
}

.calendar-grid{

  grid-template-columns: repeat(5, 1fr);
  grid-gap: 5px;
}

.wrapperFinal{
  width: 280px;
}

.days_of_close_case{
  font-size: 18px;
}
.select_user{
  font-size: 24px;
}

}

</style>