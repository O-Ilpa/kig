let toggleBar = document.querySelector(".toggleBar");
let navBar = document.querySelector(".navBar");
let overLay = document.querySelector("#overlay");
let topBar = document.querySelector("header .toggleBar span:nth-child(1)");
let middleBar = document.querySelector("header .toggleBar span:nth-child(2)");
let bottomBar = document.querySelector("header .toggleBar span:nth-child(3)");
let govContainer = document.querySelector(".governates .container");

toggleBar.addEventListener("click", function () {
  navBar.classList.toggle("close");
  overLay.classList.toggle("display");
});

navBar.addEventListener("click", function () {
  navBar.classList.toggle("close");
  overLay.classList.toggle("display");
  topBar.classList.toggle("downRotate");
  middleBar.classList.toggle("dissapp");
  bottomBar.classList.toggle("upRotate");
});

overLay.addEventListener("click", function () {
  navBar.classList.toggle("close");
  overLay.classList.toggle("display");
  topBar.classList.toggle("downRotate");
  middleBar.classList.toggle("dissapp");
  bottomBar.classList.toggle("upRotate");
});

toggleBar.addEventListener("click", function () {
  topBar.classList.toggle("downRotate");
  middleBar.classList.toggle("dissapp");
  bottomBar.classList.toggle("upRotate");
});

function addGovernates(name, bgimg) {
  let govBox = document.createElement("a");
  govBox.classList.add("box")
  govBox.style.cssText = `background-image: url(./images/${bgimg});`
  govBox.innerHTML = ` 
    <div> 
      <div class="text">
      <h2>${name}</h2>
      <p>learn more</p>
      </div>
    </div>`;
  govContainer.appendChild(govBox);
}

addGovernates("Alexandria", "alx.webp");
addGovernates("Cairo", "cairo.webp");
addGovernates("Behira", "beh.webp");
addGovernates("Sohag", "soh.webp");
addGovernates("Hurghada", "hur.webp");
addGovernates("Aswan", "asw.webp");
addGovernates("Assuit", "asy.webp");
addGovernates("Beni Suef", "ben.webp");
addGovernates("Dakahlia", "dakah.webp");
addGovernates("Damietta", "dam.webp");
addGovernates("fayoum", "fay.webp");
addGovernates("Gharbia", "ghar.webp");
addGovernates("Giza", "giz.webp");
addGovernates("Ismailia", "ism.webp");
addGovernates("Kafr El-Sheikh", "kaf.webp");
