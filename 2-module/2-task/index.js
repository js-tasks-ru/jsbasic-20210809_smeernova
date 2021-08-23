function isEmpty(obj) {
  // ваш код...
  for (let key in obj) {
    if (key !== undefined) {
      return false;
    }
  }
  return true;
}

