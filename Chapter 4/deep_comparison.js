/*
The == operator compares objects by identity.
But sometimes you’d prefer to compare the values of their actual properties.

Write a function deepEqual that takes two values and returns true only if they are the same value
or are objects with the same properties, where the values of the properties are equal when compared with a recursive call to deepEqual.

To find out whether values should be compared directly (use the === operator for that) or have their properties compared, you can use the typeof operator.
If it produces "object" for both values, you should do a deep comparison.
But you have to take one silly exception into account: because of a historical accident, typeof null also produces "object".

The Object.keys function will be useful when you need to go over the properties of objects to compare them.
*/

function deepEqual(obj1, obj2){
    if(obj1 === obj2){
        return true;
    }
    let keys = Object.keys(obj1);

    for(key of keys){
        if(typeof obj1[key] === 'object' && obj1[key] !== null){
           return deepEqual(obj1[key], obj2[key]);
    }
        if(obj1[key] !== obj2[key]){
            return false;
        }
    }
    return true;
}

