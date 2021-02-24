module.exports = function toReadable (number) {
  if (number === 0) return 'zero';
  if (isNaN(number)) return '';

  const a = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const b = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const c = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  const d = 'hundred';
  let result = [];
  let str = String(number); // приводим число к строке, чтобы выяснить длину позже

  switch(str.length) {
        case 1: // от 1 до 9
            for (let i = 0; i < a.length; i++) {
                if (number == i) return a[i]; // если число == i эл-ту массива a
            }
            break;
        case 2: //от 10 до 99
            if (number < 20) {
                for (let i = 0; i < b.length; i++) {
                    if (str[1] == i) return b[i]; // если число == [1]! эл-ту массива b
                    }
            }
            if (number >= 20) {
                for (let i = 0; i < c.length; i++) {
                    if (str[0] == i) { // если [0] равен i элементу массива с
                        result.push(c[i]);
                        if (number % 10 == 0) { // проверка для 20,30,40,50,60,70,80,90
                            return result.join("");
                        }
                    }
                }
            for (let i = 0; i < a.length; i++) {
                if (str[1] == i) { // если [1] равен i элементу массива a
                    result.push(a[i]);
                }
            }
            return result.join(" ");
            }
            break;
        case 3: //от 100 до 999
            for (let i = 0; i < a.length; i++){
                if (str[0] == i) {
                    result.push(a[i]);
                    result.push(d);
                    if (number % 100 == 0) {
                        return result.join(" ");
                    }
                }
            }
            if (number % 100 < 10) { //если остаток от деления < 10
                for (let i = 0; i < a.length; i++) {
                    if (str[2] == i) { // [2] элемену str == i массива а
                        result.push(a[i]);
                        return result.join(" ");
                    }
                }
            }
            if (number % 100 < 20 ) { //если остаток от деления < 20
                for (let i = 0; i < b.length; i++) {
                    if (str[2] == i) { // [2] элемену str == i массива b
                        result.push(b[i]);
                        return result.join(" ");
                    }
                }
            }
            if (number % 100 >= 20 ) { //если остаток от деления >= 20
                for (let i = 0; i < c.length; i++) {
                    if (str[1] == i) { // [1] элемену str == i эл-ту массива с
                        result.push(c[i]);
                        if (number % 10 == 0) return result.join(" "); // проверка для 20,30,40,50,60,70,80,90
                    }
                }
                for (let i = 0; i < a.length; i++) {
                    if (str[2] == i) { // [2] элементу str == i массива а
                        result.push(a[i]);
                    }
                }
                return result.join(" ");
            }
            break;
  }


}
