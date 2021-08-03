
var surnameEl = document.querySelector("#surname");
var givenameEl = document.querySelector("#givenName");
var selectEl = document.querySelector("#select");
var residenceEl = document.querySelector("#residence");
var form = document.querySelector("#form");
var occupationEl = document.querySelector("#occupation");
var nationalityEl = document.querySelector("#nationality");
var dObEl = document.querySelector("#dob");

//The following isRequired() function returns true if the input argument is empty:
var isRequired = (value) => (value === "" ? false : true);
var isRequire = (value) => (value === "none" ? false : true);
//The following isBetween() function returns false if the length argumet is not between the min and max argument:
var isBetween = (length, min, max) =>
  length < min || length > max ? false : true;

// var isNINtrue = (nid) => {
//   var re = /^[A-Z]{3}[0-9A-Z]{8}$/;
//   return re.test(nid);
// };
// var isIDValid = (id) => {
//   var re = /^ZWash-([0-9]{3})+$/;
//   return re.test(id);
// };
// var isPhoneValid = (number) => {
//   var re = /^[0-9]+$/;
//   return re.test(number);
// };

var isNameValid = (number) => {
  var re = /^[A-Z]([a-z'-.]+)$/;
  return re.test(number);
};

var NameValid = (number) => {
  var re = /^[A-Z]([a-z'-.]+ [A-Z][a-z'-.]+)$/;
  return re.test(number);
};

//Develop functions that show the error / success
var showError = (input, message) => {
  // get the form-field element
  var formField = input.parentElement;
  // add the error class
  formField.classList.remove("success");
  formField.classList.add("error");

  // show the error message
  var error = formField.querySelector("small");
  error.textContent = message;
};
var showSuccess = (input) => {
  // get the form-field element
  var formField = input.parentElement;

  // remove the error class
  formField.classList.remove("error");
  formField.classList.add("success");

  // hide the error message
  var error = formField.querySelector("small");
  error.textContent = "";
};
// Validate the username field
var checksurname = () => {
  let valid = false;
  var min = 1,
    max = 16;
  var surname = surnameEl.value.trim();
 
  if (!isRequired(surname)) {
    showError(surnameEl, " Required field");
    surnameEl.style.border="1px solid red"
  } else if (!isNameValid(surname)) {
    showError(surnameEl, "Incorrect Format");
    surnameEl.style.border="1px solid red"
  } else if (!isBetween(surname.length, min, max)) {
    showError(
        surnameEl,
      `Surname must be between ${min} and ${max} characters.`
    );
    surnameEl.style.border="1px solid red"
  } else {
    showSuccess(surnameEl);
    surnameEl.style.border="1px solid grey"
    valid = true;
  }
  return valid;
};
//Validate the id field
var checkgivenName = () => {
    let valid = false;
    var min = 1,
      max = 16;
    var givenName = givenameEl.value.trim();
   
    if (!isRequired(givenName)) {
      showError(givenameEl, " Required field");
      givenameEl.style.border="1px solid red"
    } else if (!isNameValid(givenName)) {
      showError(givenameEl, "Incorrect Format");
      givenameEl.style.border="1px solid red"
    } else if (!isBetween(givenName.length, min, max)) {
      showError(
        givenameEl,
        `Given Name must be between ${min} and ${max} characters.`
      );
      givenameEl.style.border="1px solid red"
    } else {
      showSuccess(givenameEl);
      givenameEl.style.border="1px solid grey"
      valid = true;
    }
    return valid;
  };

var checkDOB = () => {
  let valid = false;
  
  var dOb = dObEl.value.trim();
  if (!isRequired(dOb)) {
    showError(dObEl, "Required field");
    dObEl.style.border="1px solid red"
  } else {
    showSuccess(dObEl);
    dObEl.style.border="1px solid grey"
    valid = true;
  }

  return valid;
};
 

var checkOccupation = () => {
    let valid = false;
    var min = 5,
    max = 50;
    var occupation = occupationEl.value.trim();
    if (!isRequired(occupation)) {
      showError(occupationEl, "Required field");
      occupationEl.style.border="1px solid red"
    }else if (!NameValid(occupation)) {
      showError(occupationEl, "Incorrect Format");
      occupationEl.style.border="1px solid red"
    } else if (!isBetween(occupation.length, min, max)) {
      showError(
        occupationEl,
        `Occupation must be between ${min} and ${max} characters.`
      );
      occupationEl.style.border="1px solid red"
    }else {
      showSuccess(occupationEl);
      occupationEl.style.border="1px solid grey"
      valid = true;
    }
  
    return valid;
  };

  var checkNationality = () => {
    let valid = false;
    var min = 5,
    max = 50;
    var nationality = nationalityEl.value.trim();
    if (!isRequired(nationality)) {
      showError(nationalityEl, "Required field");
      nationalityEl.style.border="1px solid red"
    }
    else if (!isNameValid(nationality)) {
      showError(nationalityEl, "Incorrect Format");
      nationalityEl.style.border="1px solid red"
    }else if (!isBetween(nationality.length, min, max)) {
      showError(
        nationalityEl,
        `Nationality must be between ${min} and ${max} characters.`
      );
      nationalityEl.style.border="1px solid red"
    } else {
      showSuccess(nationalityEl);
      nationalityEl.style.border="1px solid grey"
      valid = true;
    }
  
    return valid;
  };

var checkSelect = () => {
  let valid = false;
  var select = selectEl.value.trim();
  if (!isRequire(select)) {
    showError(selectEl, "Please select a field.");
    selectEl.style.border="1px solid red"
  } else {
    showSuccess(selectEl);
    selectEl.style.border="1px solid grey"
    valid = true;
  }

  return valid;
};

//Validate the residence field
var checkResidence = () => {
  let valid = false;
  var min = 1,
  max = 20;
  var residence = residenceEl.value.trim();
  if (!isRequired(residence)) {
    showError(residenceEl, "Required field");
    residenceEl.style.border="1px solid red"
  }else if (!isNameValid(residence)) {
    showError(residenceEl, "Incorrect Format");
    residenceEl.style.border="1px solid red"
  } else if (!isBetween(residence.length, min, max)) {
    showError(
      residenceEl,
      `Residence must be between ${min} and ${max} characters.`
    );
    residenceEl.style.border="1px solid red"
  }else {
    showSuccess(residenceEl);
    residenceEl.style.border="1px solid grey"
    valid = true;
  }

  return valid;
};

//modify button event handler
form.addEventListener("submit", function (e) {
  // prevent the form from submitting

  // validate forms
  let isSurnameValid = checksurname(),
    isGivenNameValid = checkgivenName(),
    isSelectValid = checkSelect(),
    isOccupationValid = checkOccupation(),
    isdOb = checkDOB(),
    // isAgeValid=checkAge(),
    isNationalityValid = checkNationality(),
  isResidenceValid = checkResidence();
  // isConfirmPasswordValid = checkConfirmPassword();

  let isFormValid =
  isSurnameValid &&
  isGivenNameValid &&
  isSelectValid  &&
  isOccupationValid &&
    // isAgeValid&&
    isResidenceValid &&
    isNationalityValid &&
    isdOb;
  // isConfirmPasswordValid;

  // submit to the server if the form is valid
  if (!isFormValid) {
    e.preventDefault();
  }
});
