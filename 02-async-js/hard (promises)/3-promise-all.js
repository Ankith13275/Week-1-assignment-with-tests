/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */


function waitOneSecond() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Resolved After 1 Second')
        }, 1000);
    });
}

function waitTwoSecond() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Resolved After 2 Second')
        }, 2 * 1000);
    });
}

function waitThreeSecond() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Resolved After 3 Second')
        }, 3 * 1000);
    });
}

function calculateTime() {
    const start = new Date();

    Promise.all(
        [waitOneSecond(),
                waitTwoSecond(),
                waitThreeSecond()
        ])
        .then((results) => {
            const duration = new Date() - start;
            console.log(results);
            console.log("Time Taken: ", duration, "ms");
        })
        .catch((error) => {
        console.log('Error:', error);
        });
}

calculateTime();