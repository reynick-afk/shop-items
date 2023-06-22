<!--  -->
<template>
  <div class="forms">
    <span class="covers">Чехлы на телефон</span>
    <div class="covers_forms">
     
      <!-- Samsung -->
      <div class="colums_flex">
        <span>Samsung</span>
        <div class="forms_area">
          <input
            ref="myRefCoversSamsung"
            class="forms_style"
            type="text"
            v-model="coversSamsung"
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
            v-for="(cover, idx) in coversListSamsung"
            :key="idx"
            :covers="cover"
            :index="idx + 1"
            >{{ cover }}
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
            v-model="coversIphone"
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
            v-for="(cover, idx) in coversListIphone"
            :key="idx"
            :covers="cover"
            :index="idx + 1"
            >{{ cover }}</span>
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
            v-model="coversRedmi"
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
            v-for="(cover, idx) in coversListRedmi"
            :key="idx"
            :covers="cover"
            :index="idx + 1"
            >{{ cover }}
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
  name: "CoversItems",
  components: {},
  data() {
    return {
      coversListSamsung: [],
      coversSamsung: "",

      coversListIphone: [],
      coversIphone: "",

      coversListRedmi: [],
      coversRedmi: "",

      emptyFormsSamsung: false,
      emptyFormsIphone: false,
      emptyFormsRedmi: false,

      isDublicateCartFirst: false,
      isDublicateCartSecond: false,
      isDublicateCartThree: false,
    };
  },

  created() {
    const storedDataCoverSamsung = localStorage.getItem(
      "samsungCoversLocalStorage"
    );
    if (storedDataCoverSamsung) {
      this.coversListSamsung = JSON.parse(storedDataCoverSamsung);
    }

    const storedDataCoverIphone = localStorage.getItem(
      "iphoneCoversLocalStorage"
    );
    if (storedDataCoverIphone) {
      this.coversListIphone = JSON.parse(storedDataCoverIphone);
    }

    const storedDataCoverRedmi = localStorage.getItem(
      "redmiCoversLocalStorage"
    );
    if (storedDataCoverRedmi) {
      this.coversListRedmi = JSON.parse(storedDataCoverRedmi);
    }
  },

  methods: {
    ...mapMutations(["SET_COVER_LIST_SAMSUNG"]),
    ...mapMutations(["SET_COVER_LIST_IPHONE"]),
    ...mapMutations(["SET_COVER_LIST_REDMI"]),

    /// ADD ELEMENTS
    AddToCartSamsung() {
      let cover = this.coversSamsung;
  if (cover === "") {
    this.emptyFormsSamsung = true;
  } else {
    this.emptyFormsSamsung = false;
    let coverUpperCase = this.coversSamsung.toUpperCase();
    if (!this.coversListSamsung.includes(coverUpperCase)) {
      this.coversListSamsung.push(coverUpperCase);
      this.$store.commit("SET_COVER_LIST_SAMSUNG", this.coversListSamsung);
      this.isDublicateCartFirst = false;
    } else {
      this.isDublicateCartFirst = true;
    }
    this.coversSamsung = "";
    this.$refs.myRefCoversSamsung.focus();
  }
    },

    AddToCartIphone() {
      
  let cover = this.coversIphone;
  if (cover === "") {
    this.emptyFormsIphone = true;
  } else {
    this.emptyFormsIphone = false;
    let coverUpperCase = this.coversIphone.toUpperCase();
    if (!this.coversListIphone.includes(coverUpperCase)) {
      this.coversListIphone.push(coverUpperCase);
      this.$store.commit("SET_COVER_LIST_IPHONE", this.coversListIphone);
      this.isDublicateCartSecond = false;
    } else {
      this.isDublicateCartSecond = true;
    }
    this.coversIphone = "";
    this.$refs.myRefCoversIphone.focus();
  }
    },

    AddToCartRedmi() {
  let cover = this.coversRedmi;
  if (cover === "") {
    this.emptyFormsRedmi = true;
  } else {
    this.emptyFormsRedmi = false;
    let coverUpperCase = this.coversRedmi.toUpperCase();
    if (!this.coversListRedmi.includes(coverUpperCase)) {
      this.coversListRedmi.push(coverUpperCase);
      this.$store.commit("SET_COVER_LIST_REDMI", this.coversListRedmi);
      this.isDublicateCartThree = false;
    } else {
      this.isDublicateCartThree = true;
    }
    this.coversRedmi = "";
    this.$refs.myRefCoversRedmi.focus();
  }
},

    // DELETE ALL ITEM FROM INPUT

    DeleteAllItemsDataSamsung() {
      (this.coversListSamsung = []),
        localStorage.removeItem("samsungCoversLocalStorage");
    },

    DeleteAllItemsDataIphone() {
      (this.coversListIphone = []),
        localStorage.removeItem("iphoneCoversLocalStorage");
    },

    DeleteAllItemsDataRedmi() {
      (this.coversListRedmi = []),
        localStorage.removeItem("redmiCoversLocalStorage");
    },
  },
};
</script>

<style lang="scss">
.selected-items_wrap {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  max-width: 300px;
}



@media screen and (min-width: 320px) and (max-width: 600px) {
  .covers_forms{
    grid-template-columns: repeat(1, 1fr);
    font-size: 10px;
  }
 .colums_flex{
  font-size: 65%;
 }
}
</style>
