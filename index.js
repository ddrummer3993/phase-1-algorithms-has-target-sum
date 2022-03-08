
function hasTargetSum(array, target) {
  let slice = 1;
  let aSwitch = false;

  for(let num of array) {
    let newArray = array.slice(slice)

    for(let num2 of newArray) {
      if (num + num2 === target) {aSwitch = true}
    }
    slice += 1;
  };

  return aSwitch;
};


//Write the Big O time complexity of your function here -----    0(n)


/* 
  Add your pseudocode here

  function takes array and target
    iterate through all numbers in the array and add them to the remaining numbers that have not already been tested
      using the currently seleted number, iterate through the remaining numbers in the array and find the sum
        if sum is equal to target number, return true
        else return false

        possibly may have to .push() sums into a ney array and iterate this array to test the target nymber.
*/

/*
  Add written explanation of your solution here

  the function needs to take an array of numbers and a target number.
  the function will then check to see if adding ANY TWO numbers together within the array will result in asum equal to 
  the target number.
  if so, return true. if not, resturn false.

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([99, 4, 3, 2, 1], 100));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([3, 7, 22, 9], 50));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([69, 58, 12, 43, 19, 20, 1976], 3));
}

module.exports = hasTargetSum;
