export class Attributes<T> {
  constructor(private data: T) {}

  get = <K extends keyof T>(key: K): T[K] => {
    return this.data[key];
  };

  getAll(): T {
    return this.data;
  }

  set(update: T): void {
    console.log("original data");
    console.log(this.data);
    console.log("update data");
    console.log(update);
    this.data = Object.assign(this.data, update);
  }
}
