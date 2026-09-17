function save(){
    var name = document.getElementById("name").value;
     var dept = document.getElementById("dept").value;
      var salary = document.getElementById("salary").value; 
    var email = document.getElementById("email").value;
      if (name == "" || dept == "" || salary == "" || email == "") { 
        alert("Please fill all the fields"); 
        return;
     }
    var employee = { 
      name: name, 
      dept: dept, 
      salary: salary,
       email: email
       }; 
       var employees = JSON.parse(localStorage.getItem("employees")) || []; 
       employees.push(employee); 
       localStorage.setItem("employees", JSON.stringify(employees));
        alert("Employee added successfully"); 
        document.getElementById("name").value = "";
         document.getElementById("salary").value = "";
          document.getElementById("email").value = ""; 
    window.location.href = "emplist.html"; 
  }
 function showEmployees() { 
  var employees = JSON.parse(localStorage.getItem("employees")) || [];
   var table = document.getElementById("emp-list");
    for (var i = 0; i < employees.length; i++) {
       var row = table.insertRow();
        row.insertCell(0).innerHTML = table.rows.length - 1;
         row.insertCell(1).innerHTML = employees[i].name;
          row.insertCell(2).innerHTML = employees[i].dept;
           row.insertCell(3).innerHTML = employees[i].salary; 
           row.insertCell(4).innerHTML = employees[i].email;
            row.insertCell(5).innerHTML = "<button onclick='deleteEmployee(this)'>Delete</button>"; 
          }
        }

 function deleteEmployee(button){
    var row=button.parentElement.parentElement;
   row.remove();
}
 function dashboard() {

    var employees = JSON.parse(localStorage.getItem("employees")) || [];

    var total = 4 + employees.length;

    document.getElementById("total-employee").innerHTML = total;
}