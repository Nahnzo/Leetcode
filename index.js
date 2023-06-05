// 1.Palindrome Number
var isPalindrome = function (x) {
  let array = [x];
  let reversed = array.join("").split("").reverse().join("");
  Number(reversed);
  return x == reversed ? true : false;
};
// 2.Median of Two Sorted Arrays
var findMedianSortedArrays = function (nums1, nums2) {
  let combinedNums = nums1.concat(nums2).sort((a, b) => a - b);
  let midIdx = Math.floor(combinedNums.length / 2);
  if (combinedNums.length % 2 === 0) {
    return (combinedNums[midIdx] + combinedNums[midIdx - 1]) / 2;
  } else {
    return combinedNums[midIdx];
  }
};
