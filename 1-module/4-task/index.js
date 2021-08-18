function checkSpam(str) {
  // ваш код...
  //true, если str содержит '1xBet' или 'XXX', а иначе false
  let lowCaseString = str.toLowerCase();
  if (lowCaseString.includes("xxx") || lowCaseString.includes("1xbet")) {
    return true;
  }
  else {
    return false;
  }
}

