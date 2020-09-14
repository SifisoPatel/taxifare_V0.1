let btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  let taxiFare = document.getElementById("taxi_fare").value;
  let numberOfPeople = document.getElementById("number_of_people").value;
  let moneySentForward = document.getElementById("money_sent_forward").value;

  let toDriver = (document.getElementById("to_driver").value =
    taxiFare * numberOfPeople);
  document.getElementById("to_back_seat").value =
    parseFloat(moneySentForward) - parseFloat(toDriver);
});
