// function validate(){
//     var len = document.getElementById("no").length();
//     if(len!=10){
//     alert("Enter correct number");
//     // document.getElementById("no").style("color","red");
//         return false;
//     }
   
//   //      insertIntoTable();
//         return true;
  
// // }
function insertIntoTable(){

    var fname=document.getElementById("fname").value;
    var lname=document.getElementById("lname").value;
    var fno=document.getElementById("no").value;
    var hobby=document.getElementById("hobby").value;

    var tab=document.getElementsByClassName("t")[0];

    var row=tab.insertRow(tab.rows.length);

    var cel1=row.insertCell(0);
    var cel2=row.insertCell(1);
    var cel3=row.insertCell(2);
    var cel4=row.insertCell(3);
    var cel5=row.insertCell(4);

    cel1.innerHTML=fname;
    cel2.innerHTML=lname;
    cel3.innerHTML=fno;
    cel4.innerHTML=hobby;
    cel5.innerHTML='<button onclick= "edit(this)">Edit</button> <button onclick= "deleteIt(this)">Delete</button>';
    
    document.getElementById("details").reset();    
    
}
function deleteIt(td){
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement;
        document.getElementById("t").deleteRow(row.rowIndex);
        resetForm();
    }
}
