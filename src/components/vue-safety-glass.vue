
<template>
  <div class="forms">
    <span class="covers">Защитное стекло</span>
    <div class="covers_forms">
     
      <!-- Samsung -->
      <div class="colums_flex">
        <span>Samsung</span>
        <div class="forms_area">
          <input
            ref="myRefCoversSamsung"
            class="forms_style"
            type="text"
            v-model="glassSamsung"
            @keyup.enter="AddToCartSamsung()"
          />
          <button class="button_main" @click="AddToCartSamsung()">
            Добавить
          </button>
        </div>
        <div>a02</div>
        <div v-if="emptyFormsSamsung">
          Пустое поле
          <button class="button_main" @click="emptyFormsSamsung = false">
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
            v-for="(glass, index) in glassListSamsung"
            :key="index"
            :glass="glass"
            :index="index + 1"
            ><span class="SelectedItems" @click="() => RemoveFromCartSamsung(index)">{{ glass }}</span>
          </span>
        </div>
        <button
          class="button_main marginXS paddingXS"
          @click="DeleteAllItemsDataSamsung()"
        >
          Удалить все
        </button>
      </div>

      <!-- Iphone -->
      <div class="colums_flex">
        <span>Iphone</span>
        <div class="forms_area">
          <input
            ref="myRefCoversIphone"
            class="forms_style"
            type="text"
            v-model="glassIphone"
            @keyup.enter="AddToCartIphone()"
          />
          <button class="button_main" @click="AddToCartIphone">Добавить</button>
        </div>
        <div>a02</div>
        <div v-if="emptyFormsIphone">
          Пустое поле
          <button class="button_main" @click="emptyFormsIphone = false">
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
            v-for="(glass, index) in glassListIphone"
            :key="index"
            :glass="glass"
            :index="index + 1"
            ><span class="SelectedItems" @click="() => RemoveFromCartIphone(index)">{{ glass }}</span>
          </span>
        </div>
        <button
          class="button_main marginXS paddingXS"
          @click="DeleteAllItemsDataIphone()"
        >
          Удалить все
        </button>
      </div>
      
      
      <!-- Redmi -->
      <div class="colums_flex">
        <span>Redmi</span>
        <div class="forms_area">
          <input
            ref="myRefCoversRedmi"
            class="forms_style"
            type="text"
            v-model="glassRedmi"
            @keyup.enter="AddToCartRedmi()"
          />
          <button class="button_main" @click="AddToCartRedmi">Добавить</button>
        </div>
        <div>a02</div>
        <div v-if="emptyFormsRedmi">
          Пустое поле
          <button class="button_main" @click="emptyFormsRedmi = false">
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
            v-for="(glass, index) in glassListRedmi"
            :key="index"
            :glass="glass"
            :index="index + 1"
            ><span class="SelectedItems" @click="() => RemoveFromCartRedmi(index)">{{ glass }}</span>
          </span>
        </div>
        <button
          class="button_main marginXS paddingXS"
          @click="DeleteAllItemsDataRedmi()"
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
  name: "GlassItems",
  components: {},
  data() {
    return {
      glassListSamsung: [],
      glassSamsung: "",

      glassListIphone: [],
      glassIphone: "",

      glassListRedmi: [],
      glassRedmi: "",

      emptyFormsSamsung: false,
      emptyFormsIphone: false,
      emptyFormsRedmi: false,

      isDublicateCartFirst: false,
      isDublicateCartSecond: false,
      isDublicateCartThree: false
    };
  },

  created() {
    const storedDataGlassSamsung = localStorage.getItem(
      "samsungGlassLocalStorage"
    );
    if (storedDataGlassSamsung) {
      this.glassListSamsung = JSON.parse(storedDataGlassSamsung);
    }

    const storedDataGlassIphone = localStorage.getItem(
      "iphoneGlassLocalStorage"
    );
    if (storedDataGlassIphone) {
      this.glassListIphone = JSON.parse(storedDataGlassIphone);
    }

    const storedDataGlassRedmi = localStorage.getItem(
      "redmiGlassLocalStorage"
    );
    if (storedDataGlassRedmi) {
      this.glassListRedmi = JSON.parse(storedDataGlassRedmi);
    }
  },

  methods: {
    ...mapMutations(["SET_GLASS_LIST_SAMSUNG"]),
    ...mapMutations(["SET_GLASS_LIST_IPHONE"]),
    ...mapMutations(["SET_GLASS_LIST_REDMI"]),

    /// ADD ELEMENTS
    AddToCartSamsung() {
      let glass = this.glassSamsung;
      if (glass === "") {
        this.emptyFormsSamsung = true;
      } else {
        this.emptyFormsSamsung = false;
        let glassUpperCase = this.glassSamsung.toUpperCase();
        if(!this.glassListSamsung.includes(glassUpperCase)){
        this.glassListSamsung.push(glassUpperCase);
        this.$store.commit("SET_GLASS_LIST_SAMSUNG", this.glassListSamsung);
        this.isDublicateCartFirst = false;
        } else {
          this.isDublicateCartFirst = true;
        }
        this.glassSamsung = "";
        this.$refs.myRefCoversSamsung.focus();
      }
    },

    AddToCartIphone() {
      let glass = this.glassIphone;
      if (glass === "") {
        this.emptyFormsIphone = true;
      } else {
        this.emptyFormsIphone = false;
        let glassUpperCase = this.glassIphone.toUpperCase();
        if(!this.glassListIphone.includes(glassUpperCase)){
        this.glassListIphone.push(glassUpperCase);
        this.$store.commit("SET_GLASS_LIST_IPHONE", this.glassListIphone);
        this.isDublicateCartSecond = false;
        } else {
          this.isDublicateCartSecond = true;
        }
        this.glassIphone = "";
        this.$refs.myRefCoversIphone.focus();
      }
    },

    AddToCartRedmi() {
      let glass = this.glassRedmi;
      if (glass === "") {
        this.emptyFormsRedmi = true;
      } else {
        this.emptyFormsRedmi = false;
        let glassUpperCase = this.glassRedmi.toUpperCase();
        if(!this.glassListRedmi.includes(glassUpperCase)){
        this.glassListRedmi.push(glassUpperCase);
        this.$store.commit("SET_GLASS_LIST_REDMI", this.glassListRedmi);
        this.isDublicateCartThree = false;
        } else {
          this.isDublicateCartThree = true;
        }
        this.glassRedmi = "";
        this.$refs.myRefCoversRedmi.focus();
      }
    },

    // DELETE ALL ITEM FROM INPUT

    DeleteAllItemsDataSamsung() {
      (this.glassListSamsung = []),
        localStorage.removeItem("samsungGlassLocalStorage");
    },

    DeleteAllItemsDataIphone() {
      (this.glassListIphone = []),
        localStorage.removeItem("iphoneGlassLocalStorage");
    },

    DeleteAllItemsDataRedmi() {
      (this.glassListRedmi = []),
        localStorage.removeItem("redmiGlassLocalStorage");
    },

    // DELETE SINGLE ELEMENT


    RemoveFromCartRedmi(index) {
      this.glassListRedmi.splice(index, 1);
      this.$store.commit("SET_GLASS_LIST_REDMI", this.glassListRedmi);
    },

    RemoveFromCartIphone(index) {
      this.glassListIphone.splice(index, 1);
      this.$store.commit("SET_GLASS_LIST_IPHONE", this.glassListIphone);
    },

    RemoveFromCartSamsung(index) {
      this.glassListSamsung.splice(index, 1);
      this.$store.commit("SET_GLASS_LIST_SAMSUNG", this.glassListSamsung);
    }


  },
};
</script>

<style src="../app.css">

</style>
