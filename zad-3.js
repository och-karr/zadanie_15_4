/* Zadanie trzecie

Napisz funkcję average, która obliczy średnią arytmetyczną wszystkich argumentów,
które zostaną do niej przekazane. Załóż, że argumenty zawsze będą liczbami:

average(1) // 1
average(1, 3) // 2
average(1, 3, 6, 6) // 4
Skorzystaj z rest parameters! Funkcję stwórz za pomocą arrow function. */


const average = ((...args) => {
    let sum = 0;
	args.forEach(arg => sum=sum+arg);
    const quantity =args.length;
    const average = sum/quantity;
    console.log(average);
})

average(1,2,3,4);