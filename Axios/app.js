// axios.get("https://swapi.tech/api/people/1/")
//     .then((res) => {
//         console.log("Response", res);
//     })
//     .catch((e) => {
//         console.log("Error!", e);
//     });
// const afunc = async (id) => {
//     try {
//         const res = await axios.get(`https://swapi.tech/api/people/${id}/`);
//         console.log("Response", res.data);
//     }
//     catch (e) {
//         console.log("Error!", e);
//     }
// }
// afunc(6);
const jokes = document.querySelector('ul');
const button = document.querySelector('button');
const getDadJoke = async () => {
    try {
        const config = {
            headers: {
                Accept: 'application/json'
            }
        };
        const res = await axios.get(`https://icanhazdadjoke.com`, config);
        const newLI = document.createElement('LI');
        newLI.append(res.data.joke);
        jokes.append(newLI);
    }
    catch { }
}
button.addEventListener('click', () => {
    getDadJoke();
})
