<template>
  <div class="forms">
    <span class="covers">Разные товары</span>
    <div class="covers_forms">
     
      <!-- First -->
      <div class="colums_flex">
        <span>Разное</span>
        <div class="forms_area">
          <input
            ref="myRefdifferentFirst"
            class="forms_style"
            type="text"
            v-model="differentFirst"
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
            v-for="(item, index) in differentListFirst"
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
        <span>ТВ</span>
        <div class="forms_area">
          <input
            ref="myRefdifferentSecond"
            class="forms_style"
            type="text"
            v-model="differentSecond"
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
            v-for="(item, index) in differentListSecond"
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
        <span>Провода другие</span>
        <div class="forms_area">
          <input
            ref="myRefdifferentThree"
            class="forms_style"
            type="text"
            v-model="differentThree"
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
            v-for="(item, index) in differentListThree"
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
  name: "DifferentProducts",
  components: {},
  data() {
    return {
      differentListFirst: [],
      differentFirst: "",

      differentListSecond: [],
      differentSecond: "",

      differentListThree: [],
      differentThree: "",

      emptyFormsFirst: false,
      emptyFormsSecond: false,
      emptyFormsThree: false,

      isDublicateCartFirst: false,
      isDublicateCartSecond: false,
      isDublicateCartThree: false
    };
  },

  created() {
    const storedDatadifferentFirst = localStorage.getItem(
      "firstDifferentLocalStorage"
    );
    if (storedDatadifferentFirst) {
      this.differentListFirst = JSON.parse(storedDatadifferentFirst);
    }

    const storedDatadifferentSecond = localStorage.getItem(
      "secondDifferentLocalStorage"
    );
    if (storedDatadifferentSecond) {
      this.differentListSecond = JSON.parse(storedDatadifferentSecond);
    }

    const storedDatadifferentThree = localStorage.getItem(
      "threeDifferentLocalStorage"
    );
    if (storedDatadifferentThree) {
      this.differentListThree = JSON.parse(storedDatadifferentThree);
    }
  },

  methods: {
    ...mapMutations(["SET_DIFFERENT_LIST_FIRST"]),
    ...mapMutations(["SET_DIFFERENT_LIST_SECOND"]),
    ...mapMutations(["SET_DIFFERENT_LIST_THREE"]),

    /// ADD ELEMENTS


    AddToCartFirst() {
      let different = this.differentFirst;
      if (different === "") {
        this.emptyFormsFirst = true;
      } else {
        this.emptyFormsFirst = false;
        let coverUpperCase = this.differentFirst.toUpperCase();
        if(!this.differentListFirst.includes(coverUpperCase)){
        this.differentListFirst.push(this.differentFirst.toUpperCase());
        this.$store.commit("SET_DIFFERENT_LIST_FIRST", this.differentListFirst);
        this.isDublicateCartFirst = false;
        } else {
          this.isDublicateCartFirst = true;
        }
        this.differentFirst = "";
        this.$refs.myRefdifferentFirst.focus();
      }
    },

    AddToCartSecond() {
      let different = this.differentSecond;
      if (different === "") {
        this.emptyFormsSecond = true;
      } else {
        this.emptyFormsSecond = false;
        let coverUpperCase = this.differentSecond.toUpperCase();
        if(!this.differentListSecond.includes(coverUpperCase)){
        this.differentListSecond.push(this.differentSecond.toUpperCase());
        this.$store.commit("SET_DIFFERENT_LIST_SECOND", this.differentListSecond);
        this.isDublicateCartSecond = false;
        } else {
          this.isDublicateCartSecond = true;
        }
        this.differentSecond = "";
        this.$refs.myRefdifferentSecond.focus();
      }
    },

    AddToCartThree() {
       let different = this.differentThree;
      if (different === "") {
        this.emptyFormsThree = true;
      } else {
        this.emptyFormsThree = false;
        let coverUpperCase = this.differentThree.toUpperCase();
        if(!this.differentListThree.includes(coverUpperCase)){
        this.differentListThree.push(this.differentThree.toUpperCase());
        this.$store.commit("SET_DIFFERENT_LIST_THREE", this.differentListThree);
        this.isDublicateCartThree = false;
        } else {
          this.isDublicateCartThree = true;
        }
        this.differentThree = "";
        this.$refs.myRefdifferentThree.focus();
      }
    },

    // DELETE ALL ITEM FROM INPUT

    DeleteAllItemsDataFirst() {
      (this.differentListFirst = []),
        localStorage.removeItem("firstDifferentLocalStorage");
    },

    DeleteAllItemsDataSecond() {
      (this.differentListSecond = []),
        localStorage.removeItem("secondDifferentLocalStorage");
    },

    DeleteAllItemsDataThree() {
      (this.differentListThree = []),
        localStorage.removeItem("threeDifferentLocalStorage");
    },

  // DELETE SINGLE ELEMENT

      RemoveFromCartFirst(index) {
      this.differentListFirst.splice(index, 1);
      this.$store.commit("SET_DIFFERENT_LIST_FIRST", this.differentListFirst);
    },

    RemoveFromCartSecond(index) {
      this.differentListSecond.splice(index, 1);
      this.$store.commit("SET_DIFFERENT_LIST_SECOND", this.differentListSecond);
    },

    RemoveFromCartThree(index) {
      this.differentListThree.splice(index, 1);
      this.$store.commit("SET_DIFFERENT_LIST_THREE", this.differentListThree);
    }


  },
};
</script>

<style lang='scss' scoped>



</style>
