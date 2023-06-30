<template>
  <div class="forms">
    <span class="covers">Мужская периферия</span>
    <div class="covers_forms">
     
      <!-- First -->
      <div class="colums_flex">
        <span>Авто товары</span>
        <div class="forms_area">
          <input
            ref="myRefmaleFirst"
            class="forms_style"
            type="text"
            v-model="maleFirst"
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
            v-for="(item, index) in maleListFirst"
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
        <span>Охотничий отдел</span>
        <div class="forms_area">
          <input
            ref="myRefmaleSecond"
            class="forms_style"
            type="text"
            v-model="maleSecond"
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
            v-for="(item, index) in maleListSecond"
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
        <span>Отдел инструментов</span>
        <div class="forms_area">
          <input
            ref="myRefmaleThree"
            class="forms_style"
            type="text"
            v-model="maleThree"
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
            v-for="(item, index) in maleListThree"
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
  name: "MalePeriphery",
  components: {},
  data() {
    return {
      maleListFirst: [],
      maleFirst: "",

      maleListSecond: [],
      maleSecond: "",

      maleListThree: [],
      maleThree: "",

      emptyFormsFirst: false,
      emptyFormsSecond: false,
      emptyFormsThree: false,

      isDublicateCartFirst: false,
      isDublicateCartSecond: false,
      isDublicateCartThree: false
    };
  },

  created() {
    const storedDatamaleFirst = localStorage.getItem(
      "firstMaleLocalStorage"
    );
    if (storedDatamaleFirst) {
      this.maleListFirst = JSON.parse(storedDatamaleFirst);
    }

    const storedDatamaleSecond = localStorage.getItem(
      "secondMaleLocalStorage"
    );
    if (storedDatamaleSecond) {
      this.maleListSecond = JSON.parse(storedDatamaleSecond);
    }

    const storedDatamaleThree = localStorage.getItem(
      "threeMaleLocalStorage"
    );
    if (storedDatamaleThree) {
      this.maleListThree = JSON.parse(storedDatamaleThree);
    }
  },

  methods: {
    ...mapMutations(["SET_MALE_LIST_FIRST"]),
    ...mapMutations(["SET_MALE_LIST_SECOND"]),
    ...mapMutations(["SET_MALE_LIST_THREE"]),

    /// ADD ELEMENTS


    AddToCartFirst() {
      let male = this.maleFirst;
      if (male === "") {
        this.emptyFormsFirst = true;
      } else {
        this.emptyFormsFirst = false;
        let coverUpperCase = this.maleFirst.toUpperCase();
        if(!this.maleListFirst.includes(coverUpperCase)){
        this.maleListFirst.push(this.maleFirst.toUpperCase());
        this.$store.commit("SET_MALE_LIST_FIRST", this.maleListFirst);
        this.isDublicateCartFirst = false;
        } else {
          this.isDublicateCartFirst = true;
        }
        this.maleFirst = "";
        this.$refs.myRefmaleFirst.focus();
      }
    },

    AddToCartSecond() {
      let male = this.maleSecond;
      if (male === "") {
        this.emptyFormsSecond = true;
      } else {
        this.emptyFormsSecond = false;
        let coverUpperCase = this.maleSecond.toUpperCase();
        if(!this.maleListSecond.includes(coverUpperCase)){
        this.maleListSecond.push(this.maleSecond.toUpperCase());
        this.$store.commit("SET_MALE_LIST_SECOND", this.maleListSecond);
        this.isDublicateCartSecond = false;
        } else {
          this.isDublicateCartSecond = true;
        }
        this.maleSecond = "";
        this.$refs.myRefmaleSecond.focus();
      }
    },

    AddToCartThree() {
       let male = this.maleThree;
      if (male === "") {
        this.emptyFormsThree = true;
      } else {
        this.emptyFormsThree = false;
        let coverUpperCase = this.maleThree.toUpperCase();
        if(!this.maleListThree.includes(coverUpperCase)){
        this.maleListThree.push(this.maleThree.toUpperCase());
        this.$store.commit("SET_MALE_LIST_THREE", this.maleListThree);
        this.isDublicateCartThree = false;
        } else {
          this.isDublicateCartThree = true;
        }
        this.maleThree = "";
        this.$refs.myRefmaleThree.focus();
      }
    },

    // DELETE ALL ITEM FROM INPUT

    DeleteAllItemsDataFirst() {
      (this.maleListFirst = []),
        localStorage.removeItem("firstMaleLocalStorage");
    },

    DeleteAllItemsDataSecond() {
      (this.maleListSecond = []),
        localStorage.removeItem("secondMaleLocalStorage");
    },

    DeleteAllItemsDataThree() {
      (this.maleListThree = []),
        localStorage.removeItem("threeMaleLocalStorage");
    },

// DELETE SINGLE ELEMENT

      RemoveFromCartFirst(index) {
      this.maleListFirst.splice(index, 1);
      this.$store.commit("SET_MALE_LIST_FIRST", this.maleListFirst);
    },

    RemoveFromCartSecond(index) {
      this.maleListSecond.splice(index, 1);
      this.$store.commit("SET_MALE_LIST_SECOND", this.maleListSecond);
    },

    RemoveFromCartThree(index) {
      this.maleListThree.splice(index, 1);
      this.$store.commit("SET_MALE_LIST_THREE", this.maleListThree);
    }

  },
};
</script>

<style src="../app.css">

</style>
