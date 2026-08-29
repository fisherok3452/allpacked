const STORAGE_KEY="allpacked_v21";
const ONBOARDING_KEY="allpacked_onboarding_v1";

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
{id:"camping",name:"Camping",emoji:"\ud83c\udfd5"},{id:"vacation",name:"Vacation",emoji:"\u2708\ufe0f"},
{id:"business",name:"Business Trip",emoji:"\ud83d\udcbc"},{id:"hiking",name:"Hiking",emoji:"\ud83e\udd7e"},
{id:"fishing",name:"Fishing",emoji:"\ud83c\udfa3"},{id:"beach",name:"Beach",emoji:"\ud83c\udfd6"},
{id:"winter",name:"Winter Trip",emoji:"\ud83c\udfbf"},{id:"picnic",name:"Picnic",emoji:"\ud83e\uddfa"},
{id:"family",name:"Family Gathering",emoji:"\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc66"},{id:"other",name:"Other",emoji:"\u2795"}];

const activities=["Fishing","Hiking","Swimming","Cooking","BBQ","Ski & Snowboard","Diving & Snorkeling","Rental Car","Cruise","City Trip","Formal Event","Photography","Theme Park","Cycling","Pets","Kids"];

const packingDatabase={
"Clothing":[
{name:"T-shirt",qty:"shirts",minNights:1,seasons:["Spring","Summer"]},
{name:"Long-sleeve shirt",qty:1,minNights:1,seasons:["Fall","Winter"]},
{name:"Underwear",qty:"underwear",minNights:1},{name:"Socks",qty:"socks",minNights:1},
{name:"Pants / shorts",qty:"pants",minNights:1,seasons:["Spring","Summer"]},
{name:"Pants",qty:"pants",minNights:1,seasons:["Fall","Winter"]},
{name:"Hoodie / sweater",qty:1,minNights:1,seasons:["Spring","Fall","Winter"]},
{name:"Light sweater / hoodie",qty:1,minNights:2,seasons:["Summer"],tripTypes:["camping","hiking","roadtrip"]},
{name:"Rain jacket",qty:1,seasons:["Spring","Fall"],tripTypes:["camping","hiking","fishing","roadtrip"]},
{name:"Rain jacket",qty:1,minNights:2,seasons:["Summer"],tripTypes:["camping","hiking","fishing"]},
{name:"Sun hat / cap",qty:1,seasons:["Spring","Summer"]},{name:"Warm hat",qty:1,seasons:["Fall","Winter"]},
{name:"Sleepwear",qty:1,minNights:1}],
"Toiletries":[
{name:"Toothbrush",qty:"people",minNights:1},{name:"Toothpaste",qty:1,minNights:1},{name:"Deodorant",qty:"people",minNights:1},
{name:"Soap / body wash",qty:1,minNights:2},{name:"Shampoo",qty:1,minNights:2},
{name:"Towel",qty:"people",minNights:1},{name:"Beach towel",qty:"people",activities:["Swimming"],maxDays:1},
{name:"Sunscreen",qty:1,seasons:["Spring","Summer"]},{name:"Sunscreen",qty:1,tripTypes:["beach"]},
{name:"Bug spray",qty:1,seasons:["Spring","Summer","Fall"],tripTypes:["camping","hiking","fishing"]}],
"Electronics":[{name:"Phone",qty:"people"},{name:"Phone charger",qty:"people",minNights:1},{name:"Power bank",qty:1,minDays:2},{name:"Power bank",qty:1,tripTypes:["hiking"]},{name:"Power bank",qty:1,activities:["Theme Park"]},{name:"Flashlight",qty:1,outdoors:true},{name:"Headlamp",qty:1,tripTypes:["camping","hiking"],minNights:1}],
"Health & Safety":[{name:"First aid kit",qty:1,tripTypes:["camping","hiking","fishing","roadtrip","beach"]},{name:"Prescription medication",qty:1},{name:"Pain reliever",qty:1,minNights:1},{name:"Hand sanitizer",qty:1}],
"Camping Gear":[{name:"Tent",qty:1},{name:"Rainfly",qty:1},{name:"Tent stakes",qty:1},{name:"Ground tarp",qty:1},{name:"Sleeping bag",qty:"people",minNights:1},{name:"Pillow",qty:"people",minNights:1},{name:"Air mattress",qty:1,minNights:1},{name:"Air pump",qty:1,minNights:1},{name:"Camping chair",qty:"people"},{name:"Mallet",qty:1}],
"Cooking":[{name:"Camp stove",qty:1},{name:"Fuel / propane",qty:1},{name:"Lighter",qty:2},{name:"Frying pan",qty:1},{name:"Pot",qty:1},{name:"Plate",qty:"people"},{name:"Cup / mug",qty:"people"},{name:"Cutlery",qty:"people"},{name:"Knife",qty:1},{name:"Cutting board",qty:1}],
"BBQ":[{name:"BBQ / grill",qty:1},{name:"Charcoal / propane",qty:1},{name:"Lighter / matches",qty:1},{name:"BBQ tongs",qty:1},{name:"Spatula",qty:1},{name:"Grill brush",qty:1},{name:"Aluminum foil",qty:1},{name:"Meat thermometer",qty:1},{name:"Plates",qty:"people"},{name:"Cutlery",qty:"people"},{name:"Napkins / paper towels",qty:1},{name:"Cooler",qty:1}],
"Food & Drinks":[{name:"Drinking water",qty:1},{name:"Coffee / tea",qty:1},{name:"Breakfast food",qty:1,minNights:1},{name:"Lunch food",qty:1},{name:"Dinner food",qty:1},{name:"Snacks",qty:1},{name:"Cooler ice",qty:1}],
"Travel Documents":[{name:"Passport / ID",qty:"people"},{name:"Booking confirmations",qty:1},{name:"Travel insurance",qty:1},{name:"Wallet",qty:"people"}],
"Fishing":[{name:"Fishing rod",qty:1},{name:"Tackle box",qty:1},{name:"Landing net",qty:1},{name:"Fishing licence",qty:1},{name:"Bait / lures",qty:1},{name:"Pliers",qty:1}],
"Hiking":[{name:"Daypack",qty:1},{name:"Hiking boots",qty:"people"},{name:"Water bottle",qty:"people"},{name:"Trail snacks",qty:1},{name:"Trekking poles",qty:1},{name:"Offline map",qty:1}],
"Swimming":[{name:"Swimsuit",qty:"people"},{name:"Beach towel",qty:"people"},{name:"Water shoes",qty:"people"},{name:"Dry bag",qty:1}],
"Beach":[{name:"Beach blanket",qty:1},{name:"Umbrella / shade",qty:1},{name:"Sunglasses",qty:"people"},{name:"Flip-flops",qty:"people"},{name:"Swimsuit",qty:"people"}],
"Winter Gear":[{name:"Winter jacket",qty:"people"},{name:"Warm boots",qty:"people"},{name:"Gloves",qty:"people"},{name:"Warm hat",qty:"people"},{name:"Thermal base layer",qty:"people"},{name:"Hand warmers",qty:1}],
"Car Essentials":[{name:"Driver's licence",qty:1},{name:"Vehicle insurance",qty:1},{name:"Car charger",qty:1},{name:"Emergency roadside kit",qty:1},{name:"Phone mount",qty:1},{name:"Reusable water bottle",qty:"people"}],"Flight Essentials":[{name:"Boarding pass",qty:"people"},{name:"Carry-on bag",qty:1},{name:"Luggage tag",qty:1},{name:"Headphones",qty:"people"},{name:"Travel pillow",qty:1},{name:"Empty water bottle",qty:"people"}],
"Ski & Snowboard":[{name:"Ski jacket",qty:"people"},{name:"Snow pants",qty:"people"},{name:"Ski socks",qty:"people"},{name:"Thermal base layer",qty:"people"},{name:"Gloves",qty:"people"},{name:"Goggles",qty:"people"},{name:"Helmet",qty:"people"},{name:"Ski / snowboard equipment",qty:"people"},{name:"Lift pass",qty:"people"},{name:"Equipment rental confirmation",qty:1}],
"Diving & Snorkeling":[{name:"Mask",qty:"people"},{name:"Snorkel",qty:"people"},{name:"Fins",qty:"people"},{name:"Rash guard",qty:"people"},{name:"Dry bag",qty:1},{name:"Dive certification card",qty:1},{name:"Dive computer",qty:1},{name:"Underwater camera",qty:1},{name:"Dive booking confirmation",qty:1}],
"Rental Car":[{name:"Driver's licence",qty:1},{name:"Credit card",qty:1},{name:"Rental confirmation",qty:1},{name:"Insurance documents",qty:1},{name:"Phone mount",qty:1},{name:"Car charger",qty:1},{name:"Offline map",qty:1}],
"Cruise":[{name:"Cruise documents",qty:1},{name:"Passport",qty:"people"},{name:"Formal clothing",qty:"people"},{name:"Swimsuit",qty:"people"},{name:"Motion sickness medication",qty:1}],
"City Trip":[{name:"Comfortable walking shoes",qty:"people"},{name:"Small backpack",qty:1},{name:"Transit card",qty:1},{name:"Offline map",qty:1},{name:"Reusable water bottle",qty:"people"}],
"Business Trip":[{name:"Laptop",qty:1},{name:"Laptop charger",qty:1},{name:"Work phone / charger",qty:1},{name:"Work documents",qty:1},{name:"Business clothing",qty:2},{name:"Dress shoes",qty:1},{name:"Notebook",qty:1},{name:"Pen",qty:2},{name:"Business cards",qty:1},{name:"Presentation / meeting materials",qty:1}],
"Formal Event":[{name:"Formal outfit",qty:"people"},{name:"Dress shoes",qty:"people"},{name:"Accessories",qty:"people"},{name:"Garment bag",qty:1}],
"Photography":[{name:"Camera",qty:1},{name:"Camera charger",qty:1,minNights:1},{name:"Memory card",qty:1},{name:"Tripod",qty:1},{name:"Camera batteries",qty:2}],
"Theme Park":[{name:"Tickets",qty:1},{name:"Portable charger",qty:1},{name:"Water bottle",qty:"people"},{name:"Comfortable shoes",qty:"people"},{name:"Small backpack",qty:1}],
"Cycling":[{name:"Bike helmet",qty:"people"},{name:"Bike gloves",qty:"people"},{name:"Water bottle",qty:"people"},{name:"Bike repair kit",qty:1}],
"Pets":[{name:"Pet food",qty:1},{name:"Water bowl",qty:1},{name:"Leash",qty:1},{name:"Waste bags",qty:1},{name:"Pet bed / blanket",qty:1,minNights:1}],
"Kids":[{name:"Kids clothing",qty:1},{name:"Favorite toy",qty:1},{name:"Kids snacks",qty:1},{name:"Wipes",qty:1},{name:"Entertainment",qty:1}],
"Picnic":[
{name:"Picnic blanket",qty:1},{name:"Cooler",qty:1},{name:"Food containers",qty:1},
{name:"Plates",qty:"people"},{name:"Cups",qty:"people"},{name:"Cutlery",qty:"people"},
{name:"Napkins / paper towels",qty:1},{name:"Trash bags",qty:1},{name:"Bottle opener / corkscrew",qty:1}
],
"Family Gathering":[
{name:"Serving dishes / trays",qty:1},{name:"Serving utensils",qty:1},{name:"Tablecloth",qty:1},
{name:"Folding chairs",qty:"people"},{name:"Cooler",qty:1},{name:"Food containers",qty:1},
{name:"Napkins / paper towels",qty:1},{name:"Trash bags",qty:1},{name:"Outdoor games",qty:1}
],
"Makeup & Cosmetics":[{name:"Makeup bag",qty:1},{name:"Foundation / concealer",qty:1},{name:"Mascara",qty:1},{name:"Lipstick / lip balm",qty:1},{name:"Makeup brushes / sponge",qty:1},{name:"Makeup remover",qty:1},{name:"Face moisturizer",qty:1},{name:"Hair ties / clips",qty:1},{name:"Perfume / fragrance",qty:1}],
"Other":[]
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

const gearMenuButton=document.querySelector('[data-nav="gear"]');
if(gearMenuButton)gearMenuButton.style.display="none";

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

function getOnboardingState(){
 try{
   return JSON.parse(localStorage.getItem(ONBOARDING_KEY)||"{}");
 }catch{
   return {};
 }
}
function setOnboardingFlag(key,value=true){
 const state=getOnboardingState();
 state[key]=value;
 localStorage.setItem(ONBOARDING_KEY,JSON.stringify(state));
}
function hasOnboardingFlag(key){
 return !!getOnboardingState()[key];
}

function closeMenu(){drawer.classList.remove("open");drawerOverlay.classList.add("hidden")}
menuButton.onclick=()=>{drawer.classList.add("open");drawerOverlay.classList.remove("hidden")};
drawerOverlay.onclick=closeMenu;
document.querySelectorAll("[data-nav]").forEach(b=>b.onclick=()=>{closeMenu();state.history=[];state.page=b.dataset.nav;render()});
function navigate(p){if(state.page!==p)state.history.push(state.page);state.page=p;render()}
backButton.onclick=()=>{if(state.page==="packing"){state.history=[];state.newTrip=null;state.editingExistingTrip=false;state.page="home";render();return}state.page=state.history.length?state.history.pop():"home";render()};

function allCategoryNames(){return [...new Set([...Object.keys(packingDatabase),...Object.keys(data.customLibrary||{})])]}
function libraryForCategory(c){return [...(packingDatabase[c]||[]),...(data.customLibrary[c]||[])]}


function showFirstLaunchOnboarding(){
 if(hasOnboardingFlag("welcomeDone"))return;

 let step=0;
 const steps=[
   {
     icon:"\u2713",
     title:"Welcome to AllPacked",
     text:"Never forget what to pack again. Create smart packing lists for vacations, camping, road trips, picnics, and more.",
     button:"Next"
   },
   {
     icon:"\ud83e\uddf3",
     title:"Smart Packing Lists",
     text:"Tell us about your trip and AllPacked will suggest what to bring based on the trip type, season, duration, activities, and number of people.",
     button:"Next"
   },
   {
     icon:"\ud83d\uded2",
     title:"Everything Stays Organized",
     text:"Track what you packed, what you still need, and everything you need to buy \u2014 all in one place.",
     button:"Start Planning"
   }
 ];

 function draw(){
   const s=steps[step];
   modalOverlay.innerHTML=`<div class="modal-sheet onboarding-sheet">
     <div class="onboarding-icon">${s.icon}</div>
     <div class="onboarding-progress">${steps.map((_,i)=>`<span class="${i===step?"active":""}"></span>`).join("")}</div>
     <h2 class="modal-title onboarding-title">${s.title}</h2>
     <p class="onboarding-text">${s.text}</p>
     <div class="button-row">
       ${step>0?'<button id="onboardingBack" class="secondary-button">Back</button>':""}
       <button id="onboardingNext" class="primary-button">${s.button}</button>
     </div>
   </div>`;
   modalOverlay.classList.remove("hidden");

   if(step>0){
     onboardingBack.onclick=()=>{step--;draw()};
   }
   onboardingNext.onclick=()=>{
     if(step<steps.length-1){
       step++;
       draw();
     }else{
       setOnboardingFlag("welcomeDone");
       closeModal();
     }
   };
 }

 draw();
}

function showOneTimeTip(flag,title,text,buttonText="Got it",afterClose=null){
 if(hasOnboardingFlag(flag)){
   if(afterClose)afterClose();
   return false;
 }
 modalOverlay.innerHTML=`<div class="modal-sheet tip-sheet">
   <div class="tip-icon">\ud83d\udca1</div>
   <h2 class="modal-title">${title}</h2>
   <p class="modal-description">${text}</p>
   <div class="button-row"><button id="tipConfirm" class="primary-button">${buttonText}</button></div>
 </div>`;
 modalOverlay.classList.remove("hidden");
 tipConfirm.onclick=()=>{
   setOnboardingFlag(flag);
   closeModal();
   if(afterClose)afterClose();
 };
 return true;
}

function maybeCelebrateTrip(t){
 if(!t)return false;
 const z=totals(t);
 if(!z.required||z.packed<z.required)return false;
 const flag="celebrated_"+t.id;
 if(hasOnboardingFlag(flag))return false;

 modalOverlay.innerHTML=`<div class="modal-sheet celebration-sheet">
   <div class="celebration-icon">\ud83c\udf89</div>
   <h2 class="modal-title">You're AllPacked!</h2>
   <p class="modal-description">${t.name} is 100% packed. Have a great time!</p>
   <div class="button-row"><button id="celebrationDone" class="primary-button">Done</button></div>
 </div>`;
 modalOverlay.classList.remove("hidden");
 celebrationDone.onclick=()=>{
   setOnboardingFlag(flag);
   closeModal();
 };
 return true;
}

function render(){
 window.scrollTo(0,0);
 const noBack=["home","trips","gear","shopping","settings","about"];
 backButton.classList.toggle("hidden",noBack.includes(state.page));
 const isPacking=state.page==="packing";
 backButton.textContent=isPacking?"\u2713":"\u2190";
 backButton.classList.toggle("finish-button",isPacking);
 backButton.setAttribute("aria-label",isPacking?"Finish and return home":"Go back");
 topTitle.textContent={home:"AllPacked",tripType:"New Trip",tripDetails:"Trip Details",categories:"Categories",packing:"Packing List",trips:"My Trips",gear:"My Gear",shopping:"Shopping List",settings:"Settings",about:"About"}[state.page]||"AllPacked";
 ({home:renderHome,tripType:renderTripTypes,tripDetails:renderTripDetails,categories:renderCategories,packing:renderPackingList,trips:renderTrips,gear:renderGear,shopping:renderShopping,settings:renderSettings,about:renderAbout}[state.page]||renderHome)();
 setTimeout(()=>window.scrollTo(0,0),0)
}

function renderHome(){
 const activeTrips=data.trips.filter(t=>{const z=totals(t);return z.required===0||z.packed<z.required});
 screen.innerHTML=`<div class="home"><div class="home-actions">
 ${activeTrips.length?`<button class="trips-home-button" id="seeTripsButton">View My Trips <span>${activeTrips.length}</span></button>`:""}
 <button class="pack-button" id="newTripButton">Pack for a New Trip</button>
 </div></div>`;
 if(activeTrips.length)seeTripsButton.onclick=()=>{state.history=[];state.page="trips";render()};
 newTripButton.onclick=()=>{state.newTrip=null;state.editingExistingTrip=false;state.history=["home"];state.page="tripType";render()}
}
function renderTripTypes(){screen.innerHTML='<h1 class="page-title">What kind of trip are you taking?</h1><p class="page-subtitle">Choose the closest option. Everything can be customized later.</p><div class="trip-grid">'+tripTypes.map(t=>`<button class="trip-type" data-trip-type="${t.id}"><span class="trip-emoji">${t.emoji}</span><span class="trip-label">${t.name}</span></button>`).join("")+"</div>";document.querySelectorAll("[data-trip-type]").forEach(b=>b.onclick=()=>{const t=tripTypes.find(x=>x.id===b.dataset.tripType);state.newTrip={id:String(Date.now()),type:t.id,typeName:t.name,emoji:t.emoji,name:(t.id==="picnic"?"My Picnic":t.id==="family"?"My Family Gathering":"My "+t.name+" Trip"),duration:3,season:"Summer",packingFor:"personal",people:1,groupPeople:2,transport:"other",activities:[],categories:[]};navigate("tripDetails")})}

function renderTripDetails(){
 const t=state.newTrip;if(!t){state.page="tripType";return render()}

 // Backward compatibility with trips created before this option existed.
 if(!t.packingFor)t.packingFor=(t.people&&t.people>1)?"group":"personal";
 if(!t.groupPeople)t.groupPeople=Math.max(2,t.people||2);
 if(!t.transport)t.transport="other";
 if(t.packingFor==="personal")t.people=1;

 screen.innerHTML=`<h1 class="page-title">${t.emoji} ${t.typeName}</h1><p class="page-subtitle">Tell us a little about this trip.</p><div class="stack">
 <div class="card"><label class="field-label">Trip name</label><input id="tripName" class="text-input" value="${esc(t.name)}"></div>
 <div class="card"><label class="field-label">Duration</label><div class="counter"><button id="minusDuration">\u2212</button><div class="counter-value">${t.duration} ${t.duration===1?"day":"days"}</div><button id="plusDuration">+</button></div>${t.duration===1?'<p class="small-note">1-day trip is treated as no overnight stay.</p>':""}</div>
 <div class="card"><label class="field-label">Season</label><div class="chips">${["Spring","Summer","Fall","Winter"].map(x=>`<button class="chip ${t.season===x?"active":""}" data-season="${x}">${x}</button>`).join("")}</div></div>

 <div class="card">
   <label class="field-label">Who are you packing for?</label>
   <div class="packing-for-choice">
     <button class="chip packing-for-button ${t.packingFor==="personal"?"active":""}" data-packing-for="personal" aria-pressed="${t.packingFor==="personal"}">Just me</button>
     <button class="chip packing-for-button ${t.packingFor==="group"?"active":""}" data-packing-for="group" aria-pressed="${t.packingFor==="group"}">A group</button>
   </div>
   ${t.packingFor==="group"?`
     <div class="group-size-block">
       <label class="field-label">How many people are you packing for?</label>
       <div class="counter">
         <button id="minusPeople">\u2212</button>
         <div class="counter-value">${t.people}</div>
         <button id="plusPeople">+</button>
       </div>
     </div>
   `:""}
 </div>

 <div class="card">
   <label class="field-label">How are you getting there?</label>
   <div class="transport-choice">
     <button class="chip transport-button ${t.transport==="driving"?"active":""}" data-transport="driving">Driving</button>
     <button class="chip transport-button ${t.transport==="flying"?"active":""}" data-transport="flying">Flying</button>
     <button class="chip transport-button ${t.transport==="other"?"active":""}" data-transport="other">Other</button>
   </div>
 </div>

 <div class="card"><label class="field-label">What will you do on this trip?</label><div class="chips">${activities.map(x=>`<button class="chip ${t.activities.includes(x)?"active":""}" data-activity="${x}">${x}</button>`).join("")}</div></div>
 </div><div class="button-row"><button id="continueDetails" class="primary-button">Continue</button></div>`;

 const keep=()=>t.name=document.getElementById("tripName").value;

 minusDuration.onclick=()=>{keep();t.duration=Math.max(1,t.duration-1);renderTripDetails()};
 plusDuration.onclick=()=>{keep();t.duration++;renderTripDetails()};

 document.querySelectorAll("[data-season]").forEach(b=>b.onclick=()=>{keep();t.season=b.dataset.season;renderTripDetails()});

 document.querySelectorAll("[data-packing-for]").forEach(b=>b.onclick=()=>{
   keep();
   if(b.dataset.packingFor==="personal"){
     if(t.packingFor==="group")t.groupPeople=Math.max(2,t.people||2);
     t.packingFor="personal";
     t.people=1;
   }else{
     t.packingFor="group";
     t.people=Math.max(2,t.groupPeople||2);
   }
   renderTripDetails()
 });

 if(t.packingFor==="group"){
   minusPeople.onclick=()=>{
     keep();
     t.people=Math.max(2,t.people-1);
     t.groupPeople=t.people;
     renderTripDetails()
   };
   plusPeople.onclick=()=>{
     keep();
     t.people++;
     t.groupPeople=t.people;
     renderTripDetails()
   };
 }

 document.querySelectorAll("[data-transport]").forEach(b=>b.onclick=()=>{
   keep();
   t.transport=b.dataset.transport;
   renderTripDetails()
 });

 document.querySelectorAll("[data-activity]").forEach(b=>b.onclick=()=>{
   keep();
   const a=b.dataset.activity;
   t.activities=t.activities.includes(a)?t.activities.filter(x=>x!==a):[...t.activities,a];
   renderTripDetails()
 });

 continueDetails.onclick=()=>{
   t.name=tripName.value.trim()||"My Trip";
   if(t.packingFor==="personal")t.people=1;
   t.categories=suggestedCategories(t);
   navigate("categories")
 }
}

function suggestedCategories(t){
 const overnight=t.duration>1;
 let c=[];

 if(overnight)c.push("Clothing","Toiletries");
 else if(["beach","camping","hiking","fishing"].includes(t.type))c.push("Toiletries");

 c.push("Electronics");

 if(overnight||["camping","hiking","fishing","beach"].includes(t.type))c.push("Health & Safety");

 if(t.type==="camping")c.unshift("Camping Gear");
 if(t.type==="camping"&&overnight)c.push("Cooking","Food & Drinks");
 if(t.type==="vacation")c.push("Travel Documents");
 if(t.type==="business")c.push("Business Trip","Travel Documents");
 if(t.type==="fishing")c.push("Fishing");
 if(t.type==="hiking")c.push("Hiking");
 if(t.type==="beach")c.unshift("Beach");

 if(t.type==="picnic"){
   c=["Picnic","Food & Drinks","Toiletries","Electronics"];
 }
 if(t.type==="family"){
   c=["Family Gathering","Food & Drinks","Electronics"];
 }

 if(t.type==="winter"||t.season==="Winter")c.push("Winter Gear");

 if(t.transport==="driving")c.push("Car Essentials");
 if(t.transport==="flying"){
   c.push("Flight Essentials");
   if(!c.includes("Travel Documents"))c.push("Travel Documents");
 }

 t.activities.forEach(a=>{
   if(allCategoryNames().includes(a))c.push(a);
   if(a==="BBQ")c.push("Food & Drinks");
   if(a==="Swimming"&&t.type!=="beach")c.push("Swimming");
 });

 return[...new Set(c)]
}

function categoryOption(c,on){return`<label class="category-option"><input type="checkbox" class="category-checkbox" value="${esc(c)}" ${on?"checked":""}><span class="category-name">${c}</span></label>`}

function renderCategories(){
 const t=state.newTrip;if(!t){state.page="tripType";return render()}
 const rec=suggestedCategories(t),sel=t.categories?.length?t.categories:rec,all=allCategoryNames();
 screen.innerHTML=`<h1 class="page-title">What do you need to pack?</h1><p class="page-subtitle">Remove anything you do not need before generating the list.</p>
 <div class="section-title">Recommended</div><div class="stack">${rec.map(c=>categoryOption(c,sel.includes(c))).join("")}</div>
 <div class="section-title">More Categories</div><div class="stack">${all.filter(c=>!rec.includes(c)).map(c=>categoryOption(c,sel.includes(c))).join("")}</div>
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

function includeItem(d,t){
 const nights=Math.max(0,t.duration-1);
 if(d.minNights&&nights<d.minNights)return false;
 if(d.minDays&&t.duration<d.minDays)return false;
 if(d.maxDays&&t.duration>d.maxDays)return false;
 if(d.seasons&&!d.seasons.includes(t.season))return false;
 if(d.tripTypes&&!d.tripTypes.includes(t.type))return false;
 if(d.activities&&!d.activities.some(a=>t.activities.includes(a)))return false;
 if(d.outdoors&&!["camping","hiking","fishing"].includes(t.type)&&t.duration===1)return false;
 return true
}
function qty(q,t){const n=Math.max(0,t.duration-1);if(q==="people")return t.packingFor==="group"?Math.max(2,t.people||2):1;if(["shirts","underwear","socks"].includes(q))return Math.max(1,Math.min(n+1,8));if(q==="pants")return t.duration<=2?1:t.duration<=5?2:3;return q||1}
function createItems(t){
 const r={};
 t.categories.forEach(c=>{
   const seen=new Set();
   r[c]=libraryForCategory(c).filter(d=>includeItem(d,t)).filter(d=>{const k=d.name.toLowerCase();if(seen.has(k))return false;seen.add(k);return true}).map(d=>({id:String(Date.now())+Math.random(),name:d.name,required:qty(d.qty,t),packed:0,needToBuy:0,bought:0}));
 });
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
 screen.innerHTML=`<div class="trip-title-row"><h1 class="page-title">${t.emoji} ${t.name}</h1><button class="trip-name-edit" id="editTripNameButton" aria-label="Edit trip name">\u270e</button></div><div class="trip-info">${t.duration} ${t.duration===1?"day":"days"} \u00b7 ${t.season} \u00b7 ${t.packingFor==="group"?`${t.people} people`:"Just me"}</div>
 <div class="progress"><div class="progress-bar" style="width:${p}%"></div></div><div class="progress-text">${z.packed} of ${z.required} packed \u00b7 ${p}%</div>
 ${Object.keys(t.items).map(c=>packCategory(t,c)).join("")}
 <div class="button-row"><button id="addCategoryButton" class="secondary-button">+ Add Category</button></div>`;
 attachPacking(t);
 editTripNameButton.onclick=()=>openTripNameEditor(t);
 addCategoryButton.onclick=()=>openAddCategory(t)
}

function openTripNameEditor(t){
 modalOverlay.innerHTML=`<div class="modal-sheet"><h2 class="modal-title">Edit Trip Name</h2>
 <div class="modal-field"><label class="field-label">Trip name</label><input id="tripNameEditor" class="text-input" value="${esc(t.name)}"></div>
 <div class="button-row"><button id="tripNameCancel" class="secondary-button">Cancel</button><button id="tripNameSave" class="primary-button">Save</button></div></div>`;
 modalOverlay.classList.remove("hidden");
 tripNameEditor.focus();
 tripNameEditor.select();
 tripNameCancel.onclick=closeModal;
 tripNameSave.onclick=()=>{
   const name=tripNameEditor.value.trim();
   if(!name)return showToast("Enter a trip name");
   t.name=name;
   saveData();
   closeModal();
   renderPackingList()
 };
}

function packCategory(t,c){
 const a=t.items[c],pk=a.reduce((s,x)=>s+Math.min(x.packed,x.required),0),rq=a.reduce((s,x)=>s+x.required,0);
 return`<section class="pack-category"><div class="pack-category-header"><div class="pack-category-title">${c}</div><div class="category-count">${pk} / ${rq}</div></div>
 <div class="pack-items">${a.map(x=>{const done=x.packed>=x.required;return`<div class="pack-item ${done?"completed":""}">
 <input class="pack-check" type="checkbox" data-check-pack data-category="${esc(c)}" data-id="${x.id}" ${done?"checked":""}>
 <div class="pack-item-main"><div class="item-name">${done?"\u2713 ":""}${x.name}</div><div class="item-meta">
 <span class="item-pill ${done?"complete":""}">${x.packed} of ${x.required} packed</span>
 ${x.needToBuy?`<button class="item-pill buy buy-status-button" data-bought-status data-category="${esc(c)}" data-id="${x.id}">\ud83d\uded2 ${x.bought} / ${x.needToBuy} bought</button>`:""}</div></div>
 <div class="item-actions"><button class="quick-action-button shopping" data-buy data-category="${esc(c)}" data-id="${x.id}">\ud83d\uded2</button>
 <button class="quick-action-button edit" data-edit data-category="${esc(c)}" data-id="${x.id}">\u270e</button>
 <button class="quick-action-button delete" data-del data-category="${esc(c)}" data-id="${x.id}">\ud83d\uddd1</button></div></div>`}).join("")}
 <button class="add-item" data-add="${esc(c)}">+ Add item</button></div></section>`
}

function attachPacking(t){
 document.querySelectorAll("[data-check-pack]").forEach(b=>b.onchange=()=>{
   const x=findItem(t,b.dataset.category,b.dataset.id);if(!x)return;
   if(!b.checked){x.packed=0;saveData();renderPackingList();return}
   if(x.required===1){x.packed=1;saveData();renderPackingList();setTimeout(()=>maybeCelebrateTrip(t),0);return}
   if(!hasOnboardingFlag("quantityTip")){
     showOneTimeTip(
       "quantityTip",
       "Packing More Than One?",
       `Track exactly how many you packed. For example: 2 of ${x.required} packed.`,
       "Got it",
       ()=>openPackedQuantity(t,b.dataset.category,x)
     );
   }else{
     openPackedQuantity(t,b.dataset.category,x)
   }
 });
 document.querySelectorAll("[data-buy]").forEach(b=>b.onclick=()=>{
   const item=findItem(t,b.dataset.category,b.dataset.id);
   const open=()=>openBuy(t,b.dataset.category,item);
   showOneTimeTip(
     "shoppingButtonTip",
     "Need to Buy?",
     "Use the shopping cart when you do not have an item yet. It will also appear in your Shopping List.",
     "Got it",
     open
   );
 });
 document.querySelectorAll("[data-bought-status]").forEach(b=>b.onclick=()=>openBoughtStatus(t,b.dataset.category,findItem(t,b.dataset.category,b.dataset.id)));
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
 modalOverlay.innerHTML=`<div class="modal-sheet"><h2 class="modal-title">How many did you pack?</h2><p class="modal-description">${x.name}</p>
 <div class="modal-counter"><button id="qm">\u2212</button><div id="qv" class="modal-counter-value">${q} of ${x.required} packed</div><button id="qp">+</button></div>
 <div class="button-row"><button id="qc" class="secondary-button">Cancel</button><button id="qs" class="primary-button">OK</button></div></div>`;
 modalOverlay.classList.remove("hidden");
 const ref=()=>qv.textContent=q+" of "+x.required+" packed";
 qm.onclick=()=>{q=Math.max(0,q-1);ref()};qp.onclick=()=>{q=Math.min(x.required,q+1);ref()};
 qc.onclick=()=>{closeModal();renderPackingList()};
 qs.onclick=()=>{x.packed=q;saveData();closeModal();renderPackingList();setTimeout(()=>maybeCelebrateTrip(t),0)}
}

function openBoughtStatus(t,c,x){
 if(!x||!x.needToBuy)return;
 const allBought=(x.bought||0)>=x.needToBuy;
 modalOverlay.innerHTML=`<div class="modal-sheet">
 <h2 class="modal-title">Is this item available now?</h2>
 <p class="modal-description">${x.name}</p>
 <p class="small-note">${allBought
   ?"This item is already marked as bought."
   :`Choose Yes if you bought it or otherwise have it available now. All ${x.needToBuy} needed ${x.needToBuy===1?"item":"items"} will be marked as bought.`}</p>
 <div class="button-row">
   <button id="availableNo" class="secondary-button">${allBought?"Close":"No"}</button>
   ${allBought?"":'<button id="availableYes" class="primary-button">Yes</button>'}
 </div>
 </div>`;
 modalOverlay.classList.remove("hidden");
 availableNo.onclick=closeModal;
 if(!allBought){
   availableYes.onclick=()=>{
     x.bought=x.needToBuy;
     saveData();
     closeModal();
     showToast(x.needToBuy===1?"Marked as bought":`${x.needToBuy} marked as bought`);
     renderPackingList()
   };
 }
}

function openBuy(t,c,x){
 let q=x.needToBuy||Math.max(1,x.required-x.packed);
 modalOverlay.innerHTML=`<div class="modal-sheet"><h2 class="modal-title">\ud83d\uded2 Add to Shopping List</h2><p class="modal-description">${x.name}</p>
 <div class="modal-field"><label class="field-label">How many do you need to buy?</label><div class="modal-counter"><button id="qm">\u2212</button><div id="qv" class="modal-counter-value">${q}</div><button id="qp">+</button></div></div>
 <div class="button-row"><button id="qc" class="secondary-button">Cancel</button><button id="qs" class="primary-button">Add to Shopping List</button></div></div>`;
 modalOverlay.classList.remove("hidden");
 const ref=()=>qv.textContent=q;qm.onclick=()=>{q=Math.max(1,q-1);ref()};qp.onclick=()=>{q++;ref()};qc.onclick=closeModal;
 qs.onclick=()=>{x.needToBuy=q;x.bought=Math.min(x.bought||0,q);saveData();closeModal();showToast("Added to Shopping List");renderPackingList()}
}

function openEditor(t,currentCategory,x){
 let d={name:x?.name||"",required:x?.required||1,packed:x?.packed||0,needToBuy:x?.needToBuy||0};
 const currentOptions=[...new Set([...Object.keys(t.items),...allCategoryNames()])];
 modalOverlay.innerHTML=`<div class="modal-sheet"><h2 class="modal-title">${x?"Edit Item":"Add Item"}</h2>
 <div class="modal-field"><label class="field-label">Item name</label><input id="en" class="text-input" value="${esc(d.name)}"></div>
 <div class="modal-field"><label class="field-label">Required quantity</label><div class="modal-counter"><button id="rm">\u2212</button><div id="rv" class="modal-counter-value">${d.required}</div><button id="rp">+</button></div></div>
 <div class="modal-field"><label class="field-label">Category</label><select id="ec" class="select-input"><option value="__new__">+ New Category</option>${currentOptions.map(n=>`<option value="${esc(n)}" ${n===currentCategory?"selected":""}>${n}</option>`).join("")}</select></div>
 <div class="button-row"><button id="cancel" class="secondary-button">Cancel</button><button id="save" class="primary-button">Save</button></div></div>`;
 modalOverlay.classList.remove("hidden");
 const ref=()=>rv.textContent=d.required;rm.onclick=()=>{d.required=Math.max(1,d.required-1);d.packed=Math.min(d.packed,d.required);ref()};rp.onclick=()=>{d.required++;ref()};cancel.onclick=closeModal;
 ec.onchange=()=>{if(ec.value!=="__new__")return;const newName=prompt("New category name");if(!newName){ec.value=currentCategory&&currentOptions.includes(currentCategory)?currentCategory:"Other";return}if(!data.customLibrary[newName])data.customLibrary[newName]=[];if(!t.items[newName])t.items[newName]=[];const option=document.createElement("option");option.value=newName;option.textContent=newName;ec.appendChild(option);ec.value=newName;saveData()};
 save.onclick=()=>{const n=en.value.trim();if(!n)return showToast("Enter an item name");let target=ec.value;if(target==="__new__"){const newName=prompt("New category name");if(!newName)return;target=newName;if(!data.customLibrary[target])data.customLibrary[target]=[]}if(!target)target="Other";if(!t.items[target])t.items[target]=[];if(x)t.items[currentCategory]=t.items[currentCategory].filter(i=>i.id!==x.id);const newItem={...(x||{}),id:x?.id||String(Date.now())+Math.random(),name:n,required:d.required,packed:Math.min(d.packed,d.required),needToBuy:d.needToBuy,bought:Math.min(x?.bought||0,d.needToBuy)};t.items[target].push(newItem);if(t.items[currentCategory]&&t.items[currentCategory].length===0)delete t.items[currentCategory];persistCustomItem(target,n,d.required);t.categories=Object.keys(t.items);saveData();closeModal();renderPackingList()}
}

function persistCustomItem(category,name,required){
 if(!data.customLibrary[category])data.customLibrary[category]=[];
 const exists=data.customLibrary[category].some(x=>x.name.toLowerCase()===name.toLowerCase());
 const builtIn=(packingDatabase[category]||[]).some(x=>x.name.toLowerCase()===name.toLowerCase());
 if(!exists&&!builtIn)data.customLibrary[category].push({name:name,qty:required})
 saveData()
}

function openAddCategory(t){
 const unused=allCategoryNames().filter(c=>!Object.keys(t.items).includes(c)&&c!=="Other");
 modalOverlay.innerHTML=`<div class="modal-sheet"><h2 class="modal-title">Add Category</h2><div class="option-list"><button class="option-button new-category" id="newCategoryChoice">+ New Category</button>${!Object.keys(t.items).includes("Other")?'<button class="option-button" data-category-choice="Other">Other</button>':""}${unused.map(c=>`<button class="option-button" data-category-choice="${esc(c)}">${c}</button>`).join("")}</div><div class="button-row"><button id="cancelCategory" class="secondary-button">Cancel</button></div></div>`;
 modalOverlay.classList.remove("hidden");cancelCategory.onclick=closeModal;
 newCategoryChoice.onclick=()=>{
   const name=prompt("New category name");
   if(!name)return;
   if(!data.customLibrary[name])data.customLibrary[name]=[];
   if(!t.items[name])t.items[name]=[];
   t.categories=Object.keys(t.items);
   saveData();
   closeModal();
   showOneTimeTip(
     "customCategoryTip",
     "Saved for Future Trips",
     "Your custom category will be available again when you plan another trip.",
     "Great",
     ()=>openEditor(t,name,null)
   )
 };
 document.querySelectorAll("[data-category-choice]").forEach(b=>b.onclick=()=>{const c=b.dataset.categoryChoice;if(c==="Other"){if(!t.items[c])t.items[c]=[];t.categories=Object.keys(t.items);saveData();closeModal();openEditor(t,c,null);return}if(!t.items[c])t.items[c]=libraryForCategory(c).filter(d=>includeItem(d,t)).map(d=>({id:String(Date.now())+Math.random(),name:d.name,required:qty(d.qty,t),packed:0,needToBuy:0,bought:0}));if(t.items[c].length===0){t.categories=Object.keys(t.items);saveData();closeModal();openEditor(t,c,null);return}t.categories=Object.keys(t.items);saveData();closeModal();renderPackingList()})
}

function closeModal(){modalOverlay.classList.add("hidden");modalOverlay.innerHTML=""}

function renderTrips(){
 screen.innerHTML=`<h1 class="page-title">My Trips</h1><p class="page-subtitle">Choose a trip to continue packing.</p>${data.trips.length?`<div class="stack">${data.trips.map(t=>{const z=totals(t);return`<div class="trip-row"><div class="trip-icon" data-trip="${t.id}">${t.emoji}</div><div class="trip-main" data-trip="${t.id}"><div class="trip-name">${t.name}</div><div class="trip-small">${t.duration} ${t.duration===1?"day":"days"} \u00b7 ${t.season} \u00b7 ${z.packed} / ${z.required} packed</div></div><div class="trip-row-actions"><span class="badge" data-trip="${t.id}">${z.required&&z.packed===z.required?"Packed":"Active"}</span><button class="trip-delete-button" data-delete-trip="${t.id}">\ud83d\uddd1</button></div></div>`}).join("")}</div>`:'<div class="empty">No saved trips yet.</div>'}<div class="button-row"><button id="newTripFromTrips" class="primary-button">+ New Trip</button></div>`;
 document.querySelectorAll("[data-trip]").forEach(r=>r.onclick=()=>{state.activeTripId=r.dataset.trip;state.page="packing";render()});
 document.querySelectorAll("[data-delete-trip]").forEach(b=>b.onclick=e=>{e.stopPropagation();const trip=data.trips.find(t=>t.id===b.dataset.deleteTrip);if(!trip)return;if(!confirm(`Delete "${trip.name}"?`))return;data.trips=data.trips.filter(t=>t.id!==trip.id);if(state.activeTripId===trip.id)state.activeTripId=null;saveData();showToast("Trip deleted");renderTrips()});
 newTripFromTrips.onclick=()=>{state.newTrip=null;state.editingExistingTrip=false;state.history=["trips"];state.page="tripType";render()}
}

function renderShopping(){
 if(!hasOnboardingFlag("shoppingListTip")){
   setTimeout(()=>showOneTimeTip(
     "shoppingListTip",
     "Shopping Tip",
     "Tap a trip name here whenever you want to jump straight back to that trip's Packing List."
   ),0);
 }

 const groups=data.trips.map(t=>({t,items:Object.entries(t.items).flatMap(([c,a])=>a.filter(x=>x.needToBuy>0).map(x=>({c,x})))})).filter(g=>g.items.length);
 screen.innerHTML=`<h1 class="page-title">Shopping List</h1><p class="page-subtitle">Check items while shopping. Buying does not automatically mark them packed.</p>
 ${groups.length?groups.map(g=>{const shoppingDone=g.items.every(({x})=>(x.bought||0)>=x.needToBuy);return`<section class="shopping-trip"><div class="section-title shopping-trip-title-link ${shoppingDone?"shopping-trip-complete":""}" data-open-shopping-trip="${g.t.id}">${shoppingDone?"\u2713 ":""}${g.t.emoji} ${g.t.name}</div>${g.items.map(({c,x})=>`<div class="shopping-item ${x.bought>=x.needToBuy?"bought":""}"><input type="checkbox" data-check data-trip="${g.t.id}" data-category="${esc(c)}" data-id="${x.id}" ${x.bought>=x.needToBuy?"checked":""}><div><div class="shopping-name">${x.name}</div><div class="shopping-small">${c}</div></div><div class="shopping-qty">\u00d7${x.needToBuy}</div></div>`).join("")}</section>`}).join(""):'<div class="empty">Nothing to buy right now.</div>'}`;
 document.querySelectorAll("[data-open-shopping-trip]").forEach(b=>b.onclick=()=>{
   state.activeTripId=b.dataset.openShoppingTrip;
   state.history=["shopping"];
   state.page="packing";
   render()
 });
 document.querySelectorAll("[data-check]").forEach(b=>b.onchange=()=>{const t=data.trips.find(x=>x.id===b.dataset.trip),x=findItem(t,b.dataset.category,b.dataset.id);x.bought=b.checked?x.needToBuy:0;saveData();renderShopping()})
}

function renderGear(){
 screen.innerHTML=`<h1 class="page-title">My Gear</h1><p class="page-subtitle">Save equipment you already own.</p><div class="stack">${data.gear.map((g,gi)=>`<section class="pack-category"><div class="pack-category-header"><div class="pack-category-title">${g.category}</div></div><div class="pack-items">${g.items.map((x,ii)=>`<div class="gear-row"><div class="trip-main">${x}</div><button class="quick-action-button delete" data-rg="${gi}:${ii}">\ud83d\uddd1</button></div>`).join("")}<button class="add-item" data-ag="${gi}">+ Add gear</button></div></section>`).join("")}</div><div class="button-row"><button id="addGearCategory" class="secondary-button">+ Add Category</button></div>`;
 document.querySelectorAll("[data-ag]").forEach(b=>b.onclick=()=>{const n=prompt("Gear name");if(n){data.gear[+b.dataset.ag].items.push(n);saveData();renderGear()}});
 document.querySelectorAll("[data-rg]").forEach(b=>b.onclick=()=>{const[g,i]=b.dataset.rg.split(":").map(Number);data.gear[g].items.splice(i,1);saveData();renderGear()});
 addGearCategory.onclick=()=>{const n=prompt("Category name");if(n){data.gear.push({category:n,items:[]});saveData();renderGear()}}
}

function renderSettings(){
 screen.innerHTML='<h1 class="page-title">Settings</h1><div class="card"><p>Prototype settings.</p><p class="small-note">Resetting clears all test data, custom categories and custom items.</p><button id="resetPrototype" class="delete-button">Reset Prototype</button></div>';
 resetPrototype.onclick=()=>{if(confirm("Delete all saved trips and reset?")){localStorage.removeItem(STORAGE_KEY);localStorage.removeItem(ONBOARDING_KEY);data=structuredClone(defaultData);state={page:"home",history:[],newTrip:null,activeTripId:null,editingExistingTrip:false};render()}}
}
function renderAbout(){
 screen.innerHTML=`<h1 class="page-title">About AllPacked</h1>
 <p class="page-subtitle">Plan what you need, pack with confidence, and keep shopping in the same place.</p>
 <div class="stack">
   <div class="card">
     <div class="about-feature">
       <span class="about-icon">\u2713</span>
       <div><strong>Smart Packing Lists</strong><p>Get relevant suggestions based on your trip type, duration, season, activities, and number of people.</p></div>
     </div>
     <div class="about-feature">
       <span class="about-icon">\ud83e\uddf3</span>
       <div><strong>Flexible Trips</strong><p>Add, edit, move, or remove items and categories so each packing list fits your plans.</p></div>
     </div>
     <div class="about-feature">
       <span class="about-icon">\ud83d\uded2</span>
       <div><strong>Shopping List</strong><p>Keep everything you still need to buy in one place and jump directly back to the related trip.</p></div>
     </div>
     <div class="about-feature">
       <span class="about-icon">\ud83d\udd22</span>
       <div><strong>Quantity Tracking</strong><p>Track partial progress such as 2 of 3 packed or 1 of 2 bought.</p></div>
     </div>
     <div class="about-feature">
       <span class="about-icon">\uff0b</span>
       <div><strong>Fully Customizable</strong><p>Create your own categories and items, rename trips, and remove anything you do not need.</p></div>
     </div>
     <div class="about-feature">
       <span class="about-icon">\u21bb</span>
       <div><strong>Reusable</strong><p>Your custom categories and items are available again when you plan future trips.</p></div>
     </div>
   </div>
 </div>`;
}

function showToast(m){toast.textContent=m;toast.classList.remove("hidden");clearTimeout(showToast.timer);showToast.timer=setTimeout(()=>toast.classList.add("hidden"),1800)}
function esc(v){return String(v||"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]))}
render();
setTimeout(showFirstLaunchOnboarding,0);
