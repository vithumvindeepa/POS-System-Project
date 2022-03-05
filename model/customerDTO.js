function customerDTO(id, name, address, contact) {
    var customerID = id;
    var customerNAME = name;
    var customerADDRESS = address;
    var customerCONTACT = contact;

    this.getID= function () {
       return  customerID;
    }
    this.setID= function (id) {
         customerID=id;
    }

    this.getNAME= function () {
        return  customerNAME;
    }
    this.setNAME= function (name) {
        customerNAME=name;
    }

    this.getADDRESS= function () {
        return  customerADDRESS;
    }
    this.setADDRESS= function (address) {
        customerADDRESS=address;
    }

    this.getCONTACT= function () {
        return  customerCONTACT;
    }
    this.setCONTACT= function (contact) {
        customerCONTACT=contact;
    }
}