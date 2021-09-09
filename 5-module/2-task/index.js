function toggleText() {
  // ваш код...
  document.querySelector('.toggle-text-button').addEventListener("click", () => {

    if (document.querySelector('#text').hasAttribute("hidden")) {
      document.querySelector('#text').removeAttribute("hidden");
      console.log(document.querySelector('#text'));
    }
    else{
      document.querySelector('#text').setAttribute("hidden", true);
    }

  });
}

