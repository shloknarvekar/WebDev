axios.get("https://swapi.tech/api/people/1/")
    .then((res) => {
        console.log("Response", res);
    })
    .catch((e) => {
        console.log("Error!", e);
    });
const afunc = async (id) => {
    try {
        const res = await axios.get(`https://swapi.tech/api/people/${id}/`);
        console.log("Response", res.data);
    }
    catch (e) {
        console.log("Error!", e);
    }
}
afunc(6);