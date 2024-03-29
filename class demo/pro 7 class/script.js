$("#submit").on("click", () => {
  u1.getUserValue();

  let nameVarification = (emailVarification = mobNoVarification = genderVarification = courseVarification = true);

  // <---------------------------nameValidation---------------------->
  if (userName == "") nameValidation.innerHTML = "Name Cannot Be Blank..!";
  else {
    nameValidation.innerHTML = "<br>";
    nameVarification = false;
  }
  // <---------------------------emailVarification---------------------->
  if (email === "") emailValidation.innerHTML = "Email Cannot Be Blank..!";
  else {
    if (email.includes("@")) {
      emailValidation.innerHTML = "<br>";
      emailVarification = false;
    } else {
      emailValidation.innerHTML = "Invalid Email";
    }
  }

  // <---------------------------mobNoValidation---------------------->
  if (mobNo == "") mobNoValidation.innerHTML = "Name Cannot Be Blank..!";
  else {
    mobNoValidation.innerHTML = "<br>";
    mobNoVarification = false;
  }

  // <---------------------------genderValidation---------------------->
  const gender_male = document.querySelector("#gender_male");
  const gender_female = document.querySelector("#gender_female");

  if (gender_male.checked) {
    genderValidation.innerHTML = "<br>";
    gender = "male";
    genderVarification = false;
  } else if (gender_female.checked) {
    genderValidation.innerHTML = "<br>";
    gender = "female";
    genderVarification = false;
  } else genderValidation.innerHTML = "Please Select Your Gender..!";

  // <---------------------------courseValidation---------------------->

  if (course === null) courseValidation.innerHTML = "Please Select Your Course..!";
  else {
    courseValidation.innerHTML = "<br>";
    courseVarification = false;
  }

  // <---------------------------submitValidation---------------------->

  if (nameVarification || emailVarification || mobNoVarification || genderVarification || courseVarification === true) return false;
  else {
    u1.add();
    document.querySelector("#name").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#mobNo").value = "";
    document.querySelector("#course").value = "";

    document.querySelector("#gender_male").checked = false;
    document.querySelector("#gender_female").checked = false;
  }
});
