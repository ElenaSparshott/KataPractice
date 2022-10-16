// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.



function chunkArrayInGroups(arr, size) {

    let arr2 = [];
    let subArr = [];

    for (let i = 0; i < arr.length; i += size) {
        subArr = arr.slice(i, i + size);
        arr2.push(subArr);
    }
  
    return arr2;
}