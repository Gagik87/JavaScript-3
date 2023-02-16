// const UserName = document.getElementById("username");
// const userPassword = document.getElementById("password");
// const userEmail = document.getElementById("email");
// const form = document.getElementById("form");
// const url = 'https://jsonplaceholder.typicode.com/users'

// function registerUser(event) {
//   event.preventDefault();

//   fetch(url, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({
//       username: UserName.value,
//       password: userPassword.value,
//       email: userEmail.value,
//     }),
//   })
//     .then((data) => data.json())
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((err) => {
//       console.log("oops Error");
//       console.error(err);
//     });
// }

// form.addEventListener("submit", registerUser);
const form = document.getElementById("form");
const url = "https://jsonplaceholder.typicode.com/users";
const allInputs = document.querySelectorAll("input");
let body = {};

const changeBody = (e) => {
  body = { ...body, [e.target.name]: e.target.value };
};
allInputs.forEach((input) => {
  input.addEventListener("change", changeBody);
});

function register(event) {
  event.preventDefault();
  fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  })
  .then((data)=> data.json())
  .then((data)=> {
    console.log(data);
  })
}

form.addEventListener("submit",register)