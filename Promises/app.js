// const fakeRequestCallback = (url, success, failure) => {
//     const delay = Math.floor(Math.random() * 4500) + 500;
//     setTimeout(() => {
//         if (delay > 4000) {
//             failure('Connection Timeout :(')
//         } else {
//             success(`Here is your fake data from ${url}`)
//         }
//     }, delay)
// }
// fakeRequestCallback('books.com', function (response) {
//     console.log("IT WORKED!!");
//     console.log(response);
//     fakeRequestCallback('books.com/page2', (response) => {
//         console.log("It Worked Again!");
//         console.log(response);
//     }, function (err) {
//         console.log("Error");
//         console.log(err);
//     })
// }, (err) => {
//     console.log("Error!");
//     console.log(err);
// });
const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}
fakeRequestPromise('books.com/page1')
    .then(() => {
        console.log("It Worked!");
        return fakeRequestPromise('books.com/page2');
    })
    .then(() => {
        console.log("It Worked!");
        return fakeRequestPromise('books.com/page3');
    })
    .then(() => {
        console.log("It Worked!");
    })
    .catch(() => {
        console.log("One of the functions gave an Error!");
    });

