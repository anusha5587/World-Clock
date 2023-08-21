function showSelectedCity(event) {
  if (event.target.value.length > 0) {
    let currentCityTime = moment().format("dddd, MMMM D, YYYY h:mm A");
    alert(`It is ${currentCityTime} in ${event.target.value}`);
  }
}
let citySelect = document.querySelector("#city");
citySelect.addEventListener("change", showSelectedCity);
