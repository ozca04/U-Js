// fetch("https://swapi.dev/api/people/1/")
//   .then((res) => {
//     console.log("resolved", res);
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((e) => {
//     console.log("ERROR!", e);
//   });
/////////////////////////////with async
// const load = async () => {
//   try {
//     const res = await fetch("https://swapi.tech/api/people/1/");
//     const data = await res.json();
//     console.log(data);
//     const res2 = await fetch("https://swapi.tech/api/people/2/");
//     const data2 = await res2.json();
//     console.log(data2);
//   } catch (e) {
//     console.log("ERROR", e);
//   }
// };
// load();
//with axios
// axios.get("https://swapi.tech/api/people/1/").then((res) => {
//   console.log("response:", res);
// });

// const starWars = async (id) => {
//   try {
//     const res = await axios.get(`https://swapi.tech/api/people/${id}/`);
//     console.log(res.data);
//   } catch (e) {
//     console.log("error", e);
//   }
// };
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const jokes = document.querySelector("#jokes");
const button = document.querySelector("button");

const addNewJoke = async () => {
  const jokeText = await getDadJoke();
  const newLI = document.createElement("li");
  newLI.append(jokeText); //to just call the joke but not the rest of the json file
  jokes.append(newLI);
};
const getDadJoke = async () => {
  try {
    const config = { headers: { Accept: "application/json" } }; //divided from res to prevent being too long.
    const res = await axios.get("https://icanhazdadjoke.com/", config);
    return res.data.joke;
  } catch (e) {
    return "no jokes";
  }
};

button.addEventListener("click", addNewJoke);
