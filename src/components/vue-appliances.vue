<template>
  <div class="forms" :class="{ active: isActive}">
    <span class="covers" @click="ToggleShowComponents">Бытовая техника</span>
    <div class="covers_forms" v-show="ViewComponents">
     
      <!-- First -->
      <div class="colums_flex">
        <span>Наушники и колонки</span>
        <div class="forms_area">
          <input
            ref="myRefappliancesFirst"
            class="forms_style"
            type="text"
            v-model="appliancesFirst"
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
            v-for="(item, index) in appliancesListFirst"
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
        <span>Бытовая техника</span>
        <div class="forms_area">
          <input
            ref="myRefappliancesSecond"
            class="forms_style"
            type="text"
            v-model="appliancesSecond"
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
            v-for="(item, index) in appliancesListSecond"
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
        <span>Машинки для стрижки</span>
        <div class="forms_area">
          <input
            ref="myRefappliancesThree"
            class="forms_style"
            type="text"
            v-model="appliancesThree"
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
            v-for="(item, index) in appliancesListThree"
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
  name: "AppliancesShop",
  components: {},
  data() {
    return {
      appliancesListFirst: [],
      appliancesFirst: "",

      appliancesListSecond: [],
      appliancesSecond: "",

      appliancesListThree: [],
      appliancesThree: "",

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
    const storedDataAppliancesFirst = localStorage.getItem(
      "firstAppliancesLocalStorage"
    );
    if (storedDataAppliancesFirst) {
      this.appliancesListFirst = JSON.parse(storedDataAppliancesFirst);
    }

    const storedDataAppliancesSecond = localStorage.getItem(
      "secondAppliancesLocalStorage"
    );
    if (storedDataAppliancesSecond) {
      this.appliancesListSecond = JSON.parse(storedDataAppliancesSecond);
    }

    const storedDataAppliancesThree = localStorage.getItem(
      "threeAppliancesLocalStorage"
    );
    if (storedDataAppliancesThree) {
      this.appliancesListThree = JSON.parse(storedDataAppliancesThree);
    }
  },

  methods: {
    ...mapMutations(["SET_APPLIANCES_LIST_FIRST"]),
    ...mapMutations(["SET_APPLIANCES_LIST_SECOND"]),
    ...mapMutations(["SET_APPLIANCES_LIST_THREE"]),

// TOGGLE ViewComponents

    ToggleShowComponents(){
      this.ViewComponents = !this.ViewComponents;
      this.isActive = !this.isActive
    },



    /// ADD ELEMENTS


    AddToCartFirst() {
      let appliances = this.appliancesFirst;
      if (appliances === "") {
        this.emptyFormsFirst = true;
      } else {
        this.emptyFormsFirst = false;
        let coverUpperCase = this.appliancesFirst.toUpperCase();
        if(!this.appliancesListFirst.includes(coverUpperCase)){
        this.appliancesListFirst.push(this.appliancesFirst.toUpperCase());
        this.$store.commit("SET_APPLIANCES_LIST_FIRST", this.appliancesListFirst);
        this.isDublicateCartFirst = false;
        } else {
          this.isDublicateCartFirst = true;
        }
        this.appliancesFirst = "";
        this.$refs.myRefappliancesFirst.focus();
      }
    },

    AddToCartSecond() {
      let appliances = this.appliancesSecond;
      if (appliances === "") {
        this.emptyFormsSecond = true;
      } else {
        this.emptyFormsSecond = false;
        let coverUpperCase = this.appliancesSecond.toUpperCase();
        if(!this.appliancesListSecond.includes(coverUpperCase)){
        this.appliancesListSecond.push(this.appliancesSecond.toUpperCase());
        this.$store.commit("SET_APPLIANCES_LIST_SECOND", this.appliancesListSecond);
        this.isDublicateCartSecond = false;
        } else {
          this.isDublicateCartSecond = true;
        }
        this.appliancesSecond = "";
        this.$refs.myRefappliancesSecond.focus();
      }
    },

    AddToCartThree() {
       let appliances = this.appliancesThree;
      if (appliances === "") {
        this.emptyFormsThree = true;
      } else {
        this.emptyFormsThree = false;
        let coverUpperCase = this.appliancesThree.toUpperCase();
        if(!this.appliancesListThree.includes(coverUpperCase)){
        this.appliancesListThree.push(this.appliancesThree.toUpperCase());
        this.$store.commit("SET_APPLIANCES_LIST_THREE", this.appliancesListThree);
        this.isDublicateCartThree = false;
        } else {
          this.isDublicateCartThree = true;
        }
        this.appliancesThree = "";
        this.$refs.myRefappliancesThree.focus();
      }
    },

    // DELETE ALL ITEM FROM INPUT

    DeleteAllItemsDataFirst() {
      (this.appliancesListFirst = []),
        localStorage.removeItem("firstAppliancesLocalStorage");
    },

    DeleteAllItemsDataSecond() {
      (this.appliancesListSecond = []),
        localStorage.removeItem("secondAppliancesLocalStorage");
    },

    DeleteAllItemsDataThree() {
      (this.appliancesListThree = []),
        localStorage.removeItem("threeAppliancesLocalStorage");
    },

  // DELETE SINGLE ELEMENT

      RemoveFromCartFirst(index) {
      this.appliancesListFirst.splice(index, 1);
      this.$store.commit("SET_APPLIANCES_LIST_FIRST", this.appliancesListFirst);
    },

    RemoveFromCartSecond(index) {
      this.appliancesListSecond.splice(index, 1);
      this.$store.commit("SET_APPLIANCES_LIST_SECOND", this.appliancesListSecond);
    },

    RemoveFromCartThree(index) {
      this.appliancesListThree.splice(index, 1);
      this.$store.commit("SET_APPLIANCES_LIST_THREE", this.appliancesListThree);
    }

  },
};
</script>

<style lang='stylus' scoped>

</style>
