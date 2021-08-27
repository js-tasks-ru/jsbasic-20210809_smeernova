let inputData = '1 и -5.8 или 10 хотя 34 + -5.3 и 73';

function getMinMax(str) {
  // ваш код...
  const array = str.split(' ').map(item => +item).filter(value => value);
  console.log(array);

  const max = Math.max(...array);
  const min = Math.min(...array);

  return result = {
    min,
    max
  };
}

getMinMax(inputData);
