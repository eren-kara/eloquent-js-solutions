/*
Write a function that computes the dominant writing direction in a string of text.
Remember that each script object has a direction property that can be "ltr" (left to right), "rtl" (right to left), or "ttb" (top to bottom).
The dominant direction is the direction of a majority of the characters that have a script associated with them.
The characterScript and countBy functions defined earlier in the chapter are probably useful here.
*/

const SCRIPTS = require('./scripts')

function dominantDirection(text) {
    let max = -Infinity;
    let countObj = countBy(text);
    let direction;

    for(key of Object.keys(countObj)) {
        if(countObj[key] > max){
            direction = key;
            max = countObj[key];
        }
    }
    return direction;
}

function countBy(text) {
    let directionGroups = {};
    
    for (let char of text) {
        const charCodePoint = char.codePointAt(0);
        const charDirection = getDirectionByChar(charCodePoint);
        if (!charDirection) {
            continue;
        }
        directionGroups[charDirection] = (directionGroups[charDirection] || 0) + 1 || 1; 
    }

    return directionGroups;
}

function getDirectionByChar(codePoint) {
    for (let script of SCRIPTS) {
        if (script.ranges.some(([from, to]) =>  codePoint >= from && codePoint < to )) {
            return script.direction;
        }
    }
}


