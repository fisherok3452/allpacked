const STORAGE_KEY =
  "packtrail_v3";


/* ==========================================
   DEFAULT DATA
========================================== */

const defaultData = {

  trips: [],

  gear: [

    {
      category: "Camping",

      items: [
        "Tent",
        "Air mattress",
        "Air pump",
        "Camping chairs",
        "Camp stove",
        "Cooler"
      ]
    },

    {
      category: "Fishing",

      items: [
        "Fishing rod",
        "Tackle box",
        "Landing net"
      ]
    },

    {
      category: "Electronics",

      items: [
        "Power bank",
        "Flashlight",
        "USB-C charger"
      ]
    }

  ]

};



/* ==========================================
   TRIP TYPES
========================================== */

const tripTypes = [

  {
    id: "camping",
    name: "Camping",
    emoji: "🏕"
  },

  {
    id: "vacation",
    name: "Vacation",
    emoji: "✈️"
  },

  {
    id: "roadtrip",
    name: "Road Trip",
    emoji: "🚗"
  },

  {
    id: "hiking",
    name: "Hiking",
    emoji: "🥾"
  },

  {
    id: "fishing",
    name: "Fishing",
    emoji: "🎣"
  },

  {
    id: "beach",
    name: "Beach",
    emoji: "🏖"
  },

  {
    id: "winter",
    name: "Winter Trip",
    emoji: "🎿"
  },

  {
    id: "other",
    name: "Other",
    emoji: "➕"
  }

];



/* ==========================================
   ACTIVITIES / ADD-ONS
========================================== */

const activities = [

  "Fishing",
  "Hiking",
  "Swimming",
  "Cooking",
  "Ski / Snowboard",
  "Diving / Snorkeling",
  "Rental Car",
  "Cruise",
  "City Trip",
  "Business Trip",
  "Formal Event",
  "Photography",
  "Theme Park",
  "Cycling",
  "Pets",
  "Kids"

];



/* ==========================================
   PACKING DATABASE

   minNights:
   minimum number of nights required
   before item is suggested.

   Example:
   minNights: 1 means overnight only.
========================================== */

const packingDatabase = {


  "Shelter & Sleeping": [

    {
      name: "Tent",
      qty: 1
    },

    {
      name: "Rainfly",
      qty: 1
    },

    {
      name: "Tent stakes",
      qty: 1
    },

    {
      name: "Ground tarp",
      qty: 1
    },

    {
      name: "Sleeping bag",
      qty: "people",
      minNights: 1
    },

    {
      name: "Pillow",
      qty: "people",
      minNights: 1
    },

    {
      name: "Air mattress",
      qty: 1,
      minNights: 1
    },

    {
      name: "Air pump",
      qty: 1,
      minNights: 1
    },

    {
      name: "Camping chair",
      qty: "people"
    },

    {
      name: "Mallet",
      qty: 1
    }

  ],


  "Clothing": [

    {
      name: "T-shirt",
      qty: "shirts",
      minNights: 1
    },

    {
      name: "Underwear",
      qty: "underwear",
      minNights: 1
    },

    {
      name: "Socks",
      qty: "socks",
      minNights: 1
    },

    {
      name: "Pants / shorts",
      qty: "pants",
      minNights: 1
    },

    {
      name: "Hoodie / sweater",
      qty: 1
    },

    {
      name: "Rain jacket",
      qty: 1
    },

    {
      name: "Hat",
      qty: 1
    },

    {
      name: "Sleepwear",
      qty: 1,
      minNights: 1
    }

  ],


  "Personal Hygiene": [

    {
      name: "Toothbrush",
      qty: "people",
      minNights: 1
    },

    {
      name: "Toothpaste",
      qty: 1,
      minNights: 1
    },

    {
      name: "Deodorant",
      qty: "people",
      minNights: 1
    },

    {
      name: "Soap / body wash",
      qty: 1,
      minNights: 2
    },

    {
      name: "Shampoo",
      qty: 1,
      minNights: 2
    },

    {
      name: "Towel",
      qty: "people",
      minNights: 1
    },

    {
      name: "Sunscreen",
      qty: 1
    },

    {
      name: "Bug spray",
      qty: 1,
      campingUseful: true
    },

    {
      name: "Toilet paper",
      qty: 1,
      campingOnly: true
    }

  ],


  "Cooking": [

    {
      name: "Camp stove",
      qty: 1
    },

    {
      name: "Fuel / propane",
      qty: 1
    },

    {
      name: "Lighter",
      qty: 2
    },

    {
      name: "Frying pan",
      qty: 1
    },

    {
      name: "Pot",
      qty: 1
    },

    {
      name: "Plate",
      qty: "people"
    },

    {
      name: "Cup / mug",
      qty: "people"
    },

    {
      name: "Cutlery",
      qty: "people"
    },

    {
      name: "Knife",
      qty: 1
    },

    {
      name: "Cutting board",
      qty: 1
    },

    {
      name: "Aluminum foil",
      qty: 1
    }

  ],


  "Food & Drinks": [

    {
      name: "Drinking water",
      qty: 1
    },

    {
      name: "Coffee / tea",
      qty: 1
    },

    {
      name: "Breakfast food",
      qty: 1,
      minNights: 1
    },

    {
      name: "Lunch food",
      qty: 1
    },

    {
      name: "Dinner food",
      qty: 1
    },

    {
      name: "Snacks",
      qty: 1
    },

    {
      name: "Cooler ice",
      qty: 1
    }

  ],


  "Electronics": [

    {
      name: "Phone",
      qty: "people"
    },

    {
      name: "Phone charger",
      qty: "people",
      minNights: 1
    },

    {
      name: "Power bank",
      qty: 1
    },

    {
      name: "Flashlight",
      qty: 1,
      outdoorsUseful: true
    },

    {
      name: "Headlamp",
      qty: 1,
      outdoorsUseful: true
    },

    {
      name: "Portable power station",
      qty: 1,
      campingOnly: true
    }

  ],


  "Health & Safety": [

    {
      name: "First aid kit",
      qty: 1
    },

    {
      name: "Prescription medication",
      qty: 1
    },

    {
      name: "Pain reliever",
      qty: 1
    },

    {
      name: "Hand sanitizer",
      qty: 1
    },

    {
      name: "Emergency blanket",
      qty: 1,
      outdoorsUseful: true
    },

    {
      name: "Whistle",
      qty: 1,
      outdoorsUseful: true
    }

  ],


  "Fishing": [

    {
      name: "Fishing rod",
      qty: 1
    },

    {
      name: "Tackle box",
      qty: 1
    },

    {
      name: "Landing net",
      qty: 1
    },

    {
      name: "Fishing licence",
      qty: 1
    },

    {
      name: "Bait / lures",
      qty: 1
    },

    {
      name: "Pliers",
      qty: 1
    }

  ],


  "Hiking": [

    {
      name: "Daypack",
      qty: 1
    },

    {
      name: "Hiking boots",
      qty: "people"
    },

    {
      name: "Water bottle",
      qty: "people"
    },

    {
      name: "Trail snacks",
      qty: 1
    },

    {
      name: "Trekking poles",
      qty: 1
    },

    {
      name: "Offline map",
      qty: 1
    }

  ],


  "Swimming": [

    {
      name: "Swimsuit",
      qty: "people"
    },

    {
      name: "Beach towel",
      qty: "people"
    },

    {
      name: "Water shoes",
      qty: "people"
    },

    {
      name: "Dry bag",
      qty: 1
    }

  ],


  "Ski / Snowboard": [

    {
      name: "Ski jacket",
      qty: "people"
    },

    {
      name: "Snow pants",
      qty: "people"
    },

    {
      name: "Ski socks",
      qty: "people"
    },

    {
      name: "Thermal base layer",
      qty: "people"
    },

    {
      name: "Gloves",
      qty: "people"
    },

    {
      name: "Goggles",
      qty: "people"
    },

    {
      name: "Helmet",
      qty: "people"
    },

    {
      name: "Ski / snowboard equipment",
      qty: "people"
    },

    {
      name: "Lift pass",
      qty: "people"
    },

    {
      name: "Equipment rental confirmation",
      qty: 1
    }

  ],


  "Diving / Snorkeling": [

    {
      name: "Mask",
      qty: "people"
    },

    {
      name: "Snorkel",
      qty: "people"
    },

    {
      name: "Fins",
      qty: "people"
    },

    {
      name: "Rash guard",
      qty: "people"
    },

    {
      name: "Dry bag",
      qty: 1
    },

    {
      name: "Dive certification card",
      qty: 1
    },

    {
      name: "Dive computer",
      qty: 1
    },

    {
      name: "Underwater camera",
      qty: 1
    },

    {
      name: "Dive booking confirmation",
      qty: 1
    }

  ],


  "Rental Car": [

    {
      name: "Driver's licence",
      qty: 1
    },

    {
      name: "Credit card",
      qty: 1
    },

    {
      name: "Rental confirmation",
      qty: 1
    },

    {
      name: "Insurance documents",
      qty: 1
    },

    {
      name: "Phone mount",
      qty: 1
    },

    {
      name: "Car charger",
      qty: 1
    },

    {
      name: "Offline map",
      qty: 1
    },

    {
      name: "Child seat",
      qty: 1
    }

  ],


  "Cruise": [

    {
      name: "Cruise documents",
      qty: 1
    },

    {
      name: "Passport",
      qty: "people"
    },

    {
      name: "Formal clothing",
      qty: "people"
    },

    {
      name: "Swimsuit",
      qty: "people"
    },

    {
      name: "Motion sickness medication",
      qty: 1
    },

    {
      name: "Small day bag",
      qty: 1
    }

  ],


  "City Trip": [

    {
      name: "Comfortable walking shoes",
      qty: "people"
    },

    {
      name: "Small backpack",
      qty: 1
    },

    {
      name: "Transit card",
      qty: 1
    },

    {
      name: "Offline map",
      qty: 1
    },

    {
      name: "Reusable water bottle",
      qty: "people"
    }

  ],


  "Business Trip": [

    {
      name: "Laptop",
      qty: 1
    },

    {
      name: "Laptop charger",
      qty: 1
    },

    {
      name: "Work documents",
      qty: 1
    },

    {
      name: "Business clothing",
      qty: 2
    },

    {
      name: "Notebook",
      qty: 1
    }

  ],


  "Formal Event": [

    {
      name: "Formal outfit",
      qty: "people"
    },

    {
      name: "Dress shoes",
      qty: "people"
    },

    {
      name: "Accessories",
      qty: "people"
    },

    {
      name: "Garment bag",
      qty: 1
    }

  ],


  "Photography": [

    {
      name: "Camera",
      qty: 1
    },

    {
      name: "Camera charger",
      qty: 1,
      minNights: 1
    },

    {
      name: "Memory card",
      qty: 1
    },

    {
      name: "Tripod",
      qty: 1
    },

    {
      name: "Camera batteries",
      qty: 2
    }

  ],


  "Theme Park": [

    {
      name: "Tickets",
      qty: 1
    },

    {
      name: "Portable charger",
      qty: 1
    },

    {
      name: "Water bottle",
      qty: "people"
    },

    {
      name: "Comfortable shoes",
      qty: "people"
    },

    {
      name: "Small backpack",
      qty: 1
    }

  ],


  "Cycling": [

    {
      name: "Bike helmet",
      qty: "people"
    },

    {
      name: "Bike gloves",
      qty: "people"
    },

    {
      name: "Water bottle",
      qty: "people"
    },

    {
      name: "Bike repair kit",
      qty: 1
    }

  ],


  "Pets": [

    {
      name: "Pet food",
      qty: 1
    },

    {
      name: "Water bowl",
      qty: 1
    },

    {
      name: "Leash",
      qty: 1
    },

    {
      name: "Waste bags",
      qty: 1
    },

    {
      name: "Pet bed / blanket",
      qty: 1,
      minNights: 1
    }

  ],


  "Kids": [

    {
      name: "Kids clothing",
      qty: 1
    },

    {
      name: "Favorite toy",
      qty: 1
    },

    {
      name: "Kids snacks",
      qty: 1
    },

    {
      name: "Wipes",
      qty: 1
    },

    {
      name: "Entertainment",
      qty: 1
    }

  ],


  "Beach": [

    {
      name: "Beach blanket",
      qty: 1
    },

    {
      name: "Umbrella / shade",
      qty: 1
    },

    {
      name: "Sunglasses",
      qty: "people"
    },

    {
      name: "Flip-flops",
      qty: "people"
    },

    {
      name: "Swimsuit",
      qty: "people"
    }

  ],


  "Winter Gear": [

    {
      name: "Winter jacket",
      qty: "people"
    },

    {
      name: "Warm boots",
      qty: "people"
    },

    {
      name: "Gloves",
      qty: "people"
    },

    {
      name: "Warm hat",
      qty: "people"
    },

    {
      name: "Thermal base layer",
      qty: "people"
    },

    {
      name: "Hand warmers",
      qty: 1
    }

  ],


  "Road Trip": [

    {
      name: "Driver's licence",
      qty: 1
    },

    {
      name: "Vehicle insurance",
      qty: 1
    },

    {
      name: "Car charger",
      qty: 1
    },

    {
      name: "Emergency roadside kit",
      qty: 1
    },

    {
      name: "Phone mount",
      qty: 1
    },

    {
      name: "Reusable water bottle",
      qty: "people"
    }

  ],


  "Travel Documents": [

    {
      name: "Passport / ID",
      qty: "people"
    },

    {
      name: "Booking confirmations",
      qty: 1
    },

    {
      name: "Travel insurance",
      qty: 1
    },

    {
      name: "Wallet",
      qty: "people"
    }

  ],


  "Entertainment": [

    {
      name: "Book / e-reader",
      qty: 1
    },

    {
      name: "Playing cards",
      qty: 1
    },

    {
      name: "Headphones",
      qty: "people"
    }

  ]

};



/* ==========================================
   STATE
========================================== */

let data =
  loadData();


let state = {

  page:
    "home",

  history:
    [],

  newTrip:
    null,

  activeTripId:
    null,

  editingExistingTrip:
    false

};



/* ==========================================
   ELEMENTS
========================================== */

const screen =
  document.getElementById(
    "screen"
  );


const menuButton =
  document.getElementById(
    "menuBtn"
  );


const drawer =
  document.getElementById(
    "drawer"
  );


const drawerOverlay =
  document.getElementById(
    "drawerOverlay"
  );


const backButton =
  document.getElementById(
    "backBtn"
  );


const topTitle =
  document.getElementById(
    "topTitle"
  );


const toast =
  document.getElementById(
    "toast"
  );


const modalOverlay =
  document.getElementById(
    "modalOverlay"
  );



/* ==========================================
   STORAGE
========================================== */

function loadData() {

  const saved =
    localStorage.getItem(
      STORAGE_KEY
    );


  if (!saved) {

    return JSON.parse(
      JSON.stringify(
        defaultData
      )
    );

  }


  try {

    return JSON.parse(
      saved
    );

  }

  catch {

    return JSON.parse(
      JSON.stringify(
        defaultData
      )
    );

  }

}



function saveData() {

  localStorage.setItem(

    STORAGE_KEY,

    JSON.stringify(
      data
    )

  );

}



/* ==========================================
   MENU
========================================== */

menuButton.onclick =
  function () {

    drawer.classList.add(
      "open"
    );

    drawerOverlay.classList.remove(
      "hidden"
    );

  };


drawerOverlay.onclick =
  closeMenu;


function closeMenu() {

  drawer.classList.remove(
    "open"
  );

  drawerOverlay.classList.add(
    "hidden"
  );

}



document
  .querySelectorAll(
    "[data-nav]"
  )
  .forEach(

    function (button) {

      button.onclick =
        function () {

          closeMenu();

          state.history = [];

          state.page =
            button.dataset.nav;

          render();

        };

    }

  );



/* ==========================================
   NAVIGATION
========================================== */

function navigate(
  page,
  addHistory = true
) {

  if (
    addHistory
    &&
    state.page !== page
  ) {

    state.history.push(
      state.page
    );

  }


  state.page =
    page;


  render();

}



backButton.onclick =
  function () {


    if (
      state.page ===
      "packing"
    ) {

      const trip =
        activeTrip();


      if (trip) {

        state.newTrip =
          JSON.parse(
            JSON.stringify(
              trip
            )
          );


        state.editingExistingTrip =
          true;


        state.page =
          "categories";


        render();

        return;

      }

    }


    if (
      state.history.length > 0
    ) {

      state.page =
        state.history.pop();

      render();

      return;

    }


    state.page =
      "home";

    render();

  };



/* ==========================================
   RENDER
========================================== */

function render() {

  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "instant"
  });


  const noBack = [

    "home",
    "trips",
    "gear",
    "shopping",
    "settings",
    "about"

  ];


  backButton.classList.toggle(

    "hidden",

    noBack.includes(
      state.page
    )

  );


  const titles = {

    home:
      "PackTrail",

    tripType:
      "New Trip",

    tripDetails:
      "Trip Details",

    categories:
      "Categories",

    packing:
      "Packing List",

    trips:
      "My Trips",

    gear:
      "My Gear",

    shopping:
      "Shopping List",

    settings:
      "Settings",

    about:
      "About"

  };


  topTitle.textContent =
    titles[
      state.page
    ]
    ||
    "PackTrail";


  if (
    state.page ===
    "home"
  ) {

    renderHome();

  }


  else if (
    state.page ===
    "tripType"
  ) {

    renderTripTypes();

  }


  else if (
    state.page ===
    "tripDetails"
  ) {

    renderTripDetails();

  }


  else if (
    state.page ===
    "categories"
  ) {

    renderCategories();

  }


  else if (
    state.page ===
    "packing"
  ) {

    renderPackingList();

  }


  else if (
    state.page ===
    "trips"
  ) {

    renderTrips();

  }


  else if (
    state.page ===
    "gear"
  ) {

    renderGear();

  }


  else if (
    state.page ===
    "shopping"
  ) {

    renderShopping();

  }


  else if (
    state.page ===
    "settings"
  ) {

    renderSettings();

  }


  else if (
    state.page ===
    "about"
  ) {

    renderAbout();

  }


  setTimeout(
    function () {

      window.scrollTo(
        0,
        0
      );

    },

    0
  );

}



/* ==========================================
   HOME
========================================== */

function renderHome() {

  screen.innerHTML = `

    <div class="home">

      <button
        class="pack-button"
        id="newTripButton"
      >

        Pack New Trip

      </button>

    </div>

  `;


  document
    .getElementById(
      "newTripButton"
    )
    .onclick =
      function () {


        state.newTrip =
          null;


        state.editingExistingTrip =
          false;


        state.history =
          ["home"];


        state.page =
          "tripType";


        render();

      };

}



/* ==========================================
   TRIP TYPE
========================================== */

function renderTripTypes() {

  screen.innerHTML = `

    <h1 class="page-title">

      What kind of trip?

    </h1>


    <p class="page-subtitle">

      Choose the closest option.
      Everything can be customized later.

    </p>


    <div class="trip-grid">

      ${tripTypes.map(

        function (trip) {

          return `

            <button
              class="trip-type"
              data-trip-type="${trip.id}"
            >

              <span class="trip-emoji">

                ${trip.emoji}

              </span>

              <span class="trip-label">

                ${trip.name}

              </span>

            </button>

          `;

        }

      ).join("")}

    </div>

  `;


  document
    .querySelectorAll(
      "[data-trip-type]"
    )
    .forEach(

      function (button) {

        button.onclick =
          function () {


            const type =
              tripTypes.find(

                function (trip) {

                  return (
                    trip.id ===
                    button.dataset.tripType
                  );

                }

              );


            state.newTrip = {

              id:
                Date.now().toString(),

              type:
                type.id,

              typeName:
                type.name,

              emoji:
                type.emoji,

              name:
                "My "
                +
                type.name
                +
                " Trip",

              duration:
                3,

              season:
                "Summer",

              people:
                2,

              activities:
                [],

              categories:
                []

            };


            navigate(
              "tripDetails"
            );

          };

      }

    );

}



/* ==========================================
   TRIP DETAILS
========================================== */

function renderTripDetails() {

  const trip =
    state.newTrip;


  if (!trip) {

    state.page =
      "tripType";

    render();

    return;

  }


  screen.innerHTML = `

    <h1 class="page-title">

      ${trip.emoji}
      ${trip.typeName}

    </h1>


    <p class="page-subtitle">

      Tell us a little about
      this trip.

    </p>


    <div class="stack">


      <div class="card">

        <label class="field-label">

          Trip name

        </label>


        <input
          id="tripName"
          class="text-input"
          value="${escapeHtml(trip.name)}"
        >

      </div>


      <div class="card">

        <label class="field-label">

          Duration

        </label>


        <div class="counter">

          <button id="minusDuration">
            −
          </button>


          <div class="counter-value">

            <span id="durationNumber">

              ${trip.duration}

            </span>

            ${
              trip.duration === 1
              ?
              "day"
              :
              "days"
            }

          </div>


          <button id="plusDuration">
            +
          </button>

        </div>


        ${
          trip.duration === 1

          ?

          `

          <p class="small-note">

            1-day trip is treated as
            no overnight stay.

          </p>

          `

          :

          ""

        }

      </div>


      <div class="card">

        <label class="field-label">

          Season

        </label>


        <div class="chips">

          ${[
            "Spring",
            "Summer",
            "Fall",
            "Winter"
          ].map(

            function (season) {

              return `

                <button
                  class="chip
                  ${
                    trip.season === season
                    ?
                    "active"
                    :
                    ""
                  }"
                  data-season="${season}"
                >

                  ${season}

                </button>

              `;

            }

          ).join("")}

        </div>

      </div>


      <div class="card">

        <label class="field-label">

          People

        </label>


        <div class="counter">

          <button id="minusPeople">
            −
          </button>


          <div
            class="counter-value"
          >

            ${trip.people}

          </div>


          <button id="plusPeople">
            +
          </button>

        </div>

      </div>


      <div class="card">

        <label class="field-label">

          What will you do
          on this trip?

        </label>


        <div class="chips">

          ${activities.map(

            function (activity) {

              return `

                <button
                  class="chip
                  ${
                    trip.activities.includes(
                      activity
                    )
                    ?
                    "active"
                    :
                    ""
                  }"
                  data-activity="${activity}"
                >

                  ${activity}

                </button>

              `;

            }

          ).join("")}

        </div>

      </div>

    </div>


    <div class="button-row">

      <button
        id="continueDetails"
        class="primary-button"
      >

        Continue

      </button>

    </div>

  `;


  function preserveName() {

    const input =
      document.getElementById(
        "tripName"
      );


    if (input) {

      trip.name =
        input.value;

    }

  }



  document
    .getElementById(
      "minusDuration"
    )
    .onclick =
      function () {

        preserveName();

        trip.duration =
          Math.max(
            1,
            trip.duration - 1
          );

        renderTripDetails();

      };


  document
    .getElementById(
      "plusDuration"
    )
    .onclick =
      function () {

        preserveName();

        trip.duration++;

        renderTripDetails();

      };


  document
    .getElementById(
      "minusPeople"
    )
    .onclick =
      function () {

        preserveName();

        trip.people =
          Math.max(
            1,
            trip.people - 1
          );

        renderTripDetails();

      };


  document
    .getElementById(
      "plusPeople"
    )
    .onclick =
      function () {

        preserveName();

        trip.people++;

        renderTripDetails();

      };


  document
    .querySelectorAll(
      "[data-season]"
    )
    .forEach(

      function (button) {

        button.onclick =
          function () {

            preserveName();

            trip.season =
              button.dataset.season;

            renderTripDetails();

          };

      }

    );


  document
    .querySelectorAll(
      "[data-activity]"
    )
    .forEach(

      function (button) {

        button.onclick =
          function () {

            preserveName();

            const activity =
              button.dataset.activity;


            if (
              trip.activities.includes(
                activity
              )
            ) {

              trip.activities =
                trip.activities.filter(

                  function (item) {

                    return (
                      item !== activity
                    );

                  }

                );

            }

            else {

              trip.activities.push(
                activity
              );

            }


            renderTripDetails();

          };

      }

    );


  document
    .getElementById(
      "continueDetails"
    )
    .onclick =
      function () {


        trip.name =
          document
            .getElementById(
              "tripName"
            )
            .value
            .trim()
          ||
          "My Trip";


        trip.categories =
          suggestedCategories(
            trip
          );


        navigate(
          "categories"
        );

      };

}



/* ==========================================
   CATEGORY LOGIC
========================================== */

function suggestedCategories(
  trip
) {

  let categories = [

    "Clothing",
    "Personal Hygiene",
    "Electronics",
    "Health & Safety"

  ];


  if (
    trip.type ===
    "camping"
  ) {

    categories.unshift(
      "Shelter & Sleeping"
    );

    categories.push(
      "Cooking"
    );

    categories.push(
      "Food & Drinks"
    );

  }


  if (
    trip.type ===
    "roadtrip"
  ) {

    categories.push(
      "Road Trip"
    );

    categories.push(
      "Food & Drinks"
    );

  }


  if (
    trip.type ===
    "vacation"
  ) {

    categories.push(
      "Travel Documents"
    );

  }


  if (
    trip.type ===
    "fishing"
  ) {

    categories.push(
      "Fishing"
    );

  }


  if (
    trip.type ===
    "hiking"
  ) {

    categories.push(
      "Hiking"
    );

  }


  if (
    trip.type ===
    "beach"
  ) {

    categories.push(
      "Beach"
    );

  }


  if (
    trip.type ===
    "winter"
    ||
    trip.season ===
    "Winter"
  ) {

    categories.push(
      "Winter Gear"
    );

  }


  trip.activities.forEach(

    function (activity) {

      if (
        packingDatabase[
          activity
        ]
      ) {

        categories.push(
          activity
        );

      }

    }

  );


  return [
    ...new Set(
      categories
    )
  ];

}



/* ==========================================
   CATEGORIES SCREEN
========================================== */

function renderCategories() {

  const trip =
    state.newTrip;


  if (!trip) {

    state.page =
      "tripType";

    render();

    return;

  }


  const recommended =
    suggestedCategories(
      trip
    );


  const selected =
    trip.categories
    &&
    trip.categories.length

      ?

      trip.categories

      :

      recommended;


  const allCategories =
    Object.keys(
      packingDatabase
    );


  screen.innerHTML = `

    <h1 class="page-title">

      Choose categories

    </h1>


    <p class="page-subtitle">

      Remove anything you do not need
      before generating the list.

    </p>


    <div class="section-title">

      Recommended

    </div>


    <div class="stack">

      ${recommended.map(

        function (category) {

          return categoryOption(

            category,

            selected.includes(
              category
            )

          );

        }

      ).join("")}

    </div>


    <div class="section-title">

      Other categories

    </div>


    <div class="stack">

      ${allCategories

        .filter(

          function (category) {

            return (
              !recommended.includes(
                category
              )
            );

          }

        )

        .map(

          function (category) {

            return categoryOption(

              category,

              selected.includes(
                category
              )

            );

          }

        )

        .join("")
      }

    </div>


    <div class="button-row">

      <button
        id="createPackingList"
        class="primary-button"
      >

        ${
          state.editingExistingTrip
          ?
          "Update List"
          :
          "Create List"
        }

      </button>

    </div>

  `;


  document
    .getElementById(
      "createPackingList"
    )
    .onclick =
      function () {


        trip.categories =
          Array.from(

            document.querySelectorAll(
              ".category-checkbox:checked"
            )

          )
          .map(

            function (checkbox) {

              return checkbox.value;

            }

          );


        if (
          trip.categories.length === 0
        ) {

          showToast(
            "Choose at least one category"
          );

          return;

        }


        const generatedItems =
          createItems(
            trip
          );


        if (
          state.editingExistingTrip
        ) {

          const existing =
            data.trips.find(

              function (savedTrip) {

                return (
                  savedTrip.id ===
                  trip.id
                );

              }

            );


          if (existing) {

            preserveExistingProgress(

              existing,

              generatedItems

            );


            existing.type =
              trip.type;

            existing.typeName =
              trip.typeName;

            existing.emoji =
              trip.emoji;

            existing.name =
              trip.name;

            existing.duration =
              trip.duration;

            existing.season =
              trip.season;

            existing.people =
              trip.people;

            existing.activities =
              trip.activities;

            existing.categories =
              trip.categories;

            existing.items =
              generatedItems;


            state.activeTripId =
              existing.id;

          }

        }

        else {

          trip.items =
            generatedItems;


          data.trips.unshift(
            trip
          );


          state.activeTripId =
            trip.id;

        }


        saveData();


        state.editingExistingTrip =
          false;


        state.newTrip =
          null;


        state.page =
          "packing";


        render();

      };

}



function categoryOption(
  category,
  checked
) {

  return `

    <label class="category-option">

      <input
        type="checkbox"
        class="category-checkbox"
        value="${escapeHtml(category)}"
        ${checked ? "checked" : ""}
      >

      <span class="category-name">

        ${category}

      </span>

    </label>

  `;

}



/* ==========================================
   ITEM GENERATION
========================================== */

function shouldIncludeItem(
  definition,
  trip
) {

  const nights =
    Math.max(
      0,
      trip.duration - 1
    );


  if (
    definition.minNights
    &&
    nights <
    definition.minNights
  ) {

    return false;

  }


  if (
    definition.campingOnly
    &&
    trip.type !==
    "camping"
  ) {

    return false;

  }


  if (
    definition.campingUseful
    &&
    trip.duration === 1
    &&
    trip.type !==
    "camping"
  ) {

    return false;

  }


  if (
    definition.outdoorsUseful
  ) {

    const outdoor =
      [
        "camping",
        "hiking",
        "fishing"
      ]
      .includes(
        trip.type
      );


    if (
      !outdoor
      &&
      trip.duration === 1
    ) {

      return false;

    }

  }


  return true;

}



function resolveQuantity(
  qty,
  trip
) {

  const nights =
    Math.max(
      0,
      trip.duration - 1
    );


  if (
    qty ===
    "people"
  ) {

    return trip.people;

  }


  if (
    qty ===
    "shirts"
  ) {

    return Math.max(
      1,
      Math.min(
        nights + 1,
        7
      )
    );

  }


  if (
    qty ===
    "underwear"
  ) {

    return Math.max(
      1,
      Math.min(
        nights + 1,
        8
      )
    );

  }


  if (
    qty ===
    "socks"
  ) {

    return Math.max(
      1,
      Math.min(
        nights + 1,
        8
      )
    );

  }


  if (
    qty ===
    "pants"
  ) {

    if (
      trip.duration <= 2
    ) {

      return 1;

    }


    if (
      trip.duration <= 5
    ) {

      return 2;

    }


    return 3;

  }


  return qty || 1;

}



function createItems(
  trip
) {

  const result = {};


  trip.categories.forEach(

    function (category) {


      const definitions =
        packingDatabase[
          category
        ]
        ||
        [];


      result[
        category
      ] =
        definitions

          .filter(

            function (definition) {

              return shouldIncludeItem(

                definition,

                trip

              );

            }

          )

          .map(

            function (definition) {

              return {

                id:
                  Date.now().toString()
                  +
                  Math.random(),

                name:
                  definition.name,

                required:
                  resolveQuantity(
                    definition.qty,
                    trip
                  ),

                packed:
                  0,

                needToBuy:
                  0,

                bought:
                  0

              };

            }

          );

    }

  );


  return result;

}



function preserveExistingProgress(
  oldTrip,
  newItems
) {

  Object.keys(
    newItems
  ).forEach(

    function (category) {


      newItems[
        category
      ].forEach(

        function (newItem) {


          const oldCategory =
            oldTrip.items[
              category
            ]
            ||
            [];


          const oldItem =
            oldCategory.find(

              function (candidate) {

                return (
                  candidate.name ===
                  newItem.name
                );

              }

            );


          if (oldItem) {

            newItem.packed =
              Math.min(

                oldItem.packed || 0,

                newItem.required

              );


            newItem.needToBuy =
              oldItem.needToBuy || 0;


            newItem.bought =
              Math.min(

                oldItem.bought || 0,

                newItem.needToBuy

              );

          }

        }

      );

    }

  );

}



/* ==========================================
   ACTIVE TRIP
========================================== */

function activeTrip() {

  return data.trips.find(

    function (trip) {

      return (
        trip.id ===
        state.activeTripId
      );

    }

  );

}



/* ==========================================
   PACKING LIST
========================================== */

function renderPackingList() {

  const trip =
    activeTrip();


  if (!trip) {

    state.page =
      "trips";

    render();

    return;

  }


  const totals =
    calculateTotals(
      trip
    );


  const percent =
    totals.totalRequired === 0

      ?

      0

      :

      Math.round(

        totals.totalPacked
        /
        totals.totalRequired
        *
        100

      );


  screen.innerHTML = `

    <h1 class="page-title">

      ${trip.emoji}
      ${trip.name}

    </h1>


    <div class="trip-info">

      ${trip.duration}

      ${
        trip.duration === 1
        ?
        "day"
        :
        "days"
      }

      ·

      ${trip.season}

      ·

      ${trip.people}

      ${
        trip.people === 1
        ?
        "person"
        :
        "people"
      }

    </div>


    <div class="progress">

      <div
        class="progress-bar"
        style="width:${percent}%"
      ></div>

    </div>


    <div class="progress-text">

      ${totals.totalPacked}

      of

      ${totals.totalRequired}

      packed

      ·

      ${percent}%

    </div>


    <div>

      ${Object.keys(
        trip.items
      ).map(

        function (category) {

          return renderPackCategory(

            trip,

            category

          );

        }

      ).join("")}

    </div>


    <div class="button-row">

      <button
        id="addCategoryButton"
        class="secondary-button"
      >

        + Add Category

      </button>

    </div>

  `;


  attachPackingEvents(
    trip
  );


  document
    .getElementById(
      "addCategoryButton"
    )
    .onclick =
      function () {


        const name =
          prompt(
            "Category name"
          );


        if (!name) {

          return;

        }


        if (
          !trip.items[
            name
          ]
        ) {

          trip.items[
            name
          ] = [];

        }


        saveData();

        renderPackingList();

      };

}



/* ==========================================
   PACK CATEGORY
========================================== */

function renderPackCategory(
  trip,
  category
) {

  const items =
    trip.items[
      category
    ];


  const packed =
    items.reduce(

      function (
        sum,
        item
      ) {

        return (
          sum
          +
          Math.min(

            item.packed,

            item.required

          )
        );

      },

      0

    );


  const required =
    items.reduce(

      function (
        sum,
        item
      ) {

        return (
          sum
          +
          item.required
        );

      },

      0

    );


  return `

    <section class="pack-category">


      <div class="pack-category-header">

        <div class="pack-category-title">

          ${category}

        </div>


        <div class="category-count">

          ${packed}
          /
          ${required}

        </div>

      </div>


      <div class="pack-items">


        ${
          items.length === 0

          ?

          `

          <div class="empty">

            No items in this category.

          </div>

          `

          :

          items.map(

            function (item) {


              const completed =
                item.packed >=
                item.required;


              return `

                <div
                  class="
                    pack-item
                    ${
                      completed
                      ?
                      "completed"
                      :
                      ""
                    }
                  "
                >


                  <div class="pack-item-main">

                    <div class="item-name">

                      ${
                        completed
                        ?
                        "✓ "
                        :
                        ""
                      }

                      ${item.name}

                    </div>


                    <div class="item-meta">

                      <span
                        class="
                          item-pill
                          ${
                            completed
                            ?
                            "complete"
                            :
                            ""
                          }
                        "
                      >

                        ${
                          completed
                          ?
                          "✓ Packed"
                          :
                          "Packed"
                        }

                        ${item.packed}
                        /
                        ${item.required}

                      </span>


                      ${
                        item.needToBuy > 0

                        ?

                        `

                        <span
                          class="item-pill buy"
                        >

                          🛒

                          ${item.bought}
                          /
                          ${item.needToBuy}

                          bought

                        </span>

                        `

                        :

                        ""

                      }

                    </div>

                  </div>


                  <div class="item-actions">


                    <button
                      class="qty-button"
                      data-pack-minus
                      data-category="${escapeHtml(category)}"
                      data-id="${item.id}"
                      aria-label="Decrease packed quantity"
                    >

                      −

                    </button>


                    <button
                      class="qty-button"
                      data-pack-plus
                      data-category="${escapeHtml(category)}"
                      data-id="${item.id}"
                      aria-label="Increase packed quantity"
                    >

                      +

                    </button>


                    <button
                      class="quick-action-button shopping"
                      data-quick-buy
                      data-category="${escapeHtml(category)}"
                      data-id="${item.id}"
                      aria-label="Add to shopping list"
                    >

                      🛒

                    </button>


                    <button
                      class="quick-action-button edit"
                      data-edit-item
                      data-category="${escapeHtml(category)}"
                      data-id="${item.id}"
                      aria-label="Edit item"
                    >

                      ✎

                    </button>


                    <button
                      class="quick-action-button delete"
                      data-delete-item
                      data-category="${escapeHtml(category)}"
                      data-id="${item.id}"
                      aria-label="Delete item"
                    >

                      🗑

                    </button>


                  </div>

                </div>

              `;

            }

          ).join("")

        }


        <button
          class="add-item"
          data-add-item="${escapeHtml(category)}"
        >

          + Add item

        </button>


      </div>

    </section>

  `;

}



/* ==========================================
   PACKING EVENTS
========================================== */

function attachPackingEvents(
  trip
) {


  document
    .querySelectorAll(
      "[data-pack-plus]"
    )
    .forEach(

      function (button) {

        button.onclick =
          function () {


            const item =
              findItem(

                trip,

                button.dataset.category,

                button.dataset.id

              );


            if (!item) {

              return;

            }


            item.packed =
              Math.min(

                item.required,

                item.packed + 1

              );


            saveData();

            renderPackingList();

          };

      }

    );


  document
    .querySelectorAll(
      "[data-pack-minus]"
    )
    .forEach(

      function (button) {

        button.onclick =
          function () {


            const item =
              findItem(

                trip,

                button.dataset.category,

                button.dataset.id

              );


            if (!item) {

              return;

            }


            item.packed =
              Math.max(

                0,

                item.packed - 1

              );


            saveData();

            renderPackingList();

          };

      }

    );


  document
    .querySelectorAll(
      "[data-quick-buy]"
    )
    .forEach(

      function (button) {

        button.onclick =
          function () {


            const category =
              button.dataset.category;


            const item =
              findItem(

                trip,

                category,

                button.dataset.id

              );


            if (!item) {

              return;

            }


            openQuickBuy(

              trip,

              category,

              item

            );

          };

      }

    );


  document
    .querySelectorAll(
      "[data-edit-item]"
    )
    .forEach(

      function (button) {

        button.onclick =
          function () {


            const category =
              button.dataset.category;


            const item =
              findItem(

                trip,

                category,

                button.dataset.id

              );


            if (!item) {

              return;

            }


            openItemEditor(

              trip,

              category,

              item

            );

          };

      }

    );


  document
    .querySelectorAll(
      "[data-delete-item]"
    )
    .forEach(

      function (button) {

        button.onclick =
          function () {


            const category =
              button.dataset.category;


            trip.items[
              category
            ] =
              trip.items[
                category
              ].filter(

                function (item) {

                  return (
                    item.id !==
                    button.dataset.id
                  );

                }

              );


            saveData();

            showToast(
              "Item removed"
            );

            renderPackingList();

          };

      }

    );


  document
    .querySelectorAll(
      "[data-add-item]"
    )
    .forEach(

      function (button) {

        button.onclick =
          function () {

            openItemEditor(

              trip,

              button.dataset.addItem,

              null

            );

          };

      }

    );

}



/* ==========================================
   QUICK SHOPPING
========================================== */

function openQuickBuy(
  trip,
  category,
  item
) {

  let quantity =
    item.needToBuy > 0

      ?

      item.needToBuy

      :

      Math.max(

        1,

        item.required -
        item.packed

      );


  modalOverlay.innerHTML = `

    <div class="modal-sheet">

      <h2 class="modal-title">

        🛒 Add to Shopping List

      </h2>


      <p class="modal-description">

        ${item.name}

      </p>


      <div class="modal-field">

        <label class="field-label">

          How many do you need to buy?

        </label>


        <div class="modal-counter">

          <button id="quickBuyMinus">

            −

          </button>


          <div
            id="quickBuyValue"
            class="modal-counter-value"
          >

            ${quantity}

          </div>


          <button id="quickBuyPlus">

            +

          </button>

        </div>

      </div>


      <div class="button-row">

        <button
          id="quickBuyCancel"
          class="secondary-button"
        >

          Cancel

        </button>


        <button
          id="quickBuySave"
          class="primary-button"
        >

          Add to Shopping

        </button>

      </div>

    </div>

  `;


  modalOverlay.classList.remove(
    "hidden"
  );


  function refresh() {

    document
      .getElementById(
        "quickBuyValue"
      )
      .textContent =
        quantity;

  }


  document
    .getElementById(
      "quickBuyMinus"
    )
    .onclick =
      function () {

        quantity =
          Math.max(
            1,
            quantity - 1
          );

        refresh();

      };


  document
    .getElementById(
      "quickBuyPlus"
    )
    .onclick =
      function () {

        quantity++;

        refresh();

      };


  document
    .getElementById(
      "quickBuyCancel"
    )
    .onclick =
      closeModal;


  document
    .getElementById(
      "quickBuySave"
    )
    .onclick =
      function () {


        item.needToBuy =
          quantity;


        item.bought =
          Math.min(

            item.bought || 0,

            quantity

          );


        saveData();

        closeModal();


        showToast(
          "Added to Shopping List"
        );


        renderPackingList();

      };

}



/* ==========================================
   ITEM EDITOR
========================================== */

function openItemEditor(
  trip,
  category,
  existingItem
) {

  const editing =
    !!existingItem;


  const draft = {

    name:
      editing
      ?
      existingItem.name
      :
      "",

    required:
      editing
      ?
      existingItem.required
      :
      1,

    packed:
      editing
      ?
      existingItem.packed
      :
      0,

    needToBuy:
      editing
      ?
      existingItem.needToBuy
      :
      0

  };


  modalOverlay.innerHTML = `

    <div class="modal-sheet">

      <h2 class="modal-title">

        ${
          editing
          ?
          "Edit Item"
          :
          "Add Item"
        }

      </h2>


      <div class="modal-field">

        <label class="field-label">

          Item name

        </label>


        <input
          id="editorName"
          class="text-input"
          value="${escapeHtml(draft.name)}"
        >

      </div>


      <div class="modal-field">

        <label class="field-label">

          Required quantity

        </label>


        <div class="modal-counter">

          <button id="requiredMinus">
            −
          </button>


          <div
            id="requiredValue"
            class="modal-counter-value"
          >

            ${draft.required}

          </div>


          <button id="requiredPlus">
            +
          </button>

        </div>

      </div>


      <div class="modal-field">

        <label class="field-label">

          Packed now

        </label>


        <div class="modal-counter">

          <button id="packedMinus">
            −
          </button>


          <div
            id="packedValue"
            class="modal-counter-value"
          >

            ${draft.packed}

          </div>


          <button id="packedPlus">
            +
          </button>

        </div>

      </div>


      <div class="modal-field">

        <label class="field-label">

          Need to buy

        </label>


        <div class="modal-counter">

          <button id="buyMinus">
            −
          </button>


          <div
            id="buyValue"
            class="modal-counter-value"
          >

            ${draft.needToBuy}

          </div>


          <button id="buyPlus">
            +
          </button>

        </div>

      </div>


      <div class="modal-field">

        <label class="field-label">

          Category

        </label>


        <select
          id="editorCategory"
          class="select-input"
        >

          ${Object.keys(
            trip.items
          ).map(

            function (name) {

              return `

                <option
                  ${
                    name === category
                    ?
                    "selected"
                    :
                    ""
                  }
                >

                  ${name}

                </option>

              `;

            }

          ).join("")}

        </select>

      </div>


      <div class="button-row">


        <button
          id="cancelEditor"
          class="secondary-button"
        >

          Cancel

        </button>


        <button
          id="saveEditor"
          class="primary-button"
        >

          Save

        </button>

      </div>

    </div>

  `;


  modalOverlay.classList.remove(
    "hidden"
  );


  function refresh() {

    document
      .getElementById(
        "requiredValue"
      )
      .textContent =
        draft.required;


    document
      .getElementById(
        "packedValue"
      )
      .textContent =
        draft.packed;


    document
      .getElementById(
        "buyValue"
      )
      .textContent =
        draft.needToBuy;

  }


  document
    .getElementById(
      "requiredMinus"
    )
    .onclick =
      function () {

        draft.required =
          Math.max(

            1,

            draft.required - 1

          );


        draft.packed =
          Math.min(

            draft.packed,

            draft.required

          );


        refresh();

      };


  document
    .getElementById(
      "requiredPlus"
    )
    .onclick =
      function () {

        draft.required++;

        refresh();

      };


  document
    .getElementById(
      "packedMinus"
    )
    .onclick =
      function () {

        draft.packed =
          Math.max(

            0,

            draft.packed - 1

          );


        refresh();

      };


  document
    .getElementById(
      "packedPlus"
    )
    .onclick =
      function () {

        draft.packed =
          Math.min(

            draft.required,

            draft.packed + 1

          );


        refresh();

      };


  document
    .getElementById(
      "buyMinus"
    )
    .onclick =
      function () {

        draft.needToBuy =
          Math.max(

            0,

            draft.needToBuy - 1

          );


        refresh();

      };


  document
    .getElementById(
      "buyPlus"
    )
    .onclick =
      function () {

        draft.needToBuy++;

        refresh();

      };


  document
    .getElementById(
      "cancelEditor"
    )
    .onclick =
      closeModal;


  document
    .getElementById(
      "saveEditor"
    )
    .onclick =
      function () {


        const name =
          document
            .getElementById(
              "editorName"
            )
            .value
            .trim();


        if (!name) {

          showToast(
            "Enter an item name"
          );

          return;

        }


        const targetCategory =
          document
            .getElementById(
              "editorCategory"
            )
            .value;


        if (editing) {


          trip.items[
            category
          ] =
            trip.items[
              category
            ].filter(

              function (item) {

                return (
                  item.id !==
                  existingItem.id
                );

              }

            );


          trip.items[
            targetCategory
          ].push({

            ...existingItem,

            name:
              name,

            required:
              draft.required,

            packed:
              draft.packed,

            needToBuy:
              draft.needToBuy,

            bought:
              Math.min(

                existingItem.bought || 0,

                draft.needToBuy

              )

          });

        }

        else {


          trip.items[
            targetCategory
          ].push({

            id:
              Date.now().toString()
              +
              Math.random(),

            name:
              name,

            required:
              draft.required,

            packed:
              draft.packed,

            needToBuy:
              draft.needToBuy,

            bought:
              0

          });

        }


        saveData();

        closeModal();

        renderPackingList();

      };

}



/* ==========================================
   MODAL
========================================== */

function closeModal() {

  modalOverlay.classList.add(
    "hidden"
  );


  modalOverlay.innerHTML =
    "";

}



/* ==========================================
   ITEM LOOKUP
========================================== */

function findItem(
  trip,
  category,
  id
) {

  const items =
    trip.items[
      category
    ];


  if (!items) {

    return null;

  }


  return items.find(

    function (item) {

      return (
        item.id ===
        id
      );

    }

  );

}



/* ==========================================
   TOTALS
========================================== */

function calculateTotals(
  trip
) {

  const allItems =
    Object.values(
      trip.items
    ).flat();


  return {

    totalRequired:
      allItems.reduce(

        function (
          sum,
          item
        ) {

          return (
            sum
            +
            item.required
          );

        },

        0

      ),


    totalPacked:
      allItems.reduce(

        function (
          sum,
          item
        ) {

          return (
            sum
            +
            Math.min(

              item.packed,

              item.required

            )
          );

        },

        0

      )

  };

}



/* ==========================================
   MY TRIPS
========================================== */

function renderTrips() {

  screen.innerHTML = `

    <h1 class="page-title">

      My Trips

    </h1>


    <p class="page-subtitle">

      Open any trip and
      continue packing.

    </p>


    ${
      data.trips.length === 0

      ?

      `

      <div class="empty">

        No saved trips yet.

      </div>

      `

      :

      `

      <div class="stack">

        ${data.trips.map(

          function (trip) {


            const totals =
              calculateTotals(
                trip
              );


            return `

              <div
                class="trip-row"
                data-open-trip="${trip.id}"
              >


                <div class="trip-icon">

                  ${trip.emoji}

                </div>


                <div class="trip-main">

                  <div class="trip-name">

                    ${trip.name}

                  </div>


                  <div class="trip-small">

                    ${trip.duration}

                    ${
                      trip.duration === 1
                      ?
                      "day"
                      :
                      "days"
                    }

                    ·

                    ${trip.season}

                    ·

                    ${totals.totalPacked}
                    /
                    ${totals.totalRequired}

                    packed

                  </div>

                </div>


                <span class="badge">

                  ${
                    totals.totalRequired > 0
                    &&
                    totals.totalPacked ===
                    totals.totalRequired

                    ?

                    "Done"

                    :

                    "Active"
                  }

                </span>

              </div>

            `;

          }

        ).join("")}

      </div>

      `

    }


    <div class="button-row">

      <button
        id="newTripFromTrips"
        class="primary-button"
      >

        + New Trip

      </button>

    </div>

  `;


  document
    .querySelectorAll(
      "[data-open-trip]"
    )
    .forEach(

      function (row) {

        row.onclick =
          function () {


            state.activeTripId =
              row.dataset.openTrip;


            state.history =
              [];


            state.page =
              "packing";


            render();

          };

      }

    );


  document
    .getElementById(
      "newTripFromTrips"
    )
    .onclick =
      function () {


        state.newTrip =
          null;


        state.editingExistingTrip =
          false;


        state.history =
          ["trips"];


        state.page =
          "tripType";


        render();

      };

}



/* ==========================================
   SHOPPING LIST
========================================== */

function renderShopping() {

  const shoppingTrips =
    data.trips

      .map(

        function (trip) {


          const items =
            [];


          Object.keys(
            trip.items
          ).forEach(

            function (category) {


              trip.items[
                category
              ].forEach(

                function (item) {


                  if (
                    item.needToBuy > 0
                  ) {

                    items.push({

                      category:
                        category,

                      item:
                        item

                    });

                  }

                }

              );

            }

          );


          return {

            trip:
              trip,

            items:
              items

          };

        }

      )

      .filter(

        function (entry) {

          return (
            entry.items.length > 0
          );

        }

      );


  screen.innerHTML = `

    <h1 class="page-title">

      Shopping List

    </h1>


    <p class="page-subtitle">

      Check items while shopping.
      Buying does not automatically
      mark them packed.

    </p>


    ${
      shoppingTrips.length === 0

      ?

      `

      <div class="empty">

        Nothing to buy right now.

      </div>

      `

      :

      shoppingTrips.map(

        function (entry) {

          return `

            <section class="shopping-trip">

              <div class="section-title">

                ${entry.trip.emoji}

                ${entry.trip.name}

              </div>


              ${entry.items.map(

                function (entryItem) {


                  const item =
                    entryItem.item;


                  const complete =
                    item.bought >=
                    item.needToBuy;


                  return `

                    <div
                      class="
                        shopping-item
                        ${
                          complete
                          ?
                          "bought"
                          :
                          ""
                        }
                      "
                    >


                      <input
                        type="checkbox"
                        data-shopping-check
                        data-trip="${entry.trip.id}"
                        data-category="${escapeHtml(entryItem.category)}"
                        data-id="${item.id}"
                        ${
                          complete
                          ?
                          "checked"
                          :
                          ""
                        }
                      >


                      <div>

                        <div class="shopping-name">

                          ${item.name}

                        </div>


                        <div class="shopping-small">

                          ${entryItem.category}

                        </div>

                      </div>


                      <div class="shopping-qty">

                        ×${item.needToBuy}

                      </div>

                    </div>

                  `;

                }

              ).join("")}

            </section>

          `;

        }

      ).join("")

    }

  `;


  document
    .querySelectorAll(
      "[data-shopping-check]"
    )
    .forEach(

      function (checkbox) {

        checkbox.onchange =
          function () {


            const trip =
              data.trips.find(

                function (trip) {

                  return (
                    trip.id ===
                    checkbox.dataset.trip
                  );

                }

              );


            if (!trip) {

              return;

            }


            const item =
              findItem(

                trip,

                checkbox.dataset.category,

                checkbox.dataset.id

              );


            if (!item) {

              return;

            }


            item.bought =
              checkbox.checked

              ?

              item.needToBuy

              :

              0;


            saveData();

            renderShopping();

          };

      }

    );

}



/* ==========================================
   MY GEAR
========================================== */

function renderGear() {

  screen.innerHTML = `

    <h1 class="page-title">

      My Gear

    </h1>


    <p class="page-subtitle">

      Save equipment
      you already own.

    </p>


    <div class="stack">


      ${data.gear.map(

        function (
          group,
          groupIndex
        ) {

          return `

            <section class="pack-category">


              <div class="pack-category-header">

                <div class="pack-category-title">

                  ${group.category}

                </div>

              </div>


              <div class="pack-items">


                ${group.items.map(

                  function (
                    item,
                    itemIndex
                  ) {

                    return `

                      <div class="gear-row">

                        <div class="trip-main">

                          ${item}

                        </div>


                        <button
                          class="quick-action-button delete"
                          data-remove-gear="${groupIndex}:${itemIndex}"
                        >

                          🗑

                        </button>

                      </div>

                    `;

                  }

                ).join("")}


                <button
                  class="add-item"
                  data-add-gear="${groupIndex}"
                >

                  + Add gear

                </button>

              </div>

            </section>

          `;

        }

      ).join("")}

    </div>


    <div class="button-row">

      <button
        id="addGearCategory"
        class="secondary-button"
      >

        + Add Category

      </button>

    </div>

  `;


  document
    .querySelectorAll(
      "[data-add-gear]"
    )
    .forEach(

      function (button) {

        button.onclick =
          function () {


            const name =
              prompt(
                "Gear name"
              );


            if (!name) {

              return;

            }


            const index =
              Number(
                button.dataset.addGear
              );


            data.gear[
              index
            ]
            .items
            .push(
              name
            );


            saveData();

            renderGear();

          };

      }

    );


  document
    .querySelectorAll(
      "[data-remove-gear]"
    )
    .forEach(

      function (button) {

        button.onclick =
          function () {


            const indexes =
              button
                .dataset
                .removeGear
                .split(":");


            const group =
              Number(
                indexes[0]
              );


            const item =
              Number(
                indexes[1]
              );


            data.gear[
              group
            ]
            .items
            .splice(
              item,
              1
            );


            saveData();

            renderGear();

          };

      }

    );


  document
    .getElementById(
      "addGearCategory"
    )
    .onclick =
      function () {


        const name =
          prompt(
            "Category name"
          );


        if (!name) {

          return;

        }


        data.gear.push({

          category:
            name,

          items:
            []

        });


        saveData();

        renderGear();

      };

}



/* ==========================================
   SETTINGS
========================================== */

function renderSettings() {

  screen.innerHTML = `

    <h1 class="page-title">

      Settings

    </h1>


    <div class="card">

      <p>

        Prototype settings.

      </p>


      <p class="small-note">

        Resetting clears
        all test data.

      </p>


      <button
        id="resetPrototype"
        class="delete-button"
      >

        Reset Prototype

      </button>

    </div>

  `;


  document
    .getElementById(
      "resetPrototype"
    )
    .onclick =
      function () {


        if (
          !confirm(
            "Delete all saved trips and reset?"
          )
        ) {

          return;

        }


        localStorage.removeItem(
          STORAGE_KEY
        );


        data =
          JSON.parse(
            JSON.stringify(
              defaultData
            )
          );


        state.page =
          "home";


        state.history =
          [];


        state.newTrip =
          null;


        state.activeTripId =
          null;


        showToast(
          "Prototype reset"
        );


        render();

      };

}



/* ==========================================
   ABOUT
========================================== */

function renderAbout() {

  screen.innerHTML = `

    <h1 class="page-title">

      About PackTrail

    </h1>


    <div class="card">

      <p>

        PackTrail helps prepare
        packing and shopping lists
        for trips and outdoor adventures.

      </p>


      <p class="small-note">

        This is an early browser prototype.

      </p>

    </div>

  `;

}



/* ==========================================
   TOAST
========================================== */

function showToast(
  message
) {

  toast.textContent =
    message;


  toast.classList.remove(
    "hidden"
  );


  clearTimeout(
    showToast.timer
  );


  showToast.timer =
    setTimeout(

      function () {

        toast.classList.add(
          "hidden"
        );

      },

      1800

    );

}



/* ==========================================
   SAFE TEXT
========================================== */

function escapeHtml(
  value
) {

  return String(
    value || ""
  ).replace(

    /[&<>"']/g,

    function (character) {

      const map = {

        "&":
          "&amp;",

        "<":
          "&lt;",

        ">":
          "&gt;",

        '"':
          "&quot;",

        "'":
          "&#039;"

      };


      return map[
        character
      ];

    }

  );

}



/* ==========================================
   START
========================================== */

render();
