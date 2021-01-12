const formatString = function(string) {
    const stringSplit = string.split('').length;
    maxLength = 40;
    if (stringSplit >= maxLength) {
        const resultString = stringSplit.slice(0, 40).push('...');
        const result = string.join('');
    }
return result;   
  };
  
  /*
   * Вызовы функции для проверки работоспособности твоей реализации.
   */
  console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
  // вернется оригинальная строка
  
  console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
  // вернется форматированная строка
  
  console.log(formatString('Curabitur ligula sapien.'));
  // вернется оригинальная строка
  
  console.log(
    formatString(
      'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
    ),
  );
  // вернется форматированная строка