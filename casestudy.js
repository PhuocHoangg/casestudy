
let student = []; 
let currentIndex = -1; 

let div = document.querySelector(".table-student");

function save() {
  let fullname = document.getElementById("name").value;
  let gender = "";
  let studentcode = document.getElementById("studentcode").value;
  let birthday = document.getElementById("date").value;


  if (document.getElementById("male").checked) {
    gender = document.getElementById("male").value;
  } else if (document.getElementById("female").checked) {
    gender = document.getElementById("female").value;
  }

  if (
    !fullname ||
    fullname.length <= 2 ||
    !birthday ||
    studentcode.length !== 10 ||
    !gender
  ) {
    alert("Please enter valid information.");
    return;
  }

  if (currentIndex === -1) {
    
    student.push({
      fullname: fullname,
      birthday: birthday,
      gender: gender,
      studentcode: studentcode,
    });
  } else {
    
    student[currentIndex] = {
      fullname: fullname,
      birthday: birthday,
      gender: gender,
      studentcode: studentcode,
    };

   
    currentIndex = -1;
  }

  renderTable();

  
  document.getElementById("name").value = "";
  document.getElementById("studentcode").value = "";
  document.getElementById("date").value = "";
  document.getElementById("male").checked = false;
  document.getElementById("female").checked = false;
}

function renderTable() {
  let tablecontent = `<tr>
    <td><b>#</b></td>
    <td><b>Name</b></td>
    <td><b>Birthday</b></td>
    <td><b>Gender</b></td>
    <td><b>Student Code</b></td>
    <td style="width:100px;"></td>
  </tr>`;

  
  for (let i = 0; i < student.length; i++) {
    tablecontent += `<tr>
      <td><b>${i + 1}</b></td>
      <td>${student[i].fullname}</td>
      <td>${student[i].birthday}</td>
      <td>${student[i].gender}</td>
      <td>${student[i].studentcode}</td>
      <td><button onclick="delete1(${i})">Delete</button><button onclick="edit1(${i})">Edit</button></td>
    </tr>`;
  }

  div.style.display = 'block'; 
  document.getElementById("table-student").innerHTML = tablecontent; 
}

function delete1(i) {
  let check = confirm("Do you want to delete this information?");
  if (check === true) {
    student.splice(i, 1); 

    renderTable(); 
  }
}

function edit1(i) {
  currentIndex = i; 

  let currentStudent = student[i]; 

 
  document.getElementById("name").value = currentStudent.fullname;
  document.getElementById("studentcode").value = currentStudent.studentcode;
  document.getElementById("date").value = currentStudent.birthday;


  if (currentStudent.gender === "male") {
    document.getElementById("male").checked = true;
  } else if (currentStudent.gender === "female") {
    document.getElementById("female").checked = true;
  }

  
  let saveButton = document.getElementById("save-button");
  saveButton.textContent = "Save";
  saveButton.onclick = saveEditedStudent;
}

function saveEditedStudent() {
  
  let fullname = document.getElementById("name").value;
  let gender = "";
  let studentcode = document.getElementById("studentcode").value;
  let birthday = document.getElementById("date").value;

  
  if (document.getElementById("male").checked) {
    gender = document.getElementById("male").value;
  } else if (document.getElementById("female").checked) {
    gender = document.getElementById("female").value;
  }


  if (
    !fullname ||
    fullname.length <= 2 ||
    !birthday ||
    studentcode.length !== 10 ||
    !gender
  ) {
    alert("Please enter valid information.");
    return;
  }

  
  student[currentIndex] = {
    fullname: fullname,
    birthday: birthday,
    gender: gender,
    studentcode: studentcode,
  };

  
  currentIndex = -1;

 
  document.getElementById("name").value = "";
  document.getElementById("studentcode").value = "";
  document.getElementById("date").value = "";
  document.getElementById("male").checked = false;
  document.getElementById("female").checked = false;

  
  let saveButton = document.getElementById("save-button");
  saveButton.textContent = "Add";
  saveButton.onclick = save;

 
  renderTable();
}
