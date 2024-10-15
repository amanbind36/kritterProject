function normalizeString(inputString) {
    inputString = inputString.trim();
  
    let normalizedString = '';
    let prevSpace = true; 
  
    for (let i = 0; i < inputString.length; i++) {
      const char = inputString[i];
  
      if (
        (char >= 'A' && char <= 'Z') ||
        (char >= 'a' && char <= 'z') ||
        (char >= '0' && char <= '9') ||
        char === ' '
      ) {
        if (char === ' ') {
          if (!prevSpace) {
            normalizedString += char; 
            prevSpace = true; 
          }
        } else {
          normalizedString += char; 
          prevSpace = false; 
        }
      }
    }
  
   
    let camelCaseString = '';
    const words = normalizedString.trim().split(' '); 
   
  
    for (let i = 0; i < words.length; i++) {
      if (words[i]) { 
        camelCaseString += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + ' ';
      }
    }
  
    return camelCaseString.trim();
  }
  
  let inputStr = " Hello! World@ This is a Test!. ";
  let result = normalizeString(inputStr);
  console.log(result);  
  