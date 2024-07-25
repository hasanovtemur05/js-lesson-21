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




// 61 - masala
// function mostFrequentChar(str) {
//     let frequency = {};
//     for (let item of str) {
//         if (frequency[item]) {
//             frequency[item]++;
//         } else {
//             frequency[item] = 1;
//         }
//     }
//     let maxCount = 0;
//     let maxitem = '';
    
//     for (let item in frequency) {
//         if (frequency[item] > maxCount) {
//             maxCount = frequency[item];
//             maxitem = item;
//         }
//     }

//     return maxitem;
// }

// // Test cases
// console.log(mostFrequentChar("aabbbcccc")); // Output: "c"
// console.log(mostFrequentChar("abcdabcdabcd")); // Output: "a"





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
  
  

// 65 - masala
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



  
// 67 - masala
// function twoSumPairs(nums, target) {
//     let arr = []
//     for (var i = 0; i < nums.length; i++) {
//         for (var j = i + 1; j < nums.length; j++) {
//           if (nums[i] + nums[j] === target) {
//             arr.push(nums[i], nums[j]);
//           }
//         }
//       }
//      console.log(arr);
// }
// twoSumPairs([2, 7, 11, 15], 9); // Output: [[2, 7]]
// twoSumPairs([3, 2, 4], 6); // Output: [[2, 4]]



// 68 - masala
// function charFrequency(s) {
//        let obj = {};
//     for (let item of s) {
//         if (item !== ' ') { 
//             if (obj[item]) {
//                 obj[item]++;
//             } else {
//                 obj[item] = 1;
//             }
//         }
//     }
//     console.log(obj);
// }
// charFrequency("aabbcc"); // Output: { a: 2, b: 2, c: 2 }
// charFrequency("hello"); // Output: { h: 1, e: 1, l: 2, o: 1 }




// 69 - masala
// function deepestValue(obj) {
//     let result = null
//     let total = 0
//     let arr = [{value: obj, step: 1}]
//     for(let i = 0; i < arr.length; i++){
//         let {value, step} = arr[i]
//         for(let key in value){
//             if (typeof value[key] === "object") {
//                 arr.push({value: value[key], step: step + 1})
//             }else if(step > total){
//                 total = step
//                 result = value[key]
//             }
//         }
//     }
//     console.log(result);
// }
// const obj = {
//   a: 1,
//   b: {
//       c: 2,
//       d: {
//           e: 3,
//           f: {
//               g: 4
//           }
//       }
//   }
// };
// deepestValue(obj); // Output: 4

