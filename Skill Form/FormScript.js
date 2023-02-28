
document.getElementById('submit').onclick = function () {
    
    document.getElementById("table").style.display = "block";
    
    var table = document.getElementById("table");
    var row = table.insertRow(1);
    var skill = row.insertCell(0);
    var level = row.insertCell(1);

    skill.innerHTML = document.getElementById("skill").value;
    level.innerHTML = getSelectValue();
    
    var chooseTable = document.getElementById('table'), rIndex;

    for (var i = 1; i < chooseTable.rows.length; i++) {
        chooseTable.rows[i].onclick = function () {
            rIndex = this.rowIndex;
            console.log(rIndex);
            deleteRow(rIndex);
           
        }
    }
    document.getElementById('skill').value = '';
    return false;

}



function getSelectValue() {
    var selectedValue = document.getElementById("levelList").value;
    console.log(selectedValue);
    return selectedValue;
}


function deleteRow(r) {
    
    document.getElementById("table").deleteRow(r);
}