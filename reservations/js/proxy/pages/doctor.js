import {doctorTable} from '../process/doctorTable.js';

var pageName = window.location.pathname.match(/([^\/]*)\/*$/)[1];
pageName = pageName.slice(0, pageName.length - 5);

$(document).ready(function(){

    var column = [
    { data: "id",className :'id',render : function(data,type){
            return '<b>'+data+'</b>';
    }},
    { data: "fullName",className :'fullName',render : function(data,type){
        return data;
    }},
    { data: "phone",className :'phone',render : function(data,type){
        return data;
    } },
    { data: "gender",className :'gender',render : function(data,type){
        return data;
    } },
    { data: "email",className :'email',render : function(data,type){
        return `<email class="text-success">${data}</email>`;
    } },
    
    { data: "activity",className :'activity',render : function(data,type){
        return data;
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
            case 'doctors':
                doctorTable('doctors', column, true, true, 'doctors', 'doctors');
                break;
}

})



