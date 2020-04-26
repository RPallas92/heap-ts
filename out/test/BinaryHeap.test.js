"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BinaryHeap_1 = require("../src/BinaryHeap");
const sortFunction = (a, b) => a < b;
const equalityFunction = (a, b) => a === b;
const items = [4, 5, 3, 8, 7, 23, 1, 456, 15, 9887, 3];
describe("BinaryHeap", () => {
  test("Creates a new one", () => {
    const heap = new BinaryHeap_1.BinaryHeap(sortFunction, equalityFunction);
    expect(heap).not.toBeUndefined();
  });
  test("Creates a new one with initial items", () => {
    const heap = new BinaryHeap_1.BinaryHeap(
      sortFunction,
      equalityFunction,
      items
    );
    expect(heap).not.toBeUndefined();
  });
  test("length() returns correct length", () => {
    const heap = new BinaryHeap_1.BinaryHeap(
      sortFunction,
      equalityFunction,
      items
    );
    expect(heap.length()).toEqual(items.length);
  });
  test("Push adds an item", () => {
    const heap = new BinaryHeap_1.BinaryHeap(sortFunction, equalityFunction);
    heap.push(1);
    expect(heap.length()).toBe(1);
  });
  test("Peek returns highest item without removing it", () => {
    const heap = new BinaryHeap_1.BinaryHeap(sortFunction, equalityFunction);
    heap.push(5);
    expect(heap.peek()).toBe(5);
    expect(heap.length()).toBe(1);
  });
  test("Pop returns highest item removing it", () => {
    const heap = new BinaryHeap_1.BinaryHeap(sortFunction, equalityFunction);
    heap.push(10);
    heap.push(5);
    expect(heap.length()).toBe(2);
    expect(heap.pop()).toBe(5);
    expect(heap.length()).toBe(1);
  });
  test("Removes removes item", () => {
    const heap = new BinaryHeap_1.BinaryHeap(sortFunction, equalityFunction);
    heap.push(10);
    heap.push(5);
    heap.remove(5);
    expect(heap.length()).toBe(1);
    expect(heap.pop()).toBe(10);
  });
  test("Pops all items in correct order", () => {
    const expectedItems = [1, 3, 3, 4, 5, 7, 8, 15, 23, 456, 9887];
    const heap = new BinaryHeap_1.BinaryHeap(
      sortFunction,
      equalityFunction,
      items
    );
    const sortedItems = [];
    while (heap.length() > 0) {
      sortedItems.push(heap.pop());
    }
    expect(heap.length()).toBe(0);
    expect(sortedItems).toEqual(expectedItems);
  });
});
//# sourceMappingURL=BinaryHeap.test.js.map
