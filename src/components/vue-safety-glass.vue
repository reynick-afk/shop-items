
<template>
  <div class="forms" :class="{ active: isActive}" ref="blockToAdjustGlass">
    <span class="covers" @click="ToggleShowComponents">Защитное стекло</span>
    <div class="covers_forms" v-show="ViewComponents">
     
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

           <ul class="li-items_wrap li_style_none" v-if="filteredModelsSamsung.length && glassSamsung.trim() !== ''">
              <li class="SelectedItems" v-for="model in filteredModelsSamsung" :key="model" @click="selectModelSamsung(model)">{{ model }}</li>
            </ul>

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

        <ul class="li-items_wrap li_style_none" v-if="filteredModelsIphone.length && glassIphone.trim() !== ''">
              <li class="SelectedItems" v-for="model in filteredModelsIphone" :key="model" @click="selectModelIphone(model)">{{ model }}</li>
            </ul>

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

        <ul class="li-items_wrap li_style_none" v-if="filteredModelsRedmi.length && glassRedmi.trim() !== ''">
              <li class="SelectedItems" v-for="model in filteredModelsRedmi" :key="model" @click="selectModelRedmi(model)">{{ model }}</li>
            </ul>

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
import shopDataSamsung from "../data/shopSamsung.json";
import shopDataIphone from "../data/shopIphone.json";
import shopDataRedmi from "../data/shopRedmi.json";
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
      isDublicateCartThree: false,

       allItems: [],
      selectedModelIndex: {
        samsung: -1,
   
      },

      ViewComponents: false,
      isActive: false,
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

// TOGGLE ViewComponents

    ToggleShowComponents(){
      this.ViewComponents = !this.ViewComponents;
      this.isActive = !this.isActive;

       const block = this.$refs.blockToAdjustGlass; // Получаем ссылку на блок

      if (block) {
        block.scrollIntoView({ behavior: "smooth", block: "center", inline: 'center'});
        // Прокручиваем страницу к блоку с использованием плавной анимации
        // Можешь изменить параметры scrollIntoView для настройки поведения прокрутки
      }
    },


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
    },

    // ADD AUTOCOMPLATE

  selectModelSamsung(model){
    this.glassSamsung  = model
      if (model === "") {
        this.emptyFormsSamsung = true;
      } else {
        this.emptyFormsSamsung = false;
        let coverUpperCase = this.glassSamsung.toUpperCase();
        if (!this.glassListSamsung.includes(coverUpperCase)) {
          this.glassListSamsung.push(coverUpperCase);
          this.$store.commit("SET_GLASS_LIST_SAMSUNG", this.glassListSamsung);
          this.isDublicateCartFirst = false;
        } else {
          this.isDublicateCartFirst = true;
        }
        this.glassSamsung = "";
        this.$refs.myRefCoversSamsung.focus();
      }
  },

  selectModelIphone(model){
    this.glassIphone  = model
      if (model === ""){
        this.emptyFormsIphone = true;
      } else {
        this.emptyFormsIphone = false;
        let coverUpperCase = this.glassIphone.toUpperCase();
        if (!this.glassListIphone.includes(coverUpperCase)) {
          this.glassListIphone.push(coverUpperCase);
          this.$store.commit("SET_GLASS_LIST_IPHONE", this.glassListIphone);
          this.isDublicateCartSecond = false;
        } else {
          this.isDublicateCartSecond = true;
        }
        this.glassIphone = "";
        this.$refs.myRefCoversIphone.focus();
      }},

    selectModelRedmi(model){
      this.glassRedmi  = model
        if (model === ""){
        this.emptyFormsRedmi = true;
      } else {
        this.emptyFormsRedmi = false;
        let coverUpperCase = this.glassRedmi.toUpperCase();
        if (!this.glassListRedmi.includes(coverUpperCase)) {
          this.glassListRedmi.push(coverUpperCase);
          this.$store.commit("SET_GLASS_LIST_REDMI", this.glassListRedmi);
          this.isDublicateCartThree = false;
        } else {
          this.isDublicateCartThree = true;
        }
        this.glassRedmi = "";
        this.$refs.myRefCoversRedmi.focus();
      }
    }


  },
  computed: {
     filteredModelsSamsung() {
    const search = this.glassSamsung.toLowerCase();
    const filtered = [];
    
    if (search.trim() !== '') {
      for (const brand in shopDataSamsung.Data) {
        const models = shopDataSamsung.Data[brand];
        
        for (const model of models) {
          if (model.model.toLowerCase().includes(search)) {
            filtered.push(model.model);
          }
        }
      }
    }
    
    return filtered;
  },
 
  filteredModelsIphone() {
    const search = this.glassIphone.toLowerCase();
    const filtered = [];
    
    if (search.trim() !== '') {
      for (const brand in shopDataIphone.Data) {
        const models = shopDataIphone.Data[brand];
        
        for (const model of models) {
          if (model.model.toLowerCase().includes(search)) {
            filtered.push(model.model);
          }
        }
      }
    }
    
    return filtered;
  },
filteredModelsRedmi() {
    const search = this.glassRedmi.toLowerCase();
    const filtered = [];
    
    if (search.trim() !== '') {
      for (const brand in shopDataRedmi.Data) {
        const models = shopDataRedmi.Data[brand];
        
        for (const model of models) {
          if (model.model.toLowerCase().includes(search)) {
            filtered.push(model.model);
          }
        }
      }
    }
    
    return filtered;
  }


  },


};
</script>

<style src="../app.css">

</style>
