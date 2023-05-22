let userEmail = document.querySelector(".userEmail");
let userPassword = document.querySelector(".userPassword");
let signIn_btn = document.querySelector(".button1");
let signup_btn = document.querySelector(".sign-up");
let array = JSON.parse(localStorage.getItem("users"));
let error = document.querySelector(".error");

signIn_btn.addEventListener("click", (e) => {
  if (userEmail.value === "" || userPassword.value === "")
    return (error.innerText = `please enter the password & email`);
//if user exist and email 

  let existsUser = array.find((user) =>
    user.email === userEmail.value && user.password === userPassword.value

  );
  if (existsUser) {
    // existsUser  the key in local storage is  currentUser
    localStorage.setItem("currentUser", JSON.stringify(existsUser)); 
    window.location = "../landing.html";
    e.preventDefault();
  } 
  //if user not exist or email not match password
  else {
    error.innerText = `Email or password is not correct`;
  }

});
//dont have account ?
signup_btn.addEventListener("click", () => {
  window.location = "signup.html";
});
