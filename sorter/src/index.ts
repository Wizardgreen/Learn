import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

// const numbers = new NumbersCollection([1990, 12435, -5, 4120]);
// const sorter = new Sorter(numbers);
// sorter.sort();

// const str = new CharactersCollection("GreEnEA");
// const sorter = new Sorter(str);
// sorter.sort();
// console.log(str.data);

const linkedList = new LinkedList();
linkedList.add(9123);
linkedList.add(125);
linkedList.add(25902);
linkedList.add(-412);

const sorter = new Sorter(linkedList);
sorter.sort();
linkedList.print();
