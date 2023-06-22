<template>
 <div class="forms">
    <span class="covers">Компьютерная переферия и рассходный материал</span>
    <div class="covers_forms">
     
      <!-- First -->
      <div class="colums_flex">
        <span>Переферия ПК</span>
        <div class="forms_area">
          <input
            ref="myRefperipheryFirst"
            class="forms_style"
            type="text"
            v-model="peripheryFirst"
            @keyup.enter="AddToCartFirst()"
          />
          <button class="button_main" @click="AddToCartFirst()">
            Добавить
          </button>
        </div>
        <div>a02</div>
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
            v-for="(item, idx) in peripheryListFirst"
            :key="idx"
            :items="item"
            :index="idx + 1"
            >{{ item }}
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
        <span>Бумага А4, краска</span>
        <div class="forms_area">
          <input
            ref="myRefperipherySecond"
            class="forms_style"
            type="text"
            v-model="peripherySecond"
            @keyup.enter="AddToCartSecond()"
          />
          <button class="button_main" @click="AddToCartSecond()">
            Добавить
          </button>
        </div>
        <div>a02</div>
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
            v-for="(item, idx) in peripheryListSecond"
            :key="idx"
            :items="item"
            :index="idx + 1"
            >{{ item }}
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
        <span>Принтер, картриджы</span>
        <div class="forms_area">
          <input
            ref="myRefperipheryThree"
            class="forms_style"
            type="text"
            v-model="peripheryThree"
            @keyup.enter="AddToCartThree()"
          />
          <button class="button_main" @click="AddToCartThree()">
            Добавить
          </button>
        </div>
        <div>a02</div>
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
            v-for="(item, idx) in peripheryListThree"
            :key="idx"
            :items="item"
            :index="idx + 1"
            >{{ item }}
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
  name: "PcPeripherals",
  components: {},
  data() {
    return {
      peripheryListFirst: [],
      peripheryFirst: "",

      peripheryListSecond: [],
      peripherySecond: "",

      peripheryListThree: [],
      peripheryThree: "",

      emptyFormsFirst: false,
      emptyFormsSecond: false,
      emptyFormsThree: false,

      isDublicateCartFirst: false,
      isDublicateCartSecond: false,
      isDublicateCartThree: false
    };
  },

  created() {
    const storedDataPeripheryFirst = localStorage.getItem(
      "firstPeripheryLocalStorage"
    );
    if (storedDataPeripheryFirst) {
      this.peripheryListFirst = JSON.parse(storedDataPeripheryFirst);
    }

    const storedDataPeripherySecond = localStorage.getItem(
      "secondPeripheryLocalStorage"
    );
    if (storedDataPeripherySecond) {
      this.peripheryListSecond = JSON.parse(storedDataPeripherySecond);
    }

    const storedDataPeripheryThree = localStorage.getItem(
      "threePeripheryLocalStorage"
    );
    if (storedDataPeripheryThree) {
      this.peripheryListThree = JSON.parse(storedDataPeripheryThree);
    }
  },

  methods: {
    ...mapMutations(["SET_PERIPHERY_LIST_FIRST"]),
    ...mapMutations(["SET_PERIPHERY_LIST_SECOND"]),
    ...mapMutations(["SET_PERIPHERY_LIST_THREE"]),

    /// ADD ELEMENTS


    AddToCartFirst() {
      let periphery = this.peripheryFirst;
      if (periphery === "") {
        this.emptyFormsFirst = true;
      } else {
        this.emptyFormsFirst = false;
        let coverUpperCase = this.peripheryFirst.toUpperCase();
        if(!this.peripheryListFirst.includes(coverUpperCase)){
        this.peripheryListFirst.push(this.peripheryFirst.toUpperCase());
        this.$store.commit("SET_PERIPHERY_LIST_FIRST", this.peripheryListFirst);
        this.isDublicateCartFirst = false;
        } else {
          this.isDublicateCartFirst = true;
        }
        this.peripheryFirst = "";
        this.$refs.myRefperipheryFirst.focus();
      }
    },

    AddToCartSecond() {
      let periphery = this.peripherySecond;
      if (periphery === "") {
        this.emptyFormsSecond = true;
      } else {
        this.emptyFormsSecond = false;
        let coverUpperCase = this.peripherySecond.toUpperCase();
        if(!this.peripheryListSecond.includes(coverUpperCase)){
        this.peripheryListSecond.push(this.peripherySecond.toUpperCase());
        this.$store.commit("SET_PERIPHERY_LIST_SECOND", this.peripheryListSecond);
        this.isDublicateCartSecond = false;
        } else {
          this.isDublicateCartSecond = true;
        }
        this.peripherySecond = "";
        this.$refs.myRefperipherySecond.focus();
      }
    },

    AddToCartThree() {
       let periphery = this.peripheryThree;
      if (periphery === "") {
        this.emptyFormsThree = true;
      } else {
        this.emptyFormsThree = false;
        let coverUpperCase = this.peripheryThree.toUpperCase();
        if(!this.peripheryListThree.includes(coverUpperCase)){
        this.peripheryListThree.push(this.peripheryThree.toUpperCase());
        this.$store.commit("SET_PERIPHERY_LIST_THREE", this.peripheryListThree);
        this.isDublicateCartThree = false;
        } else {
          this.isDublicateCartThree = true;
        }
        this.peripheryThree = "";
        this.$refs.myRefperipheryThree.focus();
      }
    },

    // DELETE ALL ITEM FROM INPUT

    DeleteAllItemsDataFirst() {
      (this.peripheryListFirst = []),
        localStorage.removeItem("firstPeripheryLocalStorage");
    },

    DeleteAllItemsDataSecond() {
      (this.peripheryListSecond = []),
        localStorage.removeItem("secondPeripheryLocalStorage");
    },

    DeleteAllItemsDataThree() {
      (this.peripheryListThree = []),
        localStorage.removeItem("threePeripheryLocalStorage");
    },
  },
};
</script>

<style src="../app.css">

</style>
