import { BinaryHeap } from "./src/BinaryHeap"
import { Sort } from "./src/Sort"
import { Equality } from "./src/Equality"


const sortFunction: Sort<number> = (a, b) => a < b
const equalityFunction: Equality<number> = (a, b) => a === b
const heap = new BinaryHeap(sortFunction, equalityFunction, [4, 5, 8, 7, 23, 1, 456, 15, 9887, 3])

while (heap.length() > 0) {
	console.log(heap.pop())
}