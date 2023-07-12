<template>
  <div class="forms" :class="{ active: isActive}" ref="blockToAdjustCharging">
    <span class="covers" @click="ToggleShowComponents">Зарядные устройства</span>
    <div class="covers_forms" v-show="ViewComponents">
     
      <!-- First -->
      <div class="colums_flex">
        <span>Зарядные устройства комплекты</span>
        <div class="forms_area">
          <input
            ref="myRefchargingFirst"
            class="forms_style"
            type="text"
            v-model="chargingFirst"
            @keyup.enter="AddToCartFirst()"
          />
          <button class="button_main" @click="AddToCartFirst()">
            Добавить
          </button>
        </div>
        <div v-if="emptyFormsFirst">
          Пустое поле
          <button class="button_main" @click="emptyFormsFirst = false">
            Убрать
          </button>
        </div>
        <div v-if="isDublicateCartFirst">
              Дубликат
          <button class="button_main" @click="isDublicateCartFirst = false">
            Убрать
          </button>
          </div>

        <span>Добавленные элементы:</span>
        <div class="selected-items_wrap">
          <span
            class="selected_items"
            v-for="(item, index) in chargingListFirst"
            :key="index"
            :items="item"
            :index="index + 1"
            ><span class="SelectedItems" @click="() => RemoveFromCartFirst(index)">{{ item }}</span>
          </span>
        </div>
        <button
          class="button_main marginXS paddingXS"
          @click="DeleteAllItemsDataFirst()"
        >
          Удалить все
        </button>
      </div>

      <!-- Second -->
      <div class="colums_flex">
        <span>Блоки отдельно</span>
        <div class="forms_area">
          <input
            ref="myRefchargingSecond"
            class="forms_style"
            type="text"
            v-model="chargingSecond"
            @keyup.enter="AddToCartSecond()"
          />
          <button class="button_main" @click="AddToCartSecond()">
            Добавить
          </button>
        </div>
        <div v-if="emptyFormsSecond">
          Пустое поле
          <button class="button_main" @click="emptyFormsSecond = false">
            Убрать
          </button>
        </div>
        <div v-if="isDublicateCartSecond">
              Дубликат
          <button class="button_main" @click="isDublicateCartSecond = false">
            Убрать
          </button>
          </div>

        <span>Добавленные элементы:</span>
        <div class="selected-items_wrap">
          <span
            class="selected_items"
            v-for="(item, index) in chargingListSecond"
            :key="index"
            :items="item"
            :index="index + 1"
            ><span class="SelectedItems" @click="() => RemoveFromCartSecond(index)">{{ item }}</span>
          </span>
        </div>
        <button
          class="button_main marginXS paddingXS"
          @click="DeleteAllItemsDataSecond()"
        >
          Удалить все
        </button>
      </div>
      
      
      <!-- Three -->
      <div class="colums_flex">
        <span>Зарядные устройства для ноутбука</span>
        <div class="forms_area">
          <input
            ref="myRefchargingThree"
            class="forms_style"
            type="text"
            v-model="chargingThree"
            @keyup.enter="AddToCartThree()"
          />
          <button class="button_main" @click="AddToCartThree()">
            Добавить
          </button>
        </div>
        <div v-if="emptyFormsThree">
          Пустое поле
          <button class="button_main" @click="emptyFormsThree = false">
            Убрать
          </button>
        </div>
        <div v-if="isDublicateCartThree">
              Дубликат
          <button class="button_main" @click="isDublicateCartThree = false">
            Убрать
          </button>
          </div>

        <span>Добавленные элементы:</span>
        <div class="selected-items_wrap">
          <span
            class="selected_items"
            v-for="(item, index) in chargingListThree"
            :key="index"
            :items="item"
            :index="index + 1"
            ><span class="SelectedItems" @click="() => RemoveFromCartThree(index)">{{ item }}</span>
          </span>
        </div>
        <button
          class="button_main marginXS paddingXS"
          @click="DeleteAllItemsDataThree()"
        >
          Удалить все
        </button>
      </div>
    
    
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "ChargingDevices",
  components: {},
  data() {
    return {
      chargingListFirst: [],
      chargingFirst: "",

      chargingListSecond: [],
      chargingSecond: "",

      chargingListThree: [],
      chargingThree: "",

      emptyFormsFirst: false,
      emptyFormsSecond: false,
      emptyFormsThree: false,

      isDublicateCartFirst: false,
      isDublicateCartSecond: false,
      isDublicateCartThree: false,

      ViewComponents: false,
      isActive: false,
    };
  },

  created() {
    const storedDatachargingFirst = localStorage.getItem(
      "firstChargingLocalStorage"
    );
    if (storedDatachargingFirst) {
      this.chargingListFirst = JSON.parse(storedDatachargingFirst);
    }

    const storedDatachargingSecond = localStorage.getItem(
      "secondChargingLocalStorage"
    );
    if (storedDatachargingSecond) {
      this.chargingListSecond = JSON.parse(storedDatachargingSecond);
    }

    const storedDatachargingThree = localStorage.getItem(
      "threeChargingLocalStorage"
    );
    if (storedDatachargingThree) {
      this.chargingListThree = JSON.parse(storedDatachargingThree);
    }
  },

  methods: {
    ...mapMutations(["SET_CHARGING_LIST_FIRST"]),
    ...mapMutations(["SET_CHARGING_LIST_SECOND"]),
    ...mapMutations(["SET_CHARGING_LIST_THREE"]),

  // TOGGLE ViewComponents

    ToggleShowComponents(){
      this.ViewComponents = !this.ViewComponents;
      this.isActive = !this.isActive;

      const block = this.$refs.blockToAdjustCharging; // Получаем ссылку на блок

      if (block) {
        block.scrollIntoView({ behavior: "smooth", block: "center", inline: 'center'});
        // Прокручиваем страницу к блоку с использованием плавной анимации
        // Можешь изменить параметры scrollIntoView для настройки поведения прокрутки
      }
    },


    /// ADD ELEMENTS

    AddToCartFirst() {
      let charging = this.chargingFirst;
      if (charging === "") {
        this.emptyFormsFirst = true;
      } else {
        this.emptyFormsFirst = false;
        let coverUpperCase = this.chargingFirst.toUpperCase();
        if(!this.chargingListFirst.includes(coverUpperCase)){
        this.chargingListFirst.push(this.chargingFirst.toUpperCase());
        this.$store.commit("SET_CHARGING_LIST_FIRST", this.chargingListFirst);
        this.isDublicateCartFirst = false;
        } else {
          this.isDublicateCartFirst = true;
        }
        this.chargingFirst = "";
        this.$refs.myRefchargingFirst.focus();
      }
    },

    AddToCartSecond() {
      let charging = this.chargingSecond;
      if (charging === "") {
        this.emptyFormsSecond = true;
      } else {
        this.emptyFormsSecond = false;
        let coverUpperCase = this.chargingSecond.toUpperCase();
        if(!this.chargingListSecond.includes(coverUpperCase)){
        this.chargingListSecond.push(this.chargingSecond.toUpperCase());
        this.$store.commit("SET_CHARGING_LIST_SECOND", this.chargingListSecond);
        this.isDublicateCartSecond = false;
        } else {
          this.isDublicateCartSecond = true;
        }
        this.chargingSecond = "";
        this.$refs.myRefchargingSecond.focus();
      }
    },

    AddToCartThree() {
       let charging = this.chargingThree;
      if (charging === "") {
        this.emptyFormsThree = true;
      } else {
        this.emptyFormsThree = false;
        let coverUpperCase = this.chargingThree.toUpperCase();
        if(!this.chargingListThree.includes(coverUpperCase)){
        this.chargingListThree.push(this.chargingThree.toUpperCase());
        this.$store.commit("SET_CHARGING_LIST_THREE", this.chargingListThree);
        this.isDublicateCartThree = false;
        } else {
          this.isDublicateCartThree = true;
        }
        this.chargingThree = "";
        this.$refs.myRefchargingThree.focus();
      }
    },

    // DELETE ALL ITEM FROM INPUT

    DeleteAllItemsDataFirst() {
      (this.chargingListFirst = []),
        localStorage.removeItem("firstChargingLocalStorage");
    },

    DeleteAllItemsDataSecond() {
      (this.chargingListSecond = []),
        localStorage.removeItem("secondChargingLocalStorage");
    },

    DeleteAllItemsDataThree() {
      (this.chargingListThree = []),
        localStorage.removeItem("threeChargingLocalStorage");
    },

    // DELETE SINGLE ELEMENT

      RemoveFromCartFirst(index) {
      this.chargingListFirst.splice(index, 1);
      this.$store.commit("SET_CHARGING_LIST_FIRST", this.chargingListFirst);
    },

    RemoveFromCartSecond(index) {
      this.chargingListSecond.splice(index, 1);
      this.$store.commit("SET_CHARGING_LIST_SECOND", this.chargingListSecond);
    },

    RemoveFromCartThree(index) {
      this.chargingListThree.splice(index, 1);
      this.$store.commit("SET_CHARGING_LIST_THREE", this.chargingListThree);
    }

  },
};
</script>

<style src="../app.css">

</style>
