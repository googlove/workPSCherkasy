function subtractNumbers() {
    var number1 = parseFloat(document.getElementById('number1').value);
    var number2 = parseFloat(document.getElementById('number2').value);
    if (isNaN(number1) || isNaN(number2)) {
      document.getElementById('subtractResult').innerText = 'Будь ласка, введіть числа у відповідні поля.';
    } else {
      var result = number1 - number2;
      document.getElementById('subtractResult').innerText = 'Результат: ' + result;
    }
  }