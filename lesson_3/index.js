// promise

// wakeUp((resolve, reject) => {
//     if (resolve) {
//         takeAShower((resolve, reject) => {
//             if (resolve) {
//                 makeCoffee((resolve, reject) => {
//                     if (resolve) {
//                         getOutFromHome((resolve, reject) => {
//                             if (resolve) {
//                                 console.log('apres')
//                             } else {
//                                 console.log('oops')
//                             }
//                         })
//                     }
//                     else {
//                         console.log('oops')
//                     }
//                 })
//             }
//             else {
//                 console.log('oops')
//             }
//         })
//     }
//     else {
//         wakeUp()
//     }
// })
const takeAShower = () => {
    console.log('take a shower ');
}
const makeCoffee = () => {
    throw new Error('coffee machine does not work')
    console.log('coffee was made')
}
const getReadyForWork = () => {

    console.log(true)
}
// const isReadyForWork = 

let isLoading = true
const happyDay = async () => {
    console.log('loading....');
    Promise.resolve('waked up')
        // .then('want to sleep more')
        .then((responseComingFromResolveMessage) => {
            console.log(responseComingFromResolveMessage)
            console.log('loading 10%....');
        })
        .then((responseFromPreviousResolvedFunction) => takeAShower(responseFromPreviousResolvedFunction))
        .then(makeCoffee)
        .then(getReadyForWork)
        .catch(console.warn)
        .finally(() => {
            isLoading = false
        })
}
happyDay()
setTimeout(() => {
    console.log(isLoading);
}, 0)

console.log("hello");
console.log("hello");