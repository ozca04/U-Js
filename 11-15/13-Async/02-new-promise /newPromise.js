const fakeRequest = (url) => {
  return new Promise((resolve, reject) => {
    const rand = Math.random();
    setTimeout(() => {
      if (rand < 0.7) {
        resolve("fake data here");
      }
      reject("ERROR");
    }, 1000);
  });
};

fakeRequest("/dogs/1")
  .then((data) => {
    console.log("done with request", data);
  })
  .catch((err) => {
    console.log("Oh No!", err);
  });
