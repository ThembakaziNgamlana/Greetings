var selectedLanguage = document.querySelector('input[name="language"]:checked');
var userNameInput = document.getElementById('userName');
var greetingMessage = document.querySelector('.greetingMessage');
var validationMessage = document.querySelector('.validationMessage');
var greetBtn = document.querySelector('.radiolanguage');
var resetBtn = document.querySelector('.refreshBtn');
var greetCountElement = document.querySelector('.greetCount');
var greetCount = 0;
var greetedNames = [];

// Load greet count from local storage
if (localStorage.getItem('greetCount')) {
  greetCount = parseInt(localStorage.getItem('greetCount'));
  greetCountElement.value = greetCount;
}

// Load greeted names from local storage
if (localStorage.getItem('greetedNames')) {
  greetedNames = JSON.parse(localStorage.getItem('greetedNames'));
}


greetBtn.addEventListener('click', handleGreetBtnClick);
resetBtn.addEventListener('click', handleMyResetClick);

function handleGreetBtnClick() {
  selectedLanguage = document.querySelector('input[name="language"]:checked');
  var userName = userNameInput.value.trim();

  if (userName === '' && selectedLanguage === null) {
    validationMessage.innerHTML = 'Please enter your name and select a language.';
  } else if (userName === '') {
    validationMessage.innerHTML = 'Please enter a name.';
  } else if (selectedLanguage === null) {
    validationMessage.innerHTML = 'Please select a language.';
  }
  

  // Clear validation message after 2 seconds
  setTimeout(function() {
    validationMessage.innerHTML = '';
  }, 2000);

  if (userName !== '' && selectedLanguage !== null) {
    if (!greetedNames.includes(userName)) {
      greetedNames.push(userName);
      greetCount++;
      greetCountElement.value = greetCount;

      // Save greeted names to local storage
      localStorage.setItem('greetedNames', JSON.stringify(greetedNames));

      // Save greet count to local storage
      localStorage.setItem('greetCount', greetCount.toString());
    }

    if (selectedLanguage.value === 'english') {
      greetingMessage.innerHTML = 'Hello, ' + userName;
    } else if (selectedLanguage.value === 'isixhosa') {
      greetingMessage.innerHTML = 'Molo, ' + userName;
    } else if (selectedLanguage.value === 'french') {
      greetingMessage.innerHTML = 'Bonjour, ' + userName;
    }
  }
}

function handleMyResetClick() {
  // Reset the user's name
  userNameInput.value = '';

  // Reset the selected language
  selectedLanguage = document.querySelector('input[name="language"]:checked');
  if (selectedLanguage) {
    selectedLanguage.checked = false;
  }

  // Reset the greeting message
  greetingMessage.innerHTML = '';

  // Reset the validation message
  validationMessage.innerHTML = '';

  // Reset greet count and greeted names
  greetCount = '';
  greetedNames = [];
  greetCountElement.value = greetCount;

  // Clear local storage
  localStorage.removeItem('greetCount');
  localStorage.removeItem('greetedNames');
}





































// var selectedLanguage = document.querySelector('input[name="language"]:checked');
// var userNameInput = document.getElementById('userName');
// var greetingMessage = document.querySelector('.greetingMessage');
// var validationMessage = document.querySelector('.validationMessage');
// var greetBtn = document.querySelector('.radiolanguage');
// var resetBtn = document.querySelector('.refreshBtn');

// greetBtn.addEventListener('click', handleGreetBtnClick);
// resetBtn.addEventListener('click', handleMyResetClick);

// function handleGreetBtnClick() {
//   selectedLanguage = document.querySelector('input[name="language"]:checked');
//   var userName = userNameInput.value.trim();

//   if (userName === '' && selectedLanguage === null) {
//     validationMessage.innerHTML = 'Please enter your name and select a language.';
//   } else if (userName === '') {
//     validationMessage.innerHTML = 'Please enter a name.';
//   } else if (selectedLanguage === null) {
//     validationMessage.innerHTML = 'Please select a language.';
//   }

//   if (selectedLanguage && selectedLanguage.value === 'english') {
//     greetingMessage.innerHTML = 'Hello, ' + userName;
//   } else if (selectedLanguage && selectedLanguage.value === 'isixhosa') {
//     greetingMessage.innerHTML = 'Molo, ' + userName;
//   } else if (selectedLanguage && selectedLanguage.value === 'french') {
//     greetingMessage.innerHTML = 'Bonjour, ' + userName;
//   }
// }

// function handleMyResetClick() {
//   // Reset the user's name
//   userNameInput.value = '';

//   // Reset the selected language
//   selectedLanguage = document.querySelector('input[name="language"]:checked');
//   if (selectedLanguage) {
//     selectedLanguage.checked = false;
//   }

//   // Reset the greeting message
//   greetingMessage.innerHTML = '';

//   // Reset the validation message
//   validationMessage.innerHTML = '';
// }








































