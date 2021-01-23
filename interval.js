// let i = 1;
// let intervalId = setInterval(() => {
//     console.log(i);

//     i++

//     if (i > 10) {
//         clearInterval(intervalId);
//     }
// }, 1000);


let i = 10;
let intervalId = setInterval(() => {
    console.log(i);

    i--;

    if (i < 0) {
        clearInterval(intervalId);
    }
}, 1000);