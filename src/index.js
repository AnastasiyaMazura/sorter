class Sorter {
    constructor(name) {
        this.name = name;
        this.array = [];
        this.comparator = function (a, b) {
            return a > b ? 1 : -1;
        };
    }

    add(element) {
        this.array.push(element);
    }

    at(index) {
        return this.array[index];
    }

    get length() {
        return this.array.length;
    }

    toArray() {
        return this.array;
    }

    sort(indices) {
        var newarray = [];
        indices.sort(function(a, b) {
            return a > b ? 1 : -1;
        });
        for (let i = 0; i < indices.length; i++) {
            newarray.push(this.array[indices[i]]);
        }
        newarray.sort(this.comparator);
        for (let i = 0; i < indices.length; i++) {
            this.array[indices[i]] = newarray[i];
        }
    }

    setComparator(compareFunction) {
        this.comparator = compareFunction;
    }
}

module.exports = Sorter;

const sorter = new Sorter();
sorter.add(2);
sorter.add(1);

sorter.sort([0, 1]);
console.log(sorter.toArray()) // [1, 2]

sorter.add(3);

const reverseCompareFunction = (left, right) => right - left;
sorter.setComparator(reverseCompareFunction);

sorter.sort([0, 1, 2]);
console.log(sorter.toArray()); // [3, 2, 1]