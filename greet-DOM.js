var userNameInput = document.getElementById("userName");
var greetingMessage = document.querySelector(".greetingMessage");
var validationMessage = document.querySelector(".validationMessage");
var greetBtn = document.querySelector(".radiolanguage");
var resetBtn = document.querySelector(".refreshBtn");
var greetCountElement = document.querySelector(".greet-count");
var selectedLanguage;
var storageCount = JSON.parse(localStorage.getItem("greetCount")) || 0;
var greetingApp = createGreetingApp(storageCount);
greetCountElement.innerHTML = storageCount;

function greetBtnFunction() {
  selectedLanguage = document.querySelector('input[name="language"]:checked');
  var msg;
  if (!selectedLanguage || userNameInput.value === "") {
    msg = greetingApp.message(selectedLanguage, userNameInput.value);
    validationMessage.innerHTML = msg.validationMessage;
    // Clear validation message after 2 seconds
    setTimeout(function () {
      validationMessage.innerHTML = "";
    }, 2000);
  } else {
    greetingApp.handleGreetBtnClick(selectedLanguage.value, userNameInput.value);
    greetCountElement.innerHTML = greetingApp.getGreetCount();
    msg = greetingApp.message(selectedLanguage, userNameInput.value);
    greetingMessage.innerHTML = msg.greetingMessage;
    localStorage.setItem("greetCount", greetingApp.getGreetCount());
  }
}

function handleMyResetClick() {
  userNameInput.value = "";

  selectedLanguage = document.querySelector('input[name="language"]:checked');
  if (selectedLanguage) {
    selectedLanguage.checked = false;
  }

  greetingMessage.innerHTML = "";
  validationMessage.innerHTML = "";

  storageCount = 0;
  greetingApp.handleMyResetClick(); // Call the factory function's reset function

  greetCountElement.innerHTML = greetingApp.getGreetCount();

  localStorage.removeItem("greetCount");
  localStorage.removeItem("greetedNames");
}


greetBtn.addEventListener("click", greetBtnFunction);
resetBtn.addEventListener("click", handleMyResetClick);