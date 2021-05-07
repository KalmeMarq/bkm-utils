export class BKMIterator<T> {
  private pos: number = 0;
  private data: T[] = [];

  public constructor(data: T[]) {
    this.data = data;
  }

  public next(): T {
    return this.data[this.pos++];
  }

  public hasNext(): boolean {
    return this.data[this.pos] !== undefined
  }
}
