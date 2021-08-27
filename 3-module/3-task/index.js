
function camelize(str) {
  // ваш код...

  /*let startingIndex = 0;
  if (str[0] == '-') {
    startingIndex = 1;
  }
*/

  let splitArray = str.split('-');

  const arr = splitArray.map((word, index) => {
    if (index == 0) {
      return word;}
    else {
      let modifiedWord = word[0].toUpperCase() + word.slice(1);
      console.log(modifiedWord);
      return modifiedWord;
    }
  });
  console.log(arr);
  let joinedArray = arr.join('');

  return joinedArray;

}
camelize('-webkit-transition');
