let indexNo = -1;
let gender;
const nameValidation = document.querySelector("#nameValidation");
const emailValidation = document.querySelector("#emailValidation");
const mobNoValidation = document.querySelector("#mobNoValidation");
const genderValidation = document.querySelector("#genderValidation");
const courseValidation = document.querySelector("#courseValidation");

let userName;
let email;
let mobNo;
let course;

class user {
  constructor() {
    this.userData = JSON.parse(localStorage.getItem("userData")) || [];
  }

  getUserValue() {
    userName = $("#name").val();
    email = $("#email").val();
    mobNo = $("#mobNo").val();
    course = $("#course").val();
  }

  show() {
    let output = "";

    this.userData.forEach((user, index) => {
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
      localStorage.setItem("userData", JSON.stringify(this.userData));
    });
    document.querySelector("#newEntry").innerHTML = output;
  }

  add() {
    if (indexNo == -1) {
      this.userData.push({
        name: userName,
        email: email,
        mobileNo: mobNo,
        gender: gender,
        course: course,
      });
      alert("Registered Successfull...");

      u1.show();
    } else {
      this.userData.forEach((editUser, index) => {
        if (index === indexNo) {
          this.userData.splice(index, 1, { name: userName, email: email, mobileNo: mobNo, gender: gender, course: course });
          u1.show();
        }
      });
      alert("Added Successfull...");
    }
  }

  edit(userIndex) {
    this.userData.forEach((user, index) => {
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

  delete(index) {
    this.userData.splice(index, 1);
    u1.show();
  }

  mainDisplay(page) {
    if (page === "login") {
      $("#form").css("display", "block");
      $("#listData").css("display", "none");
    } else if (page === "list") {
      $("#listData").css("display", "block");
      $("#form").css("display", "none");
      u1.show();
    }
  }
}

const u1 = new user();

ragister("login");

function ragister(page) {
  u1.mainDisplay(page);
}
function deleteButton(index) {
  u1.delete(index);
}

function editButton(userIndex) {
  u1.edit(userIndex);
}

function edited(id1, id2) {
  const inputData = $(id1).val();
  if (inputData != "") {
    $(id2).html("<br>");
  }
}
