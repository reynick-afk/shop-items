// store.js
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    formData: [] // массив для сохранения данных формы
  },

  mutations: {
    SET_COVER_LIST_SAMSUNG(state, formData) { // обновленное название мутации
      state.formData = formData;
      localStorage.setItem('samsungCoversLocalStorage', JSON.stringify(formData));
    }
  }, 
  
  getters: {
    formData: (state) => state.formData
  }
});