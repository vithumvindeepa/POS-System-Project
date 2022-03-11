/*...........................customer validation......................*/
const cusIDRegEx = /^(C00-)[0-9]{1,4}$/;
const cusNameRegEx = /^[A-z ]{5,20}$/;
const cusAddressRegEx = /^[0-9/A-z. ,]{7,}$/;
const cusSalaryRegEx = /^[076][0-9]?$/;


$('#txtCusID,#txtCusName,#txtaddress,#txtcontact').on('keydown', function (eventOb) {
    if (eventOb.key == "Tab") {
        eventOb.preventDefault(); // stop execution of the button
    }
});

$('#txtCusID,#txtCusName,#txtaddress,#txtcontact').on('blur', function () {
    formValid();
});

//focusing events
$("#txtCusID").on('keyup', function (eventOb) {
    setButton();
    if (eventOb.key == "Enter") {
        checkIfValid();
    }

    if (eventOb.key == "Control") {
        var typedCustomerID = $("#txtCusID").val();
        var srcCustomer = searchCustomerFromID(typedCustomerID);
        $("#txtCusID").val(srcCustomer.getCustomerID());
        $("#txtCusName").val(srcCustomer.getCustomerName());
        $("#txtaddress").val(srcCustomer.getCustomerAddress());
        $("#txtcontact").val(srcCustomer.getCustomerSalary());
    }


});

$("#txtCusName").on('keyup', function (eventOb) {
    setButton();
    if (eventOb.key == "Enter") {
        checkIfValid();
    }
});

$("#txtaddress").on('keyup', function (eventOb) {
    setButton();
    if (eventOb.key == "Enter") {
        checkIfValid();
    }
});

$("#txtcontact").on('keyup', function (eventOb) {
    setButton();
    if (eventOb.key == "Enter") {
        checkIfValid();
    }
});
// focusing events end
$("#btnCustomerSave").attr('disabled', true);

function clearAll() {
    $('#txtCusID,#txtCusName,#txtaddress,#txtcontact').val("");
    $('#txtCusID,#txtCusName,#txtaddress,#txtcontact').css('border', '2px solid #ced4da');
    $('#txtCusID').focus();
    $("#btnCustomerSave").attr('disabled', true);
    loadAllCustomer();
    $("#lblcusid,#lblcusname,#lblcusaddress,#lblContact").text("");
}

function formValid() {
    var cusID = $("#txtCusID").val();
    $("#txtCusID").css('border', '2px solid green');
    $("#lblcusid").text("");
    if (cusIDRegEx.test(cusID)) {
        var cusName = $("#txtCusName").val();
        if (cusNameRegEx.test(cusName)) {
            $("#txtCusName").css('border', '2px solid green');
            $("#lblcusname").text("");
            var cusAddress = $("#txtaddress").val();
            if (cusAddressRegEx.test(cusAddress)) {
                var Contact = $("#txtcontact").val();
                var resp = cusSalaryRegEx.test(Contact);
                $("#txtaddress").css('border', '2px solid green');
                $("#lblcusaddress").text("");
                if (resp) {
                    $("#txtcontact").css('border', '2px solid green');
                    $("#lblContact").text("");
                    return true;
                } else {
                    $("#txtcontact").css('border', '2px solid red');
                    $("#lblContact").text("Cus Contact no is a required field : contact should be 10 number");
                    return false;
                }
            } else {
                $("#txtaddress").css('border', '2px solid red');
                $("#lblcusaddress").text("Cus Name is a required field : Mimum 7");
                return false;
            }
        } else {
            $("#txtCusName").css('border', '2px solid red');
            $("#lblcusname").text("Cus Name is a required field : Mimimum 5, Max 20, Spaces Allowed");
            return false;
        }
    } else {
        $("#txtCusID").css('border', '2px solid red');
        $("#lblcusid").text("Cus ID is a required field : Pattern C00-000");
        return false;
    }
}

function checkIfValid() {
    var cusID = $("#txtCusID").val();
    if (cusIDRegEx.test(cusID)) {
        $("#txtCusName").focus();
        var cusName = $("#txtCusName").val();
        if (cusNameRegEx.test(cusName)) {
            $("#txtaddress").focus();
            var cusAddress = $("#txtCusAddress").val();
            if (cusAddressRegEx.test(cusAddress)) {
                $("#txtcontact").focus();
                var cusSalary = $("#txtcontact").val();
                var resp = cusSalaryRegEx.test(cusSalary);
                if (resp) {
                    let res = confirm("Do you really need to add this Customer..?");
                    if (res) {
                        saveCustomer();
                        clearAll();
                    }
                } else {
                    $("#txtcontact").focus();
                }
            } else {
                $("#txtaddress").focus();
            }
        } else {
            $("#txtCusName").focus();
        }
    } else {
        $("#txtCusID").focus();
    }
}

function setButton() {
    let b = formValid();
    if (b) {
        $("#btnCustomerSave").attr('disabled', false);
    } else {
        $("#btnCustomerSave").attr('disabled', true);
    }
}

$('#btnCustomerSave').click(function () {
    checkIfValid();
});




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
    let alert3=confirm("Do you want to Delete");
    if (alert3) {
        DeleteCustomer();
    }
});
function DeleteCustomer(id) {
    var searchCustomer=$("#txtCusID").val();
    for (var i=0; i<customerDB.length;i++){
        if(customerDB[i].getID()==searchCustomer){
            customerDB.splice(i, 1);
            loadAllCustomer();
            genCusID();
        }tc
    }

}

/*......................search customer.................................*/
$("#btnCustomerSearch").click(function () {
    var CustomerId=$("#txtCusID").val();
    SearchCustomer(CustomerId);

});
function SearchCustomer(id) {
    for (var i=0; i<customerDB.length;i++){
        if (customerDB[i].getID()==id){
            $("#txtCusID").val(customerDB[i].getID());
            $("#txtCusName").val(customerDB[i].getname());
            $("#txtaddress").val(customerDB[i].getaddress());
            $("#txtcontact").val(customerDB[i].getcontactno());


        }
    }

}

/*...........................other method......................*/
function genCusID() {
    if (customerDB.length == 0) {
        $("#txtCusID").val("C00-0001");
    } else if (customerDB.length > 0) {
        var code = customerDB[customerDB.length - 1].getID().split("-")[1];
        var tempCode = parseInt(code);
        tempCode = tempCode + 1;
        if (tempCode <= 9) {
            $("#txtCusID").val("C00-000" + tempCode);
        } else if (tempCode <= 99) {
            $("#txtCusID").val("C00-00" + tempCode);
        } else if (tempCode <= 999) {
            $("#txtCusID").val("C00-0" + tempCode);
        } else if (tempCode <= 9999) {
            $("#txtCusID").val("C00-" + tempCode);
        }
    }

}
$("#Customerpage").click(function () {
    genCusID();
})