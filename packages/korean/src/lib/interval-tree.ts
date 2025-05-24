export class IntervalTree<T extends string> {
  root: IntervalTreeNode<T> | null;
  constructor(start?: number, end?: number, value?: T) {
    this.root =
      start && end && value ? new IntervalTreeNode(start, end, value) : null;
  }

  insert(start: number, end: number, value: T): IntervalTreeNode<T> {
    const node = new IntervalTreeNode(start, end, value);
    if (this.root === null) {
      this.root = node;
      return node;
    }
    this.root.insert(node);
    return node;
  }

  search(num: number): IntervalTreeNode<T>[] {
    if (this.root === null) {
      return [];
    }
    return this.root.search(num);
  }

  exists(num: number): boolean {
    return this.search(num).length > 0;
  }
}

export class IntervalTreeNode<T extends String> {
  start: number;
  end: number;
  value: T;
  left: IntervalTreeNode<T> | null;
  right: IntervalTreeNode<T> | null;
  constructor(start: number, end: number, value: T) {
    this.start = start;
    this.end = end;
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(node: IntervalTreeNode<T>): void {
    if (node.start < this.start) {
      if (this.left === null) {
        this.left = node;
      } else {
        this.left.insert(node);
      }
    } else {
      if (this.right === null) {
        this.right = node;
      } else {
        this.right.insert(node);
      }
    }
  }

  search(num: number): IntervalTreeNode<T>[] {
    const result = [];
    if (this.left !== null) {
      result.push(...this.left.search(num));
    }
    if (this.start <= num && num <= this.end) {
      result.push(this);
    }
    if (this.right !== null) {
      result.push(...this.right.search(num));
    }
    return result;
  }
}
