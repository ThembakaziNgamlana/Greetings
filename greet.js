function createGreetingApp() {
  const userName = document.querySelector(".textString");
  const languageType = document.querySelectorAll(".lang");
  const greetBtn = document.querySelector(".radiolanguage");
  const myReset = document.querySelector(".refreshBtn");
  const message = document.querySelector(".message");
  const peopleNamesCounter = document.querySelector(".peopleNamesCounter");
  const counterEl =  document.querySelector(".counter")
  let peopleNamesCount = getNameCount(); 

  function incrementPeopleNamesCount() {
    peopleNamesCount++;
    localStorage.setItem('namesCount', peopleNamesCount);
    const greetCountDisplay = document.querySelector('.greetCount');
    greetCountDisplay.textContent = peopleNamesCount;
  }

  function resetPeopleNamesCount() {
    peopleNamesCount = '';
    localStorage.removeItem('namesCount');
    const greetCountDisplay = document.querySelector('.greetCount');
    greetCountDisplay.textContent = peopleNamesCount;
  }

  function getNameCount() {
    const namesCount = localStorage.getItem('namesCount');
    if (namesCount) {
     
      return namesCount++;
    }
    return 0;
  }

  function getGreetingMessage(selectedLanguage, selectedName) {
    let greeting = '';
    if (selectedLanguage === 'english') {
      greeting = `Hello, ${selectedName}`;
    } else if (selectedLanguage === 'isixhosa') {
      greeting = `Molo, ${selectedName}`;
    } else if (selectedLanguage === 'french') {
      greeting = `Bonjour, ${selectedName}`;
    }
    return greeting;
  }

  function handleGreetBtnClick() {
    const selectedLanguage = document.querySelector('input[name="language"]:checked');
    const selectedName = userName.value.trim();
    if (!selectedName) {
      message.textContent = 'Please enter a name.';
      return;
    }
    if (!selectedLanguage) {
      message.textContent = 'Please select a language.';
      return;
    }
    const greetingMessage = getGreetingMessage(selectedLanguage.value, selectedName);
    message.textContent = greetingMessage;
    incrementPeopleNamesCount();
    let namesCount = getNameCount();
    
    counterEl.innerHTML = namesCount
    peopleNamesCounter.textContent = namesCount;
  }

  function handleMyResetClick() {
    resetPeopleNamesCount();
    userName.value = "";
    languageType.forEach(function (language) {
      language.checked = false;
    });
    message.textContent = "";
  }

  return {
    handleGreetBtnClick,
    handleMyResetClick,
  };
}

const myGreetingApp = createGreetingApp();

const greetBtn = document.querySelector('.radiolanguage');
greetBtn.addEventListener('click', myGreetingApp.handleGreetBtnClick);

const resetBtn = document.querySelector('.refreshBtn');
resetBtn.addEventListener('click', myGreetingApp.handleMyResetClick);



































