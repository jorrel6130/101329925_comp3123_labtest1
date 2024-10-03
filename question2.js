// Name: Jorrel Tigbayan
// ID: 101329925

const resolvedPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({'Resolved': 'Eventual Success!'})
    }, 500);
});

const rejectedPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject({'Rejected': 'Took too long!'})
    }, 500);
});

resolvedPromise.then((resolve) => {
    console.log(resolve);
})

rejectedPromise.catch((reject) => {
    console.log(reject);
})