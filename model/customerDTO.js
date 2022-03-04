function customerDTO(id, name, address, contact) {
    var customerID = id;
    var customerNAME = name;
    var customerADDRESS = address;
    var customerCONTACT = contact;

    this.getID= function () {
       return  customerID;
    }
    this.setID= function () {
         customerID=id;
    }

    this.getNAME= function () {
        return  customerNAME;
    }
    this.setNAME= function () {
        customerNAME=name;
    }

    this.getADDRESS= function () {
        return  customerADDRESS;
    }
    this.setADDRESS= function () {
        customerADDRESS=address;
    }

    this.getCONTACT= function () {
        return  customerCONTACT;
    }
    this.setCONTACT= function () {
        customerCONTACT=contact;
    }
}