import {docInfoTable} from '../process/docInfoTable.js';

var pageName = window.location.pathname.match(/([^\/]*)\/*$/)[1];
pageName = pageName.slice(0, pageName.length - 5);

$(document).ready(function(){

    var column = [
    { data: "doc_info",className :'doc_info',render : function(data,type){
            return '<b>'+data.id+'</b>';
    }},
    { data: "doctor",className :'fullName',render : function(data,type){
        return data.fullName;
    }},
    { data: "doc_info", className :'specialization',render : function(data,type){
        return data.specialization;
    } },
    { data: "doc_info",className :'interviewPrice',render : function(data,type){
        return data.interviewPrice;
    } },
    { data: "doc_info",
        render : function(data,type,row,meta){
            if(data.id){
                return `<div class="d-flex justify-content-center">
                                <i value="${data.id}" name="${data.id}" data-toggle="modal" data-target="#updateModal" class="btn text-muted fal fa-pen edit"></i>
                                <i value="${data.id}" name="${data.id}" class="btn text-muted fal fa-trash delete"></i></div>` ;
            }
        }}
]   

switch (pageName) {
            case 'docInfo':
                docInfoTable('hospital/hospitalDoctor', column, true, true, 'hospital/hospitalDoctor', 'hospital/hospitalDoctor');
                break;
}

})



