function customerDTO(code, name, price, quantity) {
    var itemCODE = code;
    var itemNAME = name;
    var itemPRICE = price;
    var itemQUANTITY = quantity;

    this.getID= function () {
        return  itemCODE;
    }
    this.setID= function () {
        itemCODE=code;
    }

    this.getNAME= function () {
        return  itemNAME;
    }
    this.setNAME= function () {
        itemNAME=name;
    }

    this.getADDRESS= function () {
        return  itemPRICE;
    }
    this.setADDRESS= function () {
        itemPRICE=price;
    }

    this.getCONTACT= function () {
        return  itemQUANTITY;
    }
    this.setCONTACT= function () {
        itemQUANTITY=quantity;
    }
}