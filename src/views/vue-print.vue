<!-- eslint-disable no-mixed-spaces-and-tabs -->
<template>
  <div id="app">
    
    <table class="iksweb">
	<tbody>
		<tr>
			<td class="catalog main-container" colspan="2">Закупочный лист</td>
		</tr>
		<tr>
			<td class="catalog chehol">Чехол</td>
			<td class="catalog steklo">Защитное стекло</td>
		</tr>
		<tr>
			<td class="catalog chehol-iphone" colspan="2">IPHONE: </td>

		</tr>
		<tr class="normalized_items_tr">
			<td class="normalized_items_td"> 
				<div v-for="cover in CoversTdIphone" :key="cover.id" class="td_max_Width">{{ cover }}</div>
			</td>

			<td class="normalized_items_td"> 
				<div v-for="glass in GlassTdIphone" :key="glass.id" class="td_max_Width">{{ glass }}</div>
			</td>
		</tr>
		
		<tr>
			<td class="catalog chehol-redmi" colspan="2">REDMI:</td>
		</tr>
		
		<tr class="normalized_items_tr">
			<td class="normalized_items_td"> 
				<div v-for="cover in CoversTdRedmi" :key="cover.id" class="td_max_Width">{{ cover }}</div>
			</td>
			<td class="normalized_items_td"> 
				<div v-for="glass in GlassTdRedmi" :key="glass.id" class="td_max_Width">{{ glass }}</div>
			</td>
		</tr>
		<tr>
			<td class="catalog chehol-samsung" colspan="2">SAMSUNG:</td>	
		</tr>
		<tr class="normalized_items_tr">
			<td class="normalized_items_td"> 
				<div v-for="cover in CoversTdSamsung" :key="cover.id" class="td_max_Width">{{ cover }}</div>
			</td>
			<td class="normalized_items_td"> 
				<div v-for="glass in GlassTdSamsung" :key="glass.id" class="td_max_Width">{{ glass }}</div>
			</td>
		</tr>

		<tr>
			<td class="catalog chehol-samsung" colspan="2">Зарядные устройства:</td>	
		</tr>

		<tr>
			<td class="normalized_items_td" colspan="2"> 
				<div v-for="charging in ChargingTdFirst" :key="charging.id" class="td_max_Width">{{ charging }}</div>
			</td>

		</tr>
		
		<tr>
			<td class="catalog zaradnoe_ystroistvo">Зарядные устройства для ноутбука</td>
			<td class="catalog cables">Провода для телефона</td>
		</tr>
		<tr>
			<td class="normalized_items_td"> 
				<div v-for="charging in ChargingTdThree" :key="charging.id" class="td_max_Width">{{ charging }}</div>
			</td>
			<td class="normalized_items_td"> 
				<div v-for="wires in WiresTdFirst" :key="wires.id" class="td_max_Width">{{ wires }}</div>
			</td>
		</tr>
	
		<tr>
			<td class="catalog zaradnoe_ystroistvo-otdelno-block">Блоки отдельно</td>
			<td class="catalog zaradnoe_ystroistvo-otdelno-block">Провода другие</td>
		</tr>
		<tr>
			<td class="normalized_items_td"> 
				<div v-for="charging in ChargingTdSecond" :key="charging.id" class="td_max_Width">{{ charging }}</div>
			</td>
			<td class="normalized_items_td"> 
				<div v-for="different in DifferentTdThree" :key="different.id" class="td_max_Width">{{ different }}</div>
			</td>
		</tr>
		<tr>
			<td class="catalog headsets">Наушники</td>
			<td class="catalog batarry">Батарея</td>
		</tr>
		<tr>
			<td class="normalized_items_td"> 
				<div v-for="appliances in AppliancesTdFirst" :key="appliances.id" class="td_max_Width">{{ appliances }}</div>
			</td>
			<td class="normalized_items_td"> 
				<div v-for="wires in WiresTdThree" :key="wires.id" class="td_max_Width">{{ wires }}</div>
			</td>
		</tr>
		
		<tr>
			<td class="catalog bit-technika">Бытовая техника</td>
			<td class="catalog knife_pereferia">Охотничий, походный отдел</td>
		</tr>
		<tr>
			<td class="normalized_items_td"> 
				<div v-for="appliances in AppliancesTdSecond" :key="appliances.id" class="td_max_Width">{{ appliances }}</div>
			</td>
			<td class="normalized_items_td"> 
				<div v-for="male in MaleTdSecond" :key="male.id" class="td_max_Width">{{ male }}</div>
			</td>
		</tr>
		
		<tr>
			<td class="catalog avto_pereferia">Авто товары</td>
			<td class="catalog peper_kraska">Бумага А4, Краска</td>
		</tr>
		<tr>
			<td class="normalized_items_td"> 
				<div v-for="male in MaleTdFirst" :key="male.id" class="td_max_Width">{{ male }}</div>
			</td>
			<td class="normalized_items_td"> 
				<div v-for="periphery in PeripheryTdSecond" :key="periphery.id" class="td_max_Width">{{ periphery }}</div>
			</td>
		</tr>
		<tr>
			<td class="catalog pc-pereferia">Периферия ПК</td>
			<td class="catalog tv-pereferia">ТВ </td>
		</tr>
		<tr>
			<td class="normalized_items_td"> 
				<div v-for="periphery in PeripheryTdFirst" :key="periphery.id" class="td_max_Width">{{ periphery }}</div>
			</td>
			<td class="normalized_items_td"> 
				<div v-for="different in DifferentTdSecond" :key="different.id" class="td_max_Width">{{ different }}</div>
			</td>
		</tr>
		<tr>
			<td class="catalog hair-cut">Машинки</td>
			<td class="catalog pereferia-switchs">Переходники</td>
		</tr>
		<tr>
			<td class="normalized_items_td"> 
				<div v-for="appliances in AppliancesTdThree" :key="appliances.id" class="td_max_Width">{{ appliances }}</div>
			</td>
			<td class="normalized_items_td"> 
				<div v-for="wires in WiresTdSecond" :key="wires.id" class="td_max_Width">{{ wires }}</div>
			</td>
		</tr>
		
		

		<tr>
			<td class="catalog printers">Принтер, картридж</td>
			<td class="catalog printers">Инструменты</td>
		</tr>

		<tr>
			<td class="normalized_items_td"> 
				<div v-for="periphery in PeripheryTdThree" :key="periphery.id" class="td_max_Width">{{ periphery }}</div>
			</td>
			<td class="normalized_items_td"> 
				<div v-for="male in MaleTdThree" :key="male.id" class="td_max_Width">{{ male }}</div>
			</td>
			
		</tr>

		<tr>
			<td class="catalog raznoe" colspan="2">Разное</td>
		</tr>
		<tr>
			<td class="normalized_items_td" colspan="2"> 
				<div v-for="different in DifferentTdFirst" :key="different.id" class="td_max_Width">{{ different }}</div>
			</td>
		</tr>
	</tbody>
</table>
	<span>
		<button class="printAll" @click="printAll">Расспечатать</button>

	</span>
</div>
</template>


<script>
import { mapGetters } from 'vuex';

export default {

  data() {
    return {
		CoversTdSamsung: [],
		CoversTdIphone: [],
		CoversTdRedmi: [],

		GlassTdSamsung: [],
		GlassTdIphone: [],
		GlassTdRedmi: [],

		PeripheryTdFirst: [],
		PeripheryTdSecond: [],
		PeripheryTdThree: [],

		WiresTdFirst: [],
		WiresTdSecond: [],
		WiresTdThree: [],

		AppliancesTdFirst: [],
		AppliancesTdSecond: [],
		AppliancesTdThree: [],

		MaleTdFirst: [],
		MaleTdSecond: [],
		MaleTdThree: [],

		DifferentTdFirst: [],
		DifferentTdSecond: [],
		DifferentTdThree: [],

		ChargingTdFirst: [],
		ChargingTdSecond: [],
		ChargingTdThree: [],
    }
  },

 created() {


		// COVERS TELEPHONE
   const CoversTdSamsung = localStorage.getItem("samsungCoversLocalStorage")
        if(CoversTdSamsung) {
          this.CoversTdSamsung = JSON.parse(CoversTdSamsung)
          }
		
	const CoversTdIphone = localStorage.getItem("iphoneCoversLocalStorage")
        if(CoversTdIphone) {
          this.CoversTdIphone = JSON.parse(CoversTdIphone)
          }

	const CoversTdRedmi = localStorage.getItem("redmiCoversLocalStorage")
        if(CoversTdRedmi) {
          this.CoversTdRedmi = JSON.parse(CoversTdRedmi)
          }


		// GLASS TELEPHONE
   const GlassTdSamsung = localStorage.getItem("samsungGlassLocalStorage")
        if(GlassTdSamsung) {
          this.GlassTdSamsung = JSON.parse(GlassTdSamsung)
          }
		
	const GlassTdIphone = localStorage.getItem("iphoneGlassLocalStorage")
        if(GlassTdIphone) {
          this.GlassTdIphone = JSON.parse(GlassTdIphone)
          }

	const GlassTdRedmi = localStorage.getItem("redmiGlassLocalStorage")
        if(GlassTdRedmi) {
          this.GlassTdRedmi = JSON.parse(GlassTdRedmi)
          }


		// PERIPHERY
		const PeripheryTdFirst = localStorage.getItem("firstPeripheryLocalStorage")
        if(PeripheryTdFirst) {
          this.PeripheryTdFirst = JSON.parse(PeripheryTdFirst)
          }

		const PeripheryTdSecond = localStorage.getItem("secondPeripheryLocalStorage")
        if(PeripheryTdSecond) {
          this.PeripheryTdSecond = JSON.parse(PeripheryTdSecond)
          }

		const PeripheryTdThree = localStorage.getItem("threePeripheryLocalStorage")
        if(PeripheryTdThree) {
          this.PeripheryTdThree = JSON.parse(PeripheryTdThree)
          }


		// WIRES
		const WiresTdFirst = localStorage.getItem("firstWiresLocalStorage")
        if(WiresTdFirst) {
          this.WiresTdFirst = JSON.parse(WiresTdFirst)
          }

		const WiresTdSecond = localStorage.getItem("secondWiresLocalStorage")
        if(WiresTdSecond) {
          this.WiresTdSecond = JSON.parse(WiresTdSecond)
          }

		const WiresTdThree = localStorage.getItem("threeWiresLocalStorage")
        if(WiresTdThree) {
          this.WiresTdThree = JSON.parse(WiresTdThree)
          }


		// APPLIANCES
		const AppliancesTdFirst = localStorage.getItem("firstAppliancesLocalStorage")
        if(AppliancesTdFirst) {
          this.AppliancesTdFirst = JSON.parse(AppliancesTdFirst)
          }

		const AppliancesTdSecond = localStorage.getItem("secondAppliancesLocalStorage")
        if(AppliancesTdSecond) {
          this.AppliancesTdSecond = JSON.parse(AppliancesTdSecond)
          }

		const AppliancesTdThree = localStorage.getItem("threeAppliancesLocalStorage")
        if(AppliancesTdThree) {
          this.AppliancesTdThree = JSON.parse(AppliancesTdThree)
          }


		// MALE
		const MaleTdFirst = localStorage.getItem("firstMaleLocalStorage")
        if(MaleTdFirst) {
          this.MaleTdFirst = JSON.parse(MaleTdFirst)
          }

		const MaleTdSecond = localStorage.getItem("secondMaleLocalStorage")
        if(MaleTdSecond) {
          this.MaleTdSecond = JSON.parse(MaleTdSecond)
          }

		const MaleTdThree = localStorage.getItem("threeMaleLocalStorage")
        if(MaleTdThree) {
          this.MaleTdThree = JSON.parse(MaleTdThree)
          }

		// DIFFERENT
		const DifferentTdFirst = localStorage.getItem("firstDifferentLocalStorage")
        if(DifferentTdFirst) {
          this.DifferentTdFirst = JSON.parse(DifferentTdFirst)
          }

		const DifferentTdSecond = localStorage.getItem("secondDifferentLocalStorage")
        if(DifferentTdSecond) {
          this.DifferentTdSecond = JSON.parse(DifferentTdSecond)
          }

		const DifferentTdThree = localStorage.getItem("threeDifferentLocalStorage")
        if(DifferentTdThree) {
          this.DifferentTdThree = JSON.parse(DifferentTdThree)
          }

		// CHARGING
		const ChargingTdFirst = localStorage.getItem("firstChargingLocalStorage")
        if(ChargingTdFirst) {
          this.ChargingTdFirst = JSON.parse(ChargingTdFirst)
          }

		const ChargingTdSecond = localStorage.getItem("secondChargingLocalStorage")
        if(ChargingTdSecond) {
          this.ChargingTdSecond = JSON.parse(ChargingTdSecond)
          }

		const ChargingTdThree = localStorage.getItem("threeChargingLocalStorage")
        if(ChargingTdThree) {
          this.ChargingTdThree = JSON.parse(ChargingTdThree)
          }

  },
 
  computed: {


	// COVERS TELEPHONE
    ...mapGetters(['coverListSamsung']),
	...mapGetters(['coverListIphone']),
	...mapGetters(['coverListRedmi']),


	// GLASS TELEPHONE
	...mapGetters(['glassListSamsung']),
	...mapGetters(['glassListIphone']),
	...mapGetters(['glassListRedmi']),

	// PERIPHERY PC
	...mapGetters(['peripheryListFirst']),
	...mapGetters(['peripheryListSecond']),
	...mapGetters(['peripheryListThree']),

	// WIRES
	...mapGetters(['wiresListFirst']),
	...mapGetters(['wiresListSecond']),
	...mapGetters(['wiresListThree']),

	// APPLIANCES
	...mapGetters(['appliancesListFirst']),
	...mapGetters(['appliancesListSecond']),
	...mapGetters(['appliancesListThree']),

	// MALE
	...mapGetters(['maleListFirst']),
	...mapGetters(['maleListSecond']),
	...mapGetters(['maleListThree']),

	// DIFFERENT
	...mapGetters(['differentListFirst']),
	...mapGetters(['differentListSecond']),
	...mapGetters(['differentListThree']),

	// CHARGING
	...mapGetters(['chargingListFirst']),
	...mapGetters(['chargingListSecond']),
	...mapGetters(['chargingListThree']),

  },








	methods:{
		printAll(){
			window.print();
			return false;
		},
		
	
	}
  

}
</script>


<style lang="css">

.td_max_Width{
	margin-right: 4px;
	display: inline-block;
}

.catalog{
	font-weight: bold;
}

.printAll{
	background: #0c3eaaec;
      border-radius: 6px;
      color: whitesmoke;
      cursor: pointer;
      min-width: 200px;
      min-height: 40px;
	padding: 5px;
	margin: 20px;
}

  .app{
    height: 200px;
  }

    table.iksweb{
  height: 200px;
  text-decoration: none;
  border-collapse:collapse;
  width:100%;
  text-align:center;

}

@media print{
	.printAll{
		display: none;
	}
}

@media screen and (min-width: 320px) and (max-width: 640px) {
	.td_max_Width{
		font-size: 8px;
		padding: 2px;
	}

}



table.iksweb {
	table-layout: fixed;
	height: 200px;
	margin-top: 20px;
	}

table.iksweb td.catalog{font-size:12px; height: 10px;}
table.iksweb th{font-weight:normal;font-size:14px; color:#ffffff;background-color:#354251;}
table.iksweb td{font-size:10px;color:#354251;}
table.iksweb td,table.iksweb th{white-space:normal;padding:10px 3px;vertical-align: middle;border: 1px solid #354251;}
table.iksweb tr:hover{background-color:#f9fafb}
table.iksweb tr:hover td{color:#354251;cursor:default;}


</style>