
// given a sorted array of n elements
// time complexity: O(n)

// returns the index of the target value if found in the array
function binarySearch(array, l, r, target) {
    if(r >= 1) {
        let mid = l + Math.floor((r - l) / 2)

        // if the element is present in the middle
        if(array[mid] == target)
            return mid;

        // if the target is smaller than the middle value, 
        // than it must be present in the left subarray
        if(array[mid] > target)
            return binarySearch(array, l, mid -1, target);

        // otherwise it must be present in the right subarray
        return binarySearch(array, mid+1, r, target);
    }

    // if not found, return index of 01
    return -1;
}

let array = [2, 3, 5, 9, 11, 12, 14, 100, 200, 340, 1000]

let find = 20

console.log(binarySearch(array, 0, array.length - 1, find))
