var list = [
    { "description": "rice", "amount": "1", "value": "5.40" },
    { "description": "beer", "amount": "12", "value": "1.99" },
    { "description": "meat", "amount": "1", "value": "15.00" },
    { "description": "chicken", "amount": "4", "value": "11.00" },
]

function getTotal(list) {
    var total = 0
    for (var i in list) {
        total += list[i].value * list[i].amount;
    }
    return total;
}

function setList(list) {

    var table = '<thead><tr>'+
    '<td>Description</td>'+
    '<td>Amount</td>'+
    '<td>Value</td>'+
    '<td>Action</td></tr></thead > ';

    for (var key in list){
        table += '<tbody><tr><td>'
        +formatDesc(list[key].description)+
        '</td><td>'
        +list[key].amount+
        '</td><td>'
        +formatValue(list[key].value)+
        '</td><td>Edit | Delete</td></tr>'
         
    }
    table += '</tbody>'
    document.getElementById('listTable').innerHTML = table;
}

function formatDesc(desc){
    var str = desc.toLowerCase();
    /* Setting the first letter to upper case */
    str = str.charAt(0).toUpperCase() + str.slice(1);
    return str;
}

function formatValue(value){
    var str = parseFloat(value).toFixed(2) +"";
    str = str.toString();
    str = str.replace('.',',');
    str = "R$ "+str;
    return str;
}

setList(list);
