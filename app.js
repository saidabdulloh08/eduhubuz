// // fetch("https://1802-195-158-9-110.ngrok-free.app/swagger-ui/index.html", {
// //   method: "POST",
// //   body: JSON.stringify({
// //     "firstName": "Hamidov",
// //     "lastName": "Humoyun",
// //     "phone": "998902812345",
// //     "password": "2222"  
// //   }),
// //   headers: {
// //     "Content-type": "application/json; charset=UTF-8",
// //     "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MTY5MDk0OTEsImlkIjoxLCJyb2xlIjoiQURNSU4iLCJleHAiOjE3MTY5OTU4OTEsImlzcyI6InRlc3QifQ.mAqW0zyt3p8n6Luz2iN1UNI7JYk0CQ3I4v1wJ4aY8L0z"
// //   },
// // })
// // .then((response) => response.json())
// // .then((json) => console.log(json));

fetch(`localhost:8080/users/register`, {
  method: "POST",
  body: JSON.stringify({
        "firstName": "Hamidov",
    "lastName": "Humoyun",
    "phone": "998902812345",
    "password": "2222"  
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8"
  },
})
  .then((response) => response.json())
  .then((json) => {
    console.log(json);
  })
  .catch((error) => {
    console.error(error);
  });

  const domain = "http --domain=grackle-intimate-thankfully.ngrok-free.app 8080";

const Form = document.querySelector(".form");
const eyeMore = document.getElementById("eye-img-more");
const inputMore = document.querySelector(".sing_up-password-more");
const inputTel = document.querySelector(".sing_up-tel");
const input = document.querySelector(".sing_up-password");
const eye = document.getElementById("eye-img");
function show() {
  if (input.type == "password") {
    input.type = "text";
    eye.src = "./eye-open.png";
  } else {
    input.type = "password";
    eye.src = "./eye-close.png";
  }
}
function showMore() {
  if (inputMore.type == "password") {
    inputMore.type = "text";
    eyeMore.src = "./eye-open.png";
  } else {
    inputMore.type = "password";
    eyeMore.src = "./eye-close.png";
  }
}
function validatePassword() {
  var password = document.getElementById("password");
  var confirm_password = document.getElementById("confirm_password");
  var password_error = document.getElementById("password_error");

  if (password.value != confirm_password.value) {
    password_error.textContent = "Passwords don't match";
    confirm_password.setCustomValidity("Passwords don't match");
  } else {
    password_error.textContent = "";
    confirm_password.setCustomValidity("");
  }
}

const elBtnMore = document.querySelector(".btn_more");
const infoSection = document.querySelector(".info");
const markazSection = document.querySelector(".markazlar-2");
elBtnMore.addEventListener("click", click);
let count = false;

function click() {
  if (count == false) {
    infoSection.style = "display: none;";
    markazSection.style = "display : none";
    count = true;
  } else if (count == true) {
    infoSection.style = "display: inline-block";
    markazSection.style = "display : inline-block";
    count = false;
  }
}
// const form = document.querySelector(".form");
// const eyeMore = document.getElementById("eye-img-more");
// const inputMore = document.querySelector(".sing_up-password-more");
// const inputTel = document.querySelector(".sing_up-tel");
// const input = document.querySelector(".sing_up-password");
// const eye = document.getElementById("eye-img");

// function show() {
//   if (input.type == "password") {
//     input.type = "text";
//     eye.src = "./eye-open.png";
//   } else {
//     input.type = "password";
//     eye.src = "./eye-close.png";
//   }
// }

// function showMore() {
//   if (inputMore.type == "password") {
//     inputMore.type = "text";
//     eyeMore.src = "./eye-open.png";
//   } else {
//     inputMore.type = "password";
//     eyeMore.src = "./eye-close.png";
//   }
// }

// function validatePassword() {
//   var password = document.getElementById("password");
//   var confirm_password = document.getElementById("confirm_password");
//   var password_error = document.getElementById("password_error");

//   if (password.value != confirm_password.value) {
//     password_error.textContent = "Passwords don't match";
//     confirm_password.setCustomValidity("Passwords don't match");
//   } else {
//     password_error.textContent = "";
//     confirm_password.setCustomValidity("");
//   }
// }

// const apiUrl = "https://1802-195-158-9-110.ngrok-free.apphttps://1802-195-158-9-110.ngrok-free.app/swagger-ui/index.html"; // Replace with your back-end API URL

// form.addEventListener("submit", (event) => {
//   event.preventDefault();

//   const firstName = document.getElementById("firstName").value;
//   const lastName = document.getElementById("lastName").value;
//   const phone = document.getElementById("phone").value;
//   const password = document.getElementById("password").value;

//   const requestBody = {
//     firstName,
//     lastName,
//     phone,
//     password,
//   };

//   fetch(`${apiUrl}/your-endpoint-url`, {
//     method: "POST",
//     body: JSON.stringify(requestBody),
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//       "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MTY5MDk0OTEsImlkIjoxLCJyb2xlIjoiQURNSU4iLCJleHAiOjE3MTY5OTU4OTEsImlzcyI6InRlc3QifQ.mAqW0zyt3p8n6Luz2iN1UNI7JYk0CQ3I4v1wJ4aY8L0z",
//     },
//   })
//     .then((response) => response.json())
//     .then((json) => {
//       // Handle the response from the back-end here
//       console.log(json);
//     })
//     .catch((error) => {
//       // Handle any errors that occur during the request
//       console.error(error);
//     });
// });