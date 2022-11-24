import setUp from "./setUp.js";

const loading = document.querySelector(".loading");
const backDray = document.querySelector(".loading-backDray");

const ipAddress = document.querySelector("#ip-address");
const location = document.querySelector("#location");
const timezone = document.querySelector("#timezone");
const isp = document.querySelector("#isp");

const addressDetails = document.querySelector(".address-details");

const btn = document.querySelector(".btn");
const input = document.querySelector(".address__input");

const message = document.querySelector(".message");
const messageBackDray = document.querySelector(".message-backDray");

class PageView {
  constructor() {
    btn.addEventListener("click", (e) => this.searchData());
    messageBackDray.addEventListener("click", (e) => this.hideMessage());
  }
  searchData() {
    if (!input.value) {
      this.displayEnterIpMessage();
      this.hideAddressDetailsBox();
      return;
    }
    document.getElementById("weathermap").innerHTML =
      "<div id='map' style='width: 100%; height: 100%;'></div>";

    const data = input.value.trim();
    setUp(data);
  }

  hideMessage() {
    message.classList.remove("display");
    messageBackDray.classList.remove("display");
  }

  displayLoading() {
    document.querySelector("#ip-address").innerText = "";
    document.querySelector("#location").innerText = "";
    document.querySelector("#timezone").innerText = "";
    document.querySelector("#isp").innerText = "";

    loading.classList.add("display");
    backDray.classList.add("display");
  }

  hideLoading() {
    loading.classList.remove("display");
    backDray.classList.remove("display");
  }

  displayAddressDetailsBox(data) {
    ipAddress.innerText = data.ip;
    location.innerText = data.location.city;
    timezone.innerText = `UTS ${data.location.timezone}`;
    isp.innerText = data.isp;
    addressDetails.classList.add("display");
  }
  hideAddressDetailsBox() {
    addressDetails.classList.remove("display");
  }

  displayMessage() {
    message.classList.add("display");
    messageBackDray.classList.add("display");
  }

  displayEnterIpMessage() {
    this.displayMessage();

    message.innerHTML = `<p>Enter IP Address or Domain</p>`;
    input.value = "";
  }

  displayNotFoundMessage() {
    this.displayMessage();

    message.innerHTML = `<h2>Sorry!!!</h2>
    <p><small>NOT FOUND</small> " <b>${input.value}</b> " .</p>`;
    input.value = "";
  }
}

export default new PageView();
