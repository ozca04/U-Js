// const meString = '{"name":"canberk","age":22,"hobbies":["game","cook"]}';
// const person = JSON.parse(meString);
// // console.log(person.hobbies);
// // console.log(person.hobbies[0]);
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const item = { name: "sword", price: 50 };
// const itemJSON = JSON.stringify(item);
// const itemJavaS = JSON.parse(itemJSON);
// console.log(itemJavaS.price);

// async function test() {
//   try {
//     const raw = await fetch("https://swapi.tech/api/people/1/");
//     const data = await raw.json();
//     console.log(data.result.properties);
//     console.log(data.result.properties.name);
//   } catch (e) {
//     console.log("ERROR!!");
//     console.log(e);
//   }
// }
// test();
///////////////////////////////// with axios
// async function test() {
//   try {
//     const axiosData = await axios.get("https://swapi.tech/api/people/1/");
//     console.log(axiosData.data.result.properties);
//     console.log(axiosData.data.result.properties.name);
//   } catch (e) {
//     console.log("ERROR!!");
//     console.log(e);
//   }
// }
// test();
////////////////////////////////////////////////////
// async function movie() {
//   try {
//     const search = { params: { q: "batman" } };
//     const batman = await axios.get(
//       "https://api.tvmaze.com/search/shows",
//       search,
//     );
//     console.log(batman.data);
//   } catch (e) {
//     console.log(e);
//   }
// }

async function movieNames(name) {
  try {
    const search = { params: { q: name } };
    const res = await axios.get("https://api.tvmaze.com/search/shows", search);
    const shows = res.data;

    for (let i = 0; i < shows.length; i++) {
      console.log(shows[i].show.name);
    }
  } catch (e) {
    console.log(e);
  }
}
movieNames("batman");
/////////////////////////////////////////
async function movieNames(name, count) {
  try {
    const search = { params: { q: name } };
    const res = await axios.get("https://api.tvmaze.com/search/shows", search);
    const shows = res.data;

    for (let i = 0; i < count && i < shows.length; i++) {
      console.log(shows[i].show.name);
    }
  } catch (e) {
    console.log(e);
  }
}
