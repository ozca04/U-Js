//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
// .ASYNC // .AWAIT
// if put async infront of a fucntion it automatically turns promise

// async function hello() {}
// const sing = async () => {
//   throw "problem"; //
//   return "lalallalalalallal";
// };

// sing()
//   .then((data) => {
//     console.log("promise resolve", data);
//   })
//   .catch((err) => {
//     console.log("reject");
//     console.log(err);
//   });

const login = async (username, password) => {
  if (!username || !password) throw "wrong";
  if (password === "32123123") return "welcome";
  throw "invalid password";
};
login("adsasdasd", "32123123")
  .then((msg) => {
    console.log("logged in");
    console.log(msg);
  })
  .catch((err) => {
    console.log("error");
    console.log(err);
  });
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//AWAIT --> delays the function until promise is resolved

const delayedColorChange = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, delay);
  });
};
delayedColorChange("purple", 1000)
  .then(() => delayedColorChange("purple", 1000))
  .then(() => delayedColorChange("pink", 1000))
  .then(() => delayedColorChange("orange", 1000))
  .then(() => delayedColorChange("yellow", 1000))
  .then(() => delayedColorChange("olive", 1000));

//shortens the function, takes place of .then
async function rainbow() {
  await delayedColorChange("purple", 1000);
  await delayedColorChange("pink", 1000);
  await delayedColorChange("orange", 1000);
  await delayedColorChange("yellow", 1000);
  await delayedColorChange("olive", 1000);
  return "all done ";
}
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
rainbow().then(() => console.log("end of the rainbow"));

//same stuff but cleaner, no bother with .thens
async function printrainbow() {
  await rainbow();
  console.log("end of the rainbow");
}

const fakeRequestPromise = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
      if (delay > 4000) {
        reject("Connection Timeout :(");
      } else {
        resolve(`Here is your fake data from ${url}`);
      }
    }, delay);
  });
};
async function makeTwoRequests() {
  try {
    let data1 = await fakeRequestPromise("/page1");
    let data2 = await fakeRequestPromise("/page2");
    console.log(data1);
  } catch (e) {
    console.log("error cought");
    console.log(`error is: ${e}`);
  }
}
//use try/catch in order to catch error
