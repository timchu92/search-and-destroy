"use strict";

const mid = arr => Math.floor(arr.length / 2);
// Complete this algo
const binarySearch = (array, target) => {
  if (array.length === 1 && array[0] === target) return true;
  const midpoint = mid(array);
  const left = array.slice(0, midpoint);
  const right = array.slice(midpoint);
  if (target <= left[left.length - 1]) {
    return binarySearch(left, target);
  } else if (target > left[left.length - 1]) {
    return binarySearch(right, target);
  } else {
    return false;
  }
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch;
