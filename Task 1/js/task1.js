// Введення чисел
let firstNumber = parseFloat (prompt("Для знаходження суми, добутку та частки введіть перше число", "0"))
let secondNumber = parseFloat (prompt("Для знаходження суми, добутку та частки введіть друге число", "0"))

//Математичні операції
let sum = firstNumber + secondNumber;
let mult = firstNumber * secondNumber;
let divis = firstNumber / secondNumber;

//Виведення результату
document.write(`
	<table border = '2'>
	  <tr>
		 <th>Перше число</th>
		 <td>${firstNumber}</td>
	  </tr>

	  <tr>
		 <th>Друге число</th>
		 <td>${secondNumber}</td>
	  </tr>

	  <tr>
		 <th>Сума</th>
	  <td>${sum.toFixed(2)}</td>
	  </tr>
 
	  <tr>
		 <th>Добуток</th>
		 <td>${mult.toFixed(2)}</td>
	  </tr>

	  <tr>
		 <th>Частка</th>
		 <td>${divis.toFixed(2)}</td>
	  </tr>
 </table>
	`)