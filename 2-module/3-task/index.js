/*Создайте объект calculator (калькулятор) с тремя методами:

read(a, b) (читать) запрашивает два значения и сохраняет их как свойства объекта.
sum() (суммировать) возвращает сумму сохранённых значений.
mul() (умножить) перемножает сохранённые значения и возвращает результат.*/


let calculator = {
  // ваш код
  read(x, y) {
    this.a = x;
    this.b = y;
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};
calculator.read(3, 4);
calculator.sum();
calculator.mul();

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
