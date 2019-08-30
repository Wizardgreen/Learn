import { Sorter } from "./Sorter";

export class CharactersCollection extends Sorter {
  constructor(public data: string) {
    super();
  }

  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return (
      this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
    );
  }

  swap(leftIndex: number, rightIndex: number): void {
    const tempArray = this.data.split("");
    const leftHand = tempArray[leftIndex];
    tempArray[leftIndex] = tempArray[rightIndex];
    tempArray[rightIndex] = leftHand;
    this.data = tempArray.join("");
  }
}
