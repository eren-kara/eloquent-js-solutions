/* 
For this exercise, write two functions, reverseArray and reverseArrayInPlace.
The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order.
The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements.
Neither may use the standard reverse method.

Thinking back to the notes about side effects and pure functions in the previous chapter, which variant do you expect to be useful in more situations? Which one runs faster?
*/

function reverseArray(arr){
    const tempArr = [];

    for(let i = arr.length - 1; i >= 0; i--){
        tempArr.push(arr[i]);
    }

    return tempArr;
}

function reverseInPlace(arr){
    let temp;

    for (let i = 0; i < Math.floor(arr.length / 2); i++){
        temp = arr[i];
        arr[i] = arr[arr.length - i - 1];
        arr[arr.length - i -1] = temp;
    }
    return arr;
}

