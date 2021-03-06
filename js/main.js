var list = [
]

function getTotal(list) {
    var total = 0
    for (var i in list) {
        total += list[i].value * list[i].amount;
    }
    document.getElementById('totalValue').innerHTML = "R$ " + total.toFixed(2);
}

function setList(list) {

    var table = '<thead><tr>' +
        '<td><Strong>Description<Strong/></td>' +
        '<td><Strong>Amount<Strong/></td>' +
        '<td><Strong>Value<Strong/></td>' +
        '<td><Strong>Action<Strong/></td></tr></thead > ';

    for (var key in list) {
        table += '<tbody><tr><td>'
            + formatDesc(list[key].description) +
            '</td><td>'
            + list[key].amount +
            '</td><td class="text-success" >'
            + formatValue(list[key].value) +
            '</td><td> '
            + '<button class="btn btn-primary" onClick="setUpdate(' + key + ')" > Edit </button>'
            + ' '
            + '<button class="btn btn-danger" onClick="deleteData(' + key + ')" > Remove</button>'

    }
    table += '</tbody>'
    document.getElementById('listTable').innerHTML = table;
    document.getElementById('listTable').style.marginLeft = "10px";
    
}

function formatDesc(desc) {
    var str = desc.toLowerCase();
    /* Setting the first letter to upper case */
    str = str.charAt(0).toUpperCase() + str.slice(1);
    return str;
}

function formatValue(value) {
    var str = parseFloat(value).toFixed(2) + "";
    str = str.toString();
    str = str.replace('.', ',');
    str = "R$ " + str;
    return str;
}

function addData() {
    var desc = document.getElementById('desc').value;
    var amount = document.getElementById('amount').value;
    var value = document.getElementById('value').value;
    /* if the inputs not are clean */
    if (desc == "" || amount == "" || value == "") {

        alert("Please fill all the fields");
    }
    else {
        /* append to the list */
        list.unshift({ "description": desc, "amount": amount, "value": value });
        /* Refresh te table */
        setList(list);
        getTotal(list);
        saveListStorage(list);
        /* Reseting the inputs */
        document.getElementById('desc').value = "";
        document.getElementById('amount').value = "";
        document.getElementById('value').value = "";
    }



}

function setUpdate(id) {
    var obj = list[id];
    document.getElementById('desc').value = obj.description;
    document.getElementById('amount').value = obj.amount;
    document.getElementById('value').value = obj.value;
    document.getElementById('btnUpdate').style.display = "inline-block";
    document.getElementById('btnAdd').style.display = "none";
    document.getElementById('inputIdUpdate').innerHTML = '<input type="hidden" id="idUpdate" value="' + id + '"/>'

}

function resetForm() {
    document.getElementById('desc').value = "";
    document.getElementById('amount').value = "";
    document.getElementById('value').value = "";
    document.getElementById('btnUpdate').style.display = "none";
    document.getElementById('btnAdd').style.display = "inline-block";
    document.getElementById('inputIdUpdate').innerHTML = "";
}

function updateData() {
    var id = document.getElementById('idUpdate').value;
    var desc = document.getElementById('desc').value;
    var amount = document.getElementById('amount').value;
    var value = document.getElementById('value').value;
    list[id] = { "description": desc, "amount": amount, "value": value };
    resetForm();
    setList(list);
    getTotal(list);
    saveListStorage(list);
}

function deleteData(id) {
    if (confirm("Are you sure?")) {
        list.splice(id, 1);
        setList(list);
        getTotal(list);
        saveListStorage(list)
    }
}

function deleteAll() {
    if (confirm("ALL DATA WILL BE DELETED \n\nAre you sure? ")) {
        list = [];
        setList(list);
        getTotal(list);
        saveListStorage(list);
    }

}

function saveListStorage(list) {
    var jsonStr = JSON.stringify(list);
    localStorage.setItem('list', jsonStr);
}

function loadListStorage() {
    var jsonStr = localStorage.getItem('list');
    if (jsonStr != null) {
        list = JSON.parse(jsonStr);
        setList(list);
        getTotal(list);
    }
}
//called when the page is loaded
loadListStorage();
getTotal(list);
setList(list);
