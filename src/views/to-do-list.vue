<!--  -->
<template>
  <div class="wrapList">
   
   
    <div class="todoList">
        <span class="todoListAbout">TO-DO LIST</span>
            <div class="form__group field">
                <input class="form__field" placeholder="Новая задача" name="name" id='name' required />
                <label for="name" class="form__label">Новая задача</label>
            </div>

        
        <div class="todoListRadio">
            <span class="radio_warn">Срочно</span>
            <span class="radio_easy">Не срочно</span>
        </div>
        <button class="button_main_todoList">Добавить</button>
        </div>
        
        
        <div class="task_wrap">
            <div class="newTask">
                <span class="TaskAbout">Задача № 1 </span>
                <span>Сделать что-то</span>
                <button  class="button_main_todoTask">Удалить задачу</button>
            </div>
            <div class="newTask">
                <span class="TaskAbout">Задача № 2 </span>
                <span>Сделать что-то</span>
                <button  class="button_main_todoTask">Удалить задачу</button>
            </div>

            <div class="newTask">
                <span class="TaskAbout">Задача № 3 </span>
                <span>Сделать что-то</span>
                <button  class="button_main_todoTask">Удалить задачу</button>
            </div>
            <div class="newTask">
                <span class="TaskAbout">Задача № 4 </span>
                <span>Сделать что-то</span>
                <button  class="button_main_todoTask">Удалить задачу</button>
            </div>
            <div class="newTask">
                <span class="TaskAbout">Задача № 1 </span>
                <span>Сделать что-то</span>
                <button  class="button_main_todoTask">Удалить задачу</button>
            </div>
            <div class="newTask">
                <span class="TaskAbout">Задача № 1 </span>
                <span>Сделать что-то</span>
                <button  class="button_main_todoTask">Удалить задачу</button>
            </div>
            <div class="newTask">
                <span class="TaskAbout">Задача № 1 </span>
                <span>Сделать что-то</span>
                <button  class="button_main_todoTask">Удалить задачу</button>
            </div>
            <div class="newTask">
                <span class="TaskAbout">Задача № 1 </span>
                <span>Сделать что-то</span>
                <button  class="button_main_todoTask">Удалить задачу</button>
            </div>
            <div class="newTask">
                <span class="TaskAbout">Задача № 1 </span>
                <span>Сделать что-то</span>
                <button  class="button_main_todoTask">Удалить задачу</button>
            </div>
            <div class="newTask">
                <span class="TaskAbout">Задача № 1 </span>
                <span>Сделать что-то</span>
                <button  class="button_main_todoTask">Удалить задачу</button>
            </div>
            <div class="newTask">
                <span class="TaskAbout">Задача № 1 </span>
                <span>Сделать что-то</span>
                <button  class="button_main_todoTask">Удалить задачу</button>
            </div>
            <div class="newTask">
                <span class="TaskAbout">Задача № 1 </span>
                <span>Сделать что-то</span>
                <button  class="button_main_todoTask">Удалить задачу</button>
            </div>
            <div class="newTask">
                <span class="TaskAbout">Задача № 1 </span>
                <span>Сделать что-то Сделать что-то Сделать что-то Сделать что-тоСделать что-то Сделать что-то Сделать что-то Сделать что-то</span>
                <button  class="button_main_todoTask">Удалить задачу</button>
            </div>
        </div>
    
    
    </div>

</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
$primary: #5169b5;
$secondary: #2c3e50;
$white: #fff;
$gray: #9b9b9b;
.form__group {
  position: relative;
  padding: 15px 0 0;
  margin-top: 10px;
  width: 50%;
}

.form__field {
  font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: 2px solid $gray;
  outline: 0;
  font-size: 1.3rem;
  color: black;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;

  &::placeholder {
    color: transparent;
  }

  &:placeholder-shown ~ .form__label {
    font-size: 1.3rem;
    cursor: text;
    top: 20px;
  }
}

.form__label {
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 1rem;
  color: $gray;
}

.form__field:focus {
  ~ .form__label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 1rem;
    color: $primary;
    font-weight:700;    
  }
  padding-bottom: 6px;  
  font-weight: 700;
  border-width: 3px;
  border-image: linear-gradient(to right, $primary,$secondary);
  border-image-slice: 1;
}
/* reset input */
.form__field{
  &:required,&:invalid { box-shadow:none; }
}


.task_wrap{
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
    align-items: center;
}

.wrapList{
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
}


.todoList{
    width: 50%;
    display: flex;
    flex-direction: column;
    padding: 90px 0px 50px 20px;
    margin-top: 20px;
    margin-left: 50px;
    align-items: center;
    border: 1px solid rgb(110, 110, 110);
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.15);
    // padding: 2%;
}


.todoListAbout{
    margin-bottom: 40px;
    font-weight: bolder;
    font-size: 40px;
}

.todoInput{
    width: 300px;
    margin-bottom: 40px;
}

.button_main_todoList{
    margin-top: 20px;
    width: 30%;
    height: 50px;
    background: #0c3eaaec;
    border-radius: 6px;
    color: whitesmoke;
    cursor: pointer;
}

.button_main_todoList:hover{
    background: #ffffffec;
    color: black;
}

.button_main_todoTask{
    margin-top: 20px;
    width: 50%;
    height: 50px;
    background: #0c3eaaec;
    border-radius: 6px;
    color: whitesmoke;
    cursor: pointer;
}

.button_main_todoTask:hover{
    background: #ffffffec;
    color: black;
}



.todoListRadio{
    display: flex;
    align-items: center;
    padding: 50px;
    font-size: 20px;
}

.radio_warn{
    padding: 20px 20px 20px 20px;
    cursor: pointer;
    border: #0c3eaaec 1px solid;
    border-radius: 30px;
    margin-right: 20px;
}

.radio_warn:hover{
    border: #ff0202ec 1px solid;
}

.radio_easy:hover{
    border: #ff0202ec 1px solid;
}

.radio_easy{
    padding: 20px 20px 20px 20px;
    cursor: pointer;
    border: #0c3eaaec 1px solid;
    border-radius: 30px;
    margin-right: 20px;
}






.newTask{
    width: 50%;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 15px 15px 15px 15px;
    align-items: center;
    border: 1px solid rgb(110, 110, 110);
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.15);
    
}

.TaskAbout{
    font-weight: bolder;
    font-size: 40px;
    margin-bottom: 40px;
    font-weight: bolder;
    font-size: 40px;
}


</style>
