let tableId = document.getElementById("tableId");
let nameSearch = document.getElementById("nameSearch");
let cityHeading = document.getElementsByClassName("cityHeading");
let categoryHeading = document.getElementsByClassName("categoryHeading");
let typeHeading = document.getElementsByClassName("typeHeading");
let statusHeading = document.getElementsByClassName("statusHeading");
let stateHeading = document.getElementsByClassName("stateHeading");

const userData = [
  {
    id: 1,
    username: "Komal",
    city: "Surat",
    type: "A",
    category: "one",
    active: false,
    state: "Gujarat",
  },
  {
    id: 2,
    username: "Anjali",
    city: "Amdavad",
    type: "B",
    category: "three",
    active: true,
    state: "UP",
  },
  {
    id: 3,
    username: "Riya",
    city: "Surat",
    type: "C",
    category: "two",
    active: false,
    state: "Punjab",
  },
  {
    id: 4,
    username: "Babita",
    city: "Surat",
    type: "B",
    category: "one",
    active: false,
    state: "UP",
  },
];
function tableDisplayData(data) {
  let tbody = document.getElementsByTagName("tbody")[0];
  tbody.innerHTML = "";
  data?.forEach((item) => {
    let tr = document.createElement("tr");
    tr.id = item.id;
    tr.innerHTML = `
    <td>${item.id}</td>
    <td>${item.username}</td>
    <td>${item.city}</td>
    <td>${item.category}</td>
    <td>${item.type}</td>
    <td>${item.active}</td>
    <td>${item.state}</td>
    `;
    tbody.appendChild(tr);
  });
}
tableDisplayData(userData);

function searchName() {
  const searchData = userData.filter((item) => item.username.toLowerCase().includes(nameSearch.value.toLowerCase()));
  tableDisplayData(searchData);
}

function fieldDetails(detail, appendTo, addTitle) {
  let removeDuplicateEle = [];
  detail.forEach((item) => {
    if (!removeDuplicateEle.includes(item[addTitle])) {
      const newElement = document.createElement("div");
      newElement.classList.add("form-check", "form-switch");
      let inputElement = document.createElement("input");
      inputElement.classList.add("form-check-input");
      inputElement.setAttribute("type", "checkbox");
      inputElement.setAttribute("role", "switch");
      inputElement.setAttribute("id", `${item[addTitle]}`);
      inputElement.setAttribute("value", `${item[addTitle]}`);
      inputElement.setAttribute("name", `${addTitle}`);
      inputElement.setAttribute("onchange", "handleChange(event)");

      const labelElement = document.createElement("label");
      labelElement.classList.add("form-check-label");
      labelElement.setAttribute("for", `${item[addTitle]}`);
      labelElement.textContent = `${item[addTitle]}`;

      removeDuplicateEle.push(item[addTitle]);
      newElement.appendChild(inputElement);
      newElement.appendChild(labelElement);

      appendTo[0].insertAdjacentElement("afterend", newElement);
    }
  });
}

fieldDetails(userData, cityHeading, "city");
fieldDetails(userData, categoryHeading, "category");
fieldDetails(userData, typeHeading, "type");
fieldDetails(userData, statusHeading, "active");
fieldDetails(userData, stateHeading, "state");

let objectItems = {
  city: [],
  category: [],
  type: [],
  active: [],
  state: [],
};

function handleChange(e) {
  if (e.target.name == "city") {
    if (e.target.checked === true) {
      objectItems.city.push(e.target.value);
    } else {
      objectItems.city.pop(e.target.value);
    }
  } else if (e.target.name == "category") {
    if (e.target.checked === true) {
      objectItems.category.push(e.target.value);
    } else {
      objectItems.category.pop(e.target.value);
    }
  } else if (e.target.name == "type") {
    if (e.target.checked === true) {
      objectItems.type.push(e.target.value);
    } else {
      objectItems.type.pop(e.target.value);
    }
  } else if (e.target.name == "active") {
    if (e.target.checked === true) {
      objectItems.active.push(e.target.value);
    } else {
      objectItems.active.pop(e.target.value);
    }
  } else if (e.target.name == "state") {
    if (e.target.checked === true) {
      objectItems.state.push(e.target.value);
    } else {
      objectItems.state.pop(e.target.value);
    }
  }
}
