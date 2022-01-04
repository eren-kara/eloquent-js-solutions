/*
Make the Group class from the previous exercise iterable. 
Refer to the section about the iterator interface earlier in the chapter if you aren’t clear on the exact form of the interface anymore.

If you used an array to represent the group’s members, don’t just return the iterator created by calling the Symbol.iterator method on the array. 
That would work, but it defeats the purpose of this exercise.

It is okay if your iterator behaves strangely when the group is modified during iteration.
*/

const Group = require('./groups')

class GroupIterator {
    constructor(gr) {
        this.group = gr.group;
        this.index = 0;
    }

    next() {
        if (this.group.length <= this.index) {
            return {done: true};
        }

        let value = this.group[this.index]
        this.index++;
        return { done: false, value }
    }
}

Group.prototype[Symbol.iterator] = function() {
    return new GroupIterator(this);
}