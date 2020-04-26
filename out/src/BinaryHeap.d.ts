import { Heap } from "./Heap";
import { Sort } from "./Sort";
import { Equality } from "./Equality";
export declare class BinaryHeap<T> implements Heap<T> {
    private items;
    private sortFunction;
    private equalityFunction;
    constructor(sortFunction: Sort<T>, equalityFunction: Equality<T>, items?: T[]);
    peek(): T | undefined;
    push(item: T): void;
    pop(): T | undefined;
    remove(item: T): void;
    length(): number;
    private siftUp;
    private siftDown;
    private swap;
    private needsToSwap;
    private getItem;
    private getParentIndex;
    private getLeftChildIndex;
    private getRightChildIndex;
    private indexExists;
}
