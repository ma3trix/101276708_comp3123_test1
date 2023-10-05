const delayedSuccess = (callback) => {
    setTimeout(() => {
        let success = { message: "delayed success!" };
        callback(success);
    }, 500);
};

const delayedException = (callback) => {
    setTimeout(() => {
        try {
            throw new Error("error: delayed exception!");
        } catch (e) {
            callback(e);
        }
    }, 500);
};

module.exports = {
    delayedSuccess,
    delayedException,
};