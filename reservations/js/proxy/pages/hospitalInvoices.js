import {hospitalInvoicesTable} from '../process/hospitalInvoicesTable.js';

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
    { data: "reservationToken",className :'reservationToken',render : function(data,type){
        return data;
    }},
    { data: "user",className :'userPhone',render : function(data,type){
        return data.userPhone;
    } },
    { data: "total",className :'total',render : function(data,type){
        return data;
    } }
]   

switch (pageName) {
            case 'hospitalInvoice':
                hospitalInvoicesTable('hospitalInvoice', column, false, false, null, null);
                break;
}

})



