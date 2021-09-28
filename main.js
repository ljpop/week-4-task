"use strict";

const errorAdd = "Oops! Please add your email";
const errorCheck = "Oops! Please check your email";

const displayMessage = function (message) {
  document.querySelector(".errorMessage").textContent = message;
  document.querySelector(".errorMessage").classList.add("visible");
};

const emailOk = function () {
  document.querySelector(".errorMessage").textContent = "Access is requested";
  document.querySelector(".errorMessage").classList.add("checkPassed");
};

const removeMessage = function () {
  document.querySelector(".errorMessage").classList.remove("visible");
  document.querySelector(".errorMessage").classList.remove("checkPassed");
};

const validateEmail = function (email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};

const doCheck = function () {
  removeMessage();
  const mail = document.querySelector(".input-mail").value;
  console.log(mail);
  if (mail == "" || mail == " ") displayMessage(errorAdd);
  else if (!validateEmail(mail)) displayMessage(errorCheck);
  else emailOk();
};

document.querySelector(".request-button").addEventListener("click", doCheck);
