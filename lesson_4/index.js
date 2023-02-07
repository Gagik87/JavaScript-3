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


// const applyForVisa2 = async () => {
//   try {
//       const res = await foo()

//       console.log(res);
//       const res2 = await goo(res)
//       console.log(res2);
//       return res2

//   } catch (error) {
//       console.log(error, 'error');
//   }
// }

// async function foo() {

//   return 'fooRes'
// }
// async function goo(fooRes) {
//   throw new Error('error from function goo')
//   return `${fooRes + ' gooRes'}`
// }