"use strict";
let startApplication = document.querySelector(".start_application_btn");
let applicantForm = document.querySelector(".applicant--form");
let englishTest = document.querySelector(".english--test");
let technicalTest = document.querySelector(".technical--test");
let submitbtn = document.querySelector(".submit__btn");
let bullets = [...document.querySelectorAll(".bullets")];//spraed of all bullest
let df = localStorage.getItem("Df");
let techFlag = localStorage.getItem("techFlag");
let englishFlag = localStorage.getItem("englishFlag");
let logoutBtn = document.querySelector(".logout");
let currentUser = JSON.parse(localStorage.getItem("currentUser"));

//show current user name
let userName = document.querySelector(".user_name");
if (currentUser) {
  //display none in css
  //يعتمد ع وجود اليوزر 
  userName.classList.remove("hidden");
  userName.innerText = currentUser.userName;
}
//js for header logout btn
//logout
logoutBtn.addEventListener("click", () => {

  window.location = "signUp-login/login.html";
  localStorage.removeItem("currentUser");


});


submitbtn.addEventListener("click", () => {
  window.location = "result/result.html";
  
});
applicantForm.addEventListener("click", () => {
  window.location = "form/form.html";
});
englishTest.addEventListener("click", () => {
  window.location = "englishTestffff/engTest.html";
});
technicalTest.addEventListener("click", () => {
  window.location = "TechnicalTestffff/techTest.html";
});
// if fill filed
// to colorize progres step
const MAX_STEPS = 3;
let currentStep = 1;

if (currentUser.df === true) {
  
  bullets[currentStep - 1].classList.add("completed");//هاي جمله css
  currentStep += 1;
  applicantForm.classList.add("completed");
  applicantForm.disabled = true;
}

if (currentUser.techFlag === true) {

  bullets[currentStep - 1].classList.add("completed");
  currentStep += 1;
  technicalTest.classList.add("completed");
  technicalTest.disabled = true;
}

if (currentUser.englishFlag === true) {
 
  bullets[currentStep - 1].classList.add("completed");
  currentStep += 1;
  englishTest.classList.add("completed");
  englishTest.disabled = true;
} 
//to inable submiut btn
if (
  currentUser.df === true &&
  currentUser.techFlag === true &&
  currentUser.englishFlag === true
) {
  submitbtn.disabled = false;
  submitbtn.style.backgroundColor = "#fcc822";
  submitbtn.style.color = "#ffff";
} 
else {
  submitbtn.disabled = true;
}


