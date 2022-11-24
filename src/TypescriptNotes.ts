// Typescript Types
let name: string;
// Eğer age variableını number ya da string istiyorsak aşağıdaki gibi yazarız.
let age: number | string;
let isStudent: boolean;
// Eğer herangi bir değer atamak istiyorsak any type ı kullanabiliriz. Ancak bu tavsiye edilmez bunun yerine unknown kullanılması daha doğrudur.
let studentId: unknown;
let hobbies: string[];
let role: [number, string];
// Object type ı kullanırken ilk önce objecti tanımlamak daha yararlıdır.
// Eğer bir property optional ise ? ile belirtilir.
type Person = {
  name: string;
  age?: number;
};
let person: Person = {
  name: "Taha",
};

// Eğer person objectlerle dolu bir array tanımlamak istiyorsak:
let lotsOfPeople: Person[];

// functionda parametreye type atamak
function printName(name: string) {
  alert(name);
}

// Bu şekilde de func tanımlanabilir ancak çok kullanılmaz.
let printName2: Function;

// bu şekilde de func tanımlanabilir. eğer func return döndürmüyorsa void type olarak döner.
let printName3: (name: string) => void;

export {};
