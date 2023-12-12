class user {
  constructor() {
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
  edit() {}
  upadte() {}
  delete() {}
}

const u1 = new user();
