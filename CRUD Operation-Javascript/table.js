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
function deleteIt(button){
    if (confirm('Are you sure to delete this record ?')) {
        row = button.parentElement.parentElement;
        document.getElementsByClassName("t")[0].deleteRow(row.rowIndex);
        resetForm();
    }
}
function edit(button){
        var row=button.parentElement.parentElement;
        var cells=row.children;
        var fname=cells[0].innerHTML;
        var lname=cells[1].innerHTML;
        var no=cells[2].innerHTML;
        var hobby=cells[3].innerHTML;
        
        cells[0].innerHTML='<input type="text" value="'+fname+'">';
        cells[1].innerHTML='<input type="text" value="'+lname+'">';
        cells[2].innerHTML='<input type="text" value="'+no+'">';
        cells[3].innerHTML='<input type="text" value="'+hobby+'">';
        cells[4].innerHTML='<button onclick = "save(this)"> Save </button>';
}
function save(button){
    var row=button.parentElement.parentElement;
    var cells=row.children;
    var newFName=cells[0].firstChild.value;
    var newLName=cells[1].firstChild.value;
    var newFNo=cells[2].firstChild.value;
    var newHobby=cells[3].firstChild.value;

    cells[0].innerHTML=newFName;
        cells[1].innerHTML=newLName;
        cells[2].innerHTML=newFNo;
        cells[3].innerHTML=newHobby;
        cells[4].innerHTML='<button onclick = "edit(this)"> Edit </button> <button onclick= "deleteIt(this)">Delete</button>';
    

}