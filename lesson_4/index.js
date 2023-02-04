const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  console.log("requested.....");
  const applyForVisa = new Promise((resolve, reject) => {
    if (Math.random() * 10 > 5) {
      resolve("resolved");
    } else {
      reject("rejected");
    }
  });
  setTimeout(() => {
    applyForVisa
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, 2000);
});
