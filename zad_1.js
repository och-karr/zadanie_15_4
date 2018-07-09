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