"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BinaryHeap {
  constructor(sortFunction, equalityFunction, items) {
    var _a;
    this.items = [];
    this.sortFunction = sortFunction;
    this.equalityFunction = equalityFunction;
    (_a = items) === null || _a === void 0
      ? void 0
      : _a.forEach((item) => this.push(item));
  }
  peek() {
    var _a;
    return (_a = this.items) === null || _a === void 0 ? void 0 : _a[0];
  }
  push(item) {
    this.items.push(item);
    this.siftUp(this.length() - 1);
  }
  pop() {
    const [item] = this.items;
    const lastItem = this.items.pop();
    if (this.length() > 0 && lastItem) {
      this.items[0] = lastItem;
      this.siftDown(0);
    }
    return item;
  }
  remove(item) {
    const indexT = this.items.findIndex((currentItem) =>
      this.equalityFunction(currentItem, item)
    );
    if (indexT === -1) {
      return;
    }
    if (indexT === this.length() - 1) {
      this.items.pop();
      return;
    }
    const lastItem = this.items.pop();
    if (!lastItem) {
      return;
    }
    this.items[indexT] = lastItem;
    this.siftUp(indexT);
    this.siftDown(indexT);
  }
  length() {
    return this.items.length;
  }
  siftUp(index) {
    let currentIndex = index;
    let item = this.getItem(currentIndex);
    while (currentIndex > 0) {
      const parentIndex = this.getParentIndex(currentIndex);
      const parent = this.getItem(parentIndex);
      if (this.sortFunction(parent, item)) {
        break;
      }
      this.swap(parentIndex, currentIndex);
      currentIndex = parentIndex;
    }
  }
  siftDown(index) {
    const item = this.getItem(index);
    let currentIndex = index;
    while (true) {
      let indexToSwap = null;
      const leftChildIndex = this.getLeftChildIndex(currentIndex);
      const rightChildIndex = this.getRightChildIndex(currentIndex);
      if (this.indexExists(leftChildIndex)) {
        const leftChild = this.getItem(leftChildIndex);
        indexToSwap = this.needsToSwap(item, leftChild) ? leftChildIndex : null;
      }
      if (this.indexExists(rightChildIndex)) {
        const rightChild = this.getItem(rightChildIndex);
        const itemOrLeftChild =
          indexToSwap === null ? item : this.getItem(indexToSwap);
        indexToSwap = this.needsToSwap(itemOrLeftChild, rightChild)
          ? rightChildIndex
          : indexToSwap;
      }
      if (indexToSwap == null) {
        break;
      }
      this.swap(currentIndex, indexToSwap);
      currentIndex = indexToSwap;
    }
  }
  swap(indexA, indexB) {
    const a = this.getItem(indexA);
    const b = this.getItem(indexB);
    this.items[indexB] = a;
    this.items[indexA] = b;
  }
  needsToSwap(parent, child) {
    return !this.sortFunction(parent, child);
  }
  getItem(index) {
    return this.items[index];
  }
  getParentIndex(childIndex) {
    return Math.floor((childIndex + 1) / 2) - 1;
  }
  getLeftChildIndex(parentIndex) {
    return 2 * parentIndex + 1;
  }
  getRightChildIndex(parentIndex) {
    return 2 * parentIndex + 2;
  }
  indexExists(index) {
    return index < this.length();
  }
}
exports.BinaryHeap = BinaryHeap;
//# sourceMappingURL=BinaryHeap.js.map
