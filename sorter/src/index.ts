import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const linkedList = new LinkedList();
linkedList.add(9123);
linkedList.add(125);
linkedList.add(25902);
linkedList.add(-412);
linkedList.sort();
linkedList.print();

const numbersCollection = new NumbersCollection([3, -5, 0, 10]);
numbersCollection.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection("pt13tj1tqqgpo");
charactersCollection.sort();
console.log(charactersCollection.data);
