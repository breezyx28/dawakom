import {allHospitalsTable} from '../process/allHospitalsTable.js';

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
    { data: "companyEarns",className :'companyEarns',render : function(data,type){
        return data;
    } },
    { data: "lat",className :'lat',render : function(data,type){
        return data;
    } },
    { data: "lng",className :'lng',render : function(data,type){
        return data;
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
            case 'allHospitals':
                allHospitalsTable('hospitals', column, true, true, 'hospitals/delete', 'hospitals/update');
                break;
}

})



