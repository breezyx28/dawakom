import {labDiagnosisTable} from '../process/labDiagnosisTable.js';

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
    { data: "name",className :'name',render : function(data,type){
        return data;
    }},
    { data: "price",className :'price',render : function(data,type){
        return `<i class="text-success">${data}</i>`;
    } },
    { data: "note",className :'note',render : function(data,type){
        return data;
    } },
    { data: "activity",className :'activity',render : function(data,type){
        if(data == 1){
            return '<p class="text-primary">نشط</p>';
        }else{
            return '<p class="text-danger">غير نشط</p>';
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
            case 'labDiagnosis':
                labDiagnosisTable('labDiagnosis', column, true, true, 'delete/labDiagnosis', 'update/labDiagnosis');
                break;
}

})



