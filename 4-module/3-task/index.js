
  function highlight(table) {
    // ваш код...

    let myTable = table.querySelector('tbody');
    let strings = myTable.querySelectorAll('tr');

    for (let currentString of strings) {
      let statusCell = currentString.lastElementChild;
      if (statusCell.hasAttribute('data-available')) {
        if (statusCell.getAttribute('data-available') === 'true') {
          currentString.classList.add('available');
        }
        else {
          currentString.classList.add('unavailable');
        }
      }
      else {
        currentString.setAttribute('hidden', true);
      }

      let genderCell = statusCell.previousElementSibling;
      if (genderCell.textContent == 'm') {
        currentString.classList.add('male');
      }
      if (genderCell.textContent == 'f') {
        currentString.classList.add('female');
      }

      let ageCell = genderCell.previousElementSibling;
      if (+ageCell.textContent < 18) {
        currentString.style = "text-decoration: line-through";
      }
    }
  }

