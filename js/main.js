var list = [
    { "description": "rice", "amount": "1", "value": "5.40" },
    { "description": "beer", "amount": "12", "value": "1.99" },
    { "description": "meat", "amount": "1", "value": "15.00" },
]

function getTotal(list) {
    var total = 0
    for (var i in list) {
        total += list[i].value * list[i].amount;
    }
    return total;
}

function setList(list) {
    
    var table = '<thead>< tr >'+
    '<td>Description</td>'+
    '<td>Amount</td>'+
    '<td>Value</td>'+
    '<td>Action</td></tr ></thead > ';

    for (var key in list){
        table += '<tbody><tr><td>'
        +list[key].description+
        '</td><td>'
        +list[key].amount+
        '</td><td>'
        +list[key].value+
        '</td><td>Edit | Delete</td></tr>'
         
    }
    table += '</tbody>'
}

console.log(getTotal(list));