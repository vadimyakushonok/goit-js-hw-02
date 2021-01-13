const formatString = function(string) {
  let result = string;
  const add = ['...'];
  const maxLength = 40;
  if(string.length >= maxLength) {
  string = string.slice(0, 39).split(' ').concat(add);
  result = string.join(' ');
  }
  return result;
}

  console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
  // вернется оригинальная строка
  
  console.log(
    formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'
    )
  );
  // вернется форматированная строка
  
  console.log(formatString('Curabitur ligula sapien.'));
  // вернется оригинальная строка
  
  console.log(
    formatString(
      'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
    ),
  );
  // вернется форматированная строка