const STORAGE_KEY="packtrail_v4";

const defaultData={
trips:[],
gear:[
{category:"Camping",items:["Tent","Air mattress","Air pump","Camping chairs","Camp stove","Cooler"]},
{category:"Fishing",items:["Fishing rod","Tackle box","Landing net"]},
{category:"Electronics",items:["Power bank","Flashlight","USB-C charger"]}
],
customLibrary:{}
};

const tripTypes=[
{id:"camping",name:"Camping",emoji:"🏕"},{id:"vacation",name:"Vacation",emoji:"✈️"},
{id:"roadtrip",name:"Road Trip",emoji:"🚗"},{id:"hiking",name:"Hiking",emoji:"🥾"},
{id:"fishing",name:"Fishing",emoji:"🎣"},{id:"beach",name:"Beach",emoji:"🏖"},
{id:"winter",name:"Winter Trip",emoji:"🎿"},{id:"other",name:"Other",emoji:"➕"}];

const activities=["Fishing","Hiking","Swimming","Cooking","Ski / Snowboard","Diving / Snorkeling","Rental Car","Cruise","City Trip","Business Trip","Formal Event","Photography","Theme Park","Cycling","Pets","Kids"];

const packingDatabase={
"Clothing":[{name:"T-shirt",qty:"shirts",minNights:1},{name:"Underwear",qty:"underwear",minNights:1},{name:"Socks",qty:"socks",minNights:1},{name:"Pants / shorts",qty:"pants",minNights:1},{name:"Hoodie / sweater",qty:1},{name:"Rain jacket",qty:1},{name:"Hat",qty:1},{name:"Sleepwear",qty:1,minNights:1}],
"Personal Hygiene":[{name:"Toothbrush",qty:"people",minNights:1},{name:"Toothpaste",qty:1,minNights:1},{name:"Deodorant",qty:"people",minNights:1},{name:"Soap / body wash",qty:1,minNights:2},{name:"Shampoo",qty:1,minNights:2},{name:"Towel",qty:"people",minNights:1},{name:"Sunscreen",qty:1},{name:"Bug spray",qty:1}],
"Electronics":[{name:"Phone",qty:"people"},{name:"Phone charger",qty:"people",minNights:1},{name:"Power bank",qty:1},{name:"Flashlight",qty:1,outdoors:true},{name:"Headlamp",qty:1,outdoors:true}],
"Health & Safety":[{name:"First aid kit",qty:1},{name:"Prescription medication",qty:1},{name:"Pain reliever",qty:1},{name:"Hand sanitizer",qty:1}],
"Shelter & Sleeping":[{name:"Tent",qty:1},{name:"Rainfly",qty:1},{name:"Tent stakes",qty:1},{name:"Ground tarp",qty:1},{name:"Sleeping bag",qty:"people",minNights:1},{name:"Pillow",qty:"people",minNights:1},{name:"Air mattress",qty:1,minNights:1},{name:"Air pump",qty:1,minNights:1},{name:"Camping chair",qty:"people"},{name:"Mallet",qty:1}],
"Cooking":[{name:"Camp stove",qty:1},{name:"Fuel / propane",qty:1},{name:"Lighter",qty:2},{name:"Frying pan",qty:1},{name:"Pot",qty:1},{name:"Plate",qty:"people"},{name:"Cup / mug",qty:"people"},{name:"Cutlery",qty:"people"},{name:"Knife",qty:1},{name:"Cutting board",qty:1}],
"Food & Drinks":[{name:"Drinking water",qty:1},{name:"Coffee / tea",qty:1},{name:"Breakfast food",qty:1,minNights:1},{name:"Lunch food",qty:1},{name:"Dinner food",qty:1},{name:"Snacks",qty:1},{name:"Cooler ice",qty:1}],
"Travel Documents":[{name:"Passport / ID",qty:"people"},{name:"Booking confirmations",qty:1},{name:"Travel insurance",qty:1},{name:"Wallet",qty:"people"}],
"Fishing":[{name:"Fishing rod",qty:1},{name:"Tackle box",qty:1},{name:"Landing net",qty:1},{name:"Fishing licence",qty:1},{name:"Bait / lures",qty:1},{name:"Pliers",qty:1}],
"Hiking":[{name:"Daypack",qty:1},{name:"Hiking boots",qty:"people"},{name:"Water bottle",qty:"people"},{name:"Trail snacks",qty:1},{name:"Trekking poles",qty:1},{name:"Offline map",qty:1}],
"Swimming":[{name:"Swimsuit",qty:"people"},{name:"Beach towel",qty:"people"},{name:"Water shoes",qty:"people"},{name:"Dry bag",qty:1}],
"Beach":[{name:"Beach blanket",qty:1},{name:"Umbrella / shade",qty:1},{name:"Sunglasses",qty:"people"},{name:"Flip-flops",qty:"people"},{name:"Swimsuit",qty:"people"}],
"Winter Gear":[{name:"Winter jacket",qty:"people"},{name:"Warm boots",qty:"people"},{name:"Gloves",qty:"people"},{name:"Warm hat",qty:"people"},{name:"Thermal base layer",qty:"people"},{name:"Hand warmers",qty:1}],
"Road Trip":[{name:"Driver's licence",qty:1},{name:"Vehicle insurance",qty:1},{name:"Car charger",qty:1},{name:"Emergency roadside kit",qty:1},{name:"Phone mount",qty:1},{name:"Reusable water bottle",qty:"people"}],
"Ski / Snowboard":[{name:"Ski jacket",qty:"people"},{name:"Snow pants",qty:"people"},{name:"Ski socks",qty:"people"},{name:"Thermal base layer",qty:"people"},{name:"Gloves",qty:"people"},{name:"Goggles",qty:"people"},{name:"Helmet",qty:"people"},{name:"Ski / snowboard equipment",qty:"people"},{name:"Lift pass",qty:"people"},{name:"Equipment rental confirmation",qty:1}],
"Diving / Snorkeling":[{name:"Mask",qty:"people"},{name:"Snorkel",qty:"people"},{name:"Fins",qty:"people"},{name:"Rash guard",qty:"people"},{name:"Dry bag",qty:1},{name:"Dive certification card",qty:1},{name:"Dive computer",qty:1},{name:"Underwater camera",qty:1},{name:"Dive booking confirmation",qty:1}],
"Rental Car":[{name:"Driver's licence",qty:1},{name:"Credit card",qty:1},{name:"Rental confirmation",qty:1},{name:"Insurance documents",qty:1},{name:"Phone mount",qty:1},{name:"Car charger",qty:1},{name:"Offline map",qty:1}],
"Cruise":[{name:"Cruise documents",qty:1},{name:"Passport",qty:"people"},{name:"Formal clothing",qty:"people"},{name:"Swimsuit",qty:"people"},{name:"Motion sickness medication",qty:1}],
"City Trip":[{name:"Comfortable walking shoes",qty:"people"},{name:"Small backpack",qty:1},{name:"Transit card",qty:1},{name:"Offline map",qty:1},{name:"Reusable water bottle",qty:"people"}],
"Business Trip":[{name:"Laptop",qty:1},{name:"Laptop charger",qty:1},{name:"Work documents",qty:1},{name:"Business clothing",qty:2},{name:"Notebook",qty:1}],
"Formal Event":[{name:"Formal outfit",qty:"people"},{name:"Dress shoes",qty:"people"},{name:"Accessories",qty:"people"},{name:"Garment bag",qty:1}],
"Photography":[{name:"Camera",qty:1},{name:"Camera charger",qty:1,minNights:1},{name:"Memory card",qty:1},{name:"Tripod",qty:1},{name:"Camera batteries",qty:2}],
"Theme Park":[{name:"Tickets",qty:1},{name:"Portable charger",qty:1},{name:"Water bottle",qty:"people"},{name:"Comfortable shoes",qty:"people"},{name:"Small backpack",qty:1}],
"Cycling":[{name:"Bike helmet",qty:"people"},{name:"Bike gloves",qty:"people"},{name:"Water bottle",qty:"people"},{name:"Bike repair kit",qty:1}],
"Pets":[{name:"Pet food",qty:1},{name:"Water bowl",qty:1},{name:"Leash",qty:1},{name:"Waste bags",qty:1},{name:"Pet bed / blanket",qty:1,minNights:1}],
"Kids":[{name:"Kids clothing",qty:1},{name:"Favorite toy",qty:1},{name:"Kids snacks",qty:1},{name:"Wipes",qty:1},{name:"Entertainment",qty:1}]
};

let data=loadData();
let state={page:"home",history:[],newTrip:null,activeTripId:null,editingExistingTrip:false};

const screen=document.getElementById("screen");
const menuButton=document.getElementById("menuBtn");
const drawer=document.getElementById("drawer");
const drawerOverlay=document.getElementById("drawerOverlay");
const backButton=document.getElementById("backBtn");
const topTitle=document.getElementById("topTitle");
const toast=document.getElementById("toast");
const modalOverlay=document.getElementById("modalOverlay");

function loadData(){
 const s=localStorage.getItem(STORAGE_KEY);
 if(!s)return structuredClone(defaultData);
 try{
   const parsed=JSON.parse(s);
   if(!parsed.customLibrary)parsed.customLibrary={};
   return parsed;
 }catch{return structuredClone(defaultData)}
}
function saveData(){localStorage.setItem(STORAGE_KEY,JSON.stringify(data))}
function closeMenu(){drawer.classList.remove("open");drawerOverlay.classList.add("hidden")}
menuButton.onclick=()=>{drawer.classList.add("open");drawerOverlay.classList.remove("hidden")};
drawerOverlay.onclick=closeMenu;
document.querySelectorAll("[data-nav]").forEach(b=>b.onclick=()=>{closeMenu();state.history=[];state.page=b.dataset.nav;render()});
function navigate(p){if(state.page!==p)state.history.push(state.page);state.page=p;render()}
backButton.onclick=()=>{if(state.page==="packing"){const t=activeTrip();if(t){state.newTrip=structuredClone(t);state.editingExistingTrip=true;state.page="categories";render();return}}state.page=state.history.length?state.history.pop():"home";render()};

function allCategoryNames(){return [...new Set([...Object.keys(packingDatabase),...Object.keys(data.customLibrary||{})])]}
function libraryForCategory(c){return [...(packingDatabase[c]||[]),...(data.customLibrary[c]||[])]}

function render(){
 window.scrollTo(0,0);
 const noBack=["home","trips","gear","shopping","settings","about"];
 backButton.classList.toggle("hidden",noBack.includes(state.page));
 topTitle.textContent={home:"PackTrail",tripType:"New Trip",tripDetails:"Trip Details",categories:"Categories",packing:"Packing List",trips:"My Trips",gear:"My Gear",shopping:"Shopping List",settings:"Settings",about:"About"}[state.page]||"PackTrail";
 ({home:renderHome,tripType:renderTripTypes,tripDetails:renderTripDetails,categories:renderCategories,packing:renderPackingList,trips:renderTrips,gear:renderGear,shopping:renderShopping,settings:renderSettings,about:renderAbout}[state.page]||renderHome)();
 setTimeout(()=>window.scrollTo(0,0),0)
}

function renderHome(){screen.innerHTML='<div class="home"><button class="pack-button" id="newTripButton">Pack New Trip</button></div>';newTripButton.onclick=()=>{state.newTrip=null;state.editingExistingTrip=false;state.history=["home"];state.page="tripType";render()}}
function renderTripTypes(){screen.innerHTML='<h1 class="page-title">What kind of trip?</h1><p class="page-subtitle">Choose the closest option. Everything can be customized later.</p><div class="trip-grid">'+tripTypes.map(t=>`<button class="trip-type" data-trip-type="${t.id}"><span class="trip-emoji">${t.emoji}</span><span class="trip-label">${t.name}</span></button>`).join("")+"</div>";document.querySelectorAll("[data-trip-type]").forEach(b=>b.onclick=()=>{const t=tripTypes.find(x=>x.id===b.dataset.tripType);state.newTrip={id:String(Date.now()),type:t.id,typeName:t.name,emoji:t.emoji,name:"My "+t.name+" Trip",duration:3,season:"Summer",people:2,activities:[],categories:[]};navigate("tripDetails")})}

function renderTripDetails(){
 const t=state.newTrip;if(!t){state.page="tripType";return render()}
 screen.innerHTML=`<h1 class="page-title">${t.emoji} ${t.typeName}</h1><p class="page-subtitle">Tell us a little about this trip.</p><div class="stack">
 <div class="card"><label class="field-label">Trip name</label><input id="tripName" class="text-input" value="${esc(t.name)}"></div>
 <div class="card"><label class="field-label">Duration</label><div class="counter"><button id="minusDuration">−</button><div class="counter-value">${t.duration} ${t.duration===1?"day":"days"}</div><button id="plusDuration">+</button></div>${t.duration===1?'<p class="small-note">1-day trip is treated as no overnight stay.</p>':""}</div>
 <div class="card"><label class="field-label">Season</label><div class="chips">${["Spring","Summer","Fall","Winter"].map(x=>`<button class="chip ${t.season===x?"active":""}" data-season="${x}">${x}</button>`).join("")}</div></div>
 <div class="card"><label class="field-label">People</label><div class="counter"><button id="minusPeople">−</button><div class="counter-value">${t.people}</div><button id="plusPeople">+</button></div></div>
 <div class="card"><label class="field-label">What will you do on this trip?</label><div class="chips">${activities.map(x=>`<button class="chip ${t.activities.includes(x)?"active":""}" data-activity="${x}">${x}</button>`).join("")}</div></div>
 </div><div class="button-row"><button id="continueDetails" class="primary-button">Continue</button></div>`;
 const keep=()=>t.name=document.getElementById("tripName").value;
 minusDuration.onclick=()=>{keep();t.duration=Math.max(1,t.duration-1);renderTripDetails()};
 plusDuration.onclick=()=>{keep();t.duration++;renderTripDetails()};
 minusPeople.onclick=()=>{keep();t.people=Math.max(1,t.people-1);renderTripDetails()};
 plusPeople.onclick=()=>{keep();t.people++;renderTripDetails()};
 document.querySelectorAll("[data-season]").forEach(b=>b.onclick=()=>{keep();t.season=b.dataset.season;renderTripDetails()});
 document.querySelectorAll("[data-activity]").forEach(b=>b.onclick=()=>{keep();const a=b.dataset.activity;t.activities=t.activities.includes(a)?t.activities.filter(x=>x!==a):[...t.activities,a];renderTripDetails()});
 continueDetails.onclick=()=>{t.name=tripName.value.trim()||"My Trip";t.categories=suggestedCategories(t);navigate("categories")}
}

function suggestedCategories(t){
 let c=["Clothing","Personal Hygiene","Electronics","Health & Safety"];
 if(t.type==="camping")c=["Shelter & Sleeping",...c,"Cooking","Food & Drinks"];
 if(t.type==="roadtrip")c.push("Road Trip","Food & Drinks");
 if(t.type==="vacation")c.push("Travel Documents");
 if(t.type==="fishing")c.push("Fishing");
 if(t.type==="hiking")c.push("Hiking");
 if(t.type==="beach")c.push("Beach");
 if(t.type==="winter"||t.season==="Winter")c.push("Winter Gear");
 t.activities.forEach(a=>{if(allCategoryNames().includes(a))c.push(a)});
 return[...new Set(c)]
}
function categoryOption(c,on){return`<label class="category-option"><input type="checkbox" class="category-checkbox" value="${esc(c)}" ${on?"checked":""}><span class="category-name">${c}</span></label>`}

function renderCategories(){
 const t=state.newTrip;if(!t){state.page="tripType";return render()}
 const rec=suggestedCategories(t),sel=t.categories?.length?t.categories:rec,all=allCategoryNames();
 screen.innerHTML=`<h1 class="page-title">Choose categories</h1><p class="page-subtitle">Remove anything you do not need before generating the list.</p>
 <div class="section-title">Recommended</div><div class="stack">${rec.map(c=>categoryOption(c,sel.includes(c))).join("")}</div>
 <div class="section-title">Other categories</div><div class="stack">${all.filter(c=>!rec.includes(c)).map(c=>categoryOption(c,sel.includes(c))).join("")}</div>
 <div class="button-row"><button id="createPackingList" class="primary-button">${state.editingExistingTrip?"Update List":"Create List"}</button></div>`;
 createPackingList.onclick=()=>{
   t.categories=[...document.querySelectorAll(".category-checkbox:checked")].map(x=>x.value);
   if(!t.categories.length)return showToast("Choose at least one category");
   const items=createItems(t);
   if(state.editingExistingTrip){
     const old=data.trips.find(x=>x.id===t.id);preserve(old,items);Object.assign(old,t,{items});state.activeTripId=old.id
   }else{t.items=items;data.trips.unshift(t);state.activeTripId=t.id}
   saveData();state.editingExistingTrip=false;state.newTrip=null;state.page="packing";render()
 }
}

function includeItem(d,t){const nights=Math.max(0,t.duration-1);if(d.minNights&&nights<d.minNights)return false;if(d.outdoors&&!["camping","hiking","fishing"].includes(t.type)&&t.duration===1)return false;return true}
function qty(q,t){const n=Math.max(0,t.duration-1);if(q==="people")return t.people;if(["shirts","underwear","socks"].includes(q))return Math.max(1,Math.min(n+1,8));if(q==="pants")return t.duration<=2?1:t.duration<=5?2:3;return q||1}
function createItems(t){
 const r={};
 t.categories.forEach(c=>r[c]=libraryForCategory(c).filter(d=>includeItem(d,t)).map(d=>({id:String(Date.now())+Math.random(),name:d.name,required:qty(d.qty,t),packed:0,needToBuy:0,bought:0})));
 return r
}
function preserve(old,items){if(!old)return;Object.keys(items).forEach(c=>items[c].forEach(n=>{const o=(old.items[c]||[]).find(x=>x.name===n.name);if(o){n.packed=Math.min(o.packed||0,n.required);n.needToBuy=o.needToBuy||0;n.bought=Math.min(o.bought||0,n.needToBuy)}}))}
function activeTrip(){return data.trips.find(t=>t.id===state.activeTripId)}
function totals(t){const a=Object.values(t.items).flat();return{required:a.reduce((s,x)=>s+x.required,0),packed:a.reduce((s,x)=>s+Math.min(x.packed,x.required),0)}}
function findItem(t,c,id){return(t.items[c]||[]).find(x=>x.id===id)}

function cleanEmptyCategories(t){
 Object.keys(t.items).forEach(c=>{if(!t.items[c]||t.items[c].length===0)delete t.items[c]});
 t.categories=Object.keys(t.items)
}

function renderPackingList(){
 const t=activeTrip();if(!t){state.page="trips";return render()}
 cleanEmptyCategories(t);saveData();
 const z=totals(t),p=z.required?Math.round(z.packed/z.required*100):0;
 screen.innerHTML=`<h1 class="page-title">${t.emoji} ${t.name}</h1><div class="trip-info">${t.duration} ${t.duration===1?"day":"days"} · ${t.season} · ${t.people} ${t.people===1?"person":"people"}</div>
 <div class="progress"><div class="progress-bar" style="width:${p}%"></div></div><div class="progress-text">${z.packed} of ${z.required} packed · ${p}%</div>
 ${Object.keys(t.items).map(c=>packCategory(t,c)).join("")}
 <div class="button-row"><button id="addCategoryButton" class="secondary-button">+ Add Category</button></div>`;
 attachPacking(t);
 addCategoryButton.onclick=()=>openAddCategory(t)
}

function packCategory(t,c){
 const a=t.items[c],pk=a.reduce((s,x)=>s+Math.min(x.packed,x.required),0),rq=a.reduce((s,x)=>s+x.required,0);
 return`<section class="pack-category"><div class="pack-category-header"><div class="pack-category-title">${c}</div><div class="category-count">${pk} / ${rq}</div></div>
 <div class="pack-items">${a.map(x=>{const done=x.packed>=x.required;return`<div class="pack-item ${done?"completed":""}">
 <input class="pack-check" type="checkbox" data-check-pack data-category="${esc(c)}" data-id="${x.id}" ${done?"checked":""}>
 <div class="pack-item-main"><div class="item-name">${done?"✓ ":""}${x.name}</div><div class="item-meta">
 <span class="item-pill ${done?"complete":""}">${done?"✓ Packed":"Packed"} ${x.packed} / ${x.required}</span>
 ${x.needToBuy?`<span class="item-pill buy">🛒 ${x.bought} / ${x.needToBuy} bought</span>`:""}</div></div>
 <div class="item-actions"><button class="quick-action-button shopping" data-buy data-category="${esc(c)}" data-id="${x.id}">🛒</button>
 <button class="quick-action-button edit" data-edit data-category="${esc(c)}" data-id="${x.id}">✎</button>
 <button class="quick-action-button delete" data-del data-category="${esc(c)}" data-id="${x.id}">🗑</button></div></div>`}).join("")}
 <button class="add-item" data-add="${esc(c)}">+ Add item</button></div></section>`
}

function attachPacking(t){
 document.querySelectorAll("[data-check-pack]").forEach(b=>b.onchange=()=>{
   const x=findItem(t,b.dataset.category,b.dataset.id);if(!x)return;
   if(!b.checked){x.packed=0;saveData();renderPackingList();return}
   if(x.required===1){x.packed=1;saveData();renderPackingList();return}
   openPackedQuantity(t,b.dataset.category,x)
 });
 document.querySelectorAll("[data-buy]").forEach(b=>b.onclick=()=>openBuy(t,b.dataset.category,findItem(t,b.dataset.category,b.dataset.id)));
 document.querySelectorAll("[data-edit]").forEach(b=>b.onclick=()=>openEditor(t,b.dataset.category,findItem(t,b.dataset.category,b.dataset.id)));
 document.querySelectorAll("[data-del]").forEach(b=>b.onclick=()=>{
   const c=b.dataset.category;t.items[c]=t.items[c].filter(x=>x.id!==b.dataset.id);
   if(t.items[c].length===0)delete t.items[c];
   t.categories=Object.keys(t.items);saveData();showToast("Item removed");renderPackingList()
 });
 document.querySelectorAll("[data-add]").forEach(b=>b.onclick=()=>openEditor(t,b.dataset.add,null))
}

function openPackedQuantity(t,c,x){
 let q=x.required;
 modalOverlay.innerHTML=`<div class="modal-sheet"><h2 class="modal-title">How many packed?</h2><p class="modal-description">${x.name}</p>
 <div class="modal-counter"><button id="qm">−</button><div id="qv" class="modal-counter-value">${q} / ${x.required}</div><button id="qp">+</button></div>
 <div class="button-row"><button id="qc" class="secondary-button">Cancel</button><button id="qs" class="primary-button">OK</button></div></div>`;
 modalOverlay.classList.remove("hidden");
 const ref=()=>qv.textContent=q+" / "+x.required;
 qm.onclick=()=>{q=Math.max(0,q-1);ref()};qp.onclick=()=>{q=Math.min(x.required,q+1);ref()};
 qc.onclick=()=>{closeModal();renderPackingList()};
 qs.onclick=()=>{x.packed=q;saveData();closeModal();renderPackingList()}
}

function openBuy(t,c,x){
 let q=x.needToBuy||Math.max(1,x.required-x.packed);
 modalOverlay.innerHTML=`<div class="modal-sheet"><h2 class="modal-title">🛒 Add to Shopping List</h2><p class="modal-description">${x.name}</p>
 <div class="modal-field"><label class="field-label">How many do you need to buy?</label><div class="modal-counter"><button id="qm">−</button><div id="qv" class="modal-counter-value">${q}</div><button id="qp">+</button></div></div>
 <div class="button-row"><button id="qc" class="secondary-button">Cancel</button><button id="qs" class="primary-button">Add to Shopping</button></div></div>`;
 modalOverlay.classList.remove("hidden");
 const ref=()=>qv.textContent=q;qm.onclick=()=>{q=Math.max(1,q-1);ref()};qp.onclick=()=>{q++;ref()};qc.onclick=closeModal;
 qs.onclick=()=>{x.needToBuy=q;x.bought=Math.min(x.bought||0,q);saveData();closeModal();showToast("Added to Shopping List");renderPackingList()}
}

function openEditor(t,currentCategory,x){
 let d={name:x?.name||"",required:x?.required||1,packed:x?.packed||0,needToBuy:x?.needToBuy||0};
 const cats=allCategoryNames();
 const currentOptions=[...new Set([...Object.keys(t.items),...cats])];
 modalOverlay.innerHTML=`<div class="modal-sheet"><h2 class="modal-title">${x?"Edit Item":"Add Item"}</h2>
 <div class="modal-field"><label class="field-label">Item name</label><input id="en" class="text-input" value="${esc(d.name)}"></div>
 <div class="modal-field"><label class="field-label">Required quantity</label><div class="modal-counter"><button id="rm">−</button><div id="rv" class="modal-counter-value">${d.required}</div><button id="rp">+</button></div></div>
 <div class="modal-field"><label class="field-label">Category</label><select id="ec" class="select-input">
 <option value="__new__">+ New category</option>${currentOptions.map(n=>`<option value="${esc(n)}" ${n===currentCategory?"selected":""}>${n}</option>`).join("")}</select></div>
 <div class="button-row"><button id="cancel" class="secondary-button">Cancel</button><button id="save" class="primary-button">Save</button></div></div>`;
 modalOverlay.classList.remove("hidden");
 const ref=()=>rv.textContent=d.required;rm.onclick=()=>{d.required=Math.max(1,d.required-1);d.packed=Math.min(d.packed,d.required);ref()};rp.onclick=()=>{d.required++;ref()};cancel.onclick=closeModal;
 save.onclick=()=>{
   const n=en.value.trim();if(!n)return showToast("Enter an item name");
   let target=ec.value;
   if(target==="__new__"){target=prompt("New category name");if(!target)return}
   if(!t.items[target])t.items[target]=[];
   if(x)t.items[currentCategory]=t.items[currentCategory].filter(i=>i.id!==x.id);
   const newItem={...(x||{}),id:x?.id||String(Date.now())+Math.random(),name:n,required:d.required,packed:Math.min(d.packed,d.required),needToBuy:d.needToBuy,bought:Math.min(x?.bought||0,d.needToBuy)};
   t.items[target].push(newItem);
   if(t.items[currentCategory]&&t.items[currentCategory].length===0)delete t.items[currentCategory];
   persistCustomItem(target,n,d.required);
   t.categories=Object.keys(t.items);saveData();closeModal();renderPackingList()
 }
}

function persistCustomItem(category,name,required){
 if(!data.customLibrary[category])data.customLibrary[category]=[];
 const exists=data.customLibrary[category].some(x=>x.name.toLowerCase()===name.toLowerCase());
 const builtIn=(packingDatabase[category]||[]).some(x=>x.name.toLowerCase()===name.toLowerCase());
 if(!exists&&!builtIn)data.customLibrary[category].push({name:name,qty:required})
 saveData()
}

function openAddCategory(t){
 const unused=allCategoryNames().filter(c=>!Object.keys(t.items).includes(c));
 modalOverlay.innerHTML=`<div class="modal-sheet"><h2 class="modal-title">Add Category</h2><div class="option-list">
 <button class="option-button new-category" id="newCategoryChoice">+ New Category</button>
 ${unused.map(c=>`<button class="option-button" data-category-choice="${esc(c)}">${c}</button>`).join("")}
 </div><div class="button-row"><button id="cancelCategory" class="secondary-button">Cancel</button></div></div>`;
 modalOverlay.classList.remove("hidden");
 cancelCategory.onclick=closeModal;
 newCategoryChoice.onclick=()=>{
   const name=prompt("New category name");if(!name)return;
   if(!data.customLibrary[name])data.customLibrary[name]=[];
   if(!t.items[name])t.items[name]=[];
   t.categories=Object.keys(t.items);saveData();closeModal();openEditor(t,name,null)
 };
 document.querySelectorAll("[data-category-choice]").forEach(b=>b.onclick=()=>{
   const c=b.dataset.categoryChoice;
   if(!t.items[c])t.items[c]=libraryForCategory(c).filter(d=>includeItem(d,t)).map(d=>({id:String(Date.now())+Math.random(),name:d.name,required:qty(d.qty,t),packed:0,needToBuy:0,bought:0}));
   t.categories=Object.keys(t.items);saveData();closeModal();renderPackingList()
 })
}

function closeModal(){modalOverlay.classList.add("hidden");modalOverlay.innerHTML=""}

function renderTrips(){
 screen.innerHTML=`<h1 class="page-title">My Trips</h1><p class="page-subtitle">Open any trip and continue packing.</p>
 ${data.trips.length?`<div class="stack">${data.trips.map(t=>{const z=totals(t);return`<div class="trip-row" data-trip="${t.id}"><div class="trip-icon">${t.emoji}</div><div class="trip-main"><div class="trip-name">${t.name}</div><div class="trip-small">${t.duration} ${t.duration===1?"day":"days"} · ${t.season} · ${z.packed} / ${z.required} packed</div></div><span class="badge">${z.required&&z.packed===z.required?"Done":"Active"}</span></div>`}).join("")}</div>`:'<div class="empty">No saved trips yet.</div>'}
 <div class="button-row"><button id="newTripFromTrips" class="primary-button">+ New Trip</button></div>`;
 document.querySelectorAll("[data-trip]").forEach(r=>r.onclick=()=>{state.activeTripId=r.dataset.trip;state.page="packing";render()});
 newTripFromTrips.onclick=()=>{state.newTrip=null;state.editingExistingTrip=false;state.history=["trips"];state.page="tripType";render()}
}

function renderShopping(){
 const groups=data.trips.map(t=>({t,items:Object.entries(t.items).flatMap(([c,a])=>a.filter(x=>x.needToBuy>0).map(x=>({c,x})))})).filter(g=>g.items.length);
 screen.innerHTML=`<h1 class="page-title">Shopping List</h1><p class="page-subtitle">Check items while shopping. Buying does not automatically mark them packed.</p>
 ${groups.length?groups.map(g=>`<section class="shopping-trip"><div class="section-title">${g.t.emoji} ${g.t.name}</div>${g.items.map(({c,x})=>`<div class="shopping-item ${x.bought>=x.needToBuy?"bought":""}"><input type="checkbox" data-check data-trip="${g.t.id}" data-category="${esc(c)}" data-id="${x.id}" ${x.bought>=x.needToBuy?"checked":""}><div><div class="shopping-name">${x.name}</div><div class="shopping-small">${c}</div></div><div class="shopping-qty">×${x.needToBuy}</div></div>`).join("")}</section>`).join(""):'<div class="empty">Nothing to buy right now.</div>'}`;
 document.querySelectorAll("[data-check]").forEach(b=>b.onchange=()=>{const t=data.trips.find(x=>x.id===b.dataset.trip),x=findItem(t,b.dataset.category,b.dataset.id);x.bought=b.checked?x.needToBuy:0;saveData();renderShopping()})
}

function renderGear(){
 screen.innerHTML=`<h1 class="page-title">My Gear</h1><p class="page-subtitle">Save equipment you already own.</p><div class="stack">${data.gear.map((g,gi)=>`<section class="pack-category"><div class="pack-category-header"><div class="pack-category-title">${g.category}</div></div><div class="pack-items">${g.items.map((x,ii)=>`<div class="gear-row"><div class="trip-main">${x}</div><button class="quick-action-button delete" data-rg="${gi}:${ii}">🗑</button></div>`).join("")}<button class="add-item" data-ag="${gi}">+ Add gear</button></div></section>`).join("")}</div><div class="button-row"><button id="addGearCategory" class="secondary-button">+ Add Category</button></div>`;
 document.querySelectorAll("[data-ag]").forEach(b=>b.onclick=()=>{const n=prompt("Gear name");if(n){data.gear[+b.dataset.ag].items.push(n);saveData();renderGear()}});
 document.querySelectorAll("[data-rg]").forEach(b=>b.onclick=()=>{const[g,i]=b.dataset.rg.split(":").map(Number);data.gear[g].items.splice(i,1);saveData();renderGear()});
 addGearCategory.onclick=()=>{const n=prompt("Category name");if(n){data.gear.push({category:n,items:[]});saveData();renderGear()}}
}

function renderSettings(){
 screen.innerHTML='<h1 class="page-title">Settings</h1><div class="card"><p>Prototype settings.</p><p class="small-note">Resetting clears all test data, custom categories and custom items.</p><button id="resetPrototype" class="delete-button">Reset Prototype</button></div>';
 resetPrototype.onclick=()=>{if(confirm("Delete all saved trips and reset?")){localStorage.removeItem(STORAGE_KEY);data=structuredClone(defaultData);state={page:"home",history:[],newTrip:null,activeTripId:null,editingExistingTrip:false};render()}}
}
function renderAbout(){screen.innerHTML='<h1 class="page-title">About PackTrail</h1><div class="card"><p>PackTrail helps prepare packing and shopping lists for trips and outdoor adventures.</p><p class="small-note">This is an early browser prototype.</p></div>'}
function showToast(m){toast.textContent=m;toast.classList.remove("hidden");clearTimeout(showToast.timer);showToast.timer=setTimeout(()=>toast.classList.add("hidden"),1800)}
function esc(v){return String(v||"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]))}
render();
