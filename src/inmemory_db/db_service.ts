export class InMemoryTable<T> {
  private data: Record<number, T> = {};

  private _id = 0;

  get(id: number): T | undefined {
    return this.data[id];
  }

  create(data: T): number {
    this._id++;
    this.data[this._id] = data;
    return this._id;
  }

  update(id: number, data: T): boolean {
    if (this.data[id]) {
      this.data[id] = data;
      return true;
    }
    return false;
  }

  getAll(): Record<number, T> {
    return { ...this.data };
  }

  delete(id: number): boolean {
    if (this.data[id]) {
      delete this.data[id];
      return true;
    }
    return false;
  }
}
