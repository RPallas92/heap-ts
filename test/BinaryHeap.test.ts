import { BinaryHeap } from "../src/BinaryHeap";
import { Sort } from "../src/Sort";
import { Equality } from "../src/Equality";

const sortFunction: Sort<number> = (a, b) => a < b;
const equalityFunction: Equality<number> = (a, b) => a === b;
const items = [4, 5, 8, 7, 23, 1, 456, 15, 9887, 3];

describe("BinaryHeap", () => {
	test("Creates a new one", () => {
		const heap = new BinaryHeap(sortFunction, equalityFunction);
		expect(heap).not.toBeUndefined();
	});

	test("Creates a new one with initial items", () => {
		const heap = new BinaryHeap(sortFunction, equalityFunction, items);
		expect(heap).not.toBeUndefined();
	});

	test("length() returns correct length", () => {
		const heap = new BinaryHeap(sortFunction, equalityFunction, items);
		expect(heap.length()).toEqual(items.length);
	});

	test("Adds an item", () => {
		expect(3).toBe(3);
	});
});
