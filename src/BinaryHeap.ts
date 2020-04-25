import { Heap } from "./Heap"
import { Sort } from "./Sort";
import { Equality } from "./Equality";

export class BinaryHeap<T> implements Heap<T> {

	private items: T[]
	private sortFunction: Sort<T>
	private equalityFunction: Sort<T>

	constructor(sortFunction: Sort<T>, equalityFunction: Equality<T>, items?: T[]) {
		this.sortFunction = sortFunction
		this.equalityFunction = equalityFunction
		items?.forEach(item => this.push(item))
	}

	peek(): T | undefined {
		return this.items?.[0]
	}

	push(item: T) {
		this.items.push(item)
		this.siftUp(this.length() - 1)
	}

	pop(): T | undefined {
		const [item] = this.items
		const lastItem = this.items.pop()
		if (this.length() > 0) {
			this.items[0] = lastItem
			this.siftDown(0)
		}
		return item
	}

	remove(item: T) {
		const indexT = this.items.findIndex(currentItem => this.equalityFunction(currentItem, item))
		if (indexT === -1) {
			return
		}

		if (indexT === this.length() - 1) {
			this.items.pop()
			return
		}

		const lastItem = this.items.pop()
		this.items[indexT] = lastItem
		this.siftUp(indexT)
		this.siftDown(indexT)
	}

	length(): number {
		return this.items.length
	}

	private siftUp(index: number) {
		let currentIndex = index
		let item = this.getItem(currentIndex)

		while (currentIndex > 0) {
			const parentIndex = this.getParentIndex(currentIndex)
			const parent = this.getItem(parentIndex)

			if (this.sortFunction(parent, item)) {
				break
			}

			this.swap(parentIndex, currentIndex)
			currentIndex = parentIndex
		}

	}

	private siftDown(index: number) {
		const item = this.getItem(index)
		const length = this.length()
		let currentIndex = index
		let indexToSwap = null

		while (true) {
			const leftChildIndex = this.getLeftChildIndex(currentIndex)
			const rightChildIndex = this.getRightChildIndex(currentIndex)

			if (this.indexExists(leftChildIndex)) {
				const leftChild = this.getItem(leftChildIndex)
				indexToSwap = this.needsToSwap(item, leftChild) ? leftChildIndex : null
			}

			if (this.indexExists(rightChildIndex)) {
				const rightChild = this.getItem(rightChildIndex)
				indexToSwap = this.needsToSwap(item, rightChild) ? rightChildIndex : null
			}

			if (indexToSwap == null) {
				break
			}

			this.swap(currentIndex, indexToSwap)
			currentIndex = indexToSwap
		}

	}

	private swap(indexA: number, indexB: number) {
		const a = this.getItem(indexA)
		const b = this.getItem(indexB)
		this.items[indexB] = a
		this.items[indexA] = b
	}

	private needsToSwap(parent: T, child: T): boolean {
		return !this.sortFunction(parent, child)
	}

	private getItem(index: number): T {
		return this.items[index]
	}

	private getParentIndex(childIndex: number): number {
		return Math.floor((childIndex + 1) / 2) - 1
	}

	private getLeftChildIndex(parentIndex: number): number {
		return 2 * parentIndex + 1

	}

	private getRightChildIndex(parentIndex: number): number {
		return 2 * parentIndex + 2
	}

	private indexExists(index: number): boolean {
		return index < this.length()
	}
}