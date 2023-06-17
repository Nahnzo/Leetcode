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
// 3.Two Sum
var twoSum = function (nums, target) {
  let result = [];
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        result.push(i, j);
      }
    }
  }
  return result;
};
// 4.Contains Duplicate
var containsDuplicate = function (nums) {
  const set = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      return true;
    }

    set.add(nums[i]);
  }

  return false;
};

// 5.Counter
var createCounter = function (n) {
  let counter = n;
  return function () {
    return counter++;
  };
};
// 6.Create Hello World Function
var createHelloWorld = function () {
  return function (...args) {
    return "Hello World";
  };
};
// 7.Return Length of Arguments Passed
var argumentsLength = function (...args) {
  return args.length;
};
// 8.Sleep
async function sleep(millis) {
  await new Promise((resolve) => setTimeout(resolve, millis));
}

// 9.Array Prototype Last
Array.prototype.last = function () {
  if (this.length === 0) {
    return -1;
  } else {
    return this[this.length - 1];
  }
};
// 10.Array Reduce Transformation
var reduce = function (nums, fn, init) {
  if (nums.length === 0) {
    return init;
  } else {
    return nums.reduce(fn, init);
  }
};

// 11.getConcatenation
var getConcatenation = function (nums) {
  let arr = nums.slice();
  return nums.concat(arr);
};
// 12.defangIPaddr
var defangIPaddr = function (address) {
  let array = address.split("");
  for (let i = 0; i < array.length; i++) {
    if (array[i] == ".") {
      array[i - 1] += "[";
      array[i] += "]";
    }
  }
  return array.join("");
};
// 13.isEmpty
var isEmpty = function (obj) {
  if (Object.keys(obj).length) return false;
  else return true;
};
// 14.Flatten Deeply Nested Array
var flat = function (arr, n) {
  return arr.flat(n);
};
// 15.addTwoPromises
var addTwoPromises = async function (promise1, promise2) {
  try {
    const [res1, res2] = await Promise.all([promise1, promise2]);
    return res1 + res2;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
