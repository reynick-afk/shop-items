import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    coverListSamsungStore: [],
    coverListIphoneStore: [],
    coverListRedmiStore: [],

    glassListSamsungStore: [],
    glassListIphoneStore: [],
    glassListRedmiStore: [],

    peripheryListFirstStore: [],
    peripheryListSecondStore: [],
    peripheryListThreeStore: [],

    wiresListFirstStore: [],
    wiresListSecondStore: [],
    wiresListThreeStore: [],

    appliancesListFirstStore: [],
    appliancesListSecondStore: [],
    appliancesListThreeStore: [],

    maleListFirstStore: [],
    maleListSecondStore: [],
    maleListThreeStore: [],

    differentListFirstStore: [],
    differentListSecondStore: [],
    differentListThreeStore: [],

    chargingListFirstStore: [],
    chargingListSecondStore: [],
    chargingListThreeStore: [],
  },

  mutations: {

    // COVERS


    SET_COVER_LIST_SAMSUNG(state, coverListSamsungStore) {
      state.coverListSamsungStore = coverListSamsungStore;
      localStorage.setItem('samsungCoversLocalStorage', JSON.stringify(coverListSamsungStore));
    },
    SET_COVER_LIST_IPHONE(state, coverListIphoneStore) {
      state.coverListIphoneStore = coverListIphoneStore;
      localStorage.setItem('iphoneCoversLocalStorage', JSON.stringify(coverListIphoneStore));
    },
    SET_COVER_LIST_REDMI(state, coverListRedmiStore) {
      state.coverListRedmiStore = coverListRedmiStore;
      localStorage.setItem('redmiCoversLocalStorage', JSON.stringify(coverListRedmiStore));
    },


    // SAFETY GLASS


    SET_GLASS_LIST_SAMSUNG(state, glassListSamsungStore) {
      state.glassListSamsungStore = glassListSamsungStore;
      localStorage.setItem('samsungGlassLocalStorage', JSON.stringify(glassListSamsungStore));
    },
    SET_GLASS_LIST_IPHONE(state, glassListIphoneStore) {
      state.glassListIphoneStore = glassListIphoneStore;
      localStorage.setItem('iphoneGlassLocalStorage', JSON.stringify(glassListIphoneStore));
    },
    SET_GLASS_LIST_REDMI(state, glassListRedmiStore) {
      state.glassListRedmiStore = glassListRedmiStore;
      localStorage.setItem('redmiGlassLocalStorage', JSON.stringify(glassListRedmiStore));
    },


    // PC PERIPHERY


    SET_PERIPHERY_LIST_FIRST(state, peripheryListFirstStore){
      state.peripheryListFirstStore = peripheryListFirstStore;
      localStorage.setItem('firstPeripheryLocalStorage', JSON.stringify(peripheryListFirstStore))
    },
    SET_PERIPHERY_LIST_SECOND(state, peripheryListSecondStore){
      state.peripheryListSecondStore = peripheryListSecondStore;
      localStorage.setItem('secondPeripheryLocalStorage', JSON.stringify(peripheryListSecondStore))
    },
    SET_PERIPHERY_LIST_THREE(state, peripheryListThreeStore){
      state.peripheryListThreeStore = peripheryListThreeStore;
      localStorage.setItem('threePeripheryLocalStorage', JSON.stringify(peripheryListThreeStore))
    },


    // WIRES


    SET_WIRES_LIST_FIRST(state, wiresListFirstStore){
      state.wiresListFirstStore = wiresListFirstStore;
      localStorage.setItem('firstWiresLocalStorage', JSON.stringify(wiresListFirstStore))
    },
    SET_WIRES_LIST_SECOND(state, wiresListSecondStore){
      state.wiresListSecondStore = wiresListSecondStore;
      localStorage.setItem('secondWiresLocalStorage', JSON.stringify(wiresListSecondStore))
    },
    SET_WIRES_LIST_THREE(state, wiresListThreeStore){
      state.wiresListThreeStore = wiresListThreeStore;
      localStorage.setItem('threeWiresLocalStorage', JSON.stringify(wiresListThreeStore))
    },


    // APPLIANCES


    SET_APPLIANCES_LIST_FIRST(state, appliancesListFirstStore){
      state.appliancesListFirstStore = appliancesListFirstStore;
      localStorage.setItem('firstAppliancesLocalStorage', JSON.stringify(appliancesListFirstStore))
    },
    SET_APPLIANCES_LIST_SECOND(state, appliancesListSecondStore){
      state.appliancesListSecondStore = appliancesListSecondStore;
      localStorage.setItem('secondAppliancesLocalStorage', JSON.stringify(appliancesListSecondStore))
    },
    SET_APPLIANCES_LIST_THREE(state, appliancesListThreeStore){
      state.appliancesListThreeStore = appliancesListThreeStore;
      localStorage.setItem('threeAppliancesLocalStorage', JSON.stringify(appliancesListThreeStore))
    },


    // MALE

    SET_MALE_LIST_FIRST(state, maleListFirstStore){
      state.maleListFirstStore = maleListFirstStore;
      localStorage.setItem('firstMaleLocalStorage', JSON.stringify(maleListFirstStore))
    },
    SET_MALE_LIST_SECOND(state, maleListSecondStore){
      state.maleListSecondStore = maleListSecondStore;
      localStorage.setItem('secondMaleLocalStorage', JSON.stringify(maleListSecondStore))
    },
    SET_MALE_LIST_THREE(state, maleListThreeStore){
      state.maleListThreeStore = maleListThreeStore;
      localStorage.setItem('threeMaleLocalStorage', JSON.stringify(maleListThreeStore))
    },


    // DIFFERENT

    SET_DIFFERENT_LIST_FIRST(state, differentListFirstStore){
      state.differentListFirstStore = differentListFirstStore;
      localStorage.setItem('firstDifferentLocalStorage', JSON.stringify(differentListFirstStore))
    },
    SET_DIFFERENT_LIST_SECOND(state, differentListSecondStore){
      state.differentListSecondStore = differentListSecondStore;
      localStorage.setItem('secondDifferentLocalStorage', JSON.stringify(differentListSecondStore))
    },
    SET_DIFFERENT_LIST_THREE(state, differentListThreeStore){
      state.differentListThreeStore = differentListThreeStore;
      localStorage.setItem('threeDifferentLocalStorage', JSON.stringify(differentListThreeStore))
    },

    // CHARGING

    SET_CHARGING_LIST_FIRST(state, chargingListFirstStore){
      state.chargingListFirstStore = chargingListFirstStore;
      localStorage.setItem('firstChargingLocalStorage', JSON.stringify(chargingListFirstStore))
    },
    SET_CHARGING_LIST_SECOND(state, chargingListSecondStore){
      state.chargingListSecondStore = chargingListSecondStore;
      localStorage.setItem('secondChargingLocalStorage', JSON.stringify(chargingListSecondStore))
    },
    SET_CHARGING_LIST_THREE(state, chargingListThreeStore){
      state.chargingListThreeStore = chargingListThreeStore;
      localStorage.setItem('threeChargingLocalStorage', JSON.stringify(chargingListThreeStore))
    },
  },
  
  getters: {


    // COVERS


    coverListSamsung: (state) => state.coverListSamsungStore,
    coverListIphone: (state) => state.coverListIphoneStore,
    coverListRedmi: (state) => state.coverListRedmiStore,


    // SAFETY GLASS


    glassListSamsung: (state) => state.coverListSamsungStore,
    glassListIphone: (state) => state.coverListIphoneStore,
    glassListRedmi: (state) => state.coverListRedmiStore,


    // PC PERIPHERY


    peripheryListFirst: (state) => state.peripheryListFirstStore,
    peripheryListSecond: (state) => state.peripheryListSecondStore,
    peripheryListThree: (state) => state.peripheryListThreeStore,
  


    // WIRES


    wiresListFirst: (state) => state.wiresListFirstStore,
    wiresListSecond: (state) => state.wiresListSecondStore,
    wiresListThree: (state) => state.wiresListThreeStore,



    // APPLIANCES


    appliancesListFirst: (state) => state.appliancesListFirstStore,
    appliancesListSecond: (state) => state.appliancesListSecondStore,
    appliancesListThree: (state) => state.appliancesListThreeStore,


    // MALE

    maleListFirst: (state) => state.maleListFirstStore,
    maleListSecond: (state) => state.maleListSecondStore,
    maleListThree: (state) => state.maleListThreeStore,


    // DIFFERENT

    differentListFirst: (state) => state.differentListFirstStore,
    differentListSecond: (state) => state.differentListSecondStore,
    differentListThree: (state) => state.differentListThreeStore,


    // CHARGING

    chargingListFirst: (state) => state.chargingListFirstStore,
    chargingListSecond: (state) => state.chargingListSecondStore,
    chargingListThree: (state) => state.chargingListThreeStore,
  }
});