import {allLabReservationsTable} from '../process/allLabReservationsTable.js';

var pageName = window.location.pathname.match(/([^\/]*)\/*$/)[1];
pageName = pageName.slice(0, pageName.length - 5);

$(document).ready(function(){

    var column = [
    { data: "id",className :'id',render : function(data,type){
            return '<b>'+data+'</b>';
    }},
    { data: "lab",className :'name',render : function(data,type){
        return data.name;
    }},
     { data: "attendToken",className :'attendToken',render : function(data,type){
        return data;
    }},
    { data: "user",className :'userPhoneNumber',render : function(data,type){
        return data.userPhoneNumber;
    } },
    { data: "note",className :'note',render : function(data,type){
        return data;
    } },
    { data: "statue",className :'statue',render : function(data,type){
        if(data == "live"){
            return '<b class="text-primary">متوفر ...</b>';
        }
        if(data == "accepted"){
            return '<b class="text-success">مقبول</b>';
        }
        if(data == "rejected"){
            return '<b class="text-danger">مرفوض</b>';
        }
    } },
]   

switch (pageName) {
            case 'allLabsReservations':
                allLabReservationsTable('diagnosis', column, false, false, false, false);
                break;
}

})



