let lengthSm = parseInt (prompt("Введіть потрібну кількість сантиметрів:", "0"));

let LengthMeters = lengthSm / 100;
let lentghKilometers = lengthSm / 1000;

document.write (`
	<h2>Виведення результату обчислення</h2>
	
	<table border = "2">
<tr>
	<th>Довжина у сантиметрах</th>
	<td>${lengthSm}</td>
</tr>

<tr>
	<th>Довжина у метрах</th>
	<td>${LengthMeters}</td>
</tr>

<tr>
	<th>Довжина у кілометрах</th>
	<td>${lentghKilometers}</td>
</tr>
	</table>
`)