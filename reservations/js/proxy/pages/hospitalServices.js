import {hospitalServicesTable} from '../process/hospitalServicesTable.js';

var pageName = window.location.pathname.match(/([^\/]*)\/*$/)[1];
pageName = pageName.slice(0, pageName.length - 5);

$(document).ready(function(){

    var column = [
    { data: "id",className :'id',render : function(data,type){
            return '<b>'+data+'</b>';
    }},
    { data: "name",className :'name',render : function(data,type,row,meta){
        return data;
    }},
    { data: "price",className :'price',render : function(data,type,row,meta){
        return data;
    } },
    { data: "note",className :'note',render : function(data,type,row,meta){
        return data;
    } },
    { data: "activity",className :'activity',render : function(data,type,row,meta){
        if(data == 1){
            return '<b class="text-success">نشط</b>';
        }else{
            return '<b class="text-danger">غير نشط</b>';
        }
    } },
    { data: "id",
        render : function(data,type,row,meta){
            if(data){
                return `<div class="d-flex justify-content-center">
                                <i value="${data}" name="${data}" data-toggle="modal" data-target="#updateModal" class="btn text-muted fal fa-pen edit"></i>
                                <i value="${data}" name="${data}" class="btn text-muted fal fa-trash delete"></i></div>` ;
            }
        }}
]   

switch (pageName) {
            case 'hospitalServices':
                hospitalServicesTable('hospitalServices', column, true, true, 'delete/hospitalServices', 'update/services');
                break;
}

})



