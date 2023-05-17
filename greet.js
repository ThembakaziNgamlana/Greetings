var userName = document.querySelector(".textString");
var languageType = document.querySelectorAll(".lang");
var greetBtn = document.querySelector(".radiolanguage");
var myReset = document.querySelector(".refreshBtn");
var message = document.querySelector(".message");

var count = 0;

var peopleNamesCount = 0;
var btn = document.querySelector('button');
btn.addEventListener('click', function() {
  peopleNamesCount++;
  localStorage['namesCount'] = peopleNamesCount;
  if (localStorage['namesCount']) {
    peopleNamesCount = Number(localStorage['namesCount']);
  }
});

function nameCount(username, language) {
  let totalName = username.toLowerCase().split(',');
  let greeting = "";
  for (let i = 0; i < totalName.length; i++) {
    if (totalName[i].trim().toLowerCase() === "name") {
      count++;
    }
    if (language[i] === "english") {
      greeting += "Hello " + totalName[i];
    }
    if (language[i] === "isixhosa") {
      greeting += "Molo " + totalName[i];
    }
    if (language[i] === "french") {
      greeting += "Bonjour " + totalName[i];
    }
  }
  return greeting;
}
greetBtn.addEventListener('click', function() {
  const selectedLanguage = document.querySelector('input[name="language"]:checked').value;
  const selectedName = userName.value;
  const totalName = selectedName.toLowerCase().split(',');
  let message = "";
  for (let i = 0; i < totalName.length; i++) {
    languageType.forEach(function(language) {
      if (language.checked) {
        if (selectedLanguage === "english") {
          message += "Hello " + totalName[i] + " ";
        } else if (selectedLanguage === "isixhosa") {
          message += "Molo " + totalName[i] + " ";
        } else if (selectedLanguage === "french") {
          message += "Bonjour " + totalName[i] + " ";
        }
      }
    });
  }
  document.querySelector('.peopleNamesCounter').textContent = message;
});
myReset.addEventListener('click', function() {
  count = 0;
  peopleNamesCount = 0;
  localStorage.removeItem('namesCount');
  document.querySelector('.peopleNamesCounter').textContent = "";
  userName.value = "";
  languageType.forEach(function(language) {
    language.checked = false;
  });
  message.textContent = "";
});
