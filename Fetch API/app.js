// fetch("https://swapi.tech/api/people/1/")
//     .then(res => {
//         console.log("Resolved!", res);
//         return res.json();
//     })
//     .then((data) => {
//         console.log(data);
//         return fetch("https://swapi.tech/api/people/2/");
//     })
//     .then((res) => {
//         console.log("Second Request Resolved!");
//     })
//     .catch((e) => {
//         console.log("Error!", e);
//     });
const loadStarWarsPeople = async () => {
    try {
        const res = await fetch("https://swapi.tech/api/people/1/");
        const data = await res.json();
        console.log(data);
        const res2 = await fetch("https://swapi.tech/api/people/2/");
        const data2 = await res2.json();
        console.log(data2);
    }
    catch (e) {
        console.log("Error!!!", e);
    }
};
loadStarWarsPeople();