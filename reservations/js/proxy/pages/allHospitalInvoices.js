import {allHospitalInvoicesTable} from '../process/allHospitalInvoicesTable.js';

var pageName = window.location.pathname.match(/([^\/]*)\/*$/)[1];
pageName = pageName.slice(0, pageName.length - 5);

$(document).ready(function(){

    var column = [
    { data: "id",className :'id',render : function(data,type){
            return '<b>'+data+'</b>';
    }},
    { data: "invoiceToken", className :'invoiceToken',render : function(data,type){
        return data;
    }},
    { data: "users",className :'userPhoneNumber',render : function(data,type){
        return data.userPhoneNumber;
    } },
    { data: "reservationToken",className :'reservationToken',render : function(data,type){
        return data;
    }},
    { data: "total",className :'total',render : function(data,type){
        return data;
    } }
]   

switch (pageName) {
            case 'allHospitalInvoices':
                allHospitalInvoicesTable('hospitalsInvoices', column, false, false, null, null);
                break;
}

})



