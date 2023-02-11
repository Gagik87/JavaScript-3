// const button = document.getElementById("btn");

// function Seconds(number1) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(number1);
//     }, 1000);
//   });
// }
// const getNumberAsync = (num) => {
//   return new Promise((resolve) => {
//     resolve(num);
//   });
// };
// async function add(number1) {
//   const number2 = await getNumberAsync(5000000);
//   const number3 = await getNumberAsync(4900000);
//   return number1 + number2 + number3;
// }

// button.addEventListener("click", () => {
//   console.log("loading...");
//   setTimeout(() => {
//     console.log("loading... 30%");
//   }, 1500);
//   setTimeout(() => {
//     console.log("loading... 50%");
//   }, 3000);
//   setTimeout(() => {
//     console.log("loading... 70%");
//   }, 5000);
//   setTimeout(() => {
//     console.log("loading... 100%");
//   }, 7000);
//   setTimeout(async () => {
//     const res = await add(99999);
//     console.log(res);
//   }, 8000);
// });

// const input = document.getElementById("input");
// const inputBtn = document.getElementById("inputBtn");

// input.addEventListener("change", (e) => {
//     console.log(e.target.input.value);
// });

const userName = document.getElementById("userName");
const password = document.getElementById("password");
const button = document.getElementById("button");

// let obj = {
//   userName: "",
//   password: "",
// };

// function click() {
//   obj.userName = userName.value;
//   obj.password = password.value;
//   console.log(`${JSON.stringify(obj, null, 2)}`);
//   console.log(obj);
// }
// button.addEventListener("click", () => {
//   click();
// });

let obj = {
  userName: "",
  password: "",
};

const objectValues = (e) => {
  obj = { ...obj, [e.target.id]: e.target.value };
};

userName.addEventListener("change", objectValues);
password.addEventListener("change", objectValues);


 
const getUserData = async (obj) => {
  try {
    return JSON.stringify(obj);
  } catch (error) {
    return "oops";
  }
};
const handleSubmit = async() => {
  try {
    const userData = await getUserData(obj)
    JSON.parse(userData);
    console.log(userData);
  } catch (error) {
    console.log(error);
  }
};

button.addEventListener("click", handleSubmit);
