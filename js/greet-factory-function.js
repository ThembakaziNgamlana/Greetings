function createGreetingApp() {
  var greetCount = 0;
  var greetedNames = [];
  var selectedLanguage = 'english';
  var userName = 'John';

  function handleGreetBtnClick(selectedLanguage, userName) {
    var result = {
              greetingMessage: '',
              validationMessage: ''
            };
        
            if (userName === '' && selectedLanguage === null) {
              result.validationMessage = 'Please enter your name and select a language.';
            } else if (userName === '') {
              result.validationMessage = 'Please enter a name.';
            } else if (selectedLanguage === null) {
              result.validationMessage = 'Please select a language.';
            }
        
            if (userName && selectedLanguage) {
              if (!greetedNames.includes(userName)) {
                greetedNames.push(userName);
                greetCount++;
              }
        
              if (selectedLanguage.value === 'english') {
                result.greetingMessage = 'Hello, ' + userName;
              } else if (selectedLanguage.value === 'isixhosa') {
                result.greetingMessage = 'Molo, ' + userName;
              } else if (selectedLanguage.value === 'french') {
                result.greetingMessage = 'Bonjour, ' + userName;
              }
            }
        
            return result;
          }
   function handleMyResetClick() {
    greetedNames = [];
    greetCount = 0;
  }

  function getGreetedNames() {
    return greetedNames;
  }

  function getGreetCount() {
    return greetCount;
  }

  return {
    handleGreetBtnClick,
    handleMyResetClick,
    getGreetedNames,
    getGreetCount
  };
}













































































