const button = document.getElementById("btn");

function Seconds(number1) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(number1);
    }, 1000);
  });
}
const getNumberAsync = (num) => {
  return new Promise((resolve) => {
    resolve(num);
  });
};
async function add(number1) {
  const number2 = await getNumberAsync(5000000);
  const number3 = await getNumberAsync(4900000);
  return number1 + number2 + number3;
}

button.addEventListener("click", () => {
  console.log("loading...");
  setTimeout(() => {
    console.log("loading... 30%");
  }, 1500);
  setTimeout(() => {
    console.log("loading... 50%");
  }, 3000);
  setTimeout(() => {
    console.log("loading... 70%");
  }, 5000);
  setTimeout(() => {
    console.log("loading... 100%");
  }, 7000);
  setTimeout(async () => {
    const res = await add(99999);
    console.log(res);
  }, 8000);
});
