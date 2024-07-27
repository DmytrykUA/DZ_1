// З клавіатури вводяться вартість товару та кількість одиниць 3 товарів. Обчислити вартість кожного товару окремо та загальну вартість. Вивести чек (як у супермаркеті) використовуючи елементи розмітки.
let priceUnit1 = parseFloat(prompt("Введіть вартість для води:", "0,00"));
let priceUnit2 = parseFloat(prompt("Введіть вартість для хлібу:", "0,00"));
let priceUnit3 = parseFloat(prompt("Введіть вартість для масла:", "0,00"));

let water = parseInt(prompt("Введіть кількість пляшок води:", "0"));
let bread = parseInt(prompt("Введіть кількість буханок хлібу:", "0"));
let butter = parseInt(prompt("Введіть кількість пачок масла:", "0"));

let totalFirstProduct = (priceUnit1 * water);
let totalSecProduct = (priceUnit2 * bread);
let totalThProduct = (priceUnit3 * butter);

let totalSum = (totalFirstProduct + totalSecProduct + totalThProduct);

document.write (`
	<table border ="2">
	<tr>
	<th>Товар</th>
	<th>Кількість (шт.)</th>
	<th>Ціна (за штуку) </th>
	<th>Загальна ціна</th>
	</tr>

	<tr>
	<th>Перший продукт</th>
	<td>${water}</td>
	<td>${priceUnit1}</td>
	<td>${totalFirstProduct.toFixed(2)}</td>
	</tr>

	<tr>
	<th>Другий продукт</th>
	<td>${bread}</td>
	<td>${priceUnit2}</td>
	<td>${totalSecProduct.toFixed(2)}</td>
	</tr>

	<tr>
	<th>Третій продукт</th>
	<td>${butter}</td>
	<td>${priceUnit3}</td>
	<td>${totalThProduct.toFixed(2)}</td>
	</tr>

		<tr>
	<td> </td>
	<td> </td>
	<th>До сплати:</th>
	<td>${totalSum.toFixed(2)}</td>
	</tr>
	</table>

`)
