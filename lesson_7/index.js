const UserName = document.getElementById("username");
const userPassword = document.getElementById("password");
const userEmail = document.getElementById("email");
const form = document.getElementById("form");


function registerUser(event) {
  event.preventDefault();

  fetch("https://httpbin.org/post", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: UserName.value,
      password: userPassword.value,
      email: userEmail.value,
    }),
  })
    .then((data) => data.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log("oops Error");
      console.error(err);
    });
}

form.addEventListener("submit", registerUser);
