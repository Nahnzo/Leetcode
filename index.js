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
// 3.Twо Sum
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
    throw error;
  }
};
// 16.once
var once = function (fn) {
  let hasBeenCalled = false;
  let result;

  return function (...args) {
    if (!hasBeenCalled) {
      result = fn(...args);
      hasBeenCalled = true;
      return result;
    } else {
      return undefined;
    }
  };
};
// 16.chunk
var chunk = function (arr, size) {
  const chunkedArray = [];
  let index = 0;
  while (index < arr.length) {
    chunkedArray.push(arr.slice(index, index + size));
    index += size;
  }
  return chunkedArray;
};

function join(arr1, arr2) {
  const idMap = {};

  for (const obj of arr1) {
    const id = obj.id;
    if (idMap[id]) {
      Object.assign(idMap[id], obj);
    } else {
      idMap[id] = { ...obj };
    }
  }

  for (const obj of arr2) {
    const id = obj.id;
    if (idMap[id]) {
      Object.assign(idMap[id], obj);
    } else {
      idMap[id] = { ...obj };
    }
  }

  const joinedArray = Object.values(idMap).sort((a, b) => a.id - b.id);

  return joinedArray;
}
// 17.convertTemperature
var convertTemperature = function (celsius) {
  return [celsius + 273.15, celsius * 1.8 + 32];
};
// 18.runningSum
var runningSum = function (nums) {
  let res = [];
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    res.push(sum);
  }
  return res;
};

// 19.Add Two Integers
var sum = function (num1, num2) {
  return num1 + num2;
};
// 20.mostWordsFound
var mostWordsFound = function (sentences) {
  let maxCount = 0;
  for (let i = 0; i < sentences.length; i++) {
    const words = sentences[i].split(" ");
    const wordCount = words.length;
    if (wordCount > maxCount) {
      maxCount = wordCount;
    }
  }
  return maxCount;
};
// 21.finalValueAfterOperations
var finalValueAfterOperations = function (operations) {
  let count = 0;
  for (let i = 0; i < operations.length; i++) {
    if (operations[i] === "X++") {
      count++;
    } else if (operations[i] === "++X") {
      count++;
    } else {
      count--;
    }
  }
  return count;
};
// 22.maximumWealth
var maximumWealth = function (accounts) {
  let arrays = accounts.map((item) => item.reduce((cur, total) => cur + total, 0));
  return Math.max(...arrays);
};
// 23.differenceOfSum
var differenceOfSum = function (nums) {
  let number1 = nums.reduce((cur, tot) => cur + tot, 0);
  let number2 = nums
    .join("")
    .split("")
    .map((item) => Number(item))
    .reduce((cur, tot) => cur + tot, 0);
  return number1 - number2;
};
// 24.subtractProductAndSum
var subtractProductAndSum = function (n) {
  let array = [];
  array.push(n);
  let sum = array
    .join("")
    .split("")
    .reduce((cur, tot) => cur * tot);
  let sum1 = array
    .join("")
    .split("")
    .reduce((cur, tot) => +cur + +tot);
  return sum - sum1;
};
