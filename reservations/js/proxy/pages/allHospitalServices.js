import {allHospitalsServicesTable} from '../process/allHospitalsServicesTable.js';

var pageName = window.location.pathname.match(/([^\/]*)\/*$/)[1];
pageName = pageName.slice(0, pageName.length - 5);

$(document).ready(function(){

    var column = [
    { data: "id",className :'id',render : function(data,type){
            return '<b>'+data+'</b>';
    }},
    { data: "hospital",className :'name',render : function(data,type,row,meta){
        return data.name;
    }},
    { data: "services",className :'name',render : function(data,type,row,meta){
        return data.name;
    }},
    { data: "services",className :'price',render : function(data,type,row,meta){
        return '<b class="text-success">'+data.price+'</b>';
    } },
    { data: "services",className :'note',render : function(data,type,row,meta){
        return data.note;
    } },
    { data: "services",className :'activity',render : function(data,type,row,meta){
        if(data.activity == 1){
            return '<b class="text-success">نشط</b>';
        }else{
            return '<b class="text-danger">غير نشط</b>';
        }
    } },
]   

switch (pageName) {
            case 'allHospitalServices':
                allHospitalsServicesTable('hospitalsServices', column, false, false, null, null);
                break;
}

})



