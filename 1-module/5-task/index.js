function truncate(str, maxlength) {
  // ваш код...
  if (str.length > maxlength) {
    slicedString = str.slice(0, maxlength - 1);
    newString = slicedString + "…";
    return newString;
  }
  else {
    return str;
  }
}
truncate("ljlkjljl", 5);
