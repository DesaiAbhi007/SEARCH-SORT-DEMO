let tableId = document.getElementById("tableId");
let nameSearch = document.getElementById("nameSearch");
let cityHeading = document.getElementsByClassName("cityHeading");
let categoryHeading = document.getElementsByClassName("categoryHeading");
let typeHeading = document.getElementsByClassName("typeHeading");
let statusHeading = document.getElementsByClassName("statusHeading");
let stateHeading = document.getElementsByClassName("stateHeading");
let tbody = document.getElementsByTagName("tbody");

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

let checkedData = [];

function findValue(name, value, checked, data) {

  Object.entries(objectItems).map(([key, value]) => {
    console.log("====>", key, value);
    if (value.length && checked) {
      const aaa = userData.filter((item) => value.includes(item[key]));
      tableDisplayData(aaa)
      console.log("aaa", aaa);
    }

    // if(value.length === 0 && !checked){
      // tbody.innerHTML = "";
      // let tr = document.createElement("tr");
      // let td = document.createElement("td");
      // td.setAttribute("colspan", "7");
      // td.innerHTML = "No data found"
      // tbody[0].appendChild(tr);
      // tr.appendChild(td) 
      // tableDisplayData()
    // }
  });

}

function handleChange(e) {
  const { name, value, checked } = e.target;
  console.log("---->", name, value, checked);

  if (checked === true) {
    objectItems[name].push(value);
  } else {
    const data = objectItems[name].filter((val) => val !== value);
    objectItems[name] = data;
  }
  console.log("objectItems", objectItems);

  findValue(name, value, checked, objectItems);
}
