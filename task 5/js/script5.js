//Дано кількість секунд, що пройшла від початку доби. Визначити скільки це годин і хвилин.

let seconds = parseFloat(prompt("Введіть кількість секунд:", "0"));
let minutes = seconds / 60;
let hour = minutes / 60;

document.write (`
	<h2>Виведення результату обчислення</h2>
	
	<table border = "2">
<tr>
	<th>Хвилини</th>
	<td>${minutes.toFixed(2)}</td>
</tr>

<tr>
	<th>Години</th>
	<td>${hour.toFixed(2)}</td>
</tr>

	</table>
`)