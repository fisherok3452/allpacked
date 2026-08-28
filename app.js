const STORAGE_KEY = "packtrail_v1";


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
   ACTIVITIES
========================================== */

const activities = [

  "Fishing",
  "Hiking",
  "Swimming",
  "Cooking",
  "Photography",
  "Cycling",
  "Pets",
  "Kids"

];



/* ==========================================
   PACKING DATABASE
========================================== */

const packingDatabase = {


  "Shelter & Sleeping": [

    ["Tent", 1],

    ["Rainfly", 1],

    ["Tent stakes", 1],

    ["Ground tarp", 1],

    ["Sleeping bag", "people"],

    ["Pillow", "people"],

    ["Air mattress", 1],

    ["Air pump", 1],

    ["Camping chair", "people"],

    ["Mallet", 1]

  ],


  "Clothing": [

    ["T-shirts", "days"],

    ["Underwear", "days"],

    ["Socks", "days"],

    ["Pants / shorts", 2],

    ["Hoodie / sweater", 1],

    ["Rain jacket", 1],

    ["Hat", 1],

    ["Sleepwear", 1]

  ],


  "Personal Hygiene": [

    ["Toothbrush", "people"],

    ["Toothpaste", 1],

    ["Deodorant", "people"],

    ["Soap / body wash", 1],

    ["Shampoo", 1],

    ["Towel", "people"],

    ["Sunscreen", 1],

    ["Bug spray", 1],

    ["Toilet paper", 1]

  ],


  "Cooking": [

    ["Camp stove", 1],

    ["Fuel / propane", 1],

    ["Lighter", 2],

    ["Frying pan", 1],

    ["Pot", 1],

    ["Plate", "people"],

    ["Cup / mug", "people"],

    ["Cutlery", "people"],

    ["Knife", 1],

    ["Cutting board", 1],

    ["Aluminum foil", 1]

  ],


  "Food & Drinks": [

    ["Drinking water", 1],

    ["Coffee / tea", 1],

    ["Breakfast food", 1],

    ["Lunch food", 1],

    ["Dinner food", 1],

    ["Snacks", 1],

    ["Cooler ice", 1]

  ],


  "Electronics": [

    ["Phone", "people"],

    ["Phone charger", "people"],

    ["Power bank", 1],

    ["Flashlight", 1],

    ["Headlamp", 1],

    ["Portable power station", 1]

  ],


  "Health & Safety": [

    ["First aid kit", 1],

    ["Prescription medication", 1],

    ["Pain reliever", 1],

    ["Hand sanitizer", 1],

    ["Emergency blanket", 1],

    ["Whistle", 1]

  ],


  "Fishing": [

    ["Fishing rod", 1],

    ["Tackle box", 1],

    ["Landing net", 1],

    ["Fishing licence", 1],

    ["Bait / lures", 1],

    ["Pliers", 1]

  ],


  "Hiking": [

    ["Daypack", 1],

    ["Hiking boots", "people"],

    ["Water bottle", "people"],

    ["Trail snacks", 1],

    ["Trekking poles", 1],

    ["Offline map", 1]

  ],


  "Swimming": [

    ["Swimsuit", "people"],

    ["Beach towel", "people"],

    ["Water shoes", "people"],

    ["Dry bag", 1]

  ],


  "Photography": [

    ["Camera", 1],

    ["Camera charger", 1],

    ["Memory card", 1],

    ["Tripod", 1]

  ],


  "Pets": [

    ["Pet food", 1],

    ["Water bowl", 1],

    ["Leash", 1],

    ["Waste bags", 1],

    ["Pet bed / blanket", 1]

  ],


  "Kids": [

    ["Kids clothing", 1],

    ["Favorite toy", 1],

    ["Kids snacks", 1],

    ["Wipes", 1],

    ["Entertainment", 1]

  ],


  "Beach": [

    ["Beach blanket", 1],

    ["Umbrella / shade", 1],

    ["Sunglasses", "people"],

    ["Flip-flops", "people"]

  ],


  "Winter Gear": [

    ["Winter jacket", "people"],

    ["Warm boots", "people"],

    ["Gloves", "people"],

    ["Warm hat", "people"],

    ["Thermal base layer", "people"],

    ["Hand warmers", 1]

  ],


  "Road Trip": [

    ["Driver's licence", 1],

    ["Vehicle insurance", 1],

    ["Car charger", 1],

    ["Emergency roadside kit", 1],

    ["Phone mount", 1],

    ["Water bottle", "people"]

  ],


  "Travel Documents": [

    ["Passport / ID", "people"],

    ["Booking confirmations", 1],

    ["Travel insurance", 1],

    ["Wallet", "people"]

  ],


  "Entertainment": [

    ["Book / e-reader", 1],

    ["Playing cards", 1],

    ["Headphones", "people"]

  ]

};



/* ==========================================
   APP STATE
========================================== */

let data = loadData();


let state = {

  page: "home",

  history: [],

  newTrip: null,

  activeTripId: null

};



/* ==========================================
   HTML ELEMENTS
========================================== */

const screen =
  document.getElementById("screen");


const menuButton =
  document.getElementById("menuBtn");


const drawer =
  document.getElementById("drawer");


const drawerOverlay =
  document.getElementById("drawerOverlay");


const backButton =
  document.getElementById("backBtn");


const topTitle =
  document.getElementById("topTitle");


const toast =
  document.getElementById("toast");



/* ==========================================
   STORAGE
========================================== */

function loadData() {

  const saved =
    localStorage.getItem(STORAGE_KEY);


  if (!saved) {

    return JSON.parse(
      JSON.stringify(defaultData)
    );

  }


  try {

    return JSON.parse(saved);

  }

  catch {

    return JSON.parse(
      JSON.stringify(defaultData)
    );

  }

}



function saveData() {

  localStorage.setItem(

    STORAGE_KEY,

    JSON.stringify(data)

  );

}



/* ==========================================
   MENU
========================================== */

menuButton.onclick = function () {

  drawer.classList.add("open");

  drawerOverlay.classList.remove("hidden");

};


drawerOverlay.onclick =
  closeMenu;


function closeMenu() {

  drawer.classList.remove("open");

  drawerOverlay.classList.add("hidden");

}



document
  .querySelectorAll("[data-nav]")
  .forEach(function (button) {

    button.onclick =
      function () {

        closeMenu();

        navigate(
          button.dataset.nav
        );

      };

  });



/* ==========================================
   NAVIGATION
========================================== */

function navigate(page) {

  if (state.page !== page) {

    state.history.push(
      state.page
    );

  }


  state.page = page;

  render();

}



backButton.onclick =
  function () {

    if (
      state.history.length > 0
    ) {

      state.page =
        state.history.pop();

    }

    else {

      state.page = "home";

    }


    render();

  };



/* ==========================================
   RENDER
========================================== */

function render() {

  const pagesWithoutBack = [

    "home",
    "trips",
    "gear",
    "settings",
    "about"

  ];


  backButton
    .classList
    .toggle(

      "hidden",

      pagesWithoutBack
        .includes(state.page)

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

    settings:
      "Settings",

    about:
      "About"

  };


  topTitle.textContent =
    titles[state.page]
    || "PackTrail";


  if (
    state.page === "home"
  ) {

    renderHome();

  }


  if (
    state.page === "tripType"
  ) {

    renderTripTypes();

  }


  if (
    state.page === "tripDetails"
  ) {

    renderTripDetails();

  }


  if (
    state.page === "categories"
  ) {

    renderCategories();

  }


  if (
    state.page === "packing"
  ) {

    renderPackingList();

  }


  if (
    state.page === "trips"
  ) {

    renderTrips();

  }


  if (
    state.page === "gear"
  ) {

    renderGear();

  }


  if (
    state.page === "settings"
  ) {

    renderSettings();

  }


  if (
    state.page === "about"
  ) {

    renderAbout();

  }

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

        state.newTrip = null;

        navigate(
          "tripType"
        );

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
                + type.name
                + " Trip",

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
          value="${trip.name}"
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

            nights

          </div>


          <button id="plusDuration">
            +
          </button>

        </div>

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
                    ? "active"
                    : ""
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
            id="peopleNumber"
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

          Activities & extras

        </label>


        <div class="chips">

          ${activities.map(

            function (activity) {

              return `

                <button
                  class="chip"
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



  document
    .getElementById(
      "minusDuration"
    )
    .onclick =
      function () {

        trip.duration =
          Math.max(
            1,
            trip.duration - 1
          );


        document
          .getElementById(
            "durationNumber"
          )
          .textContent =
            trip.duration;

      };


  document
    .getElementById(
      "plusDuration"
    )
    .onclick =
      function () {

        trip.duration++;

        document
          .getElementById(
            "durationNumber"
          )
          .textContent =
            trip.duration;

      };



  document
    .getElementById(
      "minusPeople"
    )
    .onclick =
      function () {

        trip.people =
          Math.max(
            1,
            trip.people - 1
          );


        document
          .getElementById(
            "peopleNumber"
          )
          .textContent =
            trip.people;

      };


  document
    .getElementById(
      "plusPeople"
    )
    .onclick =
      function () {

        trip.people++;

        document
          .getElementById(
            "peopleNumber"
          )
          .textContent =
            trip.people;

      };



  document
    .querySelectorAll(
      "[data-season]"
    )
    .forEach(

      function (button) {

        button.onclick =
          function () {

            trip.season =
              button.dataset.season;


            document
              .querySelectorAll(
                "[data-season]"
              )
              .forEach(

                function (other) {

                  other.classList
                    .remove(
                      "active"
                    );

                }

              );


            button
              .classList
              .add(
                "active"
              );

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

            const activity =
              button.dataset.activity;


            if (
              trip.activities
                .includes(activity)
            ) {

              trip.activities =
                trip.activities
                  .filter(

                    function (item) {

                      return (
                        item !==
                        activity
                      );

                    }

                  );


              button
                .classList
                .remove(
                  "active"
                );

            }

            else {

              trip.activities
                .push(activity);


              button
                .classList
                .add(
                  "active"
                );

            }

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
          || "My Trip";


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
    trip.type === "camping"
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
    trip.type === "roadtrip"
  ) {

    categories.push(
      "Road Trip"
    );

    categories.push(
      "Food & Drinks"
    );

  }


  if (
    trip.type === "vacation"
  ) {

    categories.push(
      "Travel Documents"
    );

  }


  if (
    trip.type === "fishing"
  ) {

    categories.push(
      "Fishing"
    );

  }


  if (
    trip.type === "hiking"
  ) {

    categories.push(
      "Hiking"
    );

  }


  if (
    trip.type === "beach"
  ) {

    categories.push(
      "Beach"
    );

  }


  if (
    trip.type === "winter"
    ||
    trip.season === "Winter"
  ) {

    categories.push(
      "Winter Gear"
    );

  }


  trip.activities
    .forEach(

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
    ...new Set(categories)
  ];

}



/* ==========================================
   CATEGORY SCREEN
========================================== */

function renderCategories() {

  const trip =
    state.newTrip;


  const recommended =
    suggestedCategories(
      trip
    );


  const allCategories =
    Object.keys(
      packingDatabase
    );


  screen.innerHTML = `

    <h1 class="page-title">

      Choose categories

    </h1>


    <p class="page-subtitle">

      We selected categories
      that fit your trip.

    </p>


    <div class="section-title">

      Recommended

    </div>


    <div class="stack">

      ${recommended.map(

        function (category) {

          return categoryOption(
            category,
            true
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
              !recommended
                .includes(category)
            );

          }

        )

        .map(

          function (category) {

            return categoryOption(
              category,
              false
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

        Create List

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

            document
              .querySelectorAll(
                ".category-checkbox:checked"
              )

          )

          .map(

            function (checkbox) {

              return checkbox.value;

            }

          );


        trip.items =
          createItems(
            trip
          );


        data.trips.unshift(
          trip
        );


        saveData();


        state.activeTripId =
          trip.id;


        state.newTrip =
          null;


        navigate(
          "packing"
        );

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
        value="${category}"
        ${checked ? "checked" : ""}
      >

      <span class="category-name">

        ${category}

      </span>

    </label>

  `;

}



/* ==========================================
   CREATE ITEMS
========================================== */

function createItems(
  trip
) {

  const result = {};


  trip.categories
    .forEach(

      function (category) {


        const items =
          packingDatabase[
            category
          ]
          || [];


        result[category] =

          items.map(

            function (item) {


              let quantity =
                item[1];


              if (
                quantity ===
                "people"
              ) {

                quantity =
                  trip.people;

              }


              if (
                quantity ===
                "days"
              ) {

                quantity =
                  trip.duration;

              }


              return {

                id:
                  Date.now()
                  .toString()
                  +
                  Math.random(),

                name:
                  item[0],

                quantity:
                  quantity,

                packed:
                  false

              };

            }

          );

      }

    );


  return result;

}



/* ==========================================
   PACKING LIST
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



function renderPackingList() {

  const trip =
    activeTrip();


  if (!trip) {

    navigate(
      "trips"
    );

    return;

  }


  const totals =
    calculateTotals(
      trip
    );


  const percent =
    totals.total === 0

      ? 0

      : Math.round(

          totals.packed
          /
          totals.total
          *
          100

        );


  screen.innerHTML = `

    <h1 class="page-title">

      ${trip.emoji}
      ${trip.name}

    </h1>


    <div class="trip-info">

      ${trip.duration} nights

      ·

      ${trip.season}

      ·

      ${trip.people}

      ${
        trip.people === 1
        ? "person"
        : "people"
      }

    </div>


    <div class="progress">

      <div
        class="progress-bar"
        style="width:${percent}%"
      ></div>

    </div>


    <div class="progress-text">

      ${totals.packed}

      of

      ${totals.total}

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


        trip.items[name] = [];


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
    items.filter(

      function (item) {

        return item.packed;

      }

    ).length;


  return `

    <section class="pack-category">


      <div class="pack-category-header">

        <div class="pack-category-title">

          ${category}

        </div>


        <div class="category-count">

          ${packed}/${items.length}

        </div>

      </div>


      <div class="pack-items">


        ${items.map(

          function (item) {

            return `

              <div
                class="
                  pack-item
                  ${
                    item.packed
                    ? "packed"
                    : ""
                  }
                "
              >


                <input
                  type="checkbox"
                  data-check-item
                  data-category="${category}"
                  data-id="${item.id}"
                  ${
                    item.packed
                    ? "checked"
                    : ""
                  }
                >


                <div>

                  <div class="item-name">

                    ${item.name}

                  </div>


                  ${
                    item.quantity > 1

                    ?

                    `

                    <div class="quantity">

                      Qty
                      ${item.quantity}

                    </div>

                    `

                    :

                    ""

                  }

                </div>


                <div class="item-actions">

                  <button
                    class="item-action"
                    data-delete-item
                    data-category="${category}"
                    data-id="${item.id}"
                  >

                    ×

                  </button>

                </div>


              </div>

            `;

          }

        ).join("")}


        <button
          class="add-item"
          data-add-item="${category}"
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
      "[data-check-item]"
    )
    .forEach(

      function (checkbox) {

        checkbox.onchange =
          function () {


            const category =
              checkbox
                .dataset
                .category;


            const item =
              trip.items[
                category
              ]
              .find(

                function (item) {

                  return (
                    item.id ===
                    checkbox
                      .dataset
                      .id
                  );

                }

              );


            item.packed =
              checkbox.checked;


            saveData();

            renderPackingList();

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
              button
                .dataset
                .category;


            trip.items[
              category
            ] =

              trip.items[
                category
              ]

              .filter(

                function (item) {

                  return (
                    item.id !==
                    button
                      .dataset
                      .id
                  );

                }

              );


            saveData();

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


            const category =
              button
                .dataset
                .addItem;


            const name =
              prompt(
                "Item name"
              );


            if (!name) {

              return;

            }


            trip.items[
              category
            ]
            .push({

              id:
                Date.now()
                .toString()
                +
                Math.random(),

              name:
                name,

              quantity:
                1,

              packed:
                false

            });


            saveData();

            renderPackingList();

          };

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
    )
    .flat();


  return {

    total:
      allItems.length,

    packed:
      allItems.filter(

        function (item) {

          return item.packed;

        }

      ).length

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
                    nights

                    ·

                    ${trip.season}

                    ·

                    ${totals.packed}
                    /
                    ${totals.total}
                    packed

                  </div>

                </div>


                <span class="badge">

                  ${
                    totals.total > 0
                    &&
                    totals.packed
                    ===
                    totals.total

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
              row
                .dataset
                .openTrip;


            navigate(
              "packing"
            );

          };

      }

    );



  document
    .getElementById(
      "newTripFromTrips"
    )
    .onclick =
      function () {

        navigate(
          "tripType"
        );

      };

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

      Save the equipment
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
                          class="item-action"
                          data-remove-gear="${groupIndex}:${itemIndex}"
                        >

                          ×

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
                button
                  .dataset
                  .addGear
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

        This is the prototype
        settings page.

      </p>


      <p class="small-note">

        More settings will be
        added after we decide
        what the final app needs.

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


        const confirmReset =
          confirm(

            "Delete all saved trips and reset the prototype?"

          );


        if (!confirmReset) {

          return;

        }


        localStorage
          .removeItem(
            STORAGE_KEY
          );


        data =
          JSON.parse(

            JSON.stringify(
              defaultData
            )

          );


        showToast(
          "Prototype reset"
        );


        renderSettings();

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

        PackTrail helps you
        prepare packing lists
        for camping, vacations,
        road trips and outdoor
        adventures.

      </p>


      <p class="small-note">

        This is an early
        browser prototype.

        We are testing the
        layout and workflow
        before building the
        final mobile app.

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


  toast.classList
    .remove(
      "hidden"
    );


  setTimeout(

    function () {

      toast.classList
        .add(
          "hidden"
        );

    },

    1800

  );

}



/* ==========================================
   START APP
========================================== */

render();