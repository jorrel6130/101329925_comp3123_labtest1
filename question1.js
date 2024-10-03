// Name: Jorrel Tigbayan
// ID: 101329925

const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

console.log("Test");

function lowerCaseWords(arrayInput) {
    
    filteredArray = arrayInput.filter((item) => typeof item === 'string')
    
    const stringPromise = new Promise((resolve, reject) => {
        if (filteredArray.length > 0) {
            resolve('Array Contains String');
        }

        else {
            reject('Array Does Not Contain Strings');
        }
    });

    stringPromise.then((resolve) => {
        console.log(resolve);
        for (let i = 0; i < filteredArray.length; i++) {
            if (typeof filteredArray[i] === 'string') {
                filteredArray[i] = filteredArray[i].toLowerCase();
            }
        }
    
        console.log(filteredArray.filter((item) => typeof item === 'string'));
    }).catch((reject) => {
        console.log(reject);
    });
    
    return stringPromise;
}

console.log(lowerCaseWords(mixedArray));