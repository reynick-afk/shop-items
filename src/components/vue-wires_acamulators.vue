<template>
  <div class="forms">
    <span class="covers">Провода, переходники, Аккамуляторы, Батареи</span>
    <div class="covers_forms">
     
      <!-- First -->
      <div class="colums_flex">
        <span>Провода для телефона</span>
        <div class="forms_area">
          <input
            ref="myRefwiresFirst"
            class="forms_style"
            type="text"
            v-model="wiresFirst"
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
            v-for="(item, index) in wiresListFirst"
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
        <span>Переходники</span>
        <div class="forms_area">
          <input
            ref="myRefwiresSecond"
            class="forms_style"
            type="text"
            v-model="wiresSecond"
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
            v-for="(item, index) in wiresListSecond"
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
        <span>Батареи и Аккамуляторы</span>
        <div class="forms_area">
          <input
            ref="myRefwiresThree"
            class="forms_style"
            type="text"
            v-model="wiresThree"
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
            v-for="(item, index) in wiresListThree"
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
  name: "WiresAcamulators",
  components: {},
  data() {
    return {
      wiresListFirst: [],
      wiresFirst: "",

      wiresListSecond: [],
      wiresSecond: "",

      wiresListThree: [],
      wiresThree: "",

      emptyFormsFirst: false,
      emptyFormsSecond: false,
      emptyFormsThree: false,

      isDublicateCartFirst: false,
      isDublicateCartSecond: false,
      isDublicateCartThree: false
    };
  },

  created() {
    const storedDataWiresFirst = localStorage.getItem(
      "firstWiresLocalStorage"
    );
    if (storedDataWiresFirst) {
      this.wiresListFirst = JSON.parse(storedDataWiresFirst);
    }

    const storedDataWiresSecond = localStorage.getItem(
      "secondWiresLocalStorage"
    );
    if (storedDataWiresSecond) {
      this.wiresListSecond = JSON.parse(storedDataWiresSecond);
    }

    const storedDataWiresThree = localStorage.getItem(
      "threeWiresLocalStorage"
    );
    if (storedDataWiresThree) {
      this.wiresListThree = JSON.parse(storedDataWiresThree);
    }
  },

  methods: {
    ...mapMutations(["SET_WIRES_LIST_FIRST"]),
    ...mapMutations(["SET_WIRES_LIST_SECOND"]),
    ...mapMutations(["SET_WIRES_LIST_THREE"]),

    /// ADD ELEMENTS


    AddToCartFirst() {
      let wires = this.wiresFirst;
      if (wires === "") {
        this.emptyFormsFirst = true;
      } else {
        this.emptyFormsFirst = false;
        let coverUpperCase = this.wiresFirst.toUpperCase();
        if(!this.wiresListFirst.includes(coverUpperCase)){
        this.wiresListFirst.push(this.wiresFirst.toUpperCase());
        this.$store.commit("SET_WIRES_LIST_FIRST", this.wiresListFirst);
        this.isDublicateCartFirst = false;
        } else {
          this.isDublicateCartFirst = true;
        }
        this.wiresFirst = "";
        this.$refs.myRefwiresFirst.focus();
      }
    },

    AddToCartSecond() {
      let wires = this.wiresSecond;
      if (wires === "") {
        this.emptyFormsSecond = true;
      } else {
        this.emptyFormsSecond = false;
        let coverUpperCase = this.wiresSecond.toUpperCase();
        if(!this.wiresListSecond.includes(coverUpperCase)){
        this.wiresListSecond.push(this.wiresSecond.toUpperCase());
        this.$store.commit("SET_WIRES_LIST_SECOND", this.wiresListSecond);
        this.isDublicateCartSecond = false;
        } else {
          this.isDublicateCartSecond = true;
        }
        this.wiresSecond = "";
        this.$refs.myRefwiresSecond.focus();
      }
    },

    AddToCartThree() {
       let wires = this.wiresThree;
      if (wires === "") {
        this.emptyFormsThree = true;
      } else {
        this.emptyFormsThree = false;
        let coverUpperCase = this.wiresThree.toUpperCase();
        if(!this.wiresListThree.includes(coverUpperCase)){
        this.wiresListThree.push(this.wiresThree.toUpperCase());
        this.$store.commit("SET_WIRES_LIST_THREE", this.wiresListThree);
        this.isDublicateCartThree = false;
        } else {
          this.isDublicateCartThree = true;
        }
        this.wiresThree = "";
        this.$refs.myRefwiresThree.focus();
      }
    },

    // DELETE ALL ITEM FROM INPUT

    DeleteAllItemsDataFirst() {
      (this.wiresListFirst = []),
        localStorage.removeItem("firstwiresLocalStorage");
    },

    DeleteAllItemsDataSecond() {
      (this.wiresListSecond = []),
        localStorage.removeItem("secondwiresLocalStorage");
    },

    DeleteAllItemsDataThree() {
      (this.wiresListThree = []),
        localStorage.removeItem("threewiresLocalStorage");
    },


      // DELETE SINGLE ELEMENT

      RemoveFromCartFirst(index) {
      this.wiresListFirst.splice(index, 1);
      this.$store.commit("SET_WIRES_LIST_FIRST", this.wiresListFirst);
    },

    RemoveFromCartSecond(index) {
      this.wiresListSecond.splice(index, 1);
      this.$store.commit("SET_WIRES_LIST_SECOND", this.wiresListSecond);
    },

    RemoveFromCartThree(index) {
      this.wiresListThree.splice(index, 1);
      this.$store.commit("SET_WIRES_LIST_THREE", this.wiresListThree);
    }
  },
};
</script>

<style src="../app.css">

</style>
