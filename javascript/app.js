function updateCityTime() {
  let londonElement = document.querySelector("#london");
  if (londonElement) {
    let londonDateElement = londonElement.querySelector(".date");
    let londonTimeElement = londonElement.querySelector(".time");
    let londonTime = moment().tz("Europe/London");
    londonDateElement.innerHTML = londonTime.format("MMMM Do YYYY");
    londonTimeElement.innerHTML = londonTime.format(
      "h:mm:ss [<small>]A[<small/>]"
    );
  }
  let bangaloreElement = document.querySelector("#bangalore");
  if (bangaloreElement) {
    let bangaloreDateElement = bangaloreElement.querySelector(".date");
    let bangaloreTimeElement = bangaloreElement.querySelector(".time");
    let bangaloreTime = moment().tz("Asia/Calcutta");
    bangaloreDateElement.innerHTML = bangaloreTime.format("MMMM Do YYYY");
    bangaloreTimeElement.innerHTML = bangaloreTime.format(
      "h:mm:ss [<small>]A[<small/>]"
    );
  }
}

function updateCitySelected(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `<div class="cities-list">
    <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
        </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>`;
}

updateCityTime();
setInterval(updateCityTime, 1000);

let citySelectElement = document.querySelector("#city");
citySelectElement.addEventListener("change", updateCitySelected);
