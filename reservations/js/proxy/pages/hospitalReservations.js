import {hospitalReservationsTable} from '../process/hospitalReservationsTable.js';

var pageName = window.location.pathname.match(/([^\/]*)\/*$/)[1];
pageName = pageName.slice(0, pageName.length - 5);

$(document).ready(function(){

    var column = [
    { data: "id",className :'id',render : function(data,type){
            return '<b>'+data+'</b>';
    }},
    { data: "token",className :'token',render : function(data,type){
        return data;
    }},
    { data: "user",className :'userPhoneNumber',render : function(data,type){
        return data.userPhoneNumber;
    } },
    { data: "atDay",className :'atDay',render : function(data,type){
        return data;
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
    { data: "id",
    render : function(data,type,row,meta){
        if(data){
            return `<div class="d-flex justify-content-center">
                        <i value="${data}" name="${data}" data-toggle="modal" data-target="#updateModal" class="btn text-muted fal fa-pen edit"></i>`;
        }
    }}
]   

switch (pageName) {
            case 'hospitalReservations':
                hospitalReservationsTable('hospitalReservations', column, true, false, null, 'hospital/reservation/accept');
                break;
}

})



