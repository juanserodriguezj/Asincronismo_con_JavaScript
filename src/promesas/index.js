const somethingWillHappen = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("siii");
    } else {
      reject("ohh nooo");
    }
  });
};

somethingWillHappen()
  .then((response) => console.log(response))
  .catch((error) => console.log(error));

const somethingWillHappen2 = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve("True");
      }, 2000);
    } else {
      const error = new Error("Nooooo");
      reject(error);
    }
  });
};

somethingWillHappen2()
  .then((response) => console.log(response))
  .catch((error) => console.log(error));

Promise.all([somethingWillHappen(), somethingWillHappen2()])
  .then((response) => {
    console.log("Array of results", response);
  })
  .catch((error) => {
    console.error(error);
  });
