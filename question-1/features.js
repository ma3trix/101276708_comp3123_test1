function lowerCaseWords(inputArray) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(inputArray)) {
            reject("Input is not an array");
        } else {
            const filteredWords = inputArray.filter((item) => typeof item === "string");
            const lowercasedWords = filteredWords.map((word) => word.toLowerCase());
            resolve(lowercasedWords);
        }
    });
}

const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];
lowerCaseWords(mixedArray)
    .then((result) => console.log(result))
    .catch((error) => console.error(error));