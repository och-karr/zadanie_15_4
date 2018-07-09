/* Zadanie pierwsze

Połączenie dwóch stringów przy użyciu operatora + jest bardzo łatwym zadaniem.
Innym sposobem jest użycie metody concat albo join, ale co jeśli nie moglibyśmy
skorzystać z żadnej z tych opcji? Twoim zadaniem będzie stworzenie dwóch zmiennych
z wartościami Hello oraz World, a następnie połączenie ich metodą inną niż
wymienione powyżej. */

const firstStringArray = ["Hello"];
const secondStringArray = ["World"];

const twoStringsArray = [...firstStringArray, ...secondStringArray];

const twoStringsString = twoStringsArray.toString();
console.log(twoStringsString);

const twoStringsStringWithoutComma = twoStringsString.replace(",","");
console.log(twoStringsStringWithoutComma);


/* Zadanie drugie

Stwórz funkcję multiply, która ma zwracać wynik działania operacji mnożenia 
dwóch wartości a i b. Przykładowo:

multiply(2, 5) // 10
multiply(6, 6) // 36

Zadanie wydaje się być proste, ale co jeśli użytkownik poda na wejściu tylko 
jedną wartość? Przykładowo:

multiply(5) // ?
Chcemy, aby wynik takiego wywołania był również prawidłowy - możesz założyć,
że jeśli użytkownik nie poda któregoś z parametrów, ma on zostać zastąpiony 1. 
Nie wolno korzystać z instrukcji warunkowych! Funkcję stwórz za pomocą arrow 
function. */

const func = (num1,num2=1) => num1*num2;
console.log(func(5));


/* Zadanie trzecie

Napisz funkcję average, która obliczy średnią arytmetyczną wszystkich argumentów,
które zostaną do niej przekazane. Załóż, że argumenty zawsze będą liczbami:

average(1) // 1
average(1, 3) // 2
average(1, 3, 6, 6) // 4
Skorzystaj z rest parameters! Funkcję stwórz za pomocą arrow function. */



// function average() {
//     let sum = 0;
//     for (let i=0; i<arguments.length; i++) {
//         sum=sum+arguments[i];
//     }

//     const quantity =arguments.length;
//     const average = sum/quantity;
//     console.log(average);
// }

// average(1,2,3,4);


// const average = (...args) => args.forEach(arg => console.log(arg));
// average(1,2,3,4);

// const average = ((...args) => {
//     let sum = 0;
//     for (let i=0; i<args.length; i++) {
//         sum=sum+args[i];
//     }

//     const quantity =args.length;
//     const average = sum/quantity;
//     console.log(average);
// })

// average(1,2,3,4);

const average = ((...args) => {
    let sum = 0;
	args.forEach(arg => sum=sum+arg);
    const quantity =args.length;
    const average = sum/quantity;
    console.log(average);
})

average(1,2,3,4);


/*Zadanie czwarte

Stwórz tablicę z ocenami const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1], 
a następnie w umiejętny sposób przekaż oceny do funkcji average tak, 
aby otrzymać wynik. Skorzystaj z operatora spread! */

// const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

// const average = ((...args) => {
//     args = [...args, ...grades];
//     let sum = 0;
//     for (let i=0; i<args.length; i++) {
//         sum=sum+args[i];
//     }

//     const quantity =args.length;
//     const average = sum/quantity;
//     console.log(average);
// })

// average();

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

const average = ((...args) => {
    args = [...args, ...grades];
    let sum = 0;
    args.forEach(arg => sum=sum+arg);

    const quantity =args.length;
    const average = sum/quantity;
    console.log(average);
})

average();


/* Zadanie piąte

Podczas pracy nad projektem natknąłeś się na bardzo dziwną strukturę danych
- [1, 4, 'Iwona', false, 'Nowak']. Twoim zadaniem jest skorzystanie
z destrukturyzacji w celu wyciągnięcia z tablicy zmiennych firstname oraz lastname.

Po wykonaniu tych zadań, umieść odpowiednie pliki JavaScript na swoim Githubie 
i wyślij link do repozytorium mentorowi :) */

const dataPerson = [1, 4, 'Iwona', false, 'Nowak'];

const [children, siblings, firstName, hasCar, lastName] = dataPerson;

console.log(`${firstName} ${lastName}`);