let priceUnit = parseInt(prompt("Введіть суму за одиницю товару:", "0"));

let quantity = parseInt(prompt("Введіть кількість бажаного товару:", "0"));

let totalSum = priceUnit * quantity;

let Percent = totalSum * (5 / 100);

document.write(`
	Вартість за одиницю товару: ${priceUnit.toFixed(2)} грн. <br>
	Загальна вартість: ${totalSum.toFixed(2)} грн <br>
	Кількість товару: ${quantity} шт. <br>
	5% ПДВ від загальної вартості: ${Percent.toFixed(2)} грн.
	`)
