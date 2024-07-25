// 59 - masala
// function nthSmallest(arr, n) {
//     let res = arr.sort((a,b) => a - b);
//     res.forEach((item, index)=>{
//         if (index + 1 == n) {
//             console.log(item);
//         }
//     })
// }

// nthSmallest([7, 10, 4, 3, 20, 15], 3); // Output: 7
// nthSmallest([7, 10, 4, 3, 20, 15], 4); // Output: 10




// 60 - masala
// function mostFrequent(arr){
//     return arr.sort((a,b) =>
//           arr.filter(item => item === a).length
//         - arr.filter(item => item === b).length
//     ).pop();
// }
// console.log(mostFrequent([1, 3, 1, 3, 2, 1])); // Output: 1
// console.log(mostFrequent([3, 3, 3, 2, 2, 1])); // Output: 3



// 62 - masala
// function firstMissingPositive(nums) {
//     let arr = []
//     for(let i = 0; i < nums.length; i++){
//         if (nums[i] > 0) {
//             arr.push(nums[i])
//         }
//     }
//     arr.sort((a,b) => a - b);
//     arr.forEach((item, index)=> {
//         if (index == 0) {
//             console.log(item);
//         }
//     })
// }
// firstMissingPositive([3, 4, -1, 1]); // Output: 3
// // firstMissingPositive([1, 2, 0]); // Output: 1



// 63 - masala
// function printCharsInLine(s) {
//     console.log(s.split(" ").join(""));
// }
// printCharsInLine("hello"); // Output: "h e l l o"


// 64 - masala
// function longestCommonPrefix(arr) {
//     const charList = [];
    
//     const [shortestWord, ...wordList] =
//       [...arr].sort((a, b) => a.length - b.length);
    
//     shortestWord
//       .split('')
//       .every((char, idx) => {
//         const isValidChar = wordList.every(word => word.charAt(idx) === char);
//         if (isValidChar) {
//           charList.push(char);
//         }
//         return isValidChar;
//       });
//     return charList.join('');
// }
// console.log(longestCommonPrefix(["flower","flow","flight"]));




// 65 - masala
// function maxSumSubmatrix(matrix) {
//     let maxSum = -Infinity;
//     let arr = [];
  
//     for (let i = 0; i < matrix.length; i++) {
//       let currentSum = matrix[i].reduce((a, b) => a + b, 0);
//       if (currentSum > maxSum) {
//         maxSum = currentSum;
//         arr = matrix[i];
//       }
//     }
  
//     return arr;
// }
// console.log(maxSumSubmatrix([
//     [10, 2, 3],
//     [4, 11, 6],
//     [7, 8, 9]
// ])); // [7, 8, 9]
  
  


// function maxSumSubmatrix(matrix) {
//     let maxRow = matrix[0];
//     let maxSum = matrix[0].reduce((a, b) => a + b, 0);
//     for (let i = 1; i < matrix.length; i++) {
//       let currentSum = matrix[i].reduce((a, b) => a + b, 0);
//       if (currentSum > maxSum) {
//         maxSum = currentSum;
//         maxRow = matrix[i];
//       }
//     }
//     return maxRow;
// }
// console.log(maxSumSubmatrix([
//     [10, 2, 3],
//     [4, 11, 6],
//     [7, 8, 9]
// ])); // [7, 8, 9]



// 66 - masala
// function intersection(nums1, nums2) {
//     let result = nums1.filter(item => nums2.includes(item));
//     console.log(result);
// }
// intersection([1, 2, 2, 1], [2, 2]); // Output: [2]
// // intersection([4, 9, 5], [9, 4, 9, 8, 4]); // Output: [4, 9]



  
