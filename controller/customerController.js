/*...................Customer Save.......................*/

$("#btnCustomerSave").click(function () {
    let alert = confirm("Do You Want Save");
    if (alert) {
        addCustomer();
        loadAllCustomer();
    }
});

function addCustomer() {
    let CustomerID = $("#txtCusID").val();
    let CustomerNAME = $("#txtCusName").val();
    let CustomerADDRESS = $("#txtaddress").val();
    let CustomerCONTACT = $("#txtcontact").val();

    var customer = new customerDTO(CustomerID, CustomerNAME, CustomerADDRESS, CustomerCONTACT);
    customerDB.push(customer);
}

function loadAllCustomer() {
    $("#custablebody").empty();
    for (var i = 0; i < customerDB.length; i++) {
        let row = `<tr><td>${customerDB[i].getID()}</td><td>${customerDB[i].getNAME()}</td><td>${customerDB[i].getADDRESS()}</td><td>${customerDB[i].getCONTACT()}</td></tr>`;
        $("#custablebody").append(row);
    }
}

/*...................Customer update.......................*/

$("#btnCustomerUpdate").click(function () {
    let customerID = $("#txtCusID").val();
    UpdateCustomer(customerID);
});

function UpdateCustomer(CId) {
    let id = $("#txtCusID").val();
    let name = $("#txtCusName").val();
    let address = $("#txtaddress").val();
    let contact = $("#txtcontact").val();

    for (var i = 0; i < customerDB.length; i++) {
        if (customerDB[i].get() == CId) {
            customerDB[i].setID(id);
            customerDB[i].setNAME(name);
            customerDB[i].setADDRESS(address);
            customerDB[i].setCONTACT(contact);

            loadAllCustomer();
        }
    }
}

/*...................Customer delete.......................*/

$("#btnCustomerDelete").click(function () {
    var CustomerId = $("#txtCusID").val();
})