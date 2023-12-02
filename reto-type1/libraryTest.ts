import { Book } from "./book";
import { Library } from "./library";

const libro1 = new Book("el quijote" , 500 , "wep" , "Miguel de Cervantes" , "Anaya");
const libro2 = new Book("manolito gafotas" , 300 , "Google" , "manolo", "Destino");

const libreria1 = new Library([] , "Libra N3" , "Luis" );
libreria1.books.push(libro1);
libreria1.books.push(libro2);


libreria1.toString();
libreria1.findByAuthor("manolo");