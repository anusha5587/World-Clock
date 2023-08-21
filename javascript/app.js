function updateCityTime() {
  let londonElement = document.querySelector("#london");
  let londonDateElement = londonElement.querySelector(".date");
  let londonTimeElement = londonElement.querySelector(".time");
  let londonTime = moment().tz("Europe/London");
  londonDateElement.innerHTML = londonTime.format("MMMM Do YYYY");
  londonTimeElement.innerHTML = londonTime.format(
    "h:mm:ss [<small>]A[<small/>]"
  );

  let bangaloreElement = document.querySelector("#bangalore");
  let bangaloreDateElement = bangaloreElement.querySelector(".date");
  let bangaloreTimeElement = bangaloreElement.querySelector(".time");
  let bangaloreTime = moment().tz("Asia/Calcutta");
  bangaloreDateElement.innerHTML = bangaloreTime.format("MMMM Do YYYY");
  bangaloreTimeElement.innerHTML = bangaloreTime.format(
    "h:mm:ss [<small>]A[<small/>]"
  );
}
updateCityTime();
setInterval(updateCityTime, 1000);
