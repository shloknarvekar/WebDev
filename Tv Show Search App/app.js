const form = document.querySelector('form');
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    let config = { params: { q: searchTerm } };
    const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
    makeImages(res.data);
    form.elements.query.value = '';
})
const makeImages = (shows) => {
    for (let res of shows) {
        const img = document.createElement('IMG');
        img.src = res.show.image.medium;
        document.body.append(img);
    }
}