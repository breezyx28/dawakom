import {table} from '../process/table.js';

var pageName = window.location.pathname.match(/([^\/]*)\/*$/)[1];
pageName = pageName.slice(0, pageName.length - 5);

$(document).ready(function(){

    var column = [
    { data: "id",className :'id',render : function(data,type){
            return '<b>'+data+'</b>';
    }},
    { data: "name",className :'name',render : function(data,type){
        return data;
    }},
    { data: "phone",className :'phone',render : function(data,type){
        return data;
    } },
    { data: "state",className :'state',render : function(data,type){
        return data;
    } },
    { data: "city",className :'city',render : function(data,type){
        return data;
    } },
    { data: "address",className :'address',render : function(data,type){
        return data;
    } },
    { data: "email",className :'email',render : function(data,type){
        return `<email class="text-success">${data}</email>`;
    } },
    { data: "lat",className :'lat',render : function(data,type){
        return data;
    } },
    { data: "lng",className :'lng',render : function(data,type){
        return data;
    } },
    { data: "companyEarns",className :'companyEarns',render : function(data,type){
        return '<i class="text-muted">'+data+'%</i>';
    } },
    { data: "activity",className :'activity',render : function(data,type){
        if(data == 1){
            return '<div class="text-success">نشط</div>';
        }else{
            return '<div class="text-danger">موقوف</div>';
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
            case 'hospitals':
                table('hospitals', column, true, true, 'hospitals', 'hospitals');
                break;
}

})



