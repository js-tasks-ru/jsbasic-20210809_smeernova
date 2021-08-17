function ucFirst(str) {
  // ваш код...
  if (str) {
    const string = str.slice(1);
    const firstLetter = str[0].toUpperCase();
    let newString = firstLetter + string;
    return newString;
  }
  else {
    return str;
  }
}


ucFirst("строка");
