const arr1 = [5, 10, 15, 20];
const arr2 = [15, 88, 1, 5, 7];
const arr3 = [1, 10, 15, 5, 20];

// const intersection = (...args) => {
//   if (Array.isArray(...args) === false) return null;

//   let combinedArrays = [];

//   let newArray = combinedArrays.concat(...args);

//   return newArray.filter((item) => {
//     //check what the count so far is
//     let count = this[item] ? this[item] : 0;
//     //add one and assign it back as the new count
//     this[item] = ++count;

//     //only return the item if the count is 3
//     return count === args.length;
//   }, {});
// };

// console.log(intersection(arr1, arr2, arr3));

///////////////////////////////////////////////////

// const secondIntersection = ([...args]) => {

//     return   args.reduce((previousArray, currentArray) => previousArray.filter(nextArray => currentArray.includes(nextArray)));

// }
// console.log(secondIntersection(arr1, arr2, arr3));



const intersection = (...args) => {

/* 
    Initialize an empty array "results" to store values after checking
    Initialize a variable lists to store the list of arrays received from args
*/

  let result = [];
  let lists = [...args];

  // iterate through list of arrays and assign each array to a new variable

  for (let i = 0; i < lists.length; i++) {
    let currentList = lists[i];

    // iterate over currentList and grab each value in EACH array passed into currentList
    // store those values in a new variable currentValue
    for (let y = 0; y < currentList.length; y++) {
      let currentValue = currentList[y];

      // check if currentValue is NOT present in results array
      // create variable to track boolean conditions
      if (result.indexOf(currentValue) === -1) {
        let existsInAll = true;

        // iterate through list of arrays, and check if currentValue exists in List

        for (let x = 0; x < lists.length; x++) {
          if (lists[x].indexOf(currentValue) === -1) {
            existsInAll = false;
            break;
          }
        }

        // if currentValue exists in ALL arrays, add it to results array
        if (existsInAll) {
          result.push(currentValue);
        }
      }
    }
  }
  return result;
};

console.log(intersection(arr1, arr2, arr3));
