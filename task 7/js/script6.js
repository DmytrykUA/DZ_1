//Знайти суму випадкового номера місяця (від 1 до 12) та випадкового номера дня (від 0 до 6).

let randomMonth = Math.ceil(Math.random() * 12);
let randomDay = Math.ceil(Math.random() * 6 );
let totalRand = (randomMonth+randomDay);

document.write(`
	<p>Номер місяця:${randomMonth}</p>
	<p>Номер дня:${randomDay}</p>
	<p>Сума випадкових чисел:${totalRand}</p>
	`);