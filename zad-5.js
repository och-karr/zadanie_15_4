/* Zadanie piąte

Podczas pracy nad projektem natknąłeś się na bardzo dziwną strukturę danych
- [1, 4, 'Iwona', false, 'Nowak']. Twoim zadaniem jest skorzystanie
z destrukturyzacji w celu wyciągnięcia z tablicy zmiennych firstname oraz lastname.

Po wykonaniu tych zadań, umieść odpowiednie pliki JavaScript na swoim Githubie 
i wyślij link do repozytorium mentorowi :) */

const dataPerson = [1, 4, 'Iwona', false, 'Nowak'];

const [children, siblings, firstName, hasCar, lastName] = dataPerson;

console.log(`${firstName} ${lastName}`);