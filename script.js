let generate = function () {
  let fullName, usrFname, usrLname, nameArray, pwFname, pwLname;
  fullName = document.getElementById("flname").value;
  fullName = fullName.trim();
  // Detect if the fullName is coming from STB 
  // When it has the pattern "Gendr I.N.I.T.I.A.L.S. Surname (Firstname)"
  if(fullName.substring(fullName.length-1, fullName.length) == ")")
  {
    // Get the first name from the full name (it's between parentheses):
    usrFname = fullName.substring(fullName.indexOf("(")+1, fullName.length-1);
    // remove the first name from the full name (and its parenthesis)
    
    fullName = usrFname + " " + fullName.replace(" ("+usrFname+")", '');
  }
  nameArray = fullName.split(" ");
  usrFname = nameArray[0];
  usrLname = nameArray[nameArray.length - 1];

  pwFname = usrFname.substring(0,3);
  pwLname = usrLname.substring(0,3);
  // introduce a new variable that signifies it contains a random number from 1000 to 9999
  // use the random function to assign a value to the new variable
  let randNum = getRandBetween(1000, 9999);

  // These are the 6 permutations in which the password is generated
  // Those permutations are called schemes, so there are 6 password schemes
  // 1 Fir Num Las
  // 2 Fir Las Num
  // 3 Num Fir Las
  // 4 Num Las Fir
  // 5 Las Num Fir
  // 6 Las Fir Num
  // introduce new variable signalling it is used for a certain scheme
  let randScheme = getRandBetween(1, 6);

  // introduce new variable signalling contains the password
  let password = "not set";

  // Introduce a new variable containing special chars to put in the password
  let specialChars = "@#$!%&*-=+|";

  // Introduce two new variables containing a random number between 0 and the length of the string-
  // variable named specialChars
  let randSpecCharNum1 = getRandBetween(0, specialChars.length-1);
  let randSpecCharNum2 = getRandBetween(0, specialChars.length-1);

  // Introduce two new variables signalling they contain a random character
  // assign the value of one random character to the newly created variable.
  let randChar1 = specialChars.substring(randSpecCharNum1, randSpecCharNum1+1);
  let randChar2 = specialChars.substring(randSpecCharNum2, randSpecCharNum2+1);

  // use a switch statement containing 6 cases, one case for each scheme
  switch (randScheme) {
    case 1: // 1 Fir Num Las
      password = pwFname + randChar1 + randNum + randChar2 + pwLname;
      break;
    case 2: // 2 Fir Las Num
      password = pwFname + randChar1 + pwLname + randChar2 + randNum;
      break;
    case 3: // 3 Num Fir Las
      password = randNum + randChar1 + pwFname + randChar2 + pwLname;
      break;
    case 4: // 4 Num Las Fir
      password = randNum + randChar1 + pwLname + randChar2 + pwFname;
      break;
    case 5: // 5 Las Num Fir
      password = pwLname + randChar1 + randNum + randChar2 + pwFname;
      break;
    case 6: // 6 Las Fir Num
      password = pwLname + randChar1 + pwFname + randChar2 + randNum;
      break;
    default: // cannot compute
    //
  }

  // concatenate the variables in each case according to their respective scheme
  // and store the result in the variable called password
  // Assign the value of the variable "password" to the value-attribute of the HTML-tag with ID "password"
  document.getElementById("password").value = password;
  if(document.getElementById("cpgen").checked)
  {
    document.getElementById("password").focus();
    document.getElementById("password").select();
  }
};

function getRandBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.getElementById("generate").addEventListener("click", generate);
document.getElementById("flname").addEventListener("keyup", generate);
