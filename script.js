let generate = function () {
  let fullName = document.getElementById("flname").value;
  fullName = fullName.trim();
  let nameArray = fullName.split(" ");
  let usrFname = nameArray[0].substr(0,3);
  let usrLname = nameArray[nameArray.length - 1].substr(0,3);
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
  let specialChars = "@#$!%&*-=+";

  // Introduce two new variables containing a random number between 0 and the length of the string-
  // variable named specialChars
  let randSpecCharNum1 = getRandBetween(0, specialChars.length);
  let randSpecCharNum2 = getRandBetween(0, specialChars.length);

  // Introduce two new variables signalling they contain a random character
  // assign the value of one random character to the newly created variable.
  let randChar1 = specialChars.substr(randSpecCharNum1, 1);
  let randChar2 = specialChars.substr(randSpecCharNum2, 1);

  // use a switch statement containing 6 cases, one case for each scheme
  switch (randScheme) {
    case 1: // 1 Fir Num Las
      password = usrFname + randChar1 + randNum + randChar2 + usrLname;
      break;
    case 2: // 2 Fir Las Num
      password = usrFname + randChar1 + usrLname + randChar2 + randNum;
      break;
    case 3: // 3 Num Fir Las
      password = randNum + randChar1 + usrFname + randChar2 + usrLname;
      break;
    case 4: // 4 Num Las Fir
      password = randNum + randChar1 + usrLname + randChar2 + usrFname;
      break;
    case 5: // 5 Las Num Fir
      password = usrLname + randChar1 + randNum + randChar2 + usrFname;
      break;
    case 6: // 6 Las Fir Num
      password = usrLname + randChar1 + usrFname + randChar2 + randNum;
      break;
    default: // cannot compute
    //
  }

  // concatenate the variables in each case according to their respective scheme
  // and store the result in the variable called password
  // Assign the value of the variable "password" to the value-attribute of the HTML-tag with ID "password"
  document.getElementById("password").value = password;
  document.getElementById("password").focus();
  document.getElementById("password").select();
};

function getRandBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.getElementById("generate").addEventListener("click", generate);
document.getElementById("flname").addEventListener("keyup", generate);
