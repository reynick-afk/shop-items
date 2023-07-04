<!-- eslint-disable no-mixed-spaces-and-tabs -->
<template>
  <div id="print">
    <div id="page">
    <table class="iksweb" ref="download_page">
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
				<div 
				v-for="(cover, index) in CoversTdIphone" 
				:key="cover.id" class="td_max_Width" 
				:class="{ selected: isItemSelected('cover_Iphone', index) }" 
				@click="toggleItemSelection('cover_Iphone', index)">
					
					<span class="selected_items_null">{{ cover }}</span>
					</div>
			</td>

			<td class="normalized_items_td"> 
				<div 
				v-for="(glass, index) in GlassTdIphone" 
				:key="glass.id" 
				class="td_max_Width"
				:class="{ selected: isItemSelected('glass_Iphone', index) }"
				@click="toggleItemSelection('glass_Iphone', index)">
				<span class="selected_items_null">{{ glass }}</span>

				</div>
			</td>
		</tr>
		
		<tr>
			<td class="catalog chehol-redmi" colspan="2">REDMI:</td>
		</tr>
		
		<tr class="normalized_items_tr">
			<td class="normalized_items_td"> 
				<div 
				v-for="(cover, index) in CoversTdRedmi" 
				:key="cover.id" 
				class="td_max_Width"
				:class="{ selected: isItemSelected('cover_Redmi', index) }"
				@click="toggleItemSelection('cover_Redmi', index)"
				>
				<span class="selected_items_null">{{ cover }}</span>
				</div>
			</td>
			<td class="normalized_items_td"> 
				<div 
				v-for="(glass, index) in GlassTdRedmi" 
				:key="glass.id" 
				class="td_max_Width"
				:class="{ selected: isItemSelected('glass_Redmi', index) }"
				@click="toggleItemSelection('glass_Redmi', index)"
				>
					<span class="selected_items_null">{{ glass }}</span>
					</div>
			</td>
		</tr>
		<tr>
			<td class="catalog chehol-samsung" colspan="2">SAMSUNG:</td>	
		</tr>
		<tr class="normalized_items_tr">
			<td class="normalized_items_td"> 
				<div 
				v-for="(cover, index) in CoversTdSamsung" 
				:key="cover.id" 
				class="td_max_Width"
				:class="{ selected: isItemSelected('cover_Samsung_td', index) }"
				@click="toggleItemSelection('cover_Samsung_td', index)"
				>
					<span class="selected_items_null">{{ cover }}</span>
					</div>
			</td>
			<td class="normalized_items_td"> 
				<div 
				v-for="(glass, index) in GlassTdSamsung" 
				:key="glass.id" 
				class="td_max_Width"
				:class="{ selected: isItemSelected('glass_Samsung_td', index) }"
				@click="toggleItemSelection('glass_Samsung_td', index)"
				>
					<span class="selected_items_null">{{ glass }}</span>

				</div>
			</td>
		</tr>

		<tr>
			<td class="catalog chehol-samsung" colspan="2">Зарядные устройства:</td>	
		</tr>

		<tr>
			<td class="normalized_items_td" colspan="2"> 
				<div v-for="(charging, index) in ChargingTdFirst"
				 :key="charging.id"
				 class="td_max_Width"
				 :class="{ selected: isItemSelected('ChargingTdFirstSelected', index) }"
				@click="toggleItemSelection('ChargingTdFirstSelected', index)"
				>
				<span class="selected_items_null">{{ charging }}</span>
				</div>
			</td>

		</tr>
		
		<tr>
			<td class="catalog zaradnoe_ystroistvo">Зарядные устройства для ноутбука</td>
			<td class="catalog cables">Провода для телефона</td>
		</tr>
		<tr>
			<td class="normalized_items_td"> 
				<div 
				v-for="(charging, index) in ChargingTdThree" 
				:key="charging.id" 
				class="td_max_Width"
				:class="{ selected: isItemSelected('ChargingTdThreeSelected', index) }"
				@click="toggleItemSelection('ChargingTdThreeSelected', index)"
				>
					<span class="selected_items_null">{{ charging }}</span>
					</div>
			</td>
			<td class="normalized_items_td"> 
				<div 
				v-for="(wires,index) in WiresTdFirst" 
				:key="wires.id" 
				class="td_max_Width"
				:class="{ selected: isItemSelected('WiresTdFirstSelected', index) }"
				@click="toggleItemSelection('WiresTdFirstSelected', index)"
				>
					<span class="selected_items_null">{{ wires }}</span>
					</div>
			</td>
		</tr>
	
		<tr>
			<td class="catalog zaradnoe_ystroistvo-otdelno-block">Блоки отдельно</td>
			<td class="catalog zaradnoe_ystroistvo-otdelno-block">Провода другие</td>
		</tr>
		<tr>
			<td class="normalized_items_td"> 
				<div 
				v-for="(ChargingTdSecSelected, index) in ChargingTdSecond" 
				:key="ChargingTdSecSelected.id" 
				class="td_max_Width"
				:class="{ selected: isItemSelected('ChargingTdSecSelected', index) }"
				@click="toggleItemSelection('ChargingTdSecSelected', index)"
				>
				<span class="selected_items_null">{{ ChargingTdSecSelected }}</span>
				</div>
			</td>
			<td class="normalized_items_td"> 
				<div 
				v-for="(different, index) in DifferentTdThree" 
				:key="different.id" 
				class="td_max_Width"
				:class="{ selected: isItemSelected('DifferentTdThreeSelected', index) }"
				@click="toggleItemSelection('DifferentTdThreeSelected', index)"
				>
				<span class="selected_items_null">{{ different }}</span>
				</div>
			</td>
		</tr>
		<tr>
			<td class="catalog headsets">Наушники</td>
			<td class="catalog batarry">Батарея</td>
		</tr>
		<tr>
			<td class="normalized_items_td"> 
				<div 
				v-for="(appliances, index) in AppliancesTdFirst" 
				:key="appliances.id" 
				class="td_max_Width"
				:class="{ selected: isItemSelected('AppliancesTdFirstSelected', index) }"
				@click="toggleItemSelection('AppliancesTdFirstSelected', index)"
				>
					<span class="selected_items_null">{{ appliances }}</span>
					</div>
			</td>
			<td class="normalized_items_td"> 
				<div 
				v-for="(wires, index) in WiresTdThree" 
				:key="wires.id" 
				class="td_max_Width"
				:class="{ selected: isItemSelected('WiresTdThreeSelected', index) }"
				@click="toggleItemSelection('WiresTdThreeSelected', index)"
				>
					<span class="selected_items_null">{{ wires }}</span>
				</div>
			</td>
		</tr>
		
		<tr>
			<td class="catalog bit-technika">Бытовая техника</td>
			<td class="catalog knife_pereferia">Охотничий, походный отдел</td>
		</tr>
		<tr>
			<td class="normalized_items_td"> 
				<div 
				v-for="(appliances, index) in AppliancesTdSecond" 
				:key="appliances.id" 
				class="td_max_Width"
				:class="{ selected: isItemSelected('AppliancesTdSecondSelected', index) }"
				@click="toggleItemSelection('AppliancesTdSecondSelected', index)"
				>
				<span class="selected_items_null">{{ appliances }}</span>
				</div>
			</td>
			<td class="normalized_items_td"> 
				<div 
				v-for="(male, index) in MaleTdSecond" 
				:key="male.id" 
				class="td_max_Width"
				:class="{ selected: isItemSelected('MaleTdSecondSelected', index) }"
				@click="toggleItemSelection('MaleTdSecondSelected', index)"
				>
				<span class="selected_items_null">{{ male }}</span>
				</div>
			</td>
		</tr>
		
		<tr>
			<td class="catalog avto_pereferia">Авто товары</td>
			<td class="catalog peper_kraska">Бумага А4, Краска</td>
		</tr>
		<tr>
			<td class="normalized_items_td"> 
				<div 
				v-for="(male, index) in MaleTdFirst" 
				:key="male.id" 
				class="td_max_Width"
				:class="{ selected: isItemSelected('MaleTdFirstSelected', index) }"
				@click="toggleItemSelection('MaleTdFirstSelected', index)"
				>
				<span class="selected_items_null">{{ male }}</span>
				</div>
			</td>
			<td class="normalized_items_td"> 
				<div 
				v-for="(periphery, index) in PeripheryTdSecond" 
				:key="periphery.id" 
				class="td_max_Width"
				:class="{ selected: isItemSelected('PeripheryTdSecondSelected', index) }"
				@click="toggleItemSelection('PeripheryTdSecondSelected', index)"
				>
				<span class="selected_items_null">{{ periphery }}</span>
				</div>
			</td>
		</tr>
		<tr>
			<td class="catalog pc-pereferia">Периферия ПК</td>
			<td class="catalog tv-pereferia">ТВ </td>
		</tr>
		<tr>
			<td class="normalized_items_td"> 
				<div 
				v-for="(periphery, index) in PeripheryTdFirst" 
				:key="periphery.id" 
				class="td_max_Width"
				:class="{ selected: isItemSelected('PeripheryTdFirstSelected', index) }"
				@click="toggleItemSelection('PeripheryTdFirstSelected', index)"
				>
				<span class="selected_items_null">{{ periphery }}</span>
				</div>
			</td>
			<td class="normalized_items_td"> 
				<div 
				v-for="(different, index) in DifferentTdSecond" 
				:key="different.id" 
				class="td_max_Width"
				:class="{ selected: isItemSelected('DifferentTdSecondSelected', index) }"
				@click="toggleItemSelection('DifferentTdSecondSelected', index)"
				>
				<span class="selected_items_null">{{ different }}</span>
				</div>
			</td>
		</tr>
		<tr>
			<td class="catalog hair-cut">Машинки</td>
			<td class="catalog pereferia-switchs">Переходники</td>
		</tr>
		<tr>
			<td class="normalized_items_td"> 
				<div 
				v-for="(appliances, index) in AppliancesTdThree" 
				:key="appliances.id" 
				class="td_max_Width"
				:class="{ selected: isItemSelected('AppliancesTdThreeSelected', index) }"
				@click="toggleItemSelection('AppliancesTdThreeSelected', index)"
				>
				<span class="selected_items_null">{{ appliances }}</span>
				</div>
			</td>
			<td class="normalized_items_td"> 
				<div 
				v-for="(wires, index) in WiresTdSecond" 
				:key="wires.id" 
				class="td_max_Width"
				:class="{ selected: isItemSelected('WiresTdSecondSelected', index) }"
				@click="toggleItemSelection('WiresTdSecondSelected', index)"
				>
				<span class="selected_items_null">{{ wires }}</span>
				</div>
			</td>
		</tr>
		
		

		<tr>
			<td class="catalog printers">Принтер, картридж</td>
			<td class="catalog printers">Инструменты</td>
		</tr>

		<tr>
			<td class="normalized_items_td"> 
				<div 
				v-for="(periphery, index) in PeripheryTdThree" 
				:key="periphery.id" 
				:class="{ selected: isItemSelected('periphery_Three', index) }" 
				class="td_max_Width" 
				@click="toggleItemSelection('periphery_Three', index)"
				>
					<span class="selected_items_null">{{ periphery }}</span>
			</div>
			</td>
			<td class="normalized_items_td"> 
				<div 
				v-for="(male, index) in MaleTdThree" 
				:key="male.id" 
				:class="{ selected: isItemSelected('male_Three', index) }" 
				class="td_max_Width" 
				@click="toggleItemSelection('male_Three', index)"
				>
				<span class="selected_items_null">{{ male }}</span>
			</div>
			</td>
			
		</tr>

		<tr>
			<td class="catalog raznoe" colspan="2">Разное</td>
		</tr>
		<tr>
			<td class="normalized_items_td" colspan="2"> 
				<div 
				v-for="(different, index) in DifferentTdFirst" 
				:key="different.id" 
				class="td_max_Width"
				:class="{ selected: isItemSelected('DifferentTdFirstSelected', index) }"
				@click="toggleItemSelection('DifferentTdFirstSelected', index)"
				>
				<span class="selected_items_null">{{ different }}</span>
				</div>
			</td>
		</tr>
	</tbody>
	
</table>
<div class="button_list_all">
<button class="printButton green" @click="printAll">Расспечатать</button>
<button class="printButton" @click="exportToPDF">Скачать</button>
<button class="printButton red" @click="deleteAll">Удалить все</button>
<button class="printButton pre-red" @click="deleteSelectedItems">Удалить выбранные</button>
</div>
</div>
</div>

</template>


<script>
import { mapGetters } from 'vuex';
import html2pdf from 'html2pdf.js'




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

		itemSelections: {

		periphery_Three: {},
        male_Three: {},
		
		cover_Iphone: {},
		glass_Iphone: {},
		
		cover_Redmi: {},
		glass_Redmi: {},
		
		cover_Samsung_td: {},
		glass_Samsung_td: {},

		ChargingTdFirstSelected: {},
		
		ChargingTdThreeSelected: {},
		ChargingTdSecSelected: {},

		DifferentTdThreeSelected: {},
		WiresTdFirstSelected:{},
		
		AppliancesTdFirstSelected:{},
		WiresTdThreeSelected:{},

		AppliancesTdSecondSelected:{},
		MaleTdSecondSelected:{},

		MaleTdFirstSelected:{},
		PeripheryTdSecondSelected:{},

		PeripheryTdFirstSelected:{},
		DifferentTdSecondSelected:{},

		AppliancesTdThreeSelected:{},
		WiresTdSecondSelected:{},

		DifferentTdFirstSelected:{}

      },
    }
  },

 created() {

		// LOCALSTORAGE SELECTED ITEMS
	const savedSelections = localStorage.getItem('itemSelectionsItems');
    if (savedSelections) {
      this.itemSelections = JSON.parse(savedSelections);
    }


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
	
	isItemSelected(type, index) {
  if (this.itemSelections[type] && this.itemSelections[type][index]) {
    return this.itemSelections[type][index];
  }
  return false;
},
    
	
	toggleItemSelection(type, index) {
      this.$set(this.itemSelections[type], index, !this.itemSelections[type][index]);
	this.saveSelectionsToLocal();
    
	
	
	},
	
	
	
	
	saveSelectionsToLocal() {
      localStorage.setItem('itemSelectionsItems', JSON.stringify(this.itemSelections));
    },
	
	
	
	
	deleteSelectedItems(){
		
	for (let key in this.itemSelections) {
    this.itemSelections[key] = {};}

		localStorage.removeItem("itemSelectionsItems")
	},


		printAll(){
      window.print()
    },

	generateRandomNumber() {
		let randomNumber = Math.floor(Math.random() * 100000);
  if (randomNumber < 10000) {
    randomNumber = '0' + randomNumber; // Добавляем ведущий ноль, если число имеет меньше пяти цифр
  }
  return randomNumber.toString().substring(0, 5); // Возвращаем первые пять символов числа
	},
	
	exportToPDF() {
      const element = this.$refs.download_page
		let randomName = this.generateRandomNumber()
      html2pdf()
        .set({
			margin: 4,
          filename: `${randomName}.pdf`,
          html2canvas: { scale: 5 },
          pagebreak: { mode: ['avoid-all', 'css', 'legacy'] },
          jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
        })
        .from(element)
        .save(`${randomName}.pdf`)
    },

	deleteAll(){
		this.CoversTdSamsung = [],
		localStorage.removeItem("samsungCoversLocalStorage");
		this.CoversTdIphone = [],
		localStorage.removeItem("iphoneCoversLocalStorage");
		this.CoversTdRedmi = [],
		localStorage.removeItem("redmiCoversLocalStorage");

		this.GlassTdSamsung = [],
		localStorage.removeItem("samsungGlassLocalStorage");
		this.GlassTdIphone = [],
		localStorage.removeItem("iphoneGlassLocalStorage");
		this.GlassTdRedmi = [],
		localStorage.removeItem("redmiGlassLocalStorage");

		this.PeripheryTdFirst = [],
		localStorage.removeItem("firstPeripheryLocalStorage");
		this.PeripheryTdSecond = [],
		localStorage.removeItem("secondPeripheryLocalStorage");
		this.PeripheryTdThree = [],
		localStorage.removeItem("threePeripheryLocalStorage");

		this.WiresTdFirst = [],
		localStorage.removeItem("firstWiresLocalStorage");
		this.WiresTdSecond = [],
		localStorage.removeItem("secondWiresLocalStorage");
		this.WiresTdThree = [],
		localStorage.removeItem("threeWiresLocalStorage");

		this.AppliancesTdFirst = [],
		localStorage.removeItem("firstAppliancesLocalStorage");
		this.AppliancesTdSecond = [],
		localStorage.removeItem("secondAppliancesLocalStorage");
		this.AppliancesTdThree = [],
		localStorage.removeItem("threeAppliancesLocalStorage");

		this.MaleTdFirst = [],
		localStorage.removeItem("firstMaleLocalStorage");
		this.MaleTdSecond = [],
		localStorage.removeItem("secondMaleLocalStorage");
		this.MaleTdThree = [],
		localStorage.removeItem("threeMaleLocalStorage");

		this.DifferentTdFirst = [],
		localStorage.removeItem("firstDifferentLocalStorage");
		this.DifferentTdSecond = [],
		localStorage.removeItem("secondDifferentLocalStorage");
		this.DifferentTdThree = [],
		localStorage.removeItem("threeDifferentLocalStorage");

		this.ChargingTdFirst = [],
		localStorage.removeItem("firstChargingLocalStorage");
		this.ChargingTdSecond = [],
		localStorage.removeItem("secondChargingLocalStorage");
		this.ChargingTdThree = [],
		localStorage.removeItem("threeChargingLocalStorage");
	},
	}	
}
</script>


<style>
@import "../assets/syle_print_page.css";


</style>