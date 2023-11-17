// Callback Hell Task
const countdownCallback = (count, callback) => {
    setTimeout(() => {
        console.log(count);
        callback();
    }, 1000);
};

const happyIndependenceDay = () => {
    console.log("Happy Independence Day!");
};

countdownCallback(10, () => {
    countdownCallback(9, () => {
        countdownCallback(8, () => {
            countdownCallback(7, () => {
                countdownCallback(6, () => {
                    countdownCallback(5, () => {
                        countdownCallback(4, () => {
                            countdownCallback(3, () => {
                                countdownCallback(2, () => {
                                    countdownCallback(1, happyIndependenceDay);
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});
