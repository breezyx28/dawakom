import {allHospitalReservationsTable} from '../process/allHospitalReservationsTable.js';

var pageName = window.location.pathname.match(/([^\/]*)\/*$/)[1];
pageName = pageName.slice(0, pageName.length - 5);

$(document).ready(function(){

    var column = [
    { data: "id",className :'id',render : function(data,type){
            return '<b>'+data+'</b>';
    }},
    { data: "hospital_info",className :'name',render : function(data,type){
        return data.hospital.name;
    }},
    { data: "token",className :'token',render : function(data,type){
        return data;
    }},
    { data: "user", className :'userPhoneNumber',render : function(data,type){
        try{
            data.userPhoneNumber
            return data.userPhoneNumber
        }catch(error){
            return '<p class="text-secondary">غير متوفر</p>';
        }
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
]   

switch (pageName) {
            case 'allHospitalReservations':
                allHospitalReservationsTable('reservations', column, false, false, null, null);
                break;
}

})



