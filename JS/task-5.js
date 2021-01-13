const checkForSpam = function(message) {
    const string = message.toLowerCase();
    const result = string.includes('sale') || string.includes('spam');
 
return result;
}

  console.log(checkForSpam('Latest technology news')); // false
  
  console.log(checkForSpam('JavaScript weekly newsletter')); // false
  
  console.log(checkForSpam('Get best sale offers now!')); // true
  
  console.log(checkForSpam('[SPAM] How to earn fast money?')); // true