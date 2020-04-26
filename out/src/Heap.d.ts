export interface Heap<T> {
  peek: () => T | undefined;
  push: (item: T) => void;
  pop: () => T | undefined;
  remove: (item: T) => void;
  length: () => number;
}
