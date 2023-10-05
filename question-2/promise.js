const { delayedSuccess, delayedException } = require("./callbacks");

// Create a resolved promise
const resolvedPromise = () => {
    return new Promise((resolve) => {
        delayedSuccess((result) => {
            resolve(result);
        });
    });
};

// Create a rejected promise
const rejectedPromise = () => {
    return new Promise((resolve, reject) => {
        delayedException((error) => {
            reject(error);
        });
    });
};

// Call the promises and handle the results
resolvedPromise()
    .then((result) => console.log("Resolved Promise:", result))
    .catch((error) => console.error("Resolved Promise Error:", error));

rejectedPromise()
    .then((result) => console.log("Rejected Promise:", result))
    .catch((error) => console.error("Rejected Promise Error:", error));