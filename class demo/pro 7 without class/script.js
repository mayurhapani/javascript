let userData = JSON.parse(localStorage.getItem("userData"));
let indexNo = -1;

ragister("login");

function ragister(page) {
  if (page === "login") {
    $("#form").css("display", "block");
    $("#listData").css("display", "none");
  } else if (page === "list") {
    $("#listData").css("display", "block");
    $("#form").css("display", "none");
    dataDisp();
  }
}

const nameValidation = document.querySelector("#nameValidation");
const emailValidation = document.querySelector("#emailValidation");
const mobNoValidation = document.querySelector("#mobNoValidation");
const genderValidation = document.querySelector("#genderValidation");
const courseValidation = document.querySelector("#courseValidation");

dataDisp();

$("#submit").on("click", () => {
  const name = $("#name").val();
  const email = $("#email").val();
  const mobNo = $("#mobNo").val();
  const course = $("#course").val();

  let nameVarification = (emailVarification = mobNoVarification = genderVarification = courseVarification = true);

  // <---------------------------nameValidation---------------------->
  if (name == "") nameValidation.innerHTML = "Name Cannot Be Blank..!";
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
  let gender;

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
    dataPush();
    document.querySelector("#name").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#mobNo").value = "";
    document.querySelector("#course").value = "";

    document.querySelector("#gender_male").checked = false;
    document.querySelector("#gender_female").checked = false;
  }

  // <---------------------------user data push---------------------->
  function dataPush() {
    if (indexNo == -1) {
      userData.push({
        name: name,
        email: email,
        mobileNo: mobNo,
        gender: gender,
        course: course,
      });
      alert("Login Successfull...");

      dataDisp();
    } else {
      userData.forEach((editUser, index) => {
        if (index === indexNo) {
          userData.splice(index, 1, { name: name, email: email, mobileNo: mobNo, gender: gender, course: course });
          dataDisp();
        }
      });
    }
  }
});

function dataDisp() {
  let output = "";

  userData.forEach((user, index) => {
    console.log(user.course);
    const userInfo = `<tr>
                  <td>${user.name}</td>
                  <td>${user.email}</td>
                  <td>${user.mobileNo}</td>
                  <td>${user.gender}</td>
                  <td>${user.course}</td>
                  <td>
                    <button onclick="editButton(${index})" class="btn2 edit">Edit</button>
                    <button  onclick="deleteButton(${index})"
                    class="btn2 delete">Delete</button>
                  </td>
                </tr>`;

    output += userInfo;
    localStorage.setItem("userData", JSON.stringify(userData));
  });
  document.querySelector("#newEntry").innerHTML = output;
}

function deleteButton(index) {
  userData.splice(index, 1);
  dataDisp();
}

function editButton(userIndex) {
  userData.forEach((user, index) => {
    if (userIndex === index) {
      indexNo = index;
      document.querySelector("#name").value = user.name;
      document.querySelector("#email").value = user.email;
      document.querySelector("#mobNo").value = user.mobileNo;
      document.querySelector("#course").value = user.course;
      if (user.gender === "male") {
        document.querySelector("#gender_male").checked = true;
      } else document.querySelector("#gender_female").checked = true;
    }
  });
  ragister("login");
}

function edited(id1, id2) {
  const name = $(id1).val();
  if (name != "") {
    $(id2).html("<br>");
  }
}
