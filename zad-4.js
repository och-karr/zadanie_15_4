/*Zadanie czwarte

Stwórz tablicę z ocenami const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1], 
a następnie w umiejętny sposób przekaż oceny do funkcji average tak, 
aby otrzymać wynik. Skorzystaj z operatora spread! */

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