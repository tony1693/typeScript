import { Contacts } from './contacts';
import { Person} from "./person";
const person1 = new Person("tony", 30 , "libra");
const person2 = new Person("Nuria", 30 , "libra2");

const contac1 = new Contacts();
contac1.people.push(person1);
contac1.people.push(person2);

console.log(contac1.printCalendar());

