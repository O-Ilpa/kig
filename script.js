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

function addGovernates(name, src, bgimg) {
  let govBox = document.createElement("a");
  govBox.classList.add("box")
  govBox.href = `${src}`;
  govBox.style.cssText = `background-image: url(./images/${bgimg});`
  govBox.innerHTML = ` 
    <div>
      <div class="text">
      <h3>${name}</h3>
      <p>learn more</p>
      </div>
    </div>`;
  govContainer.appendChild(govBox);
}

addGovernates("Alexandria", "#governates", "alx.webp");
addGovernates("Cairo", "#governates", "cairo.webp");
addGovernates("Behira", "#governates", "beh.webp");
addGovernates("Sohag", "#governates", "soh.webp");
addGovernates("Hurghada", "#governates", "hur.webp");
addGovernates("Aswan", "#governates", "asw.webp");
addGovernates("Assuit", "#governates", "asy.webp");
addGovernates("Beni Suef", "#governates", "ben.webp");
addGovernates("Dakahlia", "#governates", "dakah.webp");
addGovernates("Damietta", "#governates", "dam.webp");
addGovernates("fayoum", "#governates", "fay.webp");
addGovernates("Gharbia", "#governates", "ghar.webp");
addGovernates("Giza", "#governates", "giz.webp");
addGovernates("Ismailia", "#governates", "ism.webp");
addGovernates("Kafr El-Sheikh", "#governates", "kaf.webp");
