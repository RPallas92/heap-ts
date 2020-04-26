"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BinaryHeap_1 = require("./src/BinaryHeap");
const sortFunction = (a, b) => a > b;
const equalityFunction = (a, b) => a === b;
const heap = new BinaryHeap_1.BinaryHeap(sortFunction, equalityFunction, [4, 5, 8, 7, 23, 1, 456, 15, 9887, 3]);
while (heap.length() > 0) {
    console.log(heap.pop());
}
//# sourceMappingURL=index.js.map